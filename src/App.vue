<script lang="ts">
import amd from "./components/amd.vue";
import amdA from "./components/amd-a.vue";
import amdB from "./components/amd-b.vue";
import cmdA from "./components/cmd-a.vue";
import cmdB from "./components/cmd-b.vue";
import cmd from "./components/cmd.vue";
import amdAA from "./components/amd-aa.vue";
export default {
  name: "App",
  components: {amd,amdA,amdB,cmd,cmdA,cmdB ,amdAA},
  // methods:{
  //   getFirstLevelRoute (route) {
  //     if (!Array.isArray(route.matched) || route.matched.length === 0) {
  //       return route;
  //     }
  //     return route.matched[0];
  //   }
  // },
  setup(){
  }
};
</script>


<template>
  <div id="nav">
    <router-link to="/amd">amd</router-link> |
    <router-link to="/cmd">cmd</router-link>|

    <router-link to="/amd/a">amd/amdA</router-link>|
<!--    <router-link to="/amd/aa">amd/amdAA</router-link>|-->

    <router-link to="/cmd/sub">about/sub(cmdA)</router-link>
  </div>

  <router-view v-slot="{ Component,route }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<!--      <component :is="Component" :key="getFirstLevelRoute(route).name"  v-if="route.meta.keepalive" />-->
<!--    <component :is="Component" :key="getFirstLevelRoute(route).name"  v-if="!route.meta.keepalive" />-->


<!--<template>-->
<!--  <button @click="current = 'amd'">/amd</button>-->
<!--    <div><router-link to="/amd">/amd</router-link></div>-->
<!--  <div><router-link to="/amd/a">/amd-1级别</router-link></div>-->
<!--  <div><router-link to="/amd/a/b">/amd-1级别-1级</router-link></div>-->
<!--  <button @click="current = 'cmd'">/cmd</button>-->
<!--  <div><router-link to="/cmd">/cmd</router-link></div>-->
<!--  <div><router-link to="/cmd/a">/cmd-1级别</router-link></div>-->
<!--  <div><router-link to="/cmd/a">/cmd-1级别-1级</router-link></div>-->
<!--</template>-->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
