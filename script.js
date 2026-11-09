const candles = [
  { name: "Vanilla Glow", type: "Party", size: "Medium", price: 299 },
  { name: "Lavender Calm", type: "Gift", size: "Small", price: 199 },
  { name: "Rose Garden", type: "Gift", size: "Large", price: 449 },
  { name: "Diwali Sparkle", type: "Festival", size: "Medium", price: 349 },
  { name: "Christmas Pine", type: "Festival", size: "Large", price: 499 },
  { name: "Birthday Combo Pack", type: "Package", size: "Pack of 4", price: 799 }
];

const icons = {
  Party: "🎉",
  Gift: "🎁",
  Festival: "🪔",
  Package: "📦"
};

function showCandles() {
  const list = document.getElementById("candle-list");
  candles.forEach(function (c) {
    list.innerHTML += `
      <div class="card">
        <div class="icon">${icons[c.type]}</div>
        <h3>${c.name}</h3>
        <span class="tag ${c.type.toLowerCase()}">${c.type}</span>
        <p class="size">Size: ${c.size}</p>
        <p class="price">Rs. ${c.price}</p>
      </div>`;
  });
}

if (typeof document !== "undefined") {
  showCandles();
}

if (typeof module !== "undefined") {
  module.exports = { candles };
}
