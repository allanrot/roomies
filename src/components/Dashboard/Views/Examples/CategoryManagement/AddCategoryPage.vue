<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Add Category</h4>
      <div class="text-right">
        <p-button @click="goBack" type="button" class="btn btn-sm btn-primary">Back to list</p-button>
      </div>
    </div>
    <div class="card-body">
      <form @submit.prevent>
        <fg-input v-model="category.name" placeholder="Name" label="Name" ></fg-input>
        <validation-error :errors="apiValidationErrors.name" />
        <fg-input v-model="category.description" placeholder="Description" label="Description" ></fg-input>
        <validation-error :errors="apiValidationErrors.description" />
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
      category: {
        type: 'categories',
        name: null,
        description: null
      }
    }),

    methods: {

      async add() {
        try {
          await this.$store.dispatch("categories/add", this.category)
          this.$notify({
            type: 'success',
            message: 'Category added successfully.',
            icon: 'nc-icon nc-bell-55',
          })
          this.category = await this.$store.getters["categories/category"]
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
        this.$router.push({name: 'List Categories'})
      }
    }
  }

</script>
<style>

</style>
