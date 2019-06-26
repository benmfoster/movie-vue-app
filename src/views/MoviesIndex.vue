<template>

<div class="container-fluid pt70 pb70">
			<div id="fh5co-projects-feed" class="fh5co-projects-feed clearfix masonry">
				Search by title: <input v-model="titleFilter" list="titles">
				<datalist id="titles">
	<option v-for="movie in movies">
		{{ movie.title }}
		</option>
</datalist>
				<div>
	<button>Sort Alphabetically</button>
</div>
				<div class="fh5co-project masonry-brick" v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')">
					<router-link :to="'/movies/' + movie.id">
						<img :src="movie.image_url" alt="" width="100%">
						<h2>{{ movie.title }}</h2>
						<small>{{ movie.year }}</small>
					</router-link>
				</div>
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
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      movies: [],
	  errors: [],
	  titleFilter: ''
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