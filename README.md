# Aplikasi To-Do List Sederhana

## Judul Proyek

To-Do List CRUD App

## Deskripsi

Proyek ini adalah aplikasi web sederhana untuk mengelola daftar tugas (to-do list).  
Pengguna dapat menambah, melihat, mengubah status, dan menghapus tugas.  
Data disimpan menggunakan `localStorage` sehingga tetap ada meskipun halaman di-refresh.

## Teknologi yang Digunakan

- HTML
- CSS
- JavaScript
- localStorage

## Fitur

- Tambah tugas baru
- Lihat daftar tugas
- Edit tugas
- Tandai tugas sebagai selesai (Done) atau pending
- Hapus tugas
- Filter tugas berdasarkan: Semua, Pending, Done

## Cara Menjalankan & Cara Kerja Aplikasi

1. Clone repository:
   git clone https://github.com/username/todo-crud-app.git

2. Masuk ke folder proyek:
   cd

3. Buka file index.html di Browser

Cara Kerja Aplikasi:

- Pengguna menambahkan tugas melalui form input.
- Tugas baru disimpan ke dalam localStorage.
- Semua tugas akan ditampilkan di daftar, dengan opsi filter: All, Pending, atau Done.
- Setiap tugas dapat:
  - Diedit → mengubah teks tugas.
  - Ditandai Done/Pending → mengubah status tugas.
  - Dihapus → menghapus dari daftar dan localStorage.
- Data tetap tersimpan walaupun halaman di-refresh.

Dukungan AI:
Pengerjaan proyek ini memanfaatkan AI dalam proses pengembangan:

1. IBM Granite → digunakan untuk menghasilkan kode dasar aplikasi CRUD (HTML, CSS, dan JavaScript).
2. ChatGPT → membantu dalam debugging, penambahan fitur tambahan (seperti tombol Done, filter task), serta perbaikan tampilan dengan CSS.
