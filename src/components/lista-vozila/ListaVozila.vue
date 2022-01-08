<template>
	<table id="tablica">
		<thead>
			<tr>
				<th>ID</th>
				<th>Marka</th>
				<th>Naziv</th>
				<th>Detalji</th>
			</tr>
		</thead>

		<tbody>
			<tr v-for="v in vozilo" :key="v.id">
				<td>{{ v.id }}</td>
				<td>{{ v.marka }}</td>
				<td>{{ v.naziv }}</td>
				<td>
					<div class="actionButtons">
						<button @click="$router.push(`/detalji/${v.id}`)" class="button">
							Detalji
						</button>
						<button @click="$router.push(`/uredi/${v.id}`)" class="button">
							Uredi
						</button>
						<button @click="brisiVozilo(v.id)" class="button">Briši</button>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
export default {
	name: "ListaVozila",
	data() {
		return {
			vozilo: [],
		};
	},
	created() {
		this.popisVozila();
	},

	methods: {
		async popisVozila() {
			const url = process.env.VUE_APP_API + "vozila";
			const res = await fetch(url);
			const vozila = await res.json();
			this.vozilo = vozila;
		},
		async brisiVozilo(id) {
			const url = process.env.VUE_APP_API + "delete/" + id;
			const res = await fetch(url, {
				method: "delete",
			});
			this.$router.go();
			console.log(res);
		},
	},
};
</script>
<style>
#tablica {
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
}

#tablica td,
#tablica th {
	border: 1px solid #ddd;
	padding: 8px;
}

#tablica tr:nth-child(even) {
	background-color: #f2f2f2;
}

#tablica tr:hover {
	background-color: #ddd;
}

#tablica th {
	padding-top: 12px;
	padding-bottom: 12px;
	text-align: left;
	background-color: #04aa6d;
	color: white;
}

.actionButtons {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.button {
	background-color: #04aa6d;
	color: white;
	padding: 5px 10px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}
</style>
