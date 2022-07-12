<template>
  <div class="home">
    <h1>This is an amd page</h1>
    <router-view v-slot="{ Component }">
      <keep-alive :max="1">
        <component v-if="!Component.ref.i.isDeactivated" :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onActivated, onBeforeMount, onDeactivated, onMounted, ref} from "vue";
export default defineComponent({
  name: 'amd',
  setup() {
    console.log('amd setup');
    onActivated (() => {
      console.log('amd onActivated!')
    })
    onDeactivated (() => {
      console.log('amd onDeactivated!')
    })
    const log = (e: any)=>{
      console.log(e);
    }
    return{
      log
    }
  },
});
</script>

<!--<template>-->
<!--  <div>amd</div>-->
<!--&lt;!&ndash;  <keep-alive>&ndash;&gt;-->
<!--&lt;!&ndash;    <router-view/>&ndash;&gt;-->
<!--&lt;!&ndash;  </keep-alive>&ndash;&gt;-->
<!--  <router-view>-->
<!--&lt;!&ndash;    <keep-alive>&ndash;&gt;-->
<!--&lt;!&ndash;      <component :is="Component" />&ndash;&gt;-->
<!--&lt;!&ndash;    </keep-alive>&ndash;&gt;-->
<!--  </router-view>-->
<!--</template>-->

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
