<template>
    <div class="content__container">

        <div class="section__card">
            <h4 class="content__title">Как привязать банковскую карту к PaySer кошельку?</h4>

            <ol class="faq__list">
                <li class="faq__list__item">Войдите в PaySer кошелёк.</li>
                <li class="faq__list__item">В разделе «Банковские карты» выберите пункт «Привязать карту».</li>
                <li class="faq__list__item">Введите данные карты на защищённой странице.</li>
                <li class="faq__list__item">Для подтверждения привязки отправьте код из 2FA.</li>
            </ol>
        </div>

    </div>
</template>

<style scoped>
.content__container {
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    /* border: 1px solid red; */
}

.section__card {
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 0 7px rgb(184, 217, 243);
    background-color: #fff;
}

.content__title {
    margin-bottom: 30px;
    font-size: 28px;
}

.faq__list {
    margin-left: 40px;
    line-height: 24px;
}
</style>