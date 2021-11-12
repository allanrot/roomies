<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Category</h4>
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
          <button native-type="submit" class="btn btn-info btn-fill btn-wd" @click="handleSubmit()">
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
  data() {
    return {
      category: {
        type: "categories",
        name: null,
        description: null
      }
    };
  },

  created() {
    this.get();
  },

  methods: {
    async get() {
      try {
        const id = this.$route.params.id;
        await this.$store.dispatch("categories/get", id);
        this.category = this.$store.getters["categories/category"];
      } catch (error) {
        this.$notify({
          type: "danger",
          message: `Oops, something went wrong!`,
          icon: 'nc-icon nc-bell-55',
        });
        this.setApiValidation(error.response.data.errors);
      }
    },

    goBack() {
      this.$router.push({ name: "List Categories" });
    },

    async handleSubmit() {
      if (this.$isDemo == 1 && ["1","2"].includes(this.$route.params.id)) {
        this.$notify({
          type: "danger",
          message: "You are not allowed to change data of default categories.",
          icon: 'nc-icon nc-bell-55',
        });
        return;
      }
      try {
        await this.$store.dispatch("categories/update", this.category);

        this.$notify({
          type: "success",
          message: "Category updated successfully.",
          icon: 'nc-icon nc-bell-55',
        });
        this.goBack();
      } catch (error) {
        this.$notify({
          type: "danger",
          message: "Oops, something went wrong!",
          icon: 'nc-icon nc-bell-55',
        });
        this.setApiValidation(error.response.data.errors);
      }
    }
  }
}
</script>

