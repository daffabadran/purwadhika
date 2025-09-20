/*
● Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
● Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
● Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
● Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
● Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day
● Write a code to get difference between dates in days.
○ Example : date1 = 2022-01-20, date2 = 2022-01-22
○ Output : 2
*/

// 1. menghitung luas persegi panjang
console.log("1. Menghitung Luas Persegi Panjang");
function hitungLuasPersegiPanjang(panjang, lebar) {
  // Luas = panjang × lebar
  return panjang * lebar;
}

const panjang = 5;
const lebar = 3;
const luas = hitungLuasPersegiPanjang(panjang, lebar);
console.log(
  `Luas persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah: ${luas}`
);

/*
penjelasan kode:
function hitungLuasPersegiPanjang(panjang, lebar) - Membuat fungsi dengan 2 parameter.
return panjang * lebar; - Fungsi mengembalikan hasil perkalian parameter.
const panjang = 5; - Menyimpan nilai 5 ke variabel 'panjang'.
const lebar = 3; - Menyimpan nilai 3 ke variabel 'lebar'.
hitungLuasPersegiPanjang(panjang, lebar) - Memanggil fungsi dengan nilai 5 dan 3.
Fungsi menghitung 5 × 3 = 15 dan mengembalikan hasilnya.
*/

//2. menghitung keliling persegi panjang
console.log("\n2. Menghitung Keliling Persegi Panjang");
// Fungsi untuk menghitung keliling persegi panjang
function hitungKelilingPersegiPanjang(panjang, lebar) {
  // Keliling = 2 × (panjang + lebar)
  return 2 * (panjang + lebar);
}

const keliling = hitungKelilingPersegiPanjang(panjang, lebar);
// console.log("Keliling persegi panjang: " + keliling);
//di atas tanpa menggunakan template literal
console.log(
  `Keliling persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah: ${keliling}`
);

//3. menghitung diameter, keliling, dan luas lingkaran
console.log("\n3. Menghitung Diameter, Keliling, dan Luas Lingkaran");
function hitungPropertiLingkaran(jariJari) {
  const PI = Math.PI;
  const diameter = 2 * jariJari;
  const keliling = 2 * PI * jariJari;
  const luas = PI * Math.pow(jariJari, 2);

  return {
    diameter: diameter,
    keliling: parseFloat(keliling.toFixed(4)),
    luas: parseFloat(luas.toFixed(3)),
  };
}

const jariJari = 5;
const hasilLingkaran = hitungPropertiLingkaran(jariJari);
console.log(`Lingkaran dengan jari-jari ${jariJari}:`);
console.log(`- Diameter: ${hasilLingkaran.diameter}`);
console.log(`- Keliling: ${hasilLingkaran.keliling}`);
console.log(`- Luas: ${hasilLingkaran.luas}`);

/*
penjelasan kode:
function hitungPropertiLingkaran(jariJari) - Membuat fungsi dengan 1 parameter.
const PI = Math.PI; - Menyimpan nilai π (pi) ke variabel PI.
const diameter = 2 * jariJari; - Menghitung diameter lingkaran.
const keliling = 2 * PI * jariJari; - Menghitung keliling lingkaran.
const luas = PI * Math.pow(jariJari, 2); - Menghitung luas lingkaran.
*/

//4. menghitung sudut segitiga ketiga segitiga
console.log("\n4. Menghitung Sudut Ketiga Segitiga");
function cariSudutKetiga(sudutA, sudutB) {
  return 180 - (sudutA + sudutB);
}

const sudutA = 80;
const sudutB = 65;
const sudutC = cariSudutKetiga(sudutA, sudutB);
console.log(
  `Segitiga dengan sudut A = ${sudutA}° dan sudut B = ${sudutB}° memiliki sudut ketiga = ${sudutC}°`
);
// tanpa tempalte literal
// console.log("Segitiga dengan sudut A = " + sudutA + "° dan sudut B = " + sudutB + "° memiliki sudut ketiga = " + sudutC + "°");

//5. Konversi Hari ke Tahun, Bulan, dan Hari
console.log("\n5. Konversi Hari ke Tahun, Bulan, dan Hari");
function konversiHari(totalHari) {
  const tahun = Math.floor(totalHari / 365);
  let sisaHari = totalHari % 365;
  const bulan = Math.floor(sisaHari / 30);
  sisaHari = sisaHari % 30;

  return {
    tahun: tahun,
    bulan: bulan,
    hari: sisaHari,
  };
}

// Contoh penggunaan
const totalHari = 400;
const hasilKonversi = konversiHari(totalHari);
console.log(
  totalHari +
    " hari = " +
    hasilKonversi.tahun +
    " tahun, " +
    hasilKonversi.bulan +
    " bulan, " +
    hasilKonversi.hari +
    " hari"
);

//jika menggunakan template literal
// console.log(`${totalHari} hari = ${hasilKonversi.tahun} tahun, ${hasilKonversi.bulan} bulan, ${hasilKonversi.hari} hari`);

// 6. Menghitung Selisih Hari antara Dua Tanggal
console.log("\n6. Menghitung Selisih Hari antara Dua Tanggal");
function hitungSelisihHari(tanggal1, tanggal2) {
  const tgl1 = new Date(tanggal1);
  const tgl2 = new Date(tanggal2);
  const selisihWaktu = Math.abs(tgl2 - tgl1);
  const satuHariDalamMs = 1000 * 60 * 60 * 24;
  const selisihHari = Math.floor(selisihWaktu / satuHariDalamMs);
  return selisihHari;
}

// Contoh penggunaan
const tanggal1 = "2022-01-20";
const tanggal2 = "2022-01-22";
const selisih = hitungSelisihHari(tanggal1, tanggal2);
console.log(
  `Selisih hari antara ${tanggal1} dan ${tanggal2} adalah: ${selisih} hari`
);
