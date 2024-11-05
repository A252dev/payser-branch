<template>
    <div class="content__container">


        <div class="left__block">

            <div class="block__wrapper">
                <h3 class="card__title">Balance</h3>
                <h5 class="card__subtitle">Остаток на балансе</h5>

                <div class="balance__wrapper">
                    <div class="balance__container">
                        <div class="balance__card">
                            <img class="currency__icon" src="@/assets/img/icons/card-icons/currency/eur.svg"
                                alt="eur" />
                            <span class="currency__text">50</span>
                        </div>
                        <div class="balance__card">
                            <img class="currency__icon" src="@/assets/img/icons/card-icons/currency/usd.svg"
                                alt="usd" />
                            <span class="currency__text">150</span>
                        </div>
                        <div class="balance__card">
                            <img class="currency__icon" src="@/assets/img/icons/card-icons/currency/rub.svg"
                                alt="rub" />
                            <span class="currency__text">500 000</span>
                        </div>
                    </div>

                    <div class="convert__container">
                        <button class="convert__button">
                            <img class="convert__image" src="@/assets/img/icons/profile/convertation.svg"
                                alt="convertation" />
                        </button>
                    </div>

                </div>

                <div class="button__group">
                    <a class="link blue_link form-link" href="#">Add</a>
                    <a class="link blue_link form-link" href="#">Transfer</a>
                </div>

            </div>

            <div class="block__wrapper">
                <h3 class="card__title">Card Binds</h3>
                <h5 class="card__subtitle">Каталог банковских карт</h5>

                <div class="bank__card__container">

                    <div class="bank__card btn">
                        <div class="bank__image__div">
                            <img class="bank__image" src="@/assets/img/bank-cards/bank-card1.svg" alt="bank_card" />
                        </div>
                        <div class="bank__info__div">
                            <h5 class="bank__card__title">Mastercard: <span class="card__number">1212 1212 1212
                                    1212</span>
                            </h5>
                            <p class="bank__subtitle">Added 12.12.1212</p>
                        </div>
                    </div>

                    <div class="bank__card btn">
                        <div class="bank__image__div">
                            <img class="bank__image" src="@/assets/img/bank-cards/bank-card1.svg" alt="bank_card" />
                        </div>
                        <div class="bank__info__div">
                            <h5 class="bank__card__title">Mastercard: <span class="card__number">1212 1212 1212
                                    1212</span>
                            </h5>
                            <p class="bank__subtitle">Added 12.12.1212</p>
                        </div>
                    </div>

                </div>

                <div class="add__button__container btn">
                    <button class="add__card__button">+</button>
                </div>
            </div>


        </div> <!-- left block -->

        <div class="right__block">

            <div class="block__wrapper">
                <div class="section__list">
                    <a class="section__button button__active" href="#">My Data</a>
                    <a class="section__button" href="#">Settings</a>
                    <a class="section__button" href="#">Limits</a>
                    <a class="section__button" href="#">Bills</a>
                    <a class="section__button" href="#">Fundraising</a>
                    <a class="section__button" href="#">Services</a>
                    <a class="section__button" href="#">History</a>
                </div> <!-- section list -->

                <div class="section__content__container">

                    <h4 class="section__title" style="text-align: center;">Private Information</h4>

                    <div class="card__container">

                        <div class="card__div">
                            <h4 class="profile__card__title">My Data</h4>

                            <h5 class="label-id">Name</h5>
                            <p class="label-value">Alex Robbinson</p>
                            <h5 class="label-id">Birthday</h5>
                            <p class="label-value">12.12.1212</p>
                            <h5 class="label-id">Passport</h5>
                            <p class="label-value">CB1212122</p>

                            <button class="link blue_link btn">Refresh</button>
                        </div>

                        <div class="card__div">
                            <h4 class="profile__card__title">My Data</h4>

                            <h5 class="label-id">Name</h5>
                            <p class="label-value">Alex Robbinson</p>
                            <h5 class="label-id">Birthday</h5>
                            <p class="label-value">12.12.1212</p>
                            <h5 class="label-id">Passport</h5>
                            <p class="label-value">CB1212122</p>

                            <button class="link blue_link btn">Delete</button>
                        </div>

                    </div>

                </div> <!-- section content (my data) -->

            </div>

        </div> <!-- right block -->

    </div>

