# Switch

<hr>
To use the switch component, first import it:

```js
import {Switch} from 'src/components'
```

Global usage

```js
Vue.component(Switch.name, Switch)
```

For local usage

```js
export default {
  components: {
    [Switch.name]: Switch
  }
}
```

## Simple switch

:::demo
```html
<template>
  <div>
    <p-switch v-model="switches.defaultOn"></p-switch>
    <p-switch v-model="switches.defaultOff"></p-switch>
  </div>
</template>

<script>
  export default {
    data () {
        return {
           switches: {
             defaultOn: true,
             defaultOff: false
           }
        }
      }
  }
</script>
```
:::

## With text

:::demo
```html
<template>
  <div>
    <p-switch v-model="switches.defaultOn" on-text="ON" off-text="OFF"></p-switch>
    <p-switch v-model="switches.defaultOff" on-text="ON" off-text="OFF"></p-switch>
  </div>
</template>

<script>
  export default {
    data () {
        return {
           switches: {
             defaultOn: true,
             defaultOff: false
           }
        }
      }
  }
</script>
```
:::

### Slots

:::demo
```html
<template>
  <div>
  <p-switch v-model="switches.defaultOn">
    <i class="fa fa-check" slot="on"></i>
    <i class="fa fa-exclamation" style="color:red;" slot="off"></i>
  </p-switch>
  </div>
</template>

<script>
  export default {
    data () {
        return {
           switches: {
             defaultOn: true
           }
        }
      }
  }
</script>
```
:::


Disabled switch
:::demo
```html
<template>
  <div>
    <p-switch disabled v-model="switches.defaultOff" on-text="ON" off-text="OFF"></p-switch>
  </div>
</template>

<script>
  export default {
    data () {
        return {
           switches: {
             defaultOff: true
           }
        }
      }
  }
</script>
```
:::


### Switch Props
<props-table component-name="p-switch"/>

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| input  | triggers when the binding value changes | the updated value |

### Slots
| Name | Description |
|---------- |-------- |
|  on  | Content to be displayed on switch when switch is on |
|  off  | Content to be displayed on switch when switch is off |

<script>
  module.exports = {
     data () {
      return {
        switches: {
           defaultOn: true,
           defaultOff: false
         }
      }
    }
  }
</script>
