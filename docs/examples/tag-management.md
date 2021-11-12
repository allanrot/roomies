# Tag management

Out of the box you will have an example of tag management (for the cases in which you are developing a blog or a shop). To access this example, click the "**Examples/Tag Management**" link in the left sidebar or add **/examples/tag-management/list-tags** to the URL.
You can add and edit tags here, but you can only delete them if they are not attached to any items.

The store used for role functionality is found in `src\store\modules\tags-module.vue`

You can find the compoments for role functionality in `src\components\Dashboard\Views\Examples\TagManagement` folder.

```
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
    <el-table class="table-striped" :data="tags" border @sort-change="sortChange">
      <el-table-column label="Name" prop="name" sortable="custom" />
      <el-table-column label="Color" prop="color" sortable="custom">
        <template slot-scope="{ row }">
          <span
            class="badge badge-default"
            :style="{ backgroundColor: row.color }"
            >{{ row.name }}</span
          >
        </template>
      </el-table-column>
      <el-table-column label="Created At" prop="created_at" sortable="custom"/>
      <el-table-column fixed="right" class-name="td-actions" label="Actions">
        <template slot-scope="props">
          <p-button type="success" size="sm" icon @click="goToEdit(props.row.id)">
            <i class="fa fa-edit"></i>
          </p-button>
          <p-button type="danger" size="sm" icon @click="deleteTag(props.row.id)">
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
```
