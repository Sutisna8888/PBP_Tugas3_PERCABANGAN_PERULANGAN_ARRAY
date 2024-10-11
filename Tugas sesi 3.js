// MENGHITUNG JUMLAH KALORI
function hitungKalori(lari = 0, pushUp = 0, plank = 0) {
  let totalKalori = 0;
  totalKalori += (lari / 5) * 60;
  totalKalori += (pushUp / 30) * 200;
  totalKalori += plank * 5;
  return totalKalori;
}
let totalKalori = hitungKalori(20, 10, 5);
console.log(`Total kalori yang terbakar: ${totalKalori} kalori`);

// MENCARI BILANGAN PALINDROME TERDEKAT
function CekPalnidrome(angka) {
  let konversiStr = angka.toString();
  let BalikStr = "";
  for (let i = konversiStr.length - 1; i >= 0; i--) {
    BalikStr += konversiStr[i];
  }
  return konversiStr === BalikStr;
}

function CariPalinddrome(angka) {
  let Awal = 1;
  while (true) {
    if (CekPalnidrome(angka + Awal)) {
      return angka + Awal;
    }
    Awal++;
  }
}

let input = 2345;
let palindrome = CariPalinddrome(input);
console.log(
  `Bilangan Palindrome terdekat selanjutnya dari Angka ${input} Adalah: ${palindrome}`
);

// PAPAN CATUR
// PAPAN CATUR
let papan = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];
function masukkanRajaBenteng(R, B) {
  papan[R[0]][R[1]] = "R";
  papan[B[0]][B[1]] = "B";
}

//Tentukan Posisi Raja dana Benteng
let Raja = [2, 4];
let Benteng = [4, 4];
masukkanRajaBenteng(Raja, Benteng);

function cekSkak(Raja, Benteng) {
  if (Raja[0] === Benteng[0] || Raja[1] === Benteng[1]) {
    return "Raja terkena skak!";
  } else {
    return "Raja aman.";
  }
}

console.log("Papan Catur:");
for (let i = 0; i < 5; i++) {
  console.log(papan[i].join(" "));
}
console.log(cekSkak(Raja, Benteng));
