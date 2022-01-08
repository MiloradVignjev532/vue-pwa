import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import ListaVozila from "./components/lista-vozila/ListaVozila";
import App from "./App.vue";
import "./registerServiceWorker";
import PodaciOVozilu from "./components/podaci-o-vozilu/PodaciOVozilu";
import UnosVozila from "./components/unos-vozila/UnosVozila";
import UrediVozilo from "./components/uredi-vozilo/UrediVozilo";

const routes = [
	{
		path: "/vozila",
		name: "ListaVozila",
		component: ListaVozila,
	},
	{
		path: "/detalji/:id",
		name: "PodaciOVozilu",
		component: PodaciOVozilu,
	},
	{
		path: "/novo-vozilo",
		name: "NovoVozilo",
		component: UnosVozila,
	},
	{
		path: "/uredi/:id",
		name: "UrediVozilo",
		component: UrediVozilo,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount("#app");
