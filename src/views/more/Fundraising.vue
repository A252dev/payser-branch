<template>
    <div class="content__container">

        <div class="content__left">
            <div class="section__card">
                <h4 class="content__title">Приём платежей для физических лиц</h4>

                <p class="content__subtitle">Продавайте товары и услуги как самозанятый и получайте деньги мгновенно на
                    PaySer кошелёк. Без регистрации ИП и других заморочек</p>

                <RouterLink class="link blue_link" to="/login">Открыть сбор</RouterLink>
            </div>
        </div>

        <div class="content__right">
            <div class="info__card">
                <div class="card__icon__block div1">
                    <img class="card__icon" src="@/assets/img/icons/card-icons/offer1.svg" alt="offer1" />
                </div>
                <h5 class="card__title">Оплата по выставленному счёту</h5>

                <p class="card__subtitle">Форма счёта уже готова — вам нужно только ввести сумму платежа поделиться
                    ссылкой на этот счёт с клиентом</p>
            </div>

            <div class="info__card">
                <div class="card__icon__block div2">
                    <img class="card__icon" src="@/assets/img/icons/card-icons/offer2.svg" alt="offer1" />
                </div>
                <h5 class="card__title">Перевод по никнейму</h5>

                <p class="card__subtitle">Чтобы не светить почтой кошелька, создайте для него никнейм и указывайте для
                    переводов</p>
            </div>

            <div class="info__card">
                <div class="card__icon__block div3">
                    <img class="card__icon" src="@/assets/img/icons/card-icons/offer3.svg" alt="offer1" />
                </div>
                <h5 class="card__title">Оплата по ссылке</h5>

                <p class="card__subtitle">Создавайте единую ссылку для платежа и разместите где угодно или отправляйте
                    лично каждому</p>
            </div>

            <div class="info__card">
                <div class="card__icon__block div4">
                    <img class="card__icon" src="@/assets/img/icons/card-icons/offer4.svg" alt="offer1" />
                </div>
                <h5 class="card__title">Виджет оплаты</h5>

                <p class="card__subtitle">Это настоящая форма оплаты, который появится на вашем сайте. Клиент укажет
                    сумму и отправит вам деньги. Встроить виджет просто - код уже готов</p>
            </div>
        </div>



    </div>
</template>

<style scoped>
.content__container {
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
}

.content__left {
    width: 60%;
}

.content__right {
    width: 38%;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
}

.section__card {
    width: 100%;
    /* max-width: 90%; */
    margin: 0 auto;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 0 7px rgb(184, 217, 243);
    background-color: #fff;
}

.content__title {
    font-weight: 700;
    font-size: 46px;
    line-height: 44px;
}

.content__subtitle {
    font-size: 18px;
    margin: 20px 0;
}

.info__card {
    position: relative;
    margin-bottom: 45px;
    width: 48%;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    /* margin-top: 45px; */
    box-shadow: 0 0 7px rgb(184, 217, 243);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card__icon__block {
    position: absolute;
    width: 70px;
    height: 70px;

    left: 30%;
    /* margin-left: -50%; */
    border-radius: 50%;
    padding: 15px;
    transform: translateY(-230%);
}

.div1 {
    background-color: #c6fdffaf;
}

.div2 {
    background-color: #ffbdbbaf;
}

.div3 {
    background-color: #fff6a7af;
    /* transform: translateY(-200%); */
}

.div4 {
    background-color: #c1ffc4af;
}

.card__icon {
    width: 40px;
    height: 40px;
}

.card__title {
    font-size: 16px;
    line-height: 20px;
    margin-top: 25px;
    font-weight: 500;
    margin-bottom: 7px;
    letter-spacing: 0.3px;
    text-align: center;
    color: #000F9C;
}

.card__subtitle {
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 20px;
    font-size: 14px;
}
</style>
