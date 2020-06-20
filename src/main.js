import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/assets/styles/main.css";

Vue.config.productionTip = false;

library.add(faSpinner);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
