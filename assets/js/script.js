// Tampilkan daftar MSDS
const msdsList = document.getElementById("msdsList");
MSDS_DATA.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${item.name}</h3>
    <p><b>Formula:</b> ${item.formula}</p>
    <p><b>Pengujian:</b> ${item.testing.join(", ")}</p>
    <p><b>Piktogram:</b> ${item.piktogram}</p>
    <a href="${item.pdf}" target="_blank">📄 Lihat MSDS</a>
  `;
  msdsList.appendChild(card);
});

// Random Piktogram of the Day
const ghsOptions = ["☠️ Racun banget!", "🔥 Bisa kebakar nih!", "🧴 Jangan kena kulit!", "💥 Meledak woy!"];
document.getElementById("ghsText").textContent = ghsOptions[Math.floor(Math.random() * ghsOptions.length)];

// Random Tips K3
const tipsOptions = ["Cuci tangan sebelum & sesudah eksperimen", "Gunakan APD setiap saat", "Jangan makan/minum di lab", "Pastikan ventilasi bagus"];
document.getElementById("tipsText").textContent = tipsOptions[Math.floor(Math.random() * tipsOptions.length)];
