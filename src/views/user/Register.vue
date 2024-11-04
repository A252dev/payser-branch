<script setup>
import '@/styles/log_reg.css'
</script>

<template>
    <section class="form__container">
        <div class="form__section">
            <h5 class="form__title">Register</h5>
            <h4 class="form__subtitle">Already registered? <RouterLink class="click__link" to="/login">Log in
                </RouterLink>
            </h4>

            <form class="user__form">
                <label for="email">Email</label>
                <input id="email" type="email" name="email" placeholder="cat@dog.com" autocomplete="off" />
                <label for="password">Password</label>
                <input id="password" type="password" name="password" />
                <label for="repeat_password">Repeat Password</label>
                <input id="repeat_password" type="password" name="repeat_password" />

                <div class="privacy__container">
                    <input id="privacy-agree" type="checkbox" />
                    <label class="privacy__label" for="privacy-agree">
                        I accept the <a class="click__link" href="./privacy_policy" target="_blank">Privacy Policy</a>
                        and <a class="click__link" href="./user_agreement" target="_blank">User
                            Agreement</a></label>
                </div>

                <button class="link blue_link" type="submit" style="margin: 0;">Register</button>
            </form>
        </div>
    </section>
</template>