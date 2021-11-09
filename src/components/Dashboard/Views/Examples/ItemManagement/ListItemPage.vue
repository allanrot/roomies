<template>
  <div class="row">
    <div class="col-md-12 card mt-3">
      <div class="card-header">
        <div class="category">Item list</div>
        <div class="text-right mb-3">
          <p-button @click="goToAdd()" class="mt-3" type="primary">Add Item</p-button>
        </div>
      </div>
      <div class="card-body row">
        <div class="col-sm-6">
          <el-select
            class="select-default"
            v-model="pagination.perPage"
            placeholder="Per page">
            <el-option
              class="select-default"
              v-for="item in pagination.perPageOptions"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="col-sm-6">
          <div class="pull-right">
            <fg-input class="input-sm"
                      placeholder="Search"
                      v-model="query"
                      addon-right-icon="nc-icon nc-zoom-split">
            </fg-input>
          </div>
        </div>
        <div class="col-sm-12 mt-2">
          <el-table class="table-striped" :data="items" border @sort-change="sortChange">
             <div slot="empty" v-if="loading">
              <img src="/img/loading.gif" style="height: 100px; width: 100px" />
            </div>
            <el-table-column label="Name" prop="name" sortable="custom" />
            <el-table-column label="Category" prop="category.name" sortable="custom" />
            <el-table-column label="Picture" min-width="150px">
              <template v-slot="{ row }">
                <img
                  v-if="row.image"
                  :src="row.image"
                  style="width: 100px; height: auto"
                  alt="avatar"
                />
              </template>
            </el-table-column>
            <el-table-column label="Tags" prop="tags.name" sortable="custom">
              <template slot-scope="{ row }">
                <span
                  v-for="(tag, index) in row.tags"
                  :key="'tag' + index"
                  class="badge badge-default"
                  :style="{ backgroundColor: tag.color, margin: '.1rem' }"
                  >{{ tag.name }}</span
                >
              </template>
            </el-table-column>
            <el-table-column label="Created At" prop="created_at" sortable="custom"/>
            <el-table-column
              fixed="right"
              class-name="td-actions"
              label="Actions">
              <template slot-scope="props">
                <p-button type="success" size="sm" icon @click="goToEdit(props.row.id)">
                  <i class="fa fa-edit"></i>
                </p-button>
                <p-button type="danger" size="sm" icon @click="deleteItem(props.row.id)">
                  <i class="fa fa-times"></i>
                </p-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="col-sm-6 pagination-info">
          <p class="category">Showing {{from + 1}} to {{to}} of {{total}} entries</p>
        </div>
        <div class="col-sm-6">
          <p-pagination class="pull-right"
                        v-model="pagination.currentPage"
                        :per-page="pagination.perPage"
                        :total="total">
          </p-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash';
  import { Table, TableColumn, Select, Option } from 'element-ui';
  import PPagination from 'src/components/UIComponents/Pagination.vue'
  import swal from "sweetalert2";

  export default {
    components: {
      PPagination,
      [Select.name]: Select,
      [Option.name]: Option,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },

  data() {
    return {
      query: null,
      selectedRows: [],
      sort: "created_at",
      total: 0,
      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
      },

      items: [],
      loading: true,
      user: null,
    };
  },
  computed: {
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },

    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
  },
  watch: {
    query: {
      handler: "getListDebounced",
      immediate: true,
    },
    pagination: {
      handler: "getList",
      immediate: false,
      deep: true,
    },
  },

  methods: {
    getListDebounced: _.debounce(function () {
      this.getList();
    }, 300),

    async getList() {
      try {
        let params = {
          ...(this.sort ? { sort: this.sort } : {}),
          filter: {
            ...(this.query ? {name: this.query} : {}),
            ...(this.query ? {category: this.query} : {}),
            ...(this.query ? {tags: this.query} : {}),
          },
          page: {
            number: this.pagination.currentPage,
            size: this.pagination.perPage,
          },
          include: "category,tags",
        };

        await this.$store.dispatch("items/list", params);
        this.items = this.$store.getters["items/list"];
        this.total = this.$store.getters["items/listTotal"];
        this.loading = false;
      } catch (error) {
        this.$notify({
          type: "danger",
          message: "Oops, something went wrong!",
          icon: 'nc-icon nc-bell-55',
        });
      }
    },

    async deleteItem(id) {
      if (this.$isDemo == 1 && ["1", "2"].includes(id)) {
        this.$notify({
          type: "danger",
          message: "You are not allowed to change data of default items.",
          icon: 'nc-icon nc-bell-55',
        });
        return;
      }
      const confirmation = await swal.fire({
        title: `Delete this item?`,
        type: "question",
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-warning",
      });

      try {
        if (confirmation.value === true) {
          await this.$store.dispatch("profile/me");
          this.user = await { ...this.$store.getters["profile/me"] };
          if (this.user.roles[0].name === "member") {
            this.$notify({
              type: "danger",
              message: "Oops, you are not authorized to do this action.",
              icon: 'nc-icon nc-bell-55',
            });
            return;
          }
          await this.$store.dispatch("items/destroy", id);
          await this.getList();
          this.$notify({
            type: "success",
            message: "Item deleted successfully.",
            icon: 'nc-icon nc-bell-55',
          });
        }
      } catch (error) {
        this.$notify({
          type: "danger",
          message: "Oops, something went wrong!",
          icon: 'nc-icon nc-bell-55',
        });
      }
    },
    goToAdd() {
      this.$router.push({ name: "Add Item" });
    },
    goToEdit(id) {
      this.$router.push({
        name: "Edit Item",
        params: { id: id },
      });
    },
    sortChange({ prop, order }) {
      if (order === "descending") {
        this.sort = `-${prop}`;
      } else {
        this.sort = `${prop}`;
      }
      this.getList();
    },
  },
}
</script>
