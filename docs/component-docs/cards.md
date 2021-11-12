# Cards

Bootstrap's cards provide a flexible and extensible content container with multiple variants and options.

```js
import {Card, StatsCard} from 'src/components'
```

## Local usage

```js
components: {
  Card,
  StatsCard
}
```

## Global usage
```js
Vue.component(Card)
Vue.component(StatsCard)
```

## Example Card

:::demo
```
<template>
  <card style="width: 20rem;">
    <img slot="image" class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1618c103586%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1618c103586%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
    <div>
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p-button type="primary">Go somewhere</p-button>
    </div>
  </card>
</template>

<script>
  export default {}
</script>
```
:::

## Titles, text, and links

Card titles are used by adding `.card-title` to a `<h*>` tag.
In the same way, links are added and placed next to each other by adding `.card-link` to an `<a>` tag.
Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag.
If the `.card-title` and the `.card-subtitle` items are placed in a `.card-body` (default slot contains a `card-body` class) item, the card title and subtitle are aligned nicely.

:::demo
```html
<template>
  <card style="width: 20rem;">
      <h4 class="card-title">Card title</h4>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
  </card>
</template>

<script>
  export default {}
</script>
```
:::

## Images
`.card-img-top` places an image to the top of the card. With `.card-text`, text can be added to the card.
 Text within `.card-text` can also be styled with the standard HTML tags.

:::demo
```
<template>
 <card style="width: 20rem;">
    <img slot="image" class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1618c103586%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1618c103586%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 </card>
</template>

<script>
 export default {}
</script>
```
:::

## List groups
Create lists of content in a card with a flush list group.

:::demo
```
<template>
 <card style="width: 20rem;">
   <ul slot="raw-content" class="list-group list-group-flush">
     <li class="list-group-item">Cras justo odio</li>
     <li class="list-group-item">Dapibus ac facilisis in</li>
     <li class="list-group-item">Vestibulum at eros</li>
   </ul>
  </card>
</template>

<script>
 export default {}
</script>
```
:::

## Header and footer

:::demo
```
<template>
 <card class="card-nav-tabs" header-classes="card-header-warning">
   <div slot="header">
     Featured
   </div>
   <h4 class="card-title">Special title treatment</h4>
   <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
   <p-button type="primary">Go somewhere</p-button>
  </card>
</template>

<script>
 export default {}
</script>
```
:::

## Quote card

:::demo
```
<template>
 <card class="card-nav-tabs" header-classes="card-header-success">
   <div slot="header">
     Quote
   </div>
  <blockquote class="blockquote mb-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
  </card>
</template>

<script>
 export default {}
</script>
```
:::

## Centered content

:::demo
```
<template>
 <card class="card-nav-tabs" centered header-classes="card-header-primary">
   <div slot="header">
     Quote
   </div>
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <p-button type="primary">Go somewhere</p-button>
  <div slot="footer" class="text-muted">
   2 days ago
  </div>
  </card>
</template>

<script>
 export default {}
</script>
```
:::


## Widget Card

:::demo
```
<template>
  <card type="testimonial">
    <div class="icon icon-primary">
      <i class="fa fa-quote-right"></i>
    </div>
    <p class="card-description">
      The networking at Web Summit is like no other European tech conference.
    </p>
    <template slot="footer">
      <h4 class="card-title">Gina Andrew</h4>
      <h6 class="card-category">@ginaandrew</h6>
      <div class="card-avatar">
        <a href="#pablo">
          <img class="img" src="static/img/faces/joe-gardner-2.jpg">
        </a>
      </div>
    </template>
  </card>
</template>

<script>
  export default {}
</script>
```
:::

## Stats card

:::demo
```
<template>
 <stats-card
   type="danger"
   title="1058"
   small-title="Messages"
   icon="nc-icon nc-globe">
   <span slot="footer">
     <i class="fa fa-check"></i>
     Update now
   </span>
 </stats-card>
</template>

<script>
  export default {}
</script>
```
:::

<props-table component-name="stats-card"/>

### StatsCard Slots
| Name | Description |
|---------- |-------- |
|  icon  | Content for card icon |
|  default  | Default card content |
|  footer  | Content for card footer |

<props-table component-name="card"/>

### Card Slots
| Name | Description |
|---------- |-------- |
|  default  | Content for card body |
|  header  | Content for card header |
|  image  | Content for card image (displayed above header) |
|  footer  | Content for card footer |
