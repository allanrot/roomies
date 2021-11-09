# Profile edit

You have the option to edit the current logged in user's profile information (name, email, profile picture) and password. To access this page, just click the "**Examples/Profile**" link in the left sidebar or add **/examples/user-profile** in the URL.

The `src\components\Dashboard\Views\Examples\UserProfile` is the folder with Vue components that handle the update of the user information and password.

## Edit profile component

```
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
            <button type="button" class="btn btn-info btn-fill btn-wd">
              <label v-if="!image" for="imageInput" class="mb-0">Select image</label>
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
```

## Edit password component

```
<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Password</h4>
    </div>
    <div class="card-body">
      <form ref="password_form" @submit.prevent="changePassword">
        <fg-input v-model="password" placeholder="Password" label="Password" type="password"></fg-input>
        <validation-error :errors="apiValidationErrors.password" />
        <fg-input v-model="password_confirmation" placeholder="Confirm password" label="Confirm password" type="password"></fg-input>
        <validation-error :errors="apiValidationErrors.password_confirmation" />
        <div class="text-center">
          <button native-type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="changePassword">
            Update Password
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

    data: () => ({
      password: null,
      password_confirmation: null,
    }),
    methods: {
      async changePassword () {
        
        const user = {
          id: this.user.id,
          type: "users",
          password: this.password,
          password_confirmation: this.password_confirmation
        }
         try {
          this.resetApiValidation();
          await this.$store.dispatch("users/update", user)
          this.user = await this.$store.getters["profile/me"];
          this.$refs["password_form"].reset();
          
          this.$notify({
            type: 'success',
            message: 'Profile updated successfully.',
            icon: 'nc-icon nc-bell-55',
          })
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
```
