# Wizard
If you have lengthy forms to complete, you can use the a Wizard.
We build a simplified wizard version inspired by [Vue Form Wizard](https://github.com/cristijora/vue-form-wizard).
This plugin allows you to cut the form into steps and let the user complete it gradually.
You can find the wizard components inside `src/components/UIComponents/Wizard` folder and see it's implementation.

In order to use the wizard, import the wizard

```js
import {SimpleWizard, WizardTab} from 'src/components'
```

Global usage

```js
Vue.component(SimpleWizard)
Vue.component(WizardTab)
```

Local usage

```js
export default {
  components: {
    SimpleWizard,
    WizardTab
  }
}
```

### Basic example

:::demo
```html
<template>
<simple-wizard>
  <template slot="header">
    <h3 class="card-title">Build your profile</h3>
  </template>

  <wizard-tab>
    <template slot="label">
      <i class="now-ui-icons users_circle-08"></i>
      About
    </template>
    <div>First step content</div>
  </wizard-tab>

  <wizard-tab>
    <template slot="label" >
      <i class="now-ui-icons ui-1_settings-gear-63"></i>
      Account
    </template>
    <div>Second step content</div>
  </wizard-tab>

  <wizard-tab>
    <template slot="label">
      <i class="now-ui-icons ui-1_email-85"></i>
      Address
    </template>
        <div>Third step content</div>
  </wizard-tab>
</simple-wizard>

</template>

<script>
  export default {}
</script>
```
:::

### Wizard inside modal

:::demo
```html
<template>
<div>
<p-button type="primary" @click="showModal = true"> Show modal</p-button>
<modal v-if="showModal" :show.sync="showModal" body-classes="p-0" :show-header="false">
<simple-wizard plain :show-header="false">
  <wizard-tab>
    <template slot="label">
      <i class="now-ui-icons users_circle-08"></i>
      About
    </template>
    <div>First step content</div>
  </wizard-tab>

  <wizard-tab>
    <template slot="label" >
      <i class="now-ui-icons ui-1_settings-gear-63"></i>
      Account
    </template>
    <div>Second step content</div>
  </wizard-tab>
</simple-wizard>

</modal>
</div>
</template>

<script>
export default {
  data(){
   return {
    showModal: false
   }
  }
}
</script>
```
:::

For a complete example, please check out `src/components/Dashboard/Forms/Wizard.vue` component

### Wizard Props
<props-table component-name="simple-wizard"/>

### Wizard Slots
| Name | Description |
|---------- |-------- |
|  default  | Default content slot |
|  header  | Slot for header (above tabs containing title and subTitle) |
|  footer (scoped slot)  | Content for wizard footer (containing prev, next and finish buttons) |

### Wizard Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| tab-change  | triggered whenever a transition to another tab occurs | oldTab and newTab objects |


### Wizard Tab Props
<props-table component-name="wizard-tab"/>

:::tip
 **Note** You can use the `beforeChange` function on each wizard tab to trigger a validation method before navigation to the next step.
`beforeChange` should either return a `boolean` or a `Promise` than resolves with `true`.
Returning a `falsy` value or rejected promise, will fail the validation and will not go to next step.
If you don't provide a `beforeChange` method, the wizard will always navigate to next step upon "Next" button click
:::

### Wizard Tab Slots
| Name | Description |
|---------- |-------- |
|  default  | Wizard tab default content |
|  label  | This will not be displayed inside the pane itself but rather in the upper navigation |

:::tip
 **Note** Since the source code of these components is inside the template itself, feel free to modify and adjust them
according to your needs. They should work for most of the use-cases but they cannot cover absolutely everything :)
:::

<script>
export default {
  data(){
   return {
    showModal: false
   }
  }
}
</script>
