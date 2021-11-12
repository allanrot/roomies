##  Badge

Documentation and examples for badges, our small count and labeling component.

<hr>
To use the custom badges, import the Badge component

```js
import {Badge} from 'src/components'
```

Global usage

```js
Vue.component(Badge.name, Badge)
```

For local usage
```js
export default {
  components: {
    [Badge.name]: Badge
  }
}
```

## Badge inside button

Badges can be used as part of links or buttons to provide a counter.

:::demo
```html
<template>
  <p-button type="info">
    Notifications <badge type="primary">4</badge>
  </p-button>
</template>

<script>
  export default {}
</script>
```
:::

## Contextual variations

Add any of the below mentioned modifier `type` to change the appearance of a badge.

:::demo
```html
<template>
  <div>
    <badge type="primary">Primary</badge>
    <badge type="info">Info</badge>
    <badge type="success">Success</badge>
    <badge type="danger">Danger</badge>
    <badge type="warning">Warning</badge>
    <badge type="default">Default</badge>
  </div>
</template>

<script>
  export default {}
</script>
```
:::

<props-table component-name="badge"/>

### Slots
| Name | Description |
|---------- |-------- |
|  default  | Default content for the badge |
