<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Add Role</h4>
      <div class="text-right">
        <p-button @click="goBack" type="button" class="btn btn-sm btn-primary">Back to list</p-button>
      </div>
    </div>
    <div class="card-body">
      <form @submit.prevent>
        <fg-input v-model="role.name" placeholder="Name" label="Name" ></fg-input>
        <validation-error :errors="apiValidationErrors.name" />
        <div class="text-center">
          <button native-type="submit" class="btn btn-info btn-fill btn-wd" @click="add()">
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

    methods: {

      async add() {
        try {
          await this.$store.dispatch("roles/add", this.role)
          this.$notify({
            type: 'success',
            message: 'Role added successfully.',
            icon: 'nc-icon nc-bell-55',
          })
          this.role = await this.$store.getters["roles/role"]
          this.goBack();
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
