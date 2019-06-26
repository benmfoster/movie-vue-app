<template>

<div class="container-fluid pt70 pb70">
			<div id="fh5co-projects-feed" class="fh5co-projects-feed clearfix masonry">
				<div class="fh5co-project masonry-brick" v-for="movie in movies">
					<router-link :to="'/movies/' + movie.id">
						<img :src="movie.image_url" alt="" width="100%">
						<h2>{{ movie.title }}</h2>
						<small>{{ movie.year }}</small>
					</router-link>
				</div>
			</div>
			<!--END .fh5co-projects-feed-->
		</div>
		<!-- END .container-fluid -->
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      movies: [],
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
  }
};
</script>