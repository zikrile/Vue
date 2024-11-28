# Aplikasi Pencarian Film

Aplikasi pencarian film sederhana yang dibangun dengan **Vue.js** dan **Tailwind CSS**, menggunakan **Express.js** sebagai backend untuk mengambil data film dari [OMDb API](http://www.omdbapi.com/).

Aplikasi ini memungkinkan pengguna untuk mencari film, melihat detail film, dan menambahkannya ke dalam daftar favorit. Antarmuka pengguna (UI) dirancang dengan **Tailwind CSS** untuk tampilan responsif dan desain yang modern.

## Fitur

- Mencari film berdasarkan judul.
- Memfilter film berdasarkan genre.
- Menyortir film berdasarkan tahun atau rating.
- Melihat detail film (Tahun, Rating, Plot).
- Menambahkan film ke dalam daftar favorit.
- Melihat film favorit dari penyimpanan lokal.
- Desain responsif menggunakan Tailwind CSS.

## Demo

Anda dapat melihat demo langsung dari aplikasi ini dengan mengunjungi situs yang telah dideploy di Netlify (masukkan URL aplikasi yang sudah dideploy di sini).

## Teknologi yang Digunakan

- **Frontend**: Vue.js, Vite, Tailwind CSS
- **Backend**: Express.js (opsional untuk pemanggilan API)
- **API**: OMDb API (http://www.omdbapi.com/)

## Instalasi

### 1. Clone repository

Clone repository ini ke mesin lokal Anda:

```bash
git clone https://github.com/username/movie-search-app.git
cd movie-search-app

2. Install dependencies
Pastikan Anda sudah menginstal Node.js dan npm (Node Package Manager). Kemudian, instal semua dependencies proyek dengan menjalankan perintah berikut:
**npm install**

3. Konfigurasi Variabel Lingkungan
Buat file .env di direktori root proyek dan tambahkan API key OMDb Anda:

**VITE_OMDB_API_KEY=your_omdb_api_key_here**
Anda bisa mendapatkan API key dengan mendaftar di OMDb API.

4. Jalankan server pengembangan
Mulai server pengembangan dengan perintah berikut:

**npm run dev**
Ini akan menjalankan aplikasi secara lokal. Buka browser Anda dan pergi ke http://localhost:3000 untuk melihat aplikasi.

5. Build untuk Produksi
Jika Anda sudah siap untuk mendeploy, lakukan build proyek untuk produksi:

**npm run build**
Perintah ini akan membuat folder dist/ yang berisi file-file siap produksi yang sudah dioptimalkan.

6. Deploy ke Netlify (Opsional)
  1.Kunjungi Netlify dan buat akun jika Anda belum memilikinya.
  2.Hubungkan repository GitHub Anda ke Netlify.
  3.Konfigurasi pengaturan build:
    - Build Command: npm run build
    - Publish Directory: dist/
Deploy aplikasi dan Netlify akan menghasilkan URL untuk situs Anda.
Fitur & Cara Kerja
1. Pencarian Film
Pengguna dapat memasukkan judul film di kolom pencarian, dan aplikasi akan mengirim permintaan ke server backend untuk mengambil data film dari OMDb API.

2. Filter Berdasarkan Genre
Terdapat dropdown yang memungkinkan pengguna untuk memfilter film berdasarkan genre, seperti Action, Comedy, Drama, dll.

3. Menyortir Film
Aplikasi ini menyediakan pilihan untuk menyortir film berdasarkan tahun atau rating, sehingga memudahkan pengguna untuk menemukan film terbaik atau terbaru.

4. Modal Detail Film
Dengan mengklik tombol "View Details" di kartu film, pengguna akan melihat modal dengan informasi lebih lanjut mengenai film tersebut, seperti plot, rating, dan tahun rilis.

5. Daftar Film Favorit
Pengguna dapat menambahkan film ke daftar favorit, dan film tersebut disimpan di localStorage sehingga tetap tersimpan meski halaman di-refresh.

6. Penanganan Error
Jika tidak ada film yang ditemukan atau terjadi kesalahan dalam pencarian, pesan error akan ditampilkan.


Tentu! Berikut adalah README.md yang telah diterjemahkan ke dalam bahasa Indonesia dan mencakup seluruh informasi yang diperlukan untuk proyek Movie Search App Anda.

markdown
Copy code
# Aplikasi Pencarian Film

Aplikasi pencarian film sederhana yang dibangun dengan **Vue.js** dan **Tailwind CSS**, menggunakan **Express.js** sebagai backend untuk mengambil data film dari [OMDb API](http://www.omdbapi.com/).

Aplikasi ini memungkinkan pengguna untuk mencari film, melihat detail film, dan menambahkannya ke dalam daftar favorit. Antarmuka pengguna (UI) dirancang dengan **Tailwind CSS** untuk tampilan responsif dan desain yang modern.

## Fitur

- Mencari film berdasarkan judul.
- Memfilter film berdasarkan genre.
- Menyortir film berdasarkan tahun atau rating.
- Melihat detail film (Tahun, Rating, Plot).
- Menambahkan film ke dalam daftar favorit.
- Melihat film favorit dari penyimpanan lokal.
- Desain responsif menggunakan Tailwind CSS.

## Demo

Anda dapat melihat demo langsung dari aplikasi ini dengan mengunjungi situs yang telah dideploy di Netlify (masukkan URL aplikasi yang sudah dideploy di sini).

## Teknologi yang Digunakan

- **Frontend**: Vue.js, Vite, Tailwind CSS
- **Backend**: Express.js (opsional untuk pemanggilan API)
- **API**: OMDb API (http://www.omdbapi.com/)

## Instalasi

### 1. Clone repository

Clone repository ini ke mesin lokal Anda:

```bash
git clone https://github.com/username/movie-search-app.git
cd movie-search-app
2. Install dependencies
Pastikan Anda sudah menginstal Node.js dan npm (Node Package Manager). Kemudian, instal semua dependencies proyek dengan menjalankan perintah berikut:

bash
Copy code
npm install
3. Konfigurasi Variabel Lingkungan
Buat file .env di direktori root proyek dan tambahkan API key OMDb Anda:

makefile
Copy code
VITE_OMDB_API_KEY=your_omdb_api_key_here
Anda bisa mendapatkan API key dengan mendaftar di OMDb API.

4. Jalankan server pengembangan
Mulai server pengembangan dengan perintah berikut:

bash
Copy code
npm run dev
Ini akan menjalankan aplikasi secara lokal. Buka browser Anda dan pergi ke http://localhost:3000 untuk melihat aplikasi.

5. Build untuk Produksi
Jika Anda sudah siap untuk mendeploy, lakukan build proyek untuk produksi:

bash
Copy code
npm run build
Perintah ini akan membuat folder dist/ yang berisi file-file siap produksi yang sudah dioptimalkan.

6. Deploy ke Netlify (Opsional)
Kunjungi Netlify dan buat akun jika Anda belum memilikinya.
Hubungkan repository GitHub Anda ke Netlify.
Konfigurasi pengaturan build:
Build Command: npm run build
Publish Directory: dist/
Deploy aplikasi dan Netlify akan menghasilkan URL untuk situs Anda.
Fitur & Cara Kerja
1. Pencarian Film
Pengguna dapat memasukkan judul film di kolom pencarian, dan aplikasi akan mengirim permintaan ke server backend untuk mengambil data film dari OMDb API.

2. Filter Berdasarkan Genre
Terdapat dropdown yang memungkinkan pengguna untuk memfilter film berdasarkan genre, seperti Action, Comedy, Drama, dll.

3. Menyortir Film
Aplikasi ini menyediakan pilihan untuk menyortir film berdasarkan tahun atau rating, sehingga memudahkan pengguna untuk menemukan film terbaik atau terbaru.

4. Modal Detail Film
Dengan mengklik tombol "View Details" di kartu film, pengguna akan melihat modal dengan informasi lebih lanjut mengenai film tersebut, seperti plot, rating, dan tahun rilis.

5. Daftar Film Favorit
Pengguna dapat menambahkan film ke daftar favorit, dan film tersebut disimpan di localStorage sehingga tetap tersimpan meski halaman di-refresh.

6. Penanganan Error
Jika tidak ada film yang ditemukan atau terjadi kesalahan dalam pencarian, pesan error akan ditampilkan.

Struktur Folder
movie-search-app/
│
├── src/                  # Semua file sumber
│   ├── assets/           # Gambar dan aset
│   ├── components/       # Komponen Vue (MovieCard.vue, MovieDetailModal.vue)
│   ├── views/            # Tampilan Vue utama
│   ├── App.vue           # File utama Vue
│   ├── main.js           # Titik masuk utama
│   └── style.css         # Gaya global (Tailwind)
│
├── public/               # Aset publik (favicon, index.html)
├── .env                  # Variabel lingkungan (API key)
├── package.json          # Dependencies dan script proyek
├── vite.config.js        # Konfigurasi Vite
└── README.md             # Dokumentasi proyek

Tentu! Berikut adalah README.md yang telah diterjemahkan ke dalam bahasa Indonesia dan mencakup seluruh informasi yang diperlukan untuk proyek Movie Search App Anda.

markdown
Copy code
# Aplikasi Pencarian Film

Aplikasi pencarian film sederhana yang dibangun dengan **Vue.js** dan **Tailwind CSS**, menggunakan **Express.js** sebagai backend untuk mengambil data film dari [OMDb API](http://www.omdbapi.com/).

Aplikasi ini memungkinkan pengguna untuk mencari film, melihat detail film, dan menambahkannya ke dalam daftar favorit. Antarmuka pengguna (UI) dirancang dengan **Tailwind CSS** untuk tampilan responsif dan desain yang modern.

## Fitur

- Mencari film berdasarkan judul.
- Memfilter film berdasarkan genre.
- Menyortir film berdasarkan tahun atau rating.
- Melihat detail film (Tahun, Rating, Plot).
- Menambahkan film ke dalam daftar favorit.
- Melihat film favorit dari penyimpanan lokal.
- Desain responsif menggunakan Tailwind CSS.

## Demo

Anda dapat melihat demo langsung dari aplikasi ini dengan mengunjungi situs yang telah dideploy di Netlify (masukkan URL aplikasi yang sudah dideploy di sini).

## Teknologi yang Digunakan

- **Frontend**: Vue.js, Vite, Tailwind CSS
- **Backend**: Express.js (opsional untuk pemanggilan API)
- **API**: OMDb API (http://www.omdbapi.com/)

## Instalasi

### 1. Clone repository

Clone repository ini ke mesin lokal Anda:

```bash
git clone https://github.com/username/movie-search-app.git
cd movie-search-app
2. Install dependencies
Pastikan Anda sudah menginstal Node.js dan npm (Node Package Manager). Kemudian, instal semua dependencies proyek dengan menjalankan perintah berikut:

bash
Copy code
npm install
3. Konfigurasi Variabel Lingkungan
Buat file .env di direktori root proyek dan tambahkan API key OMDb Anda:

makefile
Copy code
VITE_OMDB_API_KEY=your_omdb_api_key_here
Anda bisa mendapatkan API key dengan mendaftar di OMDb API.

4. Jalankan server pengembangan
Mulai server pengembangan dengan perintah berikut:

bash
Copy code
npm run dev
Ini akan menjalankan aplikasi secara lokal. Buka browser Anda dan pergi ke http://localhost:3000 untuk melihat aplikasi.

5. Build untuk Produksi
Jika Anda sudah siap untuk mendeploy, lakukan build proyek untuk produksi:

bash
Copy code
npm run build
Perintah ini akan membuat folder dist/ yang berisi file-file siap produksi yang sudah dioptimalkan.

6. Deploy ke Netlify (Opsional)
Kunjungi Netlify dan buat akun jika Anda belum memilikinya.
Hubungkan repository GitHub Anda ke Netlify.
Konfigurasi pengaturan build:
Build Command: npm run build
Publish Directory: dist/
Deploy aplikasi dan Netlify akan menghasilkan URL untuk situs Anda.
Fitur & Cara Kerja
1. Pencarian Film
Pengguna dapat memasukkan judul film di kolom pencarian, dan aplikasi akan mengirim permintaan ke server backend untuk mengambil data film dari OMDb API.

2. Filter Berdasarkan Genre
Terdapat dropdown yang memungkinkan pengguna untuk memfilter film berdasarkan genre, seperti Action, Comedy, Drama, dll.

3. Menyortir Film
Aplikasi ini menyediakan pilihan untuk menyortir film berdasarkan tahun atau rating, sehingga memudahkan pengguna untuk menemukan film terbaik atau terbaru.

4. Modal Detail Film
Dengan mengklik tombol "View Details" di kartu film, pengguna akan melihat modal dengan informasi lebih lanjut mengenai film tersebut, seperti plot, rating, dan tahun rilis.

5. Daftar Film Favorit
Pengguna dapat menambahkan film ke daftar favorit, dan film tersebut disimpan di localStorage sehingga tetap tersimpan meski halaman di-refresh.

6. Penanganan Error
Jika tidak ada film yang ditemukan atau terjadi kesalahan dalam pencarian, pesan error akan ditampilkan.

Struktur Folder
bash
Copy code
movie-search-app/
│
├── src/                  # Semua file sumber
│   ├── assets/           # Gambar dan aset
│   ├── components/       # Komponen Vue (MovieCard.vue, MovieDetailModal.vue)
│   ├── views/            # Tampilan Vue utama
│   ├── App.vue           # File utama Vue
│   ├── main.js           # Titik masuk utama
│   └── style.css         # Gaya global (Tailwind)
│
├── public/               # Aset publik (favicon, index.html)
├── .env                  # Variabel lingkungan (API key)
├── package.json          # Dependencies dan script proyek
├── vite.config.js        # Konfigurasi Vite
└── README.md             # Dokumentasi proyek
Kontribusi
Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini, lakukan perubahan, dan kirimkan pull request. Kami sangat menghargai kontribusi Anda!

Lisensi
Proyek ini dilisensikan di bawah MIT License - lihat file LICENSE untuk detail lebih lanjut.

Penghargaan
-OMDb API (http://www.omdbapi.com/)
-Vue.js (https://vuejs.org/)
-Tailwind CSS (https://tailwindcss.com/)
-Vite (https://vitejs.dev/)


### Penjelasan:

1. **Deskripsi Proyek**: Menyediakan gambaran umum tentang aplikasi, fungsionalitas, dan teknologi yang digunakan.
2. **Demo**: Bagian ini bisa Anda isi dengan URL aplikasi yang telah dideploy di Netlify.
3. **Teknologi**: Daftar teknologi yang digunakan dalam proyek ini.
4. **Instalasi**: Langkah-langkah untuk menginstal dan menjalankan aplikasi di lokal.
5. **Fitur & Cara Kerja**: Penjelasan tentang bagaimana fitur utama aplikasi bekerja.
6. **Struktur Folder**: Menampilkan struktur folder aplikasi agar mudah dipahami.
7. **Kontribusi**: Panduan untuk berkontribusi pada proyek ini.
8. **Lisensi**: Memberikan informasi mengenai lisensi yang digunakan untuk proyek ini.
9. **Penghargaan**: Memberikan kredit kepada alat dan API yang digunakan dalam proyek.

