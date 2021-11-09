<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Item</h4>
      <div class="text-right">
        <p-button @click="goBack" type="button" class="btn btn-sm btn-primary"
          >Back to list</p-button
        >
      </div>
    </div>
    <div class="card-body">
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
            <input
              id="imageInput"
              ref="imageInput"
              accept="image/*"
              type="file"
              style="display: none"
              @change="onSelectFile"
            />

            <button
              type="button"
              class="btn btn-info btn-fill btn-wd"
              @click="onClickFile"
            >
              <label v-if="!image" class="mb-0">Select image</label>
              <label v-else class="mb-0">Change</label>
            </button>
          </div>
        </div>
        <validation-error :errors="apiValidationErrors.attachment" />
        <fg-input
          v-model="item.name"
          placeholder="Name"
          label="Name"
        ></fg-input>
        <validation-error :errors="apiValidationErrors.name" />
        <fg-input label="Description">
          <ckeditor
            :editor="editor"
            v-model="item.description"
            :config="editorConfig"
          ></ckeditor>
        </fg-input>
        <fg-input label="Category">
          <el-select
            class="select-default"
            placeholder="Category"
            v-model="item.category.id"
          >
            <el-option
              class="select-default"
              v-for="category in available_categories"
              :key="category.id"
              :label="category.name"
              :value="category.id"
            >
            </el-option>
          </el-select>
        </fg-input>
        <fg-input label="Tags">
          <el-select
            multiple
            class="select-default"
            placeholder="Tags"
            v-model="tags"
          >
            <el-option
              class="select-default"
              v-for="tag in available_tags"
              :key="tag.id"
              :label="tag.name"
              :value="tag.id"
            >
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
          <p-switch class="d-block" v-model="item.is_on_homepage"></p-switch>
        </fg-input>
        <fg-input label="Date">
          <el-date-picker
            v-model="item.date_at"
            type="date"
            placeholder="Select date and time"
          >
          </el-date-picker>
        </fg-input>
        <!-- <fg-input v-model="item.description" placeholder="Description" label="Description" ></fg-input> -->
        <!-- <validation-error :errors="apiValidationErrors.description" /> -->
        <div class="text-center">
          <button
            native-type="submit"
            class="btn btn-info btn-fill btn-wd"
            @click="update()"
          >
            Submit
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
import { DatePicker, Select, Option } from "element-ui";
import formMixin from "@/mixins/form-mixin";
import ValidationError from "src/components/UIComponents/ValidationError.vue";
import PSwitch from "src/components/UIComponents/Switch.vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import moment from "moment";
export default {
  mixins: [formMixin],
  components: {
    ValidationError,
    [Select.name]: Select,
    [Option.name]: Option,
    PSwitch,
    [DatePicker.name]: DatePicker,
    ckeditor: CKEditor.component,
  },
  data: () => ({
    editor: ClassicEditor,
    editorConfig: {
      toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "blockQuote",
        "Outdent",
        "Indent",
        "TextColor",
      ],
    },
    item: {
      type: "items",
      name: null,
      description: null,
      excerpt: null,
      status: "published",
      image: null,
      category: {
        id: null,
        type: "categories",
      },
      tags: [],
      is_on_homepage: false,
      date_at: null,
      relationshipNames: ["category", "tags"],
    },
    available_categories: [],
    available_tags: [],
    tags: [],
    image: null,
    file: null,
  }),
  computed: {
    roles() {
      let roles = this.$store.getters["profile/me"].roles;

      return roles.map((r) => r.name);
    },
  },
  created() {
    this.get();
    this.getCategories();
    this.getTags();
    this.$store.dispatch("profile/me");
  },

  methods: {
    async get() {
      try {
        const id = this.$route.params.id;
        await this.$store.dispatch("items/get", id);
        this.item = this.$store.getters["items/item"];

        this.item.tags.forEach((tag) => {
          this.tags.push(tag.id);
        });
      } catch (e) {
        this.$notify({
          type: "danger",
          message: "Oops, something went wrong!",
          icon: "nc-icon nc-bell-55",
        });
      }
    },

    async update() {
      if (this.roles.includes("member")) {
        this.$notify({
          type: "danger",
          message: "Oops, you are not authorized to do this action!",
          icon: "nc-icon nc-bell-55",
        });
        return;
      }
      if (this.$isDemo == 1 && ["1", "2"].includes(this.$route.params.id)) {
        this.$notify({
          type: "danger",
          message: "You are not allowed to change data of default items.",
          icon: "nc-icon nc-bell-55",
        });
        return;
      }
      try {
        if (this.image) {
          // upload image and get image url
          await this.$store.dispatch("items/upload", {
            item: this.item,
            image: this.$refs.imageInput.files[0],
          });
          this.item.image = await this.$store.getters["items/url"];
        }
        this.item.date_at = moment(this.item.date_at).format("YYYY-MM-DD");
        this.updateTags();
        await this.$store.dispatch("items/update", this.item);
        this.$notify({
          type: "success",
          message: "Item updated successfully.",
          icon: "nc-icon nc-bell-55",
        });
        this.goBack();
      } catch (e) {
        this.$notify({
          type: "danger",
          message: "Oops, something went wrong!",
          icon: "nc-icon nc-bell-55",
        });
        this.setApiValidation(e.response.data.errors);
      }
    },

    updateTags() {
      this.item.tags = [];
      this.tags.forEach((tag) => {
        this.item.tags.push({
          id: tag,
          type: "tags",
        });
      });
    },

    getCategories() {
      this.$store.dispatch("categories/list").then(() => {
        this.available_categories = this.$store.getters["categories/dropdown"];
      });
    },

    getTags() {
      this.$store.dispatch("tags/list").then(() => {
        this.available_tags = this.$store.getters["tags/dropdown"];
      });
    },

    onClickFile() {
      this.$refs.imageInput.click();
    },

    async onSelectFile(e) {
      const input = this.$refs.imageInput;
      const files = input.files;

      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.image = e.target.result;
        };
        reader.readAsDataURL(files[0]);
      }
    },

    removeImage() {
      this.image = null;
      this.$refs.imageInput.value = "";
    },

    goBack() {
      this.$router.push({ name: "List Items" });
    },
  },
};
</script>

