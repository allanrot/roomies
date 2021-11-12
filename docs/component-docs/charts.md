# Charts

<script>
module.exports = {
  data() {
    return {
      lineChart1: {
         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
         data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630],
         color: '#f96332'
       },
       activeUsersChart: {
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            series: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610]
          }
        },
       barChart2: {
         labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
         datasets: [
           {
             backgroundColor: "#f96332",
             data: [40, 26, 28, 45, 20, 25, 30, 25, 20, 25, 20, 15,]
           },
           {
             backgroundColor: "#2CA8FF",
             data: [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20]
           }
         ]
       },
        chartData: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95],
        chartLabels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    }
  }
}
</script>

<hr>
For the implementation of graphic charts, we used [Chart.js](http://www.chartjs.org/)
in combination with [Vue Chart.js](http://vue-chartjs.org/#/home) which is a Vue wrapper for
Chart.js
Vue Chart.js works by extending some predefined components and customizing Chart.js options before rendering them.


## Usage
To use Chart components, you directly use the provided components from `Vue Chart.js` or
create your own by extending them. You can find 2 such components inside
`src/components/Charts`. Feel free to adjust and customize them according to your needs :)

Using the custom chart components

```js
import {LineChart, BarChart} from 'src/components';
```

In component declaration
```js
export default {
  components: {
    LineChart,
    BarChart
  }
}
```

### Simple Line chart
:::demo
```html
<template>
  <div>
   <line-chart :labels="lineChart1.labels"
              :data="lineChart1.data"
              :color="lineChart1.color"
              :height="200">
   </line-chart>
  </div>
</template>
<script>
  export default{
   data(){
     return {
       lineChart1: {
         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
         data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630],
         color: '#f96332'
       }
     }
   }
  }
</script>
```
:::

### Bar Chart with multiple datasets

:::demo
```html
<template>
  <div>
   <bar-chart :labels="barChart2.labels"
             :datasets="barChart2.datasets"
             :height="200">
   </bar-chart>
  </div>
</template>
<script>
  export default{
   data(){
     return {
       barChart2: {
         labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
         datasets: [
           {
             backgroundColor: "#f96332",
             data: [40, 26, 28, 45, 20, 25, 30, 25, 20, 25, 20, 15,]
           },
           {
             backgroundColor: "#2CA8FF",
             data: [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20]
           }
         ]
       }

     }
   }
  }
</script>
```
:::

## Chart Card
You can combine the `card` as well as other components together with the `chart` component to achieve some beautiful, user-friendly
chart cards like the ones on the Overview page

:::demo
```html
<template>
 <chart-card :chart-data="activeUsersChart.data" chart-title="TOTAL EARNINGS IN LAST TEN QUARTERS">
   <span slot="title">$34,657</span>
   <badge slot="title-label" type="success">+18%</badge>

   <template slot="footer-title">Financial Statistics</template>

   <p-button slot="footer-right" type="success" round icon size="sm">
     <i class="nc-icon nc-simple-add"></i>
   </p-button>
 </chart-card>
</template>
<script>
  export default{
   data(){
     return {
        activeUsersChart: {
         data: {
           labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
           series: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610]
         }
       },
     }
   }
  }
</script>
```
:::

:::tip
**Note** You can also refer to other examples with chart-cards which can be found in `src/pages/Dashboard/Dashboard/Overview.vue`
and `src/pages/Dashboard/Charts.vue`
:::

### Line Chart Props

<props-table component-name="line-chart"/>

### Bar Chart Props

<props-table component-name="bar-chart"/>

### Chart Card Props

<props-table component-name="chart-card"/>

For more chart components and options please visit [Vue Chart.js](http://vue-chartjs.org/#/home?id=quick-start)
and [Chart.js](http://www.chartjs.org/docs/latest/getting-started/)
