function kiraHarga() {
    const rank = document.getElementById("rank").value;
    const mula = parseInt(document.getElementById("bintangMula").value) || 0;
    const akhir = parseInt(document.getElementById("bintangAkhir").value) || 0;

    let hargaPerBintang = 0;

    if (rank === "Epic") {
        hargaPerBintang = 2;
    } else if (rank === "Legend") {
        hargaPerBintang = 3;
    } else if (rank === "Mythic") {
        hargaPerBintang = 5;
    } else if (rank === "Mythic Honor") {
        hargaPerBintang = 6;
    } else if (rank === "Mythic Glory") {
        hargaPerBintang = 7;
    } else if (rank === "Mythic Immortal") {
        hargaPerBintang = 8;
    }

    const jumlahBintang = Math.max(0, akhir - mula);
    const jumlahHarga = jumlahBintang * hargaPerBintang;

    document.getElementById("hargaBintang").textContent =
        "RM" + hargaPerBintang;

    document.getElementById("jumlahBintang").textContent =
        jumlahBintang + " ⭐";

    document.getElementById("jumlahHarga").textContent =
        "RM" + jumlahHarga;

    document.getElementById("jumlahBintangData").value =
        jumlahBintang;

    document.getElementById("hargaBintangData").value =
        "RM" + hargaPerBintang;

    document.getElementById("jumlahHargaData").value =
        "RM" + jumlahHarga;
}


// HANTAR BORANG
document.getElementById("tempahanForm").addEventListener("submit", function(event) {

    // Jangan guna fetch / AJAX.
    // Biarkan Formspree hantar borang seperti biasa.

    const mula = parseInt(document.getElementById("bintangMula").value) || 0;
    const akhir = parseInt(document.getElementById("bintangAkhir").value) || 0;

    if (akhir <= mula) {
        event.preventDefault();

        document.getElementById("mesej").textContent =
            "⚠️ Bintang Akhir mesti lebih tinggi daripada Bintang Mula.";

        return;
    }

    // Jika betul, Formspree akan hantar terus.
});
