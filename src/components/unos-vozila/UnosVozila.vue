<template>
	<div class="forma">
		<h2>Novo vozilo</h2>
		<div>
			<label for="marka">Marka:</label>
			<br />
			<input type="text" id="marka" name="marka" v-model="marka" />
			<br />
			<label for="naziv">Naziv:</label>
			<br />
			<input type="text" id="naziv" name="naziv" v-model="naziv" />
			<br />
			<label for="god_pro">Godina proizvodnje:</label>
			<br />
			<input
				type="text"
				id="god_pro"
				name="god_pro"
				v-model="godina_proizvodnje"
			/>
			<br />
			<label for="snaga_motora">Snaga motora:</label>
			<br />
			<input
				type="text"
				id="snaga_motora"
				name="snaga_motora"
				v-model="snaga_motora"
			/>
			<br />
			<label for="prosj_pot">Prosječna potrošnja:</label>
			<br />
			<input
				type="text"
				id="prosj_pot"
				name="prosj_pot"
				v-model="prosjecna_potrosnja"
			/>
			<br />
			<label for="co2">CO2:</label>
			<br />
			<input type="text" id="co2" name="co2" v-model="co2" />
			<br />
			<label for="tip_mjenjaca">Tip mjenjača:</label>
			<br />
			<input
				type="text"
				id="tip_mjenjaca"
				name="tip_mjenjaca"
				v-model="tip_mjenjaca"
			/>
			<br />
			<label for="broj_vrata">Broj vrata:</label>
			<br />
			<input
				type="text"
				id="broj_vrata"
				name="broj_vrata"
				v-model="broj_vrata"
			/>
			<br />
			<label for="motor">Motor:</label>
			<br />
			<input type="text" id="motor" name="motor" v-model="motor" />
			<br />
			<button @click="handleSubmit" class="submitButton">Spremi</button>
		</div>
	</div>
</template>
<script>
export default {
	name: "UnosVozila",
	data() {
		return {
			marka: "",
			naziv: "",
			godina_proizvodnje: "",
			snaga_motora: "",
			prosjecna_potrosnja: "",
			co2: "",
			tip_mjenjaca: "",
			broj_vrata: "",
			motor: "",
		};
	},
	methods: {
		async handleSubmit() {
			const vozilo = {
				marka: this.marka,
				naziv: this.naziv,
				godina_proizvodnje: this.godina_proizvodnje,
				snaga_motora: this.snaga_motora,
				prosjecna_potrosnja: this.prosjecna_potrosnja,
				co2: this.co2,
				tip_mjenjaca: this.tip_mjenjaca,
				broj_vrata: this.broj_vrata,
				motor: this.motor,
			};
			const url = process.env.VUE_APP_API + "novo-vozilo";
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify(vozilo),
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log(res);
			this.$router.push("/vozila");
		},
	},
};
</script>
<style>
input[type="text"],
select {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}

.submitButton {
	width: 100%;
	background-color: #4caf50;
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

.submitButton:hover {
	background-color: #45a049;
}

.forma {
	padding: 10px 20px;
}
</style>