</template>

<style scoped>
.content__container {
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    /* border: 1px solid red; */
    padding: 70px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left__block {
    width: 35%;
    display: flex;
    flex-direction: column;
}

.right__block {
    width: 63%;
    display: flex;
    flex-direction: column;
}

.block__wrapper {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 7px rgb(184, 217, 243);
    background-color: #fff;
    margin-bottom: 20px;
}

.card__title {
    padding-bottom: 15px;
    font-weight: 500;
    color: #000;
    font-size: 20px;
    border-bottom: 1px solid #cfcfcf;
    text-align: center;
}

.card__subtitle {
    color: #929292;
    margin: 10px 0;
    font-weight: 500;
    font-size: 16px;
}

.balance__wrapper {
    display: flex;
    justify-content: space-between;
}

.balance__container {
    display: inline-flex;
    width: 50%;
    /* border: 1px solid red; */
    flex-direction: column;
}

.balance__card {
    display: inline-flex;
    width: 100%;
    box-shadow: 0 0 4px #d8d8d8;
    font-weight: 700;
    border-radius: 10px;
    align-items: center;
    margin: 0 4px;
    margin-bottom: 10px;
}

.currency__icon {
    width: 40px;
    background-color: #52baff;
    padding: 10px;
    border-radius: 7px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.currency__text {
    font-size: 20px;
    color: #000;
    padding: 0 10px;
}

.convert__container {
    display: flex;
    align-items: center;
}

.convert__container:hover {
    transform: scale(1.05);
    transition: 0.2s;
}

.convert__button {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #c6e8ff;
    padding: 10px;
    cursor: pointer;
}

.button__group {
    display: flex;
    padding-top: 20px;
    border-top: 1px solid #cfcfcf;
    justify-content: center;
}

.form-link {
    margin: 0 15px;
}

.bank__card__container {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
}

.bank__card {
    display: flex;
    padding: 10px 15px;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    margin-bottom: 5px;
    cursor: pointer;
}

.bank__image__div {
    background-color: #9cd8ff;
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
}

.bank__image {
    /* width: 46px;
    height: 46px; */
}

.bank__info__div {
    display: flex;
    flex-direction: column;
}

.bank__card__title {
    font-size: 13px;
    font-weight: 500;
}

.card__number {
    font-weight: 600;
}

.bank__subtitle {
    font-size: 14px;
    color: #929292;
    margin-top: 5px;
}


.add__button__container {
    /* border: 1px solid red; */
    border: none;
    margin: 0 auto;
}

.add__card__button {
    width: 99.5%;
    cursor: pointer;
    height: 50px;
    border-radius: 5px;
    color: #fff;
    background-color: #005eff;
    font-size: 28px;
    font-weight: 500;
}

.btn:hover {
    transform: translateY(2px);
}

.section__list {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.section__button {
    cursor: pointer;
    color: #4b4b4b;
    display: inline-block;
    padding: 10px;
    border-bottom: 2px solid #868686;
    font-size: 16px;
    text-decoration: none;
}

.button__active {
    color: #000F9C;
    border-bottom: 2px solid #000F9C;
    font-weight: 700;
}

.section__content__container {
    /* border: 1px solid red; */
    margin-top: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    min-height: 300px;
}

.card__div {
    box-shadow: 0 0 4px rgb(184, 217, 243);
    padding: 20px;
    width: 35%;
    background-color: #f5feff;
    border: 1px solid #c8faff;
    margin: 10px;
}

.section__title {
    font-size: 22px;
    color: #000;
    font-weight: 700;
    margin: 15px 0;
    margin-bottom: 5px;
    /* padding: 0; */
}

.card__container {
    display: flex;
    justify-content: space-around;
}

.profile__card__title {
    font-size: 18px;
    font-weight: 400;
    border-bottom: 1px solid #929292;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
}

.label-id {
    font-size: 17px;
    font-weight: 400;
}

.label-value {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
}
</style>