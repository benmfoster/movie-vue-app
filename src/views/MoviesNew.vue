<template>
  <div class="movies-new">

    <h1>New Movie</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Movie title" v-model="newMovieTitle">
        </div>
        <div class="form-group col-md-6">
          <label for="year">Year</label>
          <input type="number" class="form-control" id="year" placeholder="2019" v-model="newMovieYear">
        </div>
      </div>
      <div class="form-group">
        <label for="plot">Plot</label>
        <input type="text" class="form-control" id="plot" placeholder="Movie plot" v-model="newMoviePlot">
      </div>
      <div class="form-group">
        <label for="director">Director</label>
        <input type="text" class="form-control" id="director" placeholder="Movie director" v-model="newMovieDirector">
      </div>
      <button type="submit" class="btn btn-success">Create</button>
    </form>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newMovieTitle: "",
      newMovieYear: "",
      newMoviePlot: "",
      newMovieDirector: "",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
  	submit: function() {
  		// make a post request via axios to create a new movie in our database!
  		var params = {
  			title: this.newMovieTitle,
  			year: this.newMoviePlot,
  			director: this.newMovieDirector,
  			plot: this.newMoviePlot  			
  		};
  		axios.post("/api/movies", params).then(response => {
  			this.$router.push("/");
  		}).catch(error => {
        this.errors = error.response.data.errors;
      });
  	}
  }
};
</script>