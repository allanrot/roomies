# User management

The theme comes with an out of the box user management option. To access this option ,click the "**Examples/User Management**" link in the left sidebar or add **/examples/user-management/list-users** to the URL.
The first thing you will see is a list of existing users. You can add new ones by clicking the "**Add user**" button (above the table on the right). On the Add user page, you will find a form which allows you to fill out the user`s name, email, role and password.

The store used for role functionality is found in `src\store\modules\users-module.vue`

You can find the compoments for role functionality in `src\components\Dashboard\Views\Examples\UserManagement` folder.

Once you add more users, the list will grow and for every user you will have edit and delete options (access these options by clicking the three dotted menu that appears at the end of every row).

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
      <el-table-column label="Author">
          <template v-slot="{ row }">
              <img v-if="row.profile_image" :src="row.profile_image" class="avatar rounded-circle"/>
          </template>
      </el-table-column>
      <el-table-column label="Name" prop="name" sortable="custom" />
      <el-table-column label="Email" prop="email" sortable="custom" />
      <el-table-column label="Role" prop="roles.name" sortable="custom">
        <template v-slot="{ row }">
          <span>{{ row.roles[0].name }}</span>
        </template>
      </el-table-column>
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
