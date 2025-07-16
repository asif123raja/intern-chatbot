<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const openChat = () => {
  router.push('/chat')
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-primary-600 text-white py-8">
      <div class="container mx-auto px-5 text-center">
        <h1 class="text-4xl font-bold mb-2">InternConnect</h1>
        <p class="text-xl">Your gateway to a successful internship experience</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Hero Section -->
      <section class="bg-slate-50 py-16 text-center">
        <div class="container mx-auto px-5">
          <h2 class="text-3xl font-semibold text-slate-800 mb-4">Welcome, Future Professionals!</h2>
          <p class="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Get instant answers to all your internship questions with our AI assistant.
          </p>
          <button 
            @click="openChat"
            class="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Ask the Intern Assistant
          </button>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-16">
        <div class="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-transform">
            <h3 class="text-primary-600 text-xl font-semibold mb-4">Quick Answers</h3>
            <p class="text-slate-600">Get instant responses to common internship queries.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-transform">
            <h3 class="text-primary-600 text-xl font-semibold mb-4">24/7 Support</h3>
            <p class="text-slate-600">Our assistant is always available to help you.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-transform">
            <h3 class="text-primary-600 text-xl font-semibold mb-4">Resource Hub</h3>
            <p class="text-slate-600">Access helpful resources for your internship journey.</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-800 text-white py-6 text-center">
      <div class="container mx-auto px-5">
        <p>© 2023 InternConnect. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>