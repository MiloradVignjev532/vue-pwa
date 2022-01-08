<template>
	<table id="tablica">
		<tr>
			<td>Marka:</td>
			<td>{{ detalji[0]?.marka }}</td>
		</tr>
		<tr>
			<td>Naziv:</td>
			<td>{{ detalji[0]?.naziv }}</td>
		</tr>
		<tr>
			<td>Godina proizvodnje:</td>
			<td>{{ detalji[0]?.godina_proizvodnje }}</td>
		</tr>
		<tr>
			<td>Snaga motora:</td>
			<td>{{ detalji[0]?.snaga_motora }}</td>
		</tr>
		<tr>
			<td>Prosjecna potrosnja:</td>
			<td>{{ detalji[0]?.prosjecna_potrosnja }}</td>
		</tr>
		<tr>
			<td>CO2:</td>
			<td>{{ detalji[0]?.co2 }}</td>
		</tr>
		<tr>
			<td>Tip mjenjaca:</td>
			<td>{{ detalji[0]?.tip_mjenjaca }}</td>
		</tr>
		<tr>
			<td>Broj vrata:</td>
			<td>{{ detalji[0]?.broj_vrata }}</td>
		</tr>
		<tr>
			<td>Motor:</td>
			<td>{{ detalji[0]?.motor }}</td>
		</tr>
	</table>
</template>
<script>
import { useRoute } from "vue-router";

export default {
	name: "PodaciOVozilu",
	data() {
		return {
			detalji: {},
		};
	},
	created() {
		const route = useRoute();
		const id = route.params.id;
		this.podaciOVozilu(id);
	},

	methods: {
		async podaciOVozilu(id) {
			const url = process.env.VUE_APP_API + "detalji/" + id;
			const res = await fetch(url);
			const detalji = await res.json();
			this.detalji = detalji;
		},
	},
};
</script>
