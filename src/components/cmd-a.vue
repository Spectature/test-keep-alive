<template>
  <div> cmd>1级</div>
  cmd-a:<input type="text">
</template>

<script>
import {defineComponent, onActivated, onBeforeMount, onDeactivated, onMounted} from "vue";

export default defineComponent({
  name: 'cmdA',
  setup() {
    console.log('cmd>1级 setup');
    onActivated (() => {
      console.log('cmd>1级 onActivated!')
    })
    onDeactivated (() => {
      console.log('cmd>1级 onDeactivated!')
    })
  },
});
</script>

<style scoped>

</style>
