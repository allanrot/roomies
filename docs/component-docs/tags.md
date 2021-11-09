# Tags

<hr>

```js
import {Tag} from 'element-ui'
```

Global usage

```js
Vue.use(Tag)
```

For local usage

```js
export default {
  components: {
    [Tag.name]: Tag
  }
}
```

### Tags with input

:::demo
```html
<template>
 <div>
   <el-tag
       :key="tag"
       v-for="(tag,index) in tags.dynamicTags"
       size="small"
       type="primary"
       :closable="true"
       :close-transition="false"
       @close="handleClose(index)"
     >
       {{tag}}
     </el-tag>

     <input type="text" placeholder="Add new tag"
            class="form-control input-new-tag"
            v-model="tags.inputValue"
            ref="saveTagInput"
            size="mini"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"/>
 </div>
</template>
<script>
  export default {
    data() {
      return {
         tags: {
            dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
            inputVisible: false,
            inputValue: ''
          }
      }
    },
    methods: {
      handleClose (tag) {
        this.tags.dynamicTags.splice(this.tags.dynamicTags.indexOf(tag), 1)
      },
      showInput () {
        this.tags.inputVisible = true
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },
      handleInputConfirm () {
        let inputValue = this.tags.inputValue
        if (inputValue) {
          this.tags.dynamicTags.push(inputValue)
        }
        this.tags.inputVisible = false
        this.tags.inputValue = ''
      }
    }
  }
</script>
```
:::

<script>
module.exports = {
   data() {
      return {
         tags: {
            dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
            inputVisible: false,
            inputValue: ''
          }
      }
    },
    methods: {
     handleClose(index) {
       let tagsArr = this.tags.dynamicTags;
       if(tagsArr) {
        tagsArr.splice(index, 1)
       }
     },
     showInput () {
       this.tags.inputVisible = true
       this.$nextTick(() => {
         this.$refs.saveTagInput.$refs.input.focus()
       })
     },
     handleInputConfirm () {
       let inputValue = this.tags.inputValue
       if (inputValue) {
         this.tags.dynamicTags.push(inputValue)
       }
       this.tags.inputVisible = false
       this.tags.inputValue = ''
     }
    }
}
</script>
