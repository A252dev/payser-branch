<script setup>
import mainBackground from '@/assets/img/main-background.vue'
import triangle from '@/assets/img/icons/triangle.vue'

import Info from './blocks/Info.vue'
</script>

<template>
    <div class="title__container">
        <h4 class="title">Fastest transactions</h4>
        <h5 class="subtitle">PAYSER.PRO - Electronic transfers</h5>
    </div>
    <mainBackground class="background__image" />
    <Info />
    <triangle />

</template>

<style scoped>
.background__image {
    height: 10%;
    width: 10%;
    box-sizing: border-box;
    border: 1px solid red;
}

.title__container {
    position: relative;
    /* border: 1px solid green; */
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.title {
    color: #fff;
    text-align: center;
    font-size: 48px;
    font-weight: 500;
    padding: 0 20px;
    margin-bottom: 20px;
    margin-top: 12%;
}

.subtitle {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
}
</style>