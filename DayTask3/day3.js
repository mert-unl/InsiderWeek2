let zamanlayici;
let kalanSure = 0;

const sureInput = document.getElementById("input");
const baslatButon = document.getElementById("startBtn");
const sifirlaButon = document.getElementById("resetBtn");
const ekran = document.getElementById("display");

baslatButon.addEventListener("click", function () {
  const girilenDeger = sureInput.value.trim();
  const sayi = Number(girilenDeger);

  if (girilenDeger === "" || typeof sayi !== "number" || sayi <= 0) {
    alert("Pozitif bir sayı girin.");
    return;
  }

  clearInterval(zamanlayici);
  kalanSure = sayi;
  ekran.textContent = kalanSure;

  zamanlayici = setInterval(function () {
    kalanSure--;
    ekran.textContent = kalanSure;

    if (kalanSure <= 0) {
      clearInterval(zamanlayici);
      ekran.textContent = "Süre doldu!";
    }
  }, 1000);
});

sifirlaButon.addEventListener("click", () => {
  clearInterval(zamanlayici);
  kalanSure = 0;
  sureInput.value = "";
  ekran.textContent = "Hazır";
});
