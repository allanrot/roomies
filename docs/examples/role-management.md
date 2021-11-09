# Role management

The Pro theme allows you to add user roles. By default, the theme comes with **Admin**, **Creator** and **Member** roles. To access the role management example click the "**Examples/Role Management**" link in the left sidebar or add **/examples/role-management/list-roles** to the URL. Here you can add/edit new roles.
To add a new role, click the "**Add role**" button. To edit an existing role, click the dotted menu (available on every table row) and then click "**Edit**". In both cases, you will be directed to a form which allows you to modify the name and description of a role.

The store used for role functionality is found in `src\store\modules\roles-module.vue`

You can find the compoments for role functionality in `src\components\Dashboard\Views\Examples\RoleManagement` folder.

### List page

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
    <el-table class="table-striped" :data="table" border @sort-change="sortChange">
      <el-table-column label="Name" prop="name" sortable="custom" />
      <el-table-column label="Created At" prop="created_at" sortable="custom"/>
      <el-table-column fixed="right" class-name="td-actions" label="Actions">
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
```

### Add/edit role

```
<form @submit.prevent>
  <fg-input v-model="role.name" placeholder="Name" label="Name" ></fg-input>
  <validation-error :errors="apiValidationErrors.name" />
  <div class="text-center">
    <button native-type="submit" class="btn btn-info btn-fill btn-wd">
      Submit
    </button>
  </div>
  <div class="clearfix"></div>
</form>
```