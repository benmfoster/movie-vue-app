<template>
	<div class="movies-edit">
		
		<h1>Edit Movie</h1>

		<ul>
		  <li v-for="error in errors">{{ error }}</li>
		</ul>

		<form v-on:submit.prevent="submit()">
		  <div class="form-row">
		    <div class="form-group col-md-6">
		      <label for="title">Title</label>
		      <input type="text" class="form-control" id="title" placeholder="" v-model="movie.title">
		    </div>
		    <div class="form-group col-md-6">
		      <label for="year">Prep Time</label>
		      <input type="number" class="form-control" id="year" placeholder="" v-model="movie.year">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="plot">Plot</label>
		    <input type="text" class="form-control" id="plot" placeholder="" v-model="movie.year">
		  </div>
		  <div class="form-group">
		    <label for="director">Director</label>
		    <input type="text" class="form-control" id="director" placeholder="" v-model="movie.director">
		  </div>
		  <button type="submit" class="btn btn-warning">Update</button>
		</form>

        <div v-if="movie === currentMovie">
	    		<button class="btn btn-danger" v-on:click="destroyMovie(movie)">Destroy</button>
	    	</div>


	</div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      movie: {}
    };
  },
  created: function() {
  	axios.get("/api/movies/" + this.$route.params.id).then(response => {
      this.movie = response.data;
      console.log(this.movie);
    });
  },
  methods: {
  	submit: function() {
  		// send a patch request to the backend to update this movie!
  		var params = {
  			title: this.movie.title,
  			year: this.movie.year,
  			director: this.movie.director,
  			plot: this.movie.plot
  		};
  		axios.patch("/api/movies/" + this.movie.id, params).then(response => {
  			console.log("Success!", response.data);
  			this.$router.push("/movies/" + this.movie.id);
  		}).catch(error => {
  			this.errors = error.response.data.errors;
  		});
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