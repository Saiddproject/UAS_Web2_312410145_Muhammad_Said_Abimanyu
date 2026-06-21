# 🏷️ E-Inventory - Sistem Manajemen Inventaris Barang

![Version](https://img.shields.io/badge/version-2.0-blue.svg)
![PHP](https://img.shields.io/badge/PHP-8.2-777BB4.svg)
![CodeIgniter](https://img.shields.io/badge/CodeIgniter-4.7.3-EF4223.svg)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> **E-Inventory** adalah aplikasi web manajemen inventaris barang berbasis **Decoupled Architecture** (Backend & Frontend terpisah) yang dibangun menggunakan **CodeIgniter 4** sebagai RESTful API Server dan **Vue 3** sebagai Single Page Application (SPA).

---

## 📋 Daftar Isi

- [Deskripsi Proyek](#deskripsi-proyek)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Fitur Aplikasi](#fitur-aplikasi)
- [Arsitektur Database](#arsitektur-database)
- [Screenshot Aplikasi](#screenshot-aplikasi)
- [Petunjuk Instalasi](#petunjuk-instalasi)
- [Cara Menjalankan](#cara-menjalankan)
- [Uji Coba API](#uji-coba-api)
- [Demo & Video Presentasi](#demo--video-presentasi)
- [Kontributor](#kontributor)
- [Lisensi](#lisensi)

---

## 📖 Deskripsi Proyek

**E-Inventory** adalah sistem manajemen inventaris barang yang dirancang untuk membantu UMKM dan perusahaan dalam mengelola:

- **Data Barang** (nama, stok, harga, supplier)
- **Kategori Barang** (pengelompokan berdasarkan jenis)
- **Histori Stok** (pantau mutasi barang masuk/keluar)
- **Autentikasi Pengguna** (login & registrasi dengan token)

Aplikasi ini dikembangkan sebagai **Ujian Akhir Semester (UAS)** mata kuliah **Pemrograman Web 2** dengan menerapkan arsitektur terpisah (Decoupled Architecture) antara Backend dan Frontend.

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi | Keterangan |
|----------|-----------|------------|
| **Backend** | CodeIgniter 4 | RESTful API Server |
| **Frontend** | Vue 3 + Vue Router | Single Page Application (SPA) |
| **UI Framework** | TailwindCSS | Utility-first CSS |
| **HTTP Client** | Axios | Asynchronous request |
| **Database** | MySQL | Relational database |
| **Hosting** | InfinityFree | Free hosting provider |

---

## ✨ Fitur Aplikasi

| Fitur | Keterangan |
|-------|------------|
| ✅ **Autentikasi** | Login & Registrasi dengan Bearer Token |
| ✅ **Dashboard** | Statistik total barang, kategori, stok menipis, supplier |
| ✅ **Manajemen Barang** | CRUD (Create, Read, Update, Delete) data barang |
| ✅ **Manajemen Kategori** | CRUD data kategori barang |
| ✅ **Indikator Stok** | Badge merah jika stok ≤ 5, hijau jika aman |
| ✅ **Proteksi Halaman** | Navigation Guard (tanpa login tidak bisa akses) |
| ✅ **Responsif** | Tampilan optimal di desktop, tablet, dan mobile |
| ✅ **Animasi UI** | Transisi halus dan efek interaktif |

---

## 🗄️ Arsitektur Database

### Skema Relasi Tabel

Aplikasi menggunakan **3 tabel utama** yang saling berelasi:

```sql
users (id, username, password, email, api_token, created_at)
   │
   └── items (id, name, category_id, stock, price, supplier, created_at, updated_at)
           │
           └── categories (id, name, description, created_at)
```

---

## 📌 Relasi Database

### One-to-Many Relationship

```text
items.category_id → categories.id
```

* Setiap barang memiliki satu kategori.
* Satu kategori dapat dimiliki oleh banyak barang.

**Database Schema**

<img width="1872" height="1163" alt="Cuplikan layar 2026-06-21 112347" src="https://github.com/user-attachments/assets/6834550c-6309-4bff-a2d4-7254e103242f" />

---

## 📸 Screenshot Aplikasi

### Landing page

<img width="2240" height="1328" alt="Cuplikan layar 2026-06-21 113001" src="https://github.com/user-attachments/assets/e25b80fb-1da6-4fc6-9346-8ca6d34b932d" />

### Halaman Login (Username "admin", Password "password")

<img width="2240" height="1328" alt="Cuplikan layar 2026-06-21 112505" src="https://github.com/user-attachments/assets/19142b45-6d82-48f2-be04-fa6e0bc13aa2" />

### Dashboard

<img width="2240" height="1328" alt="Cuplikan layar 2026-06-21 112545" src="https://github.com/user-attachments/assets/34c48efe-3ae6-4f84-9275-ae2428b7a3ae" />

### Manajemen Barang

<img width="2240" height="1328" alt="Cuplikan layar 2026-06-21 112742" src="https://github.com/user-attachments/assets/92a95152-3a9d-402b-87fd-ea0f5459de7e" />

### Modal Tambah/Edit Barang

<img width="2240" height="1328" alt="Cuplikan layar 2026-06-21 112756" src="https://github.com/user-attachments/assets/59232930-5fc1-4190-9841-7716f0cf2876" />
<img width="2240" height="1328" alt="Cuplikan layar 2026-06-21 112803" src="https://github.com/user-attachments/assets/6b49b982-67af-4d2a-9e14-a321d56df41d" />

### Halaman Registrasi

<img width="2240" height="1328" alt="Cuplikan layar 2026-06-21 112824" src="https://github.com/user-attachments/assets/c38cb8f1-d07f-4d02-b386-3e9ad9f23f23" />

---

# 📦 Petunjuk Instalasi

## Prasyarat

| Software   | Versi Minimal                   |
| ---------- | ------------------------------- |
| PHP        | 8.2+                            |
| MySQL      | 5.7+                            |
| Composer   | 2.x                             |
| Node.js    | 16.x+ (opsional untuk frontend) |
| Web Server | Apache / Nginx / PHP Built-in   |

---

## 1. Clone Repositori

```bash
git clone https://github.com/Saiddproject/UAS_Web2_312410145_Muhammad_Said_Abimanyu.git
cd UAS_Web2_312410145_Muhammad_Said_Abimanyu
```

---

## 2. Setup Backend (CodeIgniter 4)

```bash
cd backend-api
composer install
cp env .env
```

### Edit file `.env`

```env
CI_ENVIRONMENT = development

app.baseURL = 'http://localhost:8080/'

database.default.hostname = localhost
database.default.database = uas_web2
database.default.username = root
database.default.password =
database.default.DBDriver = MySQLi
database.default.port = 3306
```

### Import Database

```sql
CREATE DATABASE uas_web2;

USE uas_web2;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    api_token VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    category_id INT NOT NULL,
    stock INT DEFAULT 0,
    price DECIMAL(10,2) DEFAULT 0,
    supplier VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO users (username, password, email)
VALUES (
    'admin',
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
    'admin@example.com'
);
```

### Jalankan Backend

```bash
php spark serve
```

Backend akan berjalan di:

```text
http://localhost:8080
```

---

## 3. Setup Frontend (Vue 3 SPA)

Tidak perlu menjalankan:

```bash
npm install
```

Karena frontend menggunakan CDN.

### Edit `app.js`

```javascript
const API_BASE_URL = 'http://localhost:8080/api';
```

### Jalankan Frontend

Buka file `index.html` di browser atau gunakan **Live Server** pada VS Code.

Frontend akan berjalan di:

```text
http://127.0.0.1:5500/frontend-spa/
```

---

## 4. Login ke Aplikasi

| Username | Password |
| -------- | -------- |
| admin    | password |

---

# 🧪 Uji Coba API

## 401 Unauthorized (Tanpa Token)

### Request

```http
GET https://e-inventory.xo.je/api/items
```

### Response

```json
{
    "error": "Token tidak disediakan"
}
```

---

## Login (Mendapatkan Token)

### Request

```http
POST https://e-inventory.xo.je/api/login
Content-Type: application/json

{
    "username": "admin",
    "password": "password"
}
```

### Response

```json
{
    "status": 200,
    "message": "Login sukses",
    "data": {
        "id": 1,
        "username": "admin",
        "email": "admin@example.com",
        "api_token": "abc123def456..."
    }
}
```

---

## Akses Endpoint Menggunakan Token

### Request

```http
GET https://e-inventory.xo.je/api/items
Authorization: Bearer abc123def456...
```

### Response

```json
[
    {
        "id": 1,
        "name": "Laptop Asus ROG",
        "category_id": 1,
        "stock": 10,
        "price": 15000000,
        "supplier": "PT. Asus Indonesia",
        "category_name": "Elektronik"
    }
]
```

---

# 🌐 Demo & Video Presentasi

## 🖥️ Demo Aplikasi

**Frontend**

https://e-inventory.xo.je/frontend-spa/

**Backend API**

https://e-inventory.xo.je/api/login

---

## 🎥 Video Presentasi

**Klik di sini untuk menonton video presentasi**

[Video yang telah saya buat klik disini](https://youtu.be/9uQiXpqV-Uo?si=c7yzhXpH_gIJtSrK)

### Isi Video

* Perkenalan
* Penjelasan proyek
* Demo aplikasi
* Penjelasan teknis (arsitektur, database, API)
* Tampilan responsif mobile

---

# 👤 Kontributor

| Nama                   | NIM       | Peran                |
| ---------------------- | --------- | -------------------- |
| Muhammad Said Abimanyu | 312410145 | Mahasiswa Universitas Pelita Bangsa |

---

---

# 📞 Kontak

**Email**

[msaidabimanyu@gmail.com](mailto:msaidabimanyu@gmail.com)

**GitHub**

[https://github.com/Saiddproject](https://github.com/Saiddproject)

**LinkedIn**

www.linkedin.com/in/muhammadsaidabimanyu

---

<p align="center">
Made with ❤️ by Muhammad Said Abimanyu
</p>

<p align="center">
© 2026 E-Inventory. All Rights Reserved.
</p>
