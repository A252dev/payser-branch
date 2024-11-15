<script setup>
import ok2 from '@/assets/img/icons/ok-2.vue'
</script>

<template>

    <div class="info__container">
        <div class="info__block card">
            <h5 class="info__title">Quickness</h5>
            <!-- <h4 class="info__subtitle">You should choose us for a reason:</h4> -->
            <p class="info__description">
                <ok2 class="ok-icon" />Pay bills
            </p>
            <p class="info__description">
                <ok2 class="ok-icon" />Create a fundraiser
            </p>
            <p class="info__description">
                <ok2 class="ok-icon" />Instant transfers
            </p>
            <p class="info__description">
                <ok2 class="ok-icon" />Intuitive setup
            </p>
        </div>
        <div class="info__block card">
            <h5 class="info__title">Comfort</h5>
            <h4 class="info__subtitle">All of your account information is on one page</h4>
            <p class="info__description">
                <ok2 class="ok-icon" />Customize your profile
            </p>
            <p class="info__description">
                <ok2 class="ok-icon" />Enclose your bank card for quick payment
            </p>
        </div>
        <div class="info__block card">
            <h5 class="info__title">Safety</h5>
            <h4 class="info__subtitle">Receive and transfer funds securely, eliminating bank account hacks </h4>
            <!-- <p class="info__description">
                <ok2 class="ok-icon" />Customize your profile 
            </p>
            <p class="info__description">
                <ok2 class="ok-icon" />Enclose your bank card for quick payment 
            </p> -->
        </div>
    </div>
</template>

<style scoped>
.info__container {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
}

.info__block {
    box-shadow: 0 0 4px rgb(184, 217, 243);
    background-color: #f5feff;
    border: 1px solid #c8faff;
    border-radius: 5px;
    width: 330px;
    margin: 10px;
    padding: 40px 30px;
    /* z-index: 3; */
}

.card {
    width: 268px;
}

.info__title {
    color: #000F9C;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
}

.info__subtitle {
    color: #000;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 20px;
}

.info__description {
    display: flex;
    align-items: center;
    margin: 15px 0;
    color: #000F9C;
    font-weight: 900;
    /* font-size: 14px; */
}

@media(max-width: 1000px) {

    .info__container {
        flex-direction: column;
    }

}
</style>