<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Profile</h4>
    </div>
    <div class="card-body">
      <form ref="profile_form" @submit.prevent="updateProfile">
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

            <button type="button" class="btn btn-info btn-fill btn-wd" @click="onClickFile">
                <label v-if="!image" class="mb-0"
                >Select image</label
              >
              <label v-else class="mb-0">Change</label>
            </button>
          </div>
        </div>
        <validation-error :errors="apiValidationErrors.attachment" />
        <fg-input v-model="user.name" placeholder="Name" label="Name"></fg-input>
        <validation-error :errors="apiValidationErrors.name" />
        <fg-input v-model="user.email" placeholder="Enter email" label="Email address"></fg-input>
        <validation-error :errors="apiValidationErrors.email" />
        <div class="text-center">
          <button native-type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
            Update Profile
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
import formMixin from "@/mixins/form-mixin";
import ValidationError from "src/components/UIComponents/ValidationError.vue";
  export default {
    mixins: [formMixin],
    components: {
      ValidationError
    },
    props: {
      user: Object
    },

    data() {
      return {
        image: null,
      };
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
         this.$refs.imageInput.value = ''
      },
      async updateProfile () {
        if (this.$isDemo == 1 && ["1", "2", "3"].includes(this.user.id)) {
          this.$notify({
            type: "danger",
            message: "You are not allowed to change data of default users.",
            icon: 'nc-icon nc-bell-55',
          });
         return;
        }
         try {
          if (this.image) {
            await this.$store.dispatch("users/upload", {user: this.user, image: this.$refs.imageInput.files[0]})
            this.user.profile_image = await this.$store.getters["users/url"]
          }

          await this.$store.dispatch("profile/update", this.user)
          this.removeImage();
          this.resetApiValidation();
          this.$notify({
            type: 'success',
            message: 'Profile updated successfully.',
            icon: 'nc-icon nc-bell-55',
          })
          await this.$store.getters["profile/me"]
        } catch (e) {
          this.$notify({
            type: 'danger',
            message: 'Oops, something went wrong!',
            icon: 'nc-icon nc-bell-55',
          })
          this.setApiValidation(e.response.data.errors)
        }
      }
    }
  }
</script>

