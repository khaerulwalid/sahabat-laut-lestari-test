This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Dokumentasi API Sahabat Laut Lestari

Dokumentasi ini memberikan informasi tentang cara menggunakan API Sahabat Laut Lestari untuk mengelola data spesies.

## URL Dasar

URL dasar untuk API adalah:

## Endpoint

### 1. Spesies

#### Mendapatkan Data Spesies dengan Paginasi

- **Endpoint**: `/species`
- **Method**: GET
- **Deskripsi**: Mengambil data spesies menggunakan paginasi.
- **Contoh Permintaan**:

#### Menambahkan Spesies Baru

- **Endpoint**: `/species`
- **Method**: POST
- **Deskripsi**: Menambahkan spesies baru ke dalam database.
- **Contoh Permintaan**:

### 2. Mendapatkan Semua Data Spesies

- **Endpoint**: `/species/all`
- **Method**: GET
- **Deskripsi**: Mengambil semua data spesies tanpa paginasi.
- **Contoh Permintaan**:

### 3. Spesies Berdasarkan ID

#### Mendapatkan Spesies Berdasarkan ID

- **Endpoint**: `/species/{id}`
- **Method**: GET
- **Deskripsi**: Mengambil data spesies berdasarkan ID.
- **Contoh Permintaan**:

#### Memperbarui Spesies Berdasarkan ID

- **Endpoint**: `/species/{id}`
- **Method**: PUT
- **Deskripsi**: Memperbarui data spesies berdasarkan ID.
- **Contoh Permintaan**:

#### Menghapus Spesies Berdasarkan ID

- **Endpoint**: `/species/{id}`
- **Method**: DELETE
- **Deskripsi**: Menghapus data spesies berdasarkan ID.
- **Contoh Permintaan**:

### 4. Autentikasi

#### Login Admin

- **Endpoint**: `/auth/login`
- **Method**: POST
- **Deskripsi**: Proses login admin.
- **Contoh Permintaan**:

## Akun Admin

Gunakan akun admin berikut untuk autentikasi:

**Catatan**: Pastikan Anda menangani token autentikasi dengan tepat setelah login berhasil untuk menjaga keamanan sesi.
