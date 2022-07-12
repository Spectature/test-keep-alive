<template>
  <div> cmd>1级>1级</div>
  cmd-b:<input type="text">
</template>

<script>
import {onActivated, onDeactivated} from "vue";
export default {
  name: "cmdB",

  setup() {
    console.log('cmd>1级>1级 setup');
    onActivated (() => {
      console.log('cmd>1级>1级 onActivated!')
    })
    onDeactivated (() => {
      console.log('cmd>1级>1级 onDeactivated!')
    })
  },

}
</script>

<style scoped>

</style>
