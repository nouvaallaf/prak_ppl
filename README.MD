# Praktikum Pengujian Perangkat Lunak
## Unit Testing Menggunakan Jest

### Persiapan

1. Buat folder dengan format:

```text
NBI_Nama
```

Contoh:

```text
1462200175_TrioAdhiPamungkasS
```

2. Inisialisasi project

```bash
npm init -y
```

3. Install Jest

```bash
npm install --save-dev jest
```

4. Ubah script pada `package.json`

```json
"scripts": {
  "test": "jest"
}
```

5. Jalankan testing

```bash
npm test
```

6. Lihat coverage

```bash
npx jest --coverage
```

---

# Soal 1 - Kalkulator Sederhana

## Struktur Folder

```text
|-----> src
|         kalkulator.js
|
|-----> test
          kalkulator.test.js
```

## Source Code

Lengkapi kode berikut:

```javascript
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

// TODO
function kali(a, b) {

}

// TODO
function bagi(a, b) {

}

module.exports = {
  tambah,
  kurang,
};
```

## Tugas

1. Lengkapi fungsi `kali()`
2. Lengkapi fungsi `bagi()`
3. Tambahkan fungsi ke `module.exports`
4. Buat unit test untuk seluruh fungsi

## Ekspektasi

```javascript
tambah(10,5); // 15
kurang(10,5); // 5
kali(10,5);   // 50
bagi(10,5);   // 2
```

### Target

- Seluruh test PASS
- Coverage minimal 100%

---

# Soal 2 - Konversi Nilai

## Struktur Folder

```text
|-----> src
|         nilai.js
|
|-----> test
          nilai.test.js
```

## Source Code

Lengkapi fungsi berikut:

```javascript
function konversiNilai(nilai) {
  // TODO
}

module.exports = {
  konversiNilai,
};
```

## Ketentuan

| Nilai | Grade |
|---------|---------|
| 85 - 100 | A |
| 70 - 84 | B |
| 60 - 69 | C |
| < 60 | D |
| < 0 atau > 100 | Tidak Valid |

## Tugas

1. Buat logika konversi nilai
2. Buat unit test untuk seluruh kemungkinan output
3. Pastikan seluruh kondisi teruji

## Ekspektasi

```javascript
konversiNilai(90);   // A
konversiNilai(75);   // B
konversiNilai(65);   // C
konversiNilai(50);   // D
konversiNilai(-1);   // Tidak Valid
konversiNilai(120);  // Tidak Valid
```

### Target

- Seluruh test PASS
- Branch Coverage 100%

---

# Soal 3 - Validasi Login

## Struktur Folder

```text
|-----> src
|         login.js
|
|-----> test
          login.test.js
```

## Source Code

Lengkapi fungsi berikut:

```javascript
function login(username, password) {
  // TODO
}

module.exports = {
  login,
};
```

## Ketentuan

Username valid:

```text
nama_mu
```

Password valid:

```text
nbi
```

## Output

| Kondisi | Output |
|----------|---------|
| Username dan password benar | Login Berhasil |
| Username salah | Username Salah |
| Password salah | Password Salah |

## Tugas

1. Buat logika login
2. Buat unit test untuk seluruh kondisi

## Ekspektasi

```javascript
login("nama_mu","nbi");
// Login Berhasil

login("Trio_Adhi_Pamungkas_S","12345");
// Username Salah

login("nama_mu","1462200175");
// Password Salah
```

### Target

- Seluruh test PASS
- Coverage minimal 100%

---

# Pengumpulan

1. Push project ke GitHub
2. Sertakan:
   - Source code
   - Unit test
   - Hasil coverage
3. Kirim URL repository GitHub

## Contoh Struktur Repository

```text
NBI_Nama
│
├── src
│   ├── kalkulator.js
│   ├── nilai.js
│   └── login.js
│
├── test
│   ├── kalkulator.test.js
│   ├── nilai.test.js
│   └── login.test.js
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Kriteria Penilaian

| Komponen | Bobot |
|-----------|--------|
| Implementasi Fungsi | 40% |
| Unit Testing | 30% |
| Coverage Testing | 20% |
| Kerapihan Repository | 10% |

Nilai maksimal diberikan apabila seluruh test berhasil dan coverage mencapai 100%.
