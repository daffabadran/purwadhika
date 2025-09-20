/*
● Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example :
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ }
]
Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]
● Result :

ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]


● Create a function that can accept input as an array of objects and switch all values into property and
property into value
● Example :
○ Input : [{ name: ‘David’, age: 20 }]
○ Output : [{ David: ‘name’, 20: ‘age’}]


● Create a function to find a factorial number using recursion
● Example
○ Input : 5
○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

// Fungsi untuk menggabungkan dua array mahasiswa dan menghapus duplikat
console.log(
  "1. membuat program untuk menggabungkan dua array mahasiswa dan menghapus duplikat"
);
console.log("");
function gabungMahasiswa(array1, array2) {
  // 1. Gabungkan kedua array jadi satu
  const gabungan = [...array1, ...array2];

  // 2. Gunakan Map untuk memastikan email unik
  // Map menyimpan pasangan key-value, di sini key = email
  const unik = new Map();

  // 3. Masukkan data ke dalam Map
  gabungan.forEach((mahasiswa) => {
    unik.set(mahasiswa.email, mahasiswa);
    // kalau email sama dimasukkan lagi, data lama akan tertimpa
  });

  // 4. Ambil kembali data dari Map (isinya sudah pasti unik)
  return Array.from(unik.values());
}

const daftar1 = [
  { nama: "Mahasiswa 1", email: "student1@mail.com" },
  { nama: "Mahasiswa 2", email: "student2@mail.com" },
];

const daftar2 = [
  { nama: "Mahasiswa 1", email: "student1@mail.com" },
  { nama: "Mahasiswa 3", email: "student3@mail.com" },
];

const hasilGabung = gabungMahasiswa(daftar1, daftar2);

console.log(hasilGabung);

//penjelasan kode secara detail sebagai berikut:
// 1. Fungsi gabungMahasiswa(array1, array2) menerima dua parameter berupa array objek mahasiswa.
// 2. Kedua array digabungkan menggunakan spread operator (...).
// 3. Map digunakan untuk menyimpan data dengan email sebagai key untuk memastikan keunikan.
// 4. Data dari kedua array dimasukkan ke dalam Map, sehingga duplikat berdasarkan email akan tertimpa.
// 5. Akhirnya, nilai-nilai dari Map diambil kembali dan dikembalikan sebagai array hasil.

//2 Fungsi untuk menukar properti dan nilai dalam array objek
console.log("");
console.log("2. membuat program untuk menukar properti dan nilai");
console.log("");
function tukarKeyValue(arrayObjek) {
  // 1. Gunakan map supaya bisa mengolah setiap objek dalam array
  return arrayObjek.map((objek) => {
    const hasil = {};

    Object.entries(objek).forEach(([kunci, nilai]) => {
      hasil[nilai] = kunci;
    });

    return hasil;
  });
}
const inputTukar = [{ nama: "David", umur: 20 }];
const outputTukar = tukarKeyValue(inputTukar);

console.log(outputTukar);

//penjelasan kode secara detail sebagai berikut:
// 1. Fungsi tukarKeyValue(arrayObjek) menerima parameter berupa array objek.
// 2. Metode map() digunakan untuk mengolah setiap objek dalam array.
// 3. Object.entries() digunakan untuk mendapatkan pasangan kunci-nilai dari setiap objek.
// 4. Dalam setiap iterasi, kunci dan nilai ditukar dan disimpan dalam objek baru.
// 5. Objek baru dengan kunci dan nilai yang sudah ditukar dikembalikan sebagai hasil.

//jadi kode di atas akan menukar kunci dan nilai dalam setiap objek di array input.
// Misalnya, { nama: "David", umur: 20 } menjadi { David: "nama", 20: "umur" }.

//penjelesan yang lebih kompleks
// 1. Pada contoh di atas, kita memiliki objek dengan dua properti: nama dan umur.
// 2. Ketika kita menukar kunci dan nilai, nama yang awalnya adalah kunci sekarang menjadi nilai, dan "David" yang awalnya adalah nilai sekarang menjadi kunci.
// 3. Begitu juga untuk umur, yang awalnya adalah kunci dengan nilai 20, sekarang menjadi kunci baru dengan nilai "umur".
// 4. Proses ini memungkinkan kita untuk membalikkan struktur data, yang bisa berguna dalam berbagai situasi, seperti saat kita ingin mencari data berdasarkan nilai daripada kunci.

//3 Fungsi untuk menghitung faktorial menggunakan rekursi
console.log("");
console.log(
  "3. membuat program untuk menghitung faktorial menggunakan rekursi"
);
console.log("");
function faktorial(angka) {
  // 1. Basis rekursi → kalau angka 0 atau 1, hasilnya 1
  if (angka === 0 || angka === 1) {
    return 1;
  }

  // 2. Rekursi → angka * faktorial(angka - 1)
  return angka * faktorial(angka - 1);
}

const inputFaktorial = 5;
const hasilFaktorial = faktorial(inputFaktorial);

console.log(`${inputFaktorial}! = ${hasilFaktorial}`);

//penjelasan kode secara detail sebagai berikut:
//kode faktorial(angka) menghitung faktorial dari angka yang diberikan menggunakan rekursi.
// 1. Basis rekursi: Jika angka adalah 0 atau 1, fungsi mengembalikan 1 karena faktorial dari 0 dan 1 adalah 1.
// 2. Rekursi: Untuk angka lebih besar dari 1, fungsi memanggil dirinya sendiri dengan angka yang dikurangi 1, dan mengalikan hasilnya dengan angka saat ini.
// 3. Proses ini berlanjut hingga mencapai basis rekursi, kemudian hasilnya dikalikan kembali melalui rantai panggilan rekursif untuk mendapatkan faktorial akhir.
// 4. Contoh: faktorial(5) akan menghitung 5 * faktorial(4), yang menghitung 4 * faktorial(3), dan seterusnya, hingga mencapai faktorial(1) yang mengembalikan 1. Hasil akhirnya adalah 120 (5! = 5 x 4 x 3 x 2 x 1 = 120).
