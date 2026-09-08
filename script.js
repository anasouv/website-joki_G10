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

    const harga = hargaRank[rank];
    let jumlah = akhir - mula;

    if (jumlah < 0) {
        jumlah = 0;
    }

    const total = jumlah * harga;

    hargaBintang.textContent = `RM${harga}`;
    jumlahBintang.textContent = `${jumlah} ⭐`;
    jumlahHarga.textContent = `RM${total}`;

    jumlahBintangData.value = `${jumlah} bintang`;
    hargaBintangData.value = `RM${harga}`;
    jumlahHargaData.value = `RM${total}`;
}

document.getElementById("tempahanForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = document.getElementById("submitBtn");
    const mesej = document.getElementById("mesej");

    const nama = document.getElementById("nama").value.trim();
    const gameid = document.getElementById("gameid").value.trim();
    const rank = document.getElementById("rank").value;
    const mulaInput = document.getElementById("bintangMula");
    const akhirInput = document.getElementById("bintangAkhir");

    const mula = Number(mulaInput.value);
    const akhir = Number(akhirInput.value);

    if (nama === "") {
        alert("Sila masukkan nama.");
        return;
    }

    if (gameid === "") {
        alert("Sila masukkan ID Game.");
        return;
    }

    if (rank === "") {
        alert("Sila pilih rank.");
        return;
    }

    if (mulaInput.value === "" || akhirInput.value === "") {
        alert("Sila masukkan bintang mula dan bintang akhir.");
        return;
    }

    if (akhir <= mula) {
        alert("Bintang akhir mesti lebih tinggi daripada bintang mula.");
        return;
    }

    kiraHarga();

    submitBtn.disabled = true;
    submitBtn.textContent = "⏳ MENGHANTAR...";

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            const total = (akhir - mula) * hargaRank[rank];
            const role = document.getElementById("role").value.trim() || "Tiada";
            const hero = document.getElementById("hero").value || "Tiada";

            mesej.style.display = "block";
            mesej.innerHTML = `
                ✅ <strong>Tempahan berjaya dihantar!</strong><br><br>
                👤 Nama: ${escapeHtml(nama)}<br>
                🎮 ID Game: ${escapeHtml(gameid)}<br>
                🏆 Rank: ${escapeHtml(rank)}<br>
                ⭐ Bintang: ${mula} → ${akhir}<br>
                🎯 Request Role: ${escapeHtml(role)}<br>
                🦸 Request Hero: ${escapeHtml(hero)}<br>
                ⭐ Jumlah: ${akhir - mula} bintang<br>
                💰 Harga: <strong>RM${total}</strong>
            `;

            form.reset();
            kiraHarga();

            mesej.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        } else {
            mesej.style.display = "block";
            mesej.innerHTML = "❌ <strong>Gagal menghantar tempahan. Sila cuba lagi.</strong>";
        }
    } catch (error) {
        mesej.style.display = "block";
        mesej.innerHTML = `
            ❌ <strong>Tiada sambungan.</strong><br>
            Sila semak internet dan cuba hantar semula.
        `;
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "🚀 SUBMIT TEMPAHAN";
    }
});

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

kiraHarga();
