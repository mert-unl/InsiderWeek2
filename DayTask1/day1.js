const products = [
  { name: "Gibi 32 GB Ram Metin", price: 3200 },
  { name: "Razier Işıklı Kulaklık", price: 894 },
  { name: "Işıksız Kaliteli Mouse", price: 576 },
  { name: "Mekanik Optimus Prime Klavye", price: 498 },
  { name: "Black Mirror Curve Monitör", price: 5990 },
  { name: "MRTX 5090 Insider Version", price: 37500 },
];

showProducts();

let sepet = [];

function saveUser() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const job = document.getElementById("job").value;

  const user = {
    name: name,
    age: Number(age),
    job: job,
  };

  document.getElementById(
    "userInfo"
  ).innerHTML = `isim: ${user.name} --- yaş: ${user.age} --- meslek: ${user.job}`;
}

function showProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `${product.name} -  ${product.price}₺ 
      <button onclick="addToCart(${index})">Sepete Ekle</button>`;
    productList.appendChild(div);
  });
}

function addToCart(index) {
  const product = products[index];
  sepet.push(product);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartList");
  const totalPriceText = document.getElementById("totalPrice");
  cartList.innerHTML = "";

  sepet.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ${item.price}₺ 
       <button onclick="removeFromCartByIndex(${i})">Sepeten Çıkar</button>`;

    cartList.appendChild(li);
  });

  const total = sepet.reduce((acc, item) => acc + item.price, 0);
  totalPriceText.innerText = total;
}

function removeFromCartByIndex(index) {
  const removed = sepet.splice(index, 1)[0];
  updateCart();
}
