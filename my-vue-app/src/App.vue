<template>
  <div class="container">
    <h1 class="text-3xl font-bold text-center mb-8">Movie Search</h1>

    <!-- Dropdown Genre -->
    <div class="mt-4">
      <select v-model="selectedGenre" class="py-2 px-4 border rounded">
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Romance">Romance</option>
        <option value="Thriller">Thriller</option>
      </select>
    </div>

    <!-- Dropdown Sort -->
    <div class="mt-4">
      <select v-model="sortOption" @change="sortMovies" class="py-2 px-4 border rounded">
        <option value="year">Sort by Year</option>
        <option value="rating">Sort by Rating</option>
      </select>
    </div>

    <!-- Input pencarian film -->
    <div class="mt-4 flex items-center">
      <input 
        v-model="query" 
        type="text" 
        placeholder="Search for a movie..." 
        class="input py-2 px-4 border rounded w-full"
      />
      <button @click="searchMovies" class="button ml-4 py-2 px-4 rounded">Search</button>
    </div>

    <!-- Template untuk film -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div class="movie-card bg-white shadow-lg rounded-lg overflow-hidden" v-for="movie in movies" :key="movie.imdbID">
        <img :src="movie.Poster" alt="Movie Poster" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-semibold">{{ movie.Title }}</h3>
          <button @click="addFavorite(movie)" class="bg-blue-500 text-white py-1 px-4 rounded mt-2 w-full">
            Add to Favorite
          </button>
          <button @click="selectMovie(movie)" class="bg-green-500 text-white py-1 px-4 rounded mt-2 w-full">
            View Details
          </button>
        </div>
      </div>
    </div>

    <!-- Error handling -->
    <p v-if="error" class="error text-red-500 mt-4">{{ error }}</p>

    <!-- Modal untuk detail film -->
    <div v-if="selectedMovie" class="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="modal-content bg-white p-8 rounded-lg max-w-lg w-full">
        <span @click="selectedMovie = null" class="close absolute top-2 right-2 text-3xl cursor-pointer">&times;</span>
        <h2 class="text-2xl font-bold">{{ selectedMovie.Title }}</h2>
        <img 
          :src="selectedMovie.Poster !== 'N/A' ? selectedMovie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'" 
          alt="Poster" 
          class="w-full h-80 object-cover my-4 rounded"
        />
        <p><strong>Year:</strong> {{ selectedMovie.Year }}</p>
        <p><strong>Rating:</strong> {{ selectedMovie.imdbRating }}</p>
        <p><strong>Plot:</strong> {{ selectedMovie.Plot }}</p>
        <a :href="'https://www.imdb.com/title/' + selectedMovie.imdbID" target="_blank" class="bg-blue-500 text-white py-2 px-6 rounded mt-4 inline-block">View on IMDb</a>
        <button @click="selectedMovie = null" class="bg-red-500 text-white py-2 px-6 rounded mt-4 ml-2">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      movies: [],
      error: null,
      selectedGenre: '',
      sortOption: 'year',
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
      selectedMovie: null,
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
        let url = `http://localhost:5000/api/movies?query=${this.query}`;
        if (this.selectedGenre) {
          url += `&genre=${this.selectedGenre}`;
        }

        const response = await fetch(url);
        const data = await response.json();

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
    },
    sortMovies() {
      if (this.sortOption === 'year') {
        this.movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
      } else if (this.sortOption === 'rating') {
        this.movies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
      }
    },
    addFavorite(movie) {
      if (!this.favorites.some(fav => fav.imdbID === movie.imdbID)) {
        this.favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      }
    },
    selectMovie(movie) {
      this.selectedMovie = movie;
    }
  }
};
</script>

<style scoped>
/* Styling untuk kontainer utama */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: calc(100% - 120px);
}

.button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.button:hover {
  background-color: #45a049;
}

.movie-card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.movie-card img {
  border-radius: 8px;
}

.movie-card button {
  transition: background-color 0.3s ease;
}

.movie-card button:hover {
  opacity: 0.9;
}

.error {
  font-size: 14px;
  margin-top: 20px;
}

/* Modal Styling */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color: #333;
  cursor: pointer;
}

.close:hover {
  color: #ff0000;
}

.bg-red-500:hover {
  background-color: #e11d48;
}

.bg-blue-500:hover {
  background-color: #2563eb;
}

.bg-green-500:hover {
  background-color: #16a34a;
}
</style>
