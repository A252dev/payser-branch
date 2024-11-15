<template>
    <div class="content__container">
        <section class="advanced__container">
            <div class="block__container">
                <h3 class="block__title">Our capabilities</h3>

                <p class="block__description">
                    Thanks to bank card linking technology, you can quickly as well as securely pay for your online
                    purchases. It is not only fast, but also convenient, and also it eliminates all cases of bank
                    account
                    hacking.
                </p>
                <RouterLink class="link blue_link sublink" to="/card_bind">More</RouterLink>
            </div>
            <div class="block__container">
                <h3 class="block__title">Creation of levies</h3>

                <p class="block__description">
                    You can create collections for various. In this way, you can collect certain funds for different
                    needs.
                </p>
                <RouterLink class="link blue_link sublink" to="/fundraising">More</RouterLink>
            </div>
        </section>

    </div>
</template>

<style scoped>
.content__container {
    width: 100%;
    /* display: flex; */
}

.advanced__container {
    border-top: 1px solid #008692;
    display: flex;
    justify-content: space-between;
}

.block__container {
    width: 100%;
    max-width: 48%;
}

.block__title {
    padding: 20px 0;
    color: #000F9C;
    font-size: 24px;
    font-weight: 500;
}

.block__description {
    text-align: justify;
    line-height: 24px;
}

.block__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

@media(max-width: 1000px) {

    .advanced__container {
        flex-direction: column;
    }

    .block__container {
        max-width: 100%;
    }

}
</style>