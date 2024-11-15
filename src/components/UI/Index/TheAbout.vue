<template>
    <div class="content__container">
        <div class="block__container">
            <h3 class="block__title">About</h3>

            <div class="block__wrapper section">
                <img class="ls-image" alt="image" src="@/assets/img/landscape-image-1.png" />
                <div class="about__section__container">
                    <h4 class="wrapper__title">What's our goal?</h4>
                    <p class="wrapper__description">We want to make life as easy as possible for our customers. Our task
                        is
                        to make it convenient to pay and also to store funds. We will do everything possible to ensure
                        that
                        our clients get the most favorable conditions when using this payment system.
                        Register now and get the most convenient wallet you have ever used.</p>
                    <RouterLink class="link blue_link sublink" to="/register">Register</RouterLink>
                </div>
            </div>
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
    font-weight: 24px;
    font-weight: 500;
}

.block__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.ls-image {
    width: 358.4px;
}

.about__section__container {
    /* display: flex; */
    flex-direction: column;
    max-width: 50%;
    /* justify-content: space-around; */
}

.wrapper__title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 30px;
}

.wrapper__description {
    text-align: justify;
    line-height: 24px;
}

@media(max-width: 1000px){

    .ls-image{
        display: none;
    }

    .about__section__container{
        max-width: 100%;
    }

}
</style>