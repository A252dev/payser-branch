<script setup>
import TheAbout from '@/components/UI/Index/TheAbout.vue'
import ThePossibilities from '@/components/UI/Index/ThePossibilities.vue'
import TheWelcome from '@/components/UI/Index/TheWelcome.vue'
</script>

<template>
    <div class="block__container bg-image">
        <TheWelcome />
    </div>
    <div class="block__container bg-white">
        <TheAbout />
    </div>
    <div class="block__container bg-white">
        <ThePossibilities />
    </div>
</template>

<style scoped>
.block__container {
    display: flex;
    flex-direction: column;
}

.bg-image{
    background-color: #000f9c;
}
</style>