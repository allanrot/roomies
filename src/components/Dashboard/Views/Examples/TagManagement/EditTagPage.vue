<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Tag</h4>
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
        name: null,
        color: null,
        type: 'tags'
      },
      color: {
        hex: '#FF0000'
      }
    }),

    created() {
      this.get()
    },

    watch: {
      color: {
        handler: 'updateTagColor',
        immediate: true,
        deep: true
      },
    },

    methods: {
      updateTagColor() {
        this.tag.color = this.color.hex;
      },
      
      async get() {
        try {
          const id = this.$route.params.id
          await this.$store.dispatch("tags/get", id)
          this.tag = this.$store.getters["tags/tag"]
        } catch (e) {
          this.$notify({
            type: 'success',
            message: 'Oops, something went wrong!',
            icon: 'nc-icon nc-bell-55',
          })
        }
      },

      async update() {
         if (this.$isDemo == 1 && ["1","2"].includes(this.$route.params.id)) {
        this.$notify({
          type: "danger",
          message: "You are not allowed to change data of default tags.",
          icon: 'nc-icon nc-bell-55',
        });
        return;
      }
        try {
          await this.$store.dispatch("tags/update", this.tag)
          this.$notify({
            type: 'success',
            message: 'Tag updated successfully.',
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
        this.$router.push({name: 'List Tags'})
      }
    }
  }
</script>
