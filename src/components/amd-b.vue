<template>
  <div> amd>1级>1级</div>
  amd-b:<input type="text">
</template>

<script>
import {onActivated, onDeactivated} from "vue";
export default {
  name: "amdB",

    setup() {
      console.log('amd>1级>1级 setup');
      onActivated (() => {
        console.log('amd>1级>1级 onActivated!')
      })
      onDeactivated (() => {
        console.log('amd>1级>1级 onDeactivated!')
      })
    },

}
</script>

<style scoped>

</style>
