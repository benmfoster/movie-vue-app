<template>
  <div id="app">

    <header id="fh5co-header" role="banner">
			<div class="container text-center">
				<div id="fh5co-logo">
					<router-link to="/"><h1>Movie App</h1></router-link>
				</div>
				<nav>
					<ul>
						<li><router-link to="/">Home</router-link></li>
						<li><router-link to="/movies/new">New Movie</router-link></li>
						<li><router-link to="/actors">Actors</router-link></li>
						<li v-if="!isLoggedIn()"><router-link to="/signup">Signup</router-link></li>
						<li v-if="!isLoggedIn()"><router-link to="/login">Login</router-link></li>
						<li v-if="isLoggedIn()"><router-link to="/logout">Logout</router-link></li>
						
					</ul>
				</nav>
			</div>
		</header>

    
    <router-view/>

    <footer id="fh5co-footer" role="contentinfo">
			<div class="container-fluid">
				<div class="footer-content">
					<div class="copyright"><small>&copy; 2016 Present. All Rights Reserved. <br>Designed by <a href="http://freehtml5.co/">FreeHTML5.co</a> Images: <a href="http://graphicburger.com/">GraphicBurger</a></small></div>
					<div class="social">
						<a href="#"><i class="icon-facebook3"></i></a>
						<a href="#"><i class="icon-instagram2"></i></a>
						<a href="#"><i class="icon-linkedin2"></i></a>
					</div>
				</div>
			</div>
		</footer>
  </div>
</template>

<style>
</style>

<script>
export default {
	methods: {
  isLoggedIn: function() {
    return localStorage.getItem('jwt');
  }
}
}
</script>

