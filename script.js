script.js.txt


const hargaRank = {
    "Epic": 2,
    "Legend": 3,
    "Mythic": 5,
    "Mythic Honor": 6,
    "Mythic Glory": 7,
    "Mythic Immortal": 8
};

function kiraHarga() {
    const rank = document.getElementById("rank").value;
    const mulaInput = document.getElementById("bintangMula");
    const akhirInput = document.getElementById("bintangAkhir");

    const hargaBintang = document.getElementById("hargaBintang");
    const jumlahBintang = document.getElementById("jumlahBintang");
    const jumlahHarga = document.getElementById("jumlahHarga");

    const jumlahBintangData = document.getElementById("jumlahBintangData");
    const hargaBintangData = document.getElementById("hargaBintangData");
    const jumlahHargaData = document.getElementById("jumlahHargaData");

    const mula = Number(mulaInput.value);
    const akhir = Number(akhirInput.value);

    if (rank === "") {
        hargaBintang.textContent = "RM0";
        jumlahBintang.textContent = "0 ⭐";
        jumlahHarga.textContent = "RM0";

        jumlahBintangData.value = "0";
        hargaBintangData.value = "RM0";
        jumlahHargaData.value = "RM0";
        return;
    }
