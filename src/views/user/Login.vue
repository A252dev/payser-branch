<script setup>
import '@/styles/log_reg.css'
</script>

<template>
    <section class="form__container">
        <div class="form__section">
            <h5 class="form__title">Login</h5>
            <h4 class="form__subtitle">Not registered? <RouterLink class="click__link" to="/register">Sign up
                </RouterLink>
            </h4>

            <form class="user__form">
                <label for="email">Email</label>
                <input id="email" type="email" name="email" placeholder="cat@dog.com" autocomplete="off" />
                <label for="password">Password</label>
                <input id="password" type="password" name="password" />

                <button class="link blue_link" type="submit" style="margin: 22px 0;">Login</button>
            </form>
        </div>
    </section>
</template>