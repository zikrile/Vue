// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware CORS
app.use(cors());

// API Key OMDb (gunakan file .env untuk menyimpan kunci API dengan aman)
const API_KEY = process.env.OMDB_API_KEY;
const OMDB_URL = 'http://www.omdbapi.com/';

// Endpoint untuk mencari film berdasarkan nama
app.get('/api/movies', async (req, res) => {
    const query = req.query.query;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter "query" is required' });
    }

    try {
        const response = await axios.get(OMDB_URL, {
            params: {
                s: query,
                apikey: API_KEY
            }
        });

        // Jika film tidak ditemukan
        if (response.data.Response === 'False') {
            return res.status(404).json({ error: 'No movies found' });
        }

        // Kirimkan data film ke frontend
        res.json(response.data.Search);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
