<template>
  <div class="movies-show">
    <div class="page-content">
      
        <h2>{{ movie.title }}</h2>
        <img v-bind:src="movie.image_url" width="50%"/>
        <p>Year: {{ movie.year }}</p>
        <p>Plot: {{ movie.plot }}</p>
        <p>Director: {{ movie.director }}</p>
        <p>Genres: {{ movie.genres }}</p>

        <button class="btn btn-warning">
          <router-link v-bind:to="'/movies/' + movie.id + '/edit'">Edit</router-link>
        </button>
        
      
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      movie: {},
      errors: []
    };
  },
  created: function() {
    axios.get('/api/movies/' + this.$route.params.id).then(response => {
      this.movie = response.data;
    });
  },
  methods: {}
};
</script>