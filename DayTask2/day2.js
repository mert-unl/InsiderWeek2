function collatzSequence(sayi) {
  let i = 1;
  while (sayi !== 1) {
    if (sayi % 2 === 0) {
      sayi = sayi / 2;
    } else {
      sayi = 3 * sayi + 1;
    }
    i++;
  }
  return i;
}

let enUzun = 0;
let sayi = 0;

for (let i = 1; i < 1000000; i++) {
  let guncelUzunluk = collatzSequence(i);
  if (guncelUzunluk > enUzun) {
    enUzun = guncelUzunluk;
    sayi = i;
  }
}

//sayıyı 837799 , en uzun zinciri 525 buldum
console.log(`En uzun zinciri üreten sayı: ${sayi}`);
console.log(`Zincir uzunluğu: ${enUzun}`);
