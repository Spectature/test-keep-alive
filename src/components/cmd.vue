<template>
  <div class="about">
    <h1>This is an cmd page</h1>
    <router-view v-slot="{ Component }">
      <keep-alive :max="1">
        <component v-if="!Component.ref.i.isDeactivated" :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import {defineComponent, onActivated, onDeactivated} from "vue";

export default defineComponent({
  name: 'cmd',
  setup() {
    console.log('cmd setup');
    onActivated (() => {
      console.log('cmd onActivated!')
    })
    onDeactivated (() => {
      console.log('cmd onDeactivated!')
    })
  },
});
</script>

<style scoped>

</style>
