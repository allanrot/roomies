<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Add User</h4>
      <div class="text-right">
        <p-button @click="goBack" type="button" class="btn btn-sm btn-primary"
          >Back to list</p-button
        >
      </div>
    </div>
    <div class="card-body">
      <form @submit.prevent>
        <div class="form-group">
          <label class="form-control-label"> Profile Photo </label>
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
          v-model="user.name"
          placeholder="Name"
          label="Name"
        ></fg-input>
        <validation-error :errors="apiValidationErrors.name" />
        <fg-input
          v-model="user.email"
          placeholder="Enter email"
          label="Email address"
        ></fg-input>
        <validation-error :errors="apiValidationErrors.email" />
        <fg-input label="Roles">
          <el-select
            class="select-default"
            placeholder="Roles"
            v-model="user.roles[0].id"
          >
            <el-option
              class="select-default"
              v-for="role in available_roles"
              :key="role.id"
              :label="role.name"
              :value="role.id"
            >
            </el-option>
          </el-select>
        </fg-input>
        <validation-error :errors="apiValidationErrors.roles" />
        <fg-input
          v-model="user.password"
          placeholder="Password"
          label="Password"
          type="password"
        ></fg-input>
        <validation-error :errors="apiValidationErrors.password" />
        <fg-input
          v-model="user.password_confirmation"
          placeholder="Confirm password"
          label="Confirm password"
          type="password"
        ></fg-input>
        <validation-error :errors="apiValidationErrors.password_confirmation" />
        <div class="text-center">
          <button
            native-type="submit"
            class="btn btn-info btn-fill btn-wd"
            @click="add()"
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
import { Select, Option } from "element-ui";
import formMixin from "@/mixins/form-mixin";
import ValidationError from "src/components/UIComponents/ValidationError.vue";
export default {
  mixins: [formMixin],
  components: {
    ValidationError,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data: () => ({
    user: {
      type: "users",
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      profile_image: null,
      roles: [
        {
          id: null,
          type: "roles",
        },
      ],
      relationshipNames: ["roles"],
    },
    image: null,
    file: null,
    available_roles: [],
  }),

  created() {
    this.getRoles();
  },

  methods: {
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
    async add() {
      try {
        this.resetApiValidation();
        delete this.user.id;

        await this.$store.dispatch("users/add", this.user);
        this.user = await this.$store.getters["users/user"];

        if (this.image) {
          await this.$store.dispatch("users/upload", {
            user: this.user,
            image: this.$refs.imageInput.files[0],
          });
          this.user.profile_image = await this.$store.getters["users/url"];
          // update user with image url
          await this.$store.dispatch("users/update", this.user);
          this.user = await this.$store.getters["users/user"];
        }
        this.$notify({
          type: "success",
          message: "User added successfully.",
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
        if (this.user.id) {
          await this.$store.dispatch("users/destroy", this.user.id);
        }
      }
    },

    getRoles() {
      this.$store.dispatch("roles/list").then(() => {
        this.available_roles = this.$store.getters["roles/dropdown"];
      });
    },

    goBack() {
      this.$router.push({ name: "List Users" });
    },
  },
};
</script>
<style>
</style>
