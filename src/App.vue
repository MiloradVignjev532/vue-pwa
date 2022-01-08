<template>
	<div class="nav">
		<router-link to="/vozila" class="li">Popis vozila</router-link>
		<router-link to="/novo-vozilo" class="li">Novo vozilo</router-link>
	</div>
	<div><router-view></router-view></div>
</template>

<script>
export default {
	name: "App",
	components: {},
};
</script>
<style>
* {
	box-sizing: border-box;
	margin: 0;
}
.nav {
	width: 100%;
	height: 20px;
	background-color: #333;
	padding: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.nav .li {
	color: white;
	text-decoration: none;
	list-style-type: none;
	margin: 0;
	padding: 20px 20px;
	overflow: hidden;
}
</style>
