<template>

<div class="container-fluid pt70 pb70">
			<div id="fh5co-projects-feed" class="fh5co-projects-feed clearfix masonry">
				<div class="fh5co-project masonry-brick" v-for="movie in movies">
					<router-link v-bind:to="'/movies/' + movie.id">
						<img v-bind:src="movie.image_url" alt="">
						<h2>{{ movie.title }}</h2>
						<small>{{ movie.year }}</small>
					</router-link>
				</div>
			</div> -->
			<!--END .fh5co-projects-feed-->
		</div>
		<!-- END .container-fluid -->

  <!-- <div class="home">

    <h1>{{ message }}</h1>

    <div v-for="movie in movies">
    	<h3>Title: {{ movie.title }}</h3>
      <router-link v-bind:to="'/movies/' + movie.id">
    	  <button class="btn btn-success" v-on:click="showMovie(movie)">More Info</button>
      </router-link>
    	<div>
    		
    	</div>
    </div>

  </div> -->
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Movies",
      movies: [],
      currentMovie: {},
      errors: []
    };
  },
  created: function() {
  	axios.get("/api/movies").then(response => {
  		this.movies = response.data;
      console.log(this.movies);
  	});
  },
  methods: {
      showMovie: function(movie) {
  		if (this.currentMovie === movie) {
  			this.currentMovie = null;
  		} else {
				this.currentMovie = movie;
  		}
      },
      destroyMovie: function(movie) {
  		// send an axios delete request to the backend to remove movie from database
  		axios.delete("/api/movies/" + movie.id).then(response => {
  			console.log("Success!", response.data);
  			// find index of movie in movies array
  			var index = this.movies.indexOf(movie);
  			// splice movies array at index
  			this.movies.splice(index, 1);
  		});
  	}
  }
};
</script>