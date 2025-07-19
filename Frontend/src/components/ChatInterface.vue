<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const messages = ref([
  { text: "Hello! I'm your Intern Assistant. How can I help you today?", sender: 'bot' }
])
const newMessage = ref('')

const closeChat = () => {
  router.push('/')
}

const sendMessage = async () => {
  const messageText = newMessage.value.trim()
  if (messageText === '') return

  // Add user message
  messages.value.push({ text: messageText, sender: 'user' })
  newMessage.value = ''

  try {
    // Send message to FastAPI backend
    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: messageText })
    })

    const data = await res.json()
    const botReply = data.response || "Sorry, I didn’t understand that."

    // Add bot response
    messages.value.push({ text: botReply, sender: 'bot' })
  } catch (error) {
    messages.value.push({ 
      text: "Oops! Couldn’t reach the backend. Please try again later.",
      sender: 'bot'
    })
    console.error(error)
  }
}
</script>

<template>
  <div class="flex flex-col h-screen bg-slate-50">
    <!-- Chat Header -->
    <div class="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h2 class="text-xl font-semibold">Intern Assistant</h2>
      <button 
        @click="closeChat"
        class="text-2xl hover:text-slate-200 transition-colors"
      >
        &times;
      </button>
    </div>

    <!-- Chat Messages -->
    <div class="flex-1 p-4 overflow-y-auto">
      <div 
        v-for="(message, index) in messages" 
        :key="index" 
        :class="[ 
          'max-w-[70%] p-3 mb-4 rounded-xl break-words',
          message.sender === 'user' 
            ? 'bg-blue-600 text-white ml-auto rounded-br-sm'
            : 'bg-slate-200 text-slate-800 mr-auto rounded-bl-sm'
        ]"
      >
        {{ message.text }}
      </div>
    </div>

    <!-- Chat Input -->
    <div class="p-4 bg-white border-t border-slate-200 flex">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="Type your question..."
        class="flex-1 p-3 border border-slate-300 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        @click="sendMessage"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
      >
        Send
      </button>
    </div>
  </div>
</template>
