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

    const mula = Number(mulaInput.value);
    const akhir = Number(akhirInput.value);

    // Jika rank belum dipilih
    if (rank === "") {
        hargaBintang.textContent = "RM0";
        jumlahBintang.textContent = "0 ⭐";
        jumlahHarga.textContent = "RM0";
        return;
    }

    const harga = hargaRank[rank];

    // Kira jumlah bintang
    let jumlah = akhir - mula;

    if (jumlah < 0) {
        jumlah = 0;
    }

    const total = jumlah * harga;

    hargaBintang.textContent = `RM${harga}`;
    jumlahBintang.textContent = `${jumlah} ⭐`;
    jumlahHarga.textContent = `RM${total}`;
}


function hantarTempahan() {

    const nama = document.getElementById("nama").value.trim();
    const gameid = document.getElementById("gameid").value.trim();
    const rank = document.getElementById("rank").value;

    const mula = Number(
        document.getElementById("bintangMula").value
    );

    const akhir = Number(
        document.getElementById("bintangAkhir").value
    );


    // Semak nama
    if (nama === "") {
        alert("Sila masukkan nama.");
        return;
    }


    // Semak ID Game
    if (gameid === "") {
        alert("Sila masukkan ID Game.");
        return;
    }


    // Semak rank
    if (rank === "") {
        alert("Sila pilih rank.");
        return;
    }


    // Semak bintang
    if (
        document.getElementById("bintangMula").value === "" ||
        document.getElementById("bintangAkhir").value === ""
    ) {
        alert("Sila masukkan bintang mula dan bintang akhir.");
        return;
    }


    // Bintang akhir mesti lebih tinggi
    if (akhir <= mula) {
        alert("Bintang akhir mesti lebih tinggi daripada bintang mula.");
        return;
    }


    const harga = hargaRank[rank];
    const jumlah = akhir - mula;
    const total = jumlah * harga;


    const mesej = document.getElementById("mesej");

    mesej.style.display = "block";

    mesej.innerHTML = `
        ✅ <strong>Tempahan berjaya!</strong><br><br>

        👤 Nama: ${nama}<br>

        🎮 ID Game: ${gameid}<br>

        🏆 Rank: ${rank}<br>

        ⭐ Bintang:
        ${mula} → ${akhir}<br>

        ⭐ Jumlah:
        ${jumlah} bintang<br>

        💰 Harga:
        <strong>RM${total}</strong>
    `;

    // Paparkan semula kiraan terkini
    kiraHarga();

    // Bawa skrin ke bahagian mesej
    mesej.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}