import { createApp } from 'vue'
import App from './App.vue'
import { key, store } from './store'
import router from './router'
import { apolloClient } from '@/infrastructure/ApolloClient'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './index.css'

createApp(App).use(store, key).use(router).provide(DefaultApolloClient, apolloClient).mount('#app')
