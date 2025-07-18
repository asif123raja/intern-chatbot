import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

createApp(App).use(router).mount('#app')

async function sendMessage(message) {
  const response = await fetch("http://127.0.0.1:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();
  return data.reply;
}
