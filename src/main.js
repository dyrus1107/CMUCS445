import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

library.add(fas);
library.add(far);

import "./assets/index.css";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("EasyDataTable", Vue3EasyDataTable)
  .use(router)
  .mount("#app");
