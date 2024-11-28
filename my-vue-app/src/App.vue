<template>
  <div class="container">
    <h1>Movie Search</h1>
    
    <!-- Input pencarian film -->
    <input 
      v-model="query" 
      type="text" 
      placeholder="Search for a movie..." 
      class="input" 
    />
    <button @click="searchMovies" class="button">Search</button>

    <!-- Tampilkan film -->
    <div v-if="movies.length > 0" class="movies">
      <div v-for="movie in movies" :key="movie.imdbID" class="movie">
        <img :src="movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'" alt="Poster" />
        <h3>{{ movie.Title }}</h3>
        <p>{{ movie.Year }}</p>
        <a :href="'https://www.imdb.com/title/' + movie.imdbID" target="_blank">View on IMDb</a>
      </div>
    </div>

    <!-- Error handling -->
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      movies: [],
      error: null,
    };
  },
  methods: {
    async searchMovies() {
      if (!this.query) {
        this.error = 'Please enter a movie title';
        return;
      }

      this.error = null;

      try {
        // Kirim permintaan ke backend Express.js
        const response = await fetch(`http://localhost:5000/api/movies?query=${this.query}`);
        const data = await response.json();

        // Cek apakah ada error
        if (data.error) {
          this.error = data.error;
          this.movies = [];
        } else {
          this.movies = data;
        }
      } catch (err) {
        this.error = 'Something went wrong. Please try again.';
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
/* Styling dengan Tailwind */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button {
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

.button:hover {
  background-color: #45a049;
}

.movies {
  margin-top: 20px;
}

.movie {
  display: inline-block;
  width: 200px;
  text-align: center;
  margin-right: 20px;
}

.movie img {
  width: 100%;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 20px;
}
</style>
