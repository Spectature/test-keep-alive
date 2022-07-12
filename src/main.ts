// @ts-ignore
import { createRouter, createWebHashHistory } from 'vue-router'
import amd from "./components/amd.vue";
import amdA from "./components/amd-a.vue";
import cmd from "./components/cmd.vue";
import cmdA from "./components/cmd-a.vue";
import amdAA from "./components/amd-aa.vue";
// @ts-ignore
import {createApp} from "vue";
import App from "./App.vue";


const app = createApp(App);
const routes = [
    {
        path: '/amd',
        name: 'amd',
        component: amd,
        meta: { keepalive: true },
        children: [
            {
                path: 'a',
                component: amdA,
                meta: { keepalive: true }
            },
            {
                path: 'aa',
                component: amdAA,
                meta: { keepalive: true }
            }
        ]
    },
    {
        path: '/cmd',
        name: 'cmd',
        component: cmd,
        meta: { keepalive: true },
        children: [
            {
                path: 'sub',
                component: cmdA,
                meta: { keepalive: true }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

app.use(router);
app.mount("#app");
