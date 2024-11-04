<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/assets/img/logo/main/payser_main_v1.vue'
import Triangle from '@/assets/img/icons/triangle.vue'
import app_store from './assets/img/icons/app_store.vue'
import google_play from './assets/img/icons/google_play.vue'

import pci from '@/assets/img/security/pci.vue'
import visa from '@/assets/img/security/visa.vue'
import mir from '@/assets/img/security/mir.vue'
import master_card from '@/assets/img/security/ms.vue'
</script>

<template>
  <header>
    <div class="header__container">
      <section class="header__side">
        <RouterLink to="/">
          <Logo class="main__logo" />
        </RouterLink>
      </section>
      <section class="header__side">
        <nav class="links__container">
          <RouterLink class="link white_link" to="/register">Create wallet</RouterLink>
          <RouterLink class="link blue_link" to="/login">Login</RouterLink>
        </nav>
      </section>
    </div>
  </header>

  <body>
    <RouterView />
  </body>

  <footer>
    <Triangle class="last__triangle" />
    <div class="footer">
      <div class="footer__container">
        <div class="footer__block">
          <h3 class="footer__title">Information</h3>
          <a class="footer__link" href="#">About</a>
          <a class="footer__link" href="#">Our capabilities</a>
          <a class="footer__link" href="#">Offers</a>
        </div>
        <div class="footer__block">
          <h3 class="footer__title">For Clients</h3>
          <RouterLink class="footer__link" to="/user_agreement">User Agreement</RouterLink>
          <RouterLink class="footer__link" to='/privacy_policy'>Privacy Policy</RouterLink>
          <RouterLink class="footer__link" to="/data_protection">Data Protection</RouterLink>
        </div>
        <div class="footer__block">
          <h3 class="footer__title">Developers</h3>
          <a class="footer__link" href="#">API (P2P)</a>
          <a class="footer__link" href="#">API (B2B)</a>
        </div>
      </div>
      <div class="subfooter">
        <div class="apps__container">
          <a class="app__link link" href="#">
            <app_store /><span class="link__text">App Store</span>
          </a>
          <a class="app__link link" href="#">
            <google_play /><span class="link__text">Google Play</span>
          </a>
        </div>
        <div class="footer__bottom">
          <pci />
          <visa />
          <mir />
          <master_card />
        </div>
        <p class="copyright">&copy; 2020 Payser.pro, Inc.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
header {
  width: 100%;
  padding: 30px;
  background-color: #000f9c;
}

.header__container {
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main__logo {
  width: 225px;
  cursor: pointer;
}

.main__logo:hover {
  transform: translateY(-2px);
}

.links__container {
  /* border: 1px solid green; */
  display: flex;
}

.last__triangle {
  transform: rotate(180deg);
}

footer {
  background-color: #222;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
}

.footer__container {
  display: flex;
  flex-direction: row;
  /* border: 1px solid red; */
  padding: 40px 0;
  justify-content: space-around;
}

.footer__block {
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  text-align: center;
}

.footer__title {
  color: #fff;
  margin-bottom: 10px;
}

.footer__link {
  color: #fff;
  margin-top: 5px;
  text-decoration: none;
}

.footer__link:hover {
  text-decoration: underline;
}

.subfooter {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.apps__container {
  display: flex;
  justify-content: center;
}

.app__link {
  text-decoration: none;
  margin: 0 15px;
  padding: 10px 34px;
  display: inline-flex;
  align-items: center;
  border-radius: 25px;
  background-color: #fff;
}

.link__text {
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-left: 5px;
  width: 100%;
  /* border: 1px solid red; */
}

.footer__bottom {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.copyright {
  text-align: center;
  margin-top: 15px;
  color: rgb(180, 180, 180);
  font-size: 12px;
}
</style>