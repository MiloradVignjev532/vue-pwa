<template>
	<div id="appnav" class="appnav">
		<router-link to="/vozila" class="nav-item" active-class="active" exact
			>Popis vozila</router-link
		>
		<router-link to="/novo-vozilo" class="nav-item" active-class="active" exact
			>Novo vozilo</router-link
		>
	</div>
</template>
<script>
export default {
	name: 'AppNav',
	data() {
		return {
			user: null,
		};
	},
	// methods: {},
};
</script>
