<template>
  <div class="row">
    <div class="col-md-12 card mt-3">
      <div class="card-header">
        <div class="category">Roles list</div>
        <div class="text-right mb-3">
          <p-button @click="goToAdd()" class="mt-3" type="primary">Add Role</p-button>
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
          <el-table class="table-striped" :data="table" border @sort-change="sortChange">
            <el-table-column label="Name" prop="name" sortable="custom" />
            <el-table-column
              label="Created At"
              prop="created_at"
              sortable="custom"
            />
            <el-table-column
              fixed="right"
              class-name="td-actions"
              label="Actions">
              <template slot-scope="props">
                <p-button type="success" size="sm" icon @click="goToEdit(props.row.id)">
                  <i class="fa fa-edit"></i>
                </p-button>
                <p-button type="danger" size="sm" icon @click="destroy(props.row.id)">
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

    data: () => ({
      table: [],
      footerTable: ["Name", "Created At", "Actions"],

      query: null,

      sort: "created_at",

      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
      },

      total: 0

    }),

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
        handler: 'getListDebounced',
        immediate: true
      },
      pagination: {
        handler: 'getList',
        immediate: false,
        deep: true
      },
    },

    methods: {
      getListDebounced: _.debounce(function () {
        this.getList()
      }, 300),

      async getList() {
        let params = {
          ...(this.sort ? {sort: this.sort} : {}),
          filter: {
            ...(this.query ? {name: this.query} : {}),
          },
          page: {
            number: this.pagination.currentPage,
            size: this.pagination.perPage
          }
        }

        try {
          await this.$store.dispatch("roles/list", params)
          this.table = this.$store.getters["roles/list"]
          this.total = this.$store.getters["roles/listTotal"]
        } catch (e) {
          this.$notify({
            type: 'danger',
            message: 'Oops, something went wrong!',
            icon: 'nc-icon nc-bell-55',
          })
        }
      },

      async destroy(role) {
        if (this.$isDemo == 1 && ["1", "2", "3"].includes(role)) {
        this.$notify({
          type: "danger",
          message: "You are not allowed to change data of default roles.",
          icon: 'nc-icon nc-bell-55',
        });
        return;
      }
        const confirmation = await swal.fire({
        title: 'Are you sure?',
        text: `You won't be able to revert this!`,
        icon: 'warning',
        showCancelButton: true,
        customClass: {
          confirmButton: 'btn btn-success btn-fill',
          cancelButton: 'btn btn-danger btn-fill'
        },
        confirmButtonText: 'Yes, delete it!',
        buttonsStyling: false
      })

        if (confirmation.value === true) {
          await this.$store.dispatch("roles/destroy", role)
          this.$notify({
            type: 'success',
            message: 'Role deleted successfully.',
            icon: 'nc-icon nc-bell-55',
          })
          await this.getList()
        }
      },

      goToAdd() {
        this.$router.push({name: 'Add Role'})
      },

      goToEdit(id) {
        this.$router.push({name: 'Edit Role', params: {id}})
      },

      sortChange({ prop, order }) {
        if (order === "descending") {
          this.sort = `-${prop}`;
        } else {
          this.sort = `${prop}`;
        }
        this.getList();
      },
    }
  }
</script>
