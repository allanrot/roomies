# Item management

Item management is the most advanced example included in the Pro theme, because every item has a picture, belongs to a category and has multiple tags. To access this example click the "**Examples/Item Management**" link in the left sidebar or add **/examples/item-management/list-items** to the URL.
Here you can manage the items. A list of items will appear once you start adding them (to access the add page click "**Add item**").
On the add page, besides the Name and Description fields (which are present in most of the CRUD examples) you can see a category dropdown, which contains the categories you added, a file input and a tag multi select. If you did not add any categories or tags, please go to the corresponding sections (category management, tag management) and add some.

The store used for roles functionality is found in `src\store\modules\items-module.vue`

You can find the compoments for items functionality in `src\components\Dashboard\Views\Examples\ItemManagement` folder.

### List Items

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
    <el-table class="table-striped" :data="items" border @sort-change="sortChange">
      <el-table-column label="Name" prop="name" sortable="custom" />
      <el-table-column label="Category" prop="category.name" sortable="custom" />
      <el-table-column label="Picture" min-width="150px">
        <template v-slot="{ row }">
          <img v-if="row.image"
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
```

### Add/Edit Item

```
<form @submit.prevent>
  <div class="form-group">
    <label class="form-control-label"> Picture </label>
    <div
      v-if="image"
      class="profile-image card-img pb-4"
      :style="{
        'background-image': `url('${image}')`,
      }"
    ></div>
    <div v-else class="profile-image">
      <img src="/img/placeholder.jpg" />
    </div>
    <div class="image-upload">
      <button
        v-if="image"
        type="button"
        class="btn btn-fill btn-wd btn-danger"
        @click="removeImage"
      >
        <span>
          <i class="fa fa-times" />
          Remove
        </span>
      </button>
      <button type="button" class="btn btn-info btn-fill btn-wd">
        <label v-if="!image" for="imageInput" class="mb-0"
          >Select image</label
        >
        <label v-else for="imageInput" class="mb-0">Change</label>
        <input
          id="imageInput"
          ref="imageInput"
          accept="image/*"
          type="file"
          style="display: none"
          @input="onSelectFile"
        />
      </button>
    </div>
  </div>
  <validation-error :errors="apiValidationErrors.attachment" />
  <fg-input v-model="item.name" placeholder="Name" label="Name" ></fg-input>
  <validation-error :errors="apiValidationErrors.name" />
  <fg-input label="Description">
    <ckeditor :editor="editor" v-model="item.description" :config="editorConfig"></ckeditor>
  </fg-input>
  <fg-input label="Category">
    <el-select
      class="select-default" placeholder="Category" v-model="item.category.id">
      <el-option
        class="select-default"
        v-for="category in available_categories"
        :key="category.id"
        :label="category.name"
        :value="category.id">
      </el-option>
    </el-select>
    </fg-input>
    <fg-input label="Tags">
    <el-select
      multiple class="select-default" placeholder="Tags" v-model="tags">
      <el-option
        class="select-default"
        v-for="tag in available_tags"
        :key="tag.id"
        :label="tag.name"
        :value="tag.id">
      </el-option>
    </el-select>
    </fg-input>
    <fg-input label="Status">
      <p-radio v-model="item.status" label="published" class="mb-3">
        Published
      </p-radio>
      <p-radio v-model="item.status" label="draft" class="mb-3">
        Draft
      </p-radio>
      <p-radio v-model="item.status" label="archive" class="mb-3">
        Archive
      </p-radio>
    </fg-input>
    <fg-input label="Show on homepage?">
      <p-switch v-model="item.is_on_homepage"></p-switch>
    </fg-input>
    <fg-input>
    <el-date-picker v-model="item.date_at" type="date" placeholder="Select date and time">
    </el-date-picker>
    </fg-input>
  <div class="text-center">
    <button native-type="submit" class="btn btn-info btn-fill btn-wd">
      Submit
    </button>
  </div>
  <div class="clearfix"></div>
</form>
```