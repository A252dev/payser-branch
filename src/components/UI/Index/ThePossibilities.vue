<script setup>
import Capabilities from '@/components/UI/Index/blocks/Capabilities.vue'
import TheAdvanced from './TheAdvanced.vue'
</script>

<template>
    <div class="content__container">
        <div class="block__container">
            <h3 class="block__title">Our capabilities</h3>

            <div class="block__wrapper section">
                <Capabilities />
            </div>
            <div class="block__wrapper section">
                <TheAdvanced />
            </div>
            <Triangle class="last__triangle" />
        </div>
    </div>
</template>

<style scoped>
.content__container {
    width: 100%;
}

.block__container {
    width: 100%;
    max-width: 70%;
    margin: 0 auto;
}

.block__title {
    border-bottom: 1px solid #008692;
    padding: 20px 0;
    color: #000F9C;
    font-size: 24px;
    font-weight: 500;
}

.block__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>