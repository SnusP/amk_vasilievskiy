import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createRouter, createWebHistory } from 'vue-router'
import Main from './views/Main.vue'

import LoginPage from './components/admin/LoginPage.vue'
import AddService from '@/components/admin/services/AddService.vue'
import ServiceList from '@/components/admin/services/ServiceList.vue'
import ServicePage from '@/components/admin/services/ServicePage.vue'
import AddReport from '@/components/admin/reports/AddReport.vue'
import ReportList from '@/components/admin/reports/ReportList.vue'
import ReportPage from '@/components/admin/reports/ReportPage.vue'
import AddPhoto from '@/components/admin/photos/AddPhoto.vue'
import PhotoList from '@/components/admin/photos/PhotoList.vue'
import AboutList from '@/components/admin/about/AboutList.vue'
import AboutPage from '@/components/admin/about/AboutPage.vue'

const routes = [
  { path: '/', name: 'Main', component: Main },
  { path: '/admin', name: 'Admin', component: LoginPage },
  { path: '/admin/login', component: LoginPage },
  { path: '/admin/add-service', component: AddService },
  { path: '/admin/services', component: ServiceList },
  { path: '/admin/services/:id', component: ServicePage },

  { path: '/admin/add-report', component: AddReport },
  { path: '/admin/reports', component: ReportList },
  { path: '/admin/reports/:id', component: ReportPage },

  { path: '/admin/add-photo', component: AddPhoto },
  { path: '/admin/photos', component: PhotoList },

  { path: '/admin/about', component: AboutList },
  { path: '/admin/aboutPage', component: AboutPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export { router }

const app = createApp(App)
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})
app.use(router)
app.use(vuetify).use(pinia)
app.mount('#app')
