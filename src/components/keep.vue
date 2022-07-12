<template>
  <div :data-key="$route.path">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </router-view>
  </div>
<!--  <keep-alive>-->
<!--    <router-view></router-view>-->
<!--  </keep-alive>-->
<!--  <keep-alive>-->
<!--    <router-view></router-view>-->
<!--  </keep-alive>-->

</template>

<script>
export default {
  name: "keep"
}
</script>

<style scoped>

</style>
