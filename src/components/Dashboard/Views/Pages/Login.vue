<template>
  <div class="login-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page section-image">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="header-body text-center" style="margin-bottom: 15px;">
                  <div class="row justify-content-center">
                    <div class="text-center">
                      <h1 class="text-white" style="font-size: 1.2rem;">Log in to Vue Paper Dashboard Laravel PRO Live Preview</h1>
                      <p class="text-lead text-white">Log in to see how you can save more than 300 hours of work with an
                      integrated Laravel API backend and ready-made CRUDs for managing:
                      #users, #roles, #items, #categories, #tags.</p>
                    </div>

                    <div class="text-white">
                      <h3 class="text-white"><strong>You can log in with 3 user types:</strong></h3>
                      <div>Username <b>admin@jsonapi.com</b> Password <b>secret</b></div>
                      <div>Username <b>creator@jsonapi.com</b> Password <b>secret</b></div>
                      <div>Username <b>member@jsonapi.com</b> Password <b>secret</b></div>
                    </div>
                  </div>
            </div>
            <div class="col-lg-4 col-md-6 ml-auto mr-auto">
              <form @submit.prevent="login">
                <card type="login">
                  <h3 slot="header" class="header text-center">Login</h3>

                  <fg-input v-model="email" addon-left-icon="nc-icon nc-single-02" placeholder="Email"/>
                  <validation-error :errors="apiValidationErrors.email" />
                  <fg-input v-model="password" addon-left-icon="nc-icon nc-key-25" placeholder="Password" type="password"/>
                  <validation-error :errors="apiValidationErrors.password" />
                  <div slot="footer">
                    <p-button native-type="submit" slot="footer" type="warning" round block class="mb-3">Get started</p-button>

                    <div class="pull-left">
                      <h6><a href="/password/reset" class="link footer-link">Forgot Password?</a></h6>
                    </div>
                  </div>
                </card>
              </form>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
        <div class="full-page-background" style="background-image: url(/static/img/background/background-2.jpg) "></div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, Button } from 'src/components/UIComponents';
  import AppNavbar from './Layout/AppNavbar'
  import AppFooter from './Layout/AppFooter'
  import formMixin from "@/mixins/form-mixin";
  import ValidationError from "src/components/UIComponents/ValidationError.vue";

export default {
  mixins: [formMixin],
  components: {
    Card,
    AppNavbar,
    AppFooter,
    [Button.name]: Button,
    ValidationError
  },
  data() {
    return {
      email: "admin@jsonapi.com",
      password: "secret",
    }
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle('nav-open')
    },
    closeMenu() {
      document.body.classList.remove('nav-open')
      document.body.classList.remove('off-canvas-sidebar')
    },
    async login() {
      const user = {
        data: {
          type: "token",
          attributes: {
            email: this.email,
            password: this.password
          }
        }
      }

      const requestOptions = {
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        }
      }

      try {
        await this.$store.dispatch("login", {user, requestOptions})
      } catch (e) {
        this.$notify({
          icon: 'nc-icon nc-bell-55',
          message:'Invalid credentials!',
          type: 'danger',
        });
        this.setApiValidation(e.response.data.errors)
      }
    }
  },
  beforeDestroy() {
    this.closeMenu()
  }
}
</script>
<style>
</style>
