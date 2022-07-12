<template>
  <div> amd>1级
  </div>
  amd-a:<input type="text">

</template>

<script>
import {onActivated, onBeforeMount, onDeactivated, onMounted} from "vue";

export default {
  name: "amdA",
  setup() {
    console.log('amd>1级 setup');
    onActivated (() => {
      console.log('amd>1级 onActivated!')
    })
    onDeactivated (() => {
      console.log('amd>1级 onDeactivated!')
    })
  },

}
</script>

<style scoped>

</style>
