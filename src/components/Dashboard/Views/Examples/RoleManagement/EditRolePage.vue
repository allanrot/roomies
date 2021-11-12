<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Role</h4>
      <div class="text-right">
        <p-button @click="goBack" type="button" class="btn btn-sm btn-primary">Back to list</p-button>
      </div>
    </div>
    <div class="card-body">
      <form @submit.prevent>
        <fg-input v-model="role.name" placeholder="Name" label="Name" ></fg-input>
        <validation-error :errors="apiValidationErrors.name" />
        <div class="text-center">
          <button native-type="submit" class="btn btn-info btn-fill btn-wd" @click="update()">
            Submit
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
    data: () => ({
      role: {
        type: 'roles',
        name: null,
      }
    }),
    created() {
      this.get()
    },

    methods: {

      async get() {
        try {
          const id = this.$route.params.id
          await this.$store.dispatch("roles/get", id)
          this.role = this.$store.getters["roles/role"]
        } catch (e) {
          this.$notify({
            type: 'success',
            message: 'Oops, something went wrong!',
            icon: 'nc-icon nc-bell-55',
          })
        }
      },

      async update() {
        if (this.$isDemo == 1 && ["1", "2", "3"].includes(this.$route.params.id)) {
        this.$notify({
          type: "danger",
          message: "You are not allowed to change data of default roles.",
          icon: 'nc-icon nc-bell-55',
        });
        return;
      }
        try {
          await this.$store.dispatch("roles/update", this.role)
          this.$notify({
            type: 'success',
            message: 'Role updated successfully.',
            icon: 'nc-icon nc-bell-55',
          })
          this.goBack()
        } catch (e) {
          this.$notify({
            type: 'danger',
            message: 'Oops, something went wrong!',
            icon: 'nc-icon nc-bell-55',
          })
          this.setApiValidation(e.response.data.errors)
        }
      },

      goBack() {
        this.$router.push({name: 'List Roles'})
      }
    }
  }

</script>
<style>

</style>
