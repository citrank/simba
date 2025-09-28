// === Index Page ===
if (document.getElementById("topChemicals")) {
  const chemicals = [
    {name: "Asam Sulfat", formula: "H2SO4"},
    {name: "Kalium Dikromat", formula: "K2Cr2O7"},
    {name: "Merkuri Sulfat", formula: "HgSO4"},
    {name: "Perak Sulfat", formula: "Ag2SO4"},
    {name: "Asam Sulfamat", formula: "NH2SO3H"}
  ];
  let topList = document.getElementById("topChemicals");
  chemicals.forEach((c, i) => {
    let li = document.createElement("li");
    li.innerText = `${i+1}. ${c.name} (${c.formula})`;
    topList.appendChild(li);
  });

  const ghsSymbols = [
    {icon: "assets/ghs/flammable.png", text: "Mudah Terbakar! Jauhkan dari api."},
    {icon: "assets/ghs/toxic.png", text: "Beracun! Jangan sampai terhirup."},
    {icon: "assets/ghs/corrosive.png", text: "Korosif! Bisa bikin kulit lecet."}
  ];
  let ghs = ghsSymbols[Math.floor(Math.random() * ghsSymbols.length)];
  document.getElementById("ghsCard").innerHTML =
    `<img src="${ghs.icon}" alt="ghs"><p>${ghs.text}</p>`;

  const tips = [
    "Selalu baca label MSDS sebelum pakai bahan kimia baru.",
    "Gunakan APD sesuai prosedur setiap kali masuk lab.",
    "Jangan makan/minum di laboratorium!"
  ];
  let tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tipsCard").innerText = tip;
}

// === MSDS Page ===
if (document.getElementById("msdsTable")) {
  fetch("data/msds.json")
    .then(res => res.json())
    .then(data => {
      let tbody = document.querySelector("#msdsTable tbody");
      data.forEach(item => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.nama}</td><td>${item.rumus}</td><td><a href="assets/pdf/${item.file}" target="_blank">Lihat PDF</a></td>`;
        tbody.appendChild(tr);
      });
    });

  document.getElementById("msdsSearch").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#msdsTable tbody tr");
    rows.forEach(r => {
      r.style.display = r.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
  });
}
