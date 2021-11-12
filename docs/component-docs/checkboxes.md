# Checkboxes

<script>
module.exports = {
  data(){
    return {
      unchecked: false,
      checked: true
    }
  }
}
</script>
<hr>
To use the custom checkbox controls you need to import the custom made component:

```js
import {Checkbox} from 'src/components'
```

Global usage

```js
Vue.component(Checkobx.name, Checkbox)
```

For local usage
```js
export default {
  components: {
    [Checkbox.name]: Checkbox
  }
}
```

## Custom checkboxes

:::demo
```html
<template>
    <div>
       <p-checkbox v-model="unchecked">Unchecked</p-checkbox>
       <p-checkbox  v-model="checked">Checked</p-checkbox>

       <p-checkbox :disabled="true" :checked="false">Disabled unchecked</p-checkbox>
       <p-checkbox :disabled="true" :checked="true">Disabled checked</p-checkbox>
    </div>
</template>

<script>
  export default {
    data () {
        return {
          unchecked: false,
          checked: true
        }
      }
  }
</script>
```
:::

#### Changing colors
To change default radio color, go to `_checkboxes-radios.css` and change line 160

```scss{2}
@include radio-colors($default-color);
@include checkbox-colors($default-color);
```

If you want to have multiple checkbox colors, we recommend extending these 2 mixins 
with extra css classes (e.g `.form-check.form-check-success`) and add the corresponding classes
to `Checkbox.vue` component.


### Checkbox Props

<props-table component-name="p-checkbox"/>

### Checkbox Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| input  | triggers when the binding value changes | the updated value |

### Slots
| Name | Description |
|---------- |-------- |
|  default  | Default content for checkbox |
