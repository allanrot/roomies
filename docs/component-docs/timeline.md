# Timeline

We created a set of components that can help you display a history of something
which looks fun and user friendly.

<hr>

To use the timeline components, first import them:

```js
import {TimeLine, TimeLineItem} from 'src/components'
```

Global usage

```js
Vue.component(TimeLine)
Vue.component(TimeLineItem)
```

Local usage

```js
export default {
 components: {
   TimeLine,
   TimeLineItem
 }
}
```

## Timeline on both sides

:::demo
```html
<template>
    <div style="background-color: #ebecf1;">
      <time-line>
          <time-line-item inverted badge-type="danger" badge-icon="nc-icon nc-planet">
            <badge slot="header" type="danger">Some title</badge>
            <p slot="content">
              Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family
              We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show
              at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>

            <h6 slot="footer">
              <i class="ti-time"></i>
              11 hours ago via Twitter
            </h6>
          </time-line-item>

          <time-line-item badge-type="success" badge-icon="nc-icon nc-shop">
            <badge slot="header" type="success">Another Title</badge>
            <p slot="content">
              Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album
              to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from
              shoes to music to homes is that Kim has to like it....</p>
          </time-line-item>

          <time-line-item inverted badge-type="info" badge-icon="nc-icon nc-spaceship">
            <badge slot="header" type="info">Another Title</badge>
            <div slot="content">
              <p>
                Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @
                Figueroa and 12th in downtown LA 11:10PM</p>
              <p>
                What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my
                favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
              <hr>
              <span slot="footer">
                  <drop-down>
                     <p-button slot="title" type="info" round block class="dropdown-toggle">
                          <i class="nc-icon nc-bullet-list-67"></i>
                        </p-button>
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </drop-down>
                </span>
            </div>
          </time-line-item>

          <time-line-item badge-type="warning" badge-icon="nc-icon nc-email-85">
            <badge slot="header" type="warning">Another Title</badge>
            <p slot="content">
              Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm
              about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the
              whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue
              team</p>

          </time-line-item>

        </time-line>
    </div>
</template>

<script>
    export default {}
</script>
```
:::

### Timeline on one side

:::demo
```html
<template>
    <div style="background-color: #ebecf1;">
      <time-line type="simple">
          <time-line-item inverted badge-type="danger" badge-icon="nc-icon nc-planet">
            <badge slot="header" type="danger">Some title</badge>
            <p slot="content">
              Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family
              We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show
              at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>

            <h6 slot="footer">
              <i class="ti-time"></i>
              11 hours ago via Twitter
            </h6>
          </time-line-item>

          <time-line-item inverted badge-type="success" badge-icon="nc-icon nc-tag-content">
            <badge slot="header" type="success">Another Title</badge>
            <p slot="content">
              Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album
              to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from
              shoes to music to homes is that Kim has to like it....</p>
          </time-line-item>

          <time-line-item inverted badge-type="info" badge-icon="nc-icon nc-spaceship">
            <badge slot="header" type="info">Another Title</badge>
            <div slot="content">
              <p>
                Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @
                Figueroa and 12th in downtown LA 11:10PM</p>
              <p>
                What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my
                favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
              <hr>
              <span slot="footer">
                  <drop-down>
                     <p-button slot="title" type="info" round block class="dropdown-toggle">
                          <i class="nc-icon nc-bullet-list-67"></i>
                        </p-button>
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </drop-down>
                </span>
            </div>
          </time-line-item>

          <time-line-item inverted badge-type="warning" badge-icon="nc-icon nc-email-85">
            <badge slot="header" type="warning">Another Title</badge>
            <p slot="content">
              Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm
              about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the
              whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue
              team</p>

          </time-line-item>

        </time-line>
    </div>
</template>

<script>
    export default {}
</script>
```
:::

### Timeline Props
<props-table component-name="time-line"/>

### Timeline Slots
| Name | Description |
|---------- |-------- |
|  default  | Default content for the timeline |



### Timeline Items Props
<props-table component-name="time-line-item"/>

### Timeline Item Slots
| Name | Description |
|---------- |-------- |
|  header  |  Content for item header |
|  content  | Content for item content |
|  footer  | Content for item footer |
