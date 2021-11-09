<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Add Tag</h4>
      <div class="text-right">
        <p-button @click="goBack" type="button" class="btn btn-sm btn-primary">Back to list</p-button>
      </div>
    </div>
    <div class="card-body">
      <form @submit.prevent>
        <fg-input v-model="tag.name" placeholder="Name" label="Name" ></fg-input>
        <validation-error :errors="apiValidationErrors.name" />
        <fg-input label="Color">
          <color-picker v-model="color" style="width: 100%" />
        </fg-input>
        <validation-error :errors="apiValidationErrors.color" />
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
import ValidationError from "src/components/UIComponents/ValidationError.vue";
import formMixin from "@/mixins/form-mixin";
import { Slider } from "vue-color";
  export default {
    components: {
      ValidationError,
      "color-picker": Slider,
      },

    mixins: [formMixin],

    data: () => ({
      tag: {
        type: 'tags',
        name: null,
        color: null,
      },
      color: {
        hex: "#A1FF00",
      }
    }),

    watch: {
      color: {
        handler: "updateTagColor",
        immediate: true,
        deep: true,
      },
    },

    methods: {
      updateTagColor() {
        this.tag.color = this.color.hex;
      },
      
      async add() {
        try {
          await this.$store.dispatch("tags/add", this.tag)
          this.$notify({
            type: 'success',
            message: 'Tag added successfully.',
            icon: 'nc-icon nc-bell-55',
          })
          this.role = await this.$store.getters["tags/tag"]
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
        this.$router.push({name: 'List Tags'})
      }
    }
  }
</script>
