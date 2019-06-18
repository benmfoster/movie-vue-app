<template>
  <div class="movies-show">

    <h2>{{ movie.title }}</h2>
    <p>Year: {{ movie.year }}</p>
    <p>Plot: {{ movie.plot }}</p>
    <p>Director: {{ movie.director }}</p>
    <p>Genres: {{ movie.genres }}</p>

    <button class="btn btn-warning">
      <router-link v-bind:to="'/movies/' + movie.id + '/edit'">Edit</router-link>
    </button>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      movie: {}
    };
  },
  created: function() {
    axios.get("/api/movies/" + this.$route.params.id).then(response => {
      this.movie = response.data;
      console.log(this.movie);
    });
  },
  methods: {}
};
</script>