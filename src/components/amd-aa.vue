<template>
  <div> amd>aa级
  </div>
  amd-aa:<input type="text">

</template>

<script>
import {onActivated, onBeforeMount, onDeactivated, onMounted} from "vue";

export default {
  name: "amdAA",
  setup() {
    console.log('amd>aa级 setup');
    onActivated (() => {
      console.log('amd>aa级 onActivated!')
    })
    onDeactivated (() => {
      console.log('amd>aa级 onDeactivated!')
    })
  },

}
</script>

<style scoped>

</style>
