// ==========================================
// HARGA SETIAP BINTANG
// ==========================================

const hargaRank = {
    "Epic": 2,
    "Legend": 3,
    "Mythic": 5,
    "Mythic Honor": 6,
    "Mythic Glory": 7,
    "Mythic Immortal": 8
};


// ==========================================
// NILAI KEDUDUKAN RANK
// ==========================================
//
// Setiap tahap Epic / Legend = 5 bintang
//
// Epic V  = 0
// Epic IV = 5
// Epic III = 10
// Epic II = 15
// Epic I  = 20
//
// Legend V  = 25
// Legend IV = 30
// Legend III = 35
// Legend II = 40
// Legend I  = 45
//
// Mythic bermula = 50
// ==========================================

const nilaiRank = {
    "Epic V": 0,
    "Epic IV": 5,
    "Epic III": 10,
    "Epic II": 15,
    "Epic I": 20,

    "Legend V": 25,
    "Legend IV": 30,
    "Legend III": 35,
    "Legend II": 40,
    "Legend I": 45,

    "Mythic": 50,
    "Mythic Honor": 75,
    "Mythic Glory": 100,
    "Mythic Immortal": 150
};


// ==========================================
// DAPATKAN KATEGORI HARGA
// ==========================================

function dapatkanKategoriHarga(totalBintang) {

    if (totalBintang <= 50) {
        return "Epic";
    }

    if (totalBintang <= 75) {
        return "Legend";
    }

    if (totalBintang <= 99) {
        return "Mythic";
    }

    if (totalBintang <= 124) {
        return "Mythic Honor";
    }

    if (totalBintang <= 149) {
        return "Mythic Glory";
    }

    return "Mythic Immortal";
}


// ==========================================
// DAPATKAN NILAI BINTANG SEBENAR
// ==========================================

function dapatkanNilaiBintang(rank, bintang) {

    if (!rank || bintang === "") {
        return null;
    }

    const nombor = Number(bintang);

    // Epic / Legend
    if (
        rank.startsWith("Epic") ||
        rank.startsWith("Legend")
    ) {
        return nilaiRank[rank] + nombor;
    }

    // Mythic
    if (rank === "Mythic") {
        return 50 + nombor;
    }

    // Mythic Honor
    if (rank === "Mythic Honor") {
        return 50 + nombor;
    }

    // Mythic Glory
    if (rank === "Mythic Glory") {
        return 50 + nombor;
    }

    // Mythic Immortal
    if (rank === "Mythic Immortal") {
        return nombor;
    }

    return null;
}


// ==========================================
// BUAT PILIHAN BINTANG
// ==========================================

function buatPilihanBintang(select, min, max) {

    select.innerHTML =
        `<option value="">-- Pilih Bintang --</option>`;

    for (let i = min; i <= max; i++) {

        const option = document.createElement("option");

        option.value = i;
        option.textContent = `${i} ⭐`;

        select.appendChild(option);
    }
}


// ==========================================
// BINTANG PERMULAAN
// ==========================================

function kemaskiniBintangMula() {

    const rank = document.getElementById("rankMula").value;

    const select = document.getElementById("bintangMula");
    const inputImmortal =
        document.getElementById("bintangMulaImmortal");

    inputImmortal.style.display = "none";
    select.style.display = "block";

    if (!rank) {
        select.innerHTML =
            `<option value="">-- Pilih Bintang --</option>`;

        kiraHarga();
        return;
    }


    // Epic & Legend
    if (
        rank.startsWith("Epic") ||
        rank.startsWith("Legend")
    ) {
        buatPilihanBintang(select, 1, 5);
    }


    // Mythic 1 - 24
    else if (rank === "Mythic") {
        buatPilihanBintang(select, 1, 24);
    }


    // Mythic Honor 25 - 49
    else if (rank === "Mythic Honor") {
        buatPilihanBintang(select, 25, 49);
    }


    // Mythic Glory 50 - 99
    else if (rank === "Mythic Glory") {
        buatPilihanBintang(select, 50, 99);
    }


    // Mythic Immortal 100+
    else if (rank === "Mythic Immortal") {

        select.style.display = "none";
        inputImmortal.style.display = "block";

        inputImmortal.value = "";
    }

    kiraHarga();
}


// ==========================================
// BINTANG AKHIR
// ==========================================

function kemaskiniBintangAkhir() {

    const rank = document.getElementById("rankAkhir").value;

    const select = document.getElementById("bintangAkhir");
    const inputImmortal =
        document.getElementById("bintangAkhirImmortal");

    inputImmortal.style.display = "none";
    select.style.display = "block";

    if (!rank) {
        select.innerHTML =
            `<option value="">-- Pilih Bintang --</option>`;

        kiraHarga();
        return;
    }


    // Epic & Legend
    if (
        rank.startsWith("Epic") ||
        rank.startsWith("Legend")
    ) {
        buatPilihanBintang(select, 1, 5);
    }


    // Mythic
    else if (rank === "Mythic") {
        buatPilihanBintang(select, 1, 24);
    }


    // Mythic Honor
    else if (rank === "Mythic Honor") {
        buatPilihanBintang(select, 25, 49);
    }


    // Mythic Glory
    else if (rank === "Mythic Glory") {
        buatPilihanBintang(select, 50, 99);
    }


    // Immortal
    else if (rank === "Mythic Immortal") {

        select.style.display = "none";
        inputImmortal.style.display = "block";

        inputImmortal.value = "";
    }

    kiraHarga();
}


// ==========================================
// DAPATKAN DATA PERMULAAN
// ==========================================

function dapatkanDataMula() {

    const rank = document.getElementById("rankMula").value;

    if (!rank) {
        return null;
    }

    let bintang;

    if (rank === "Mythic Immortal") {

        bintang = Number(
            document.getElementById("bintangMulaImmortal").value
        );

        if (bintang < 100) {
            return null;
        }

        return {
            rank: rank,
            bintang: bintang,
            nilai: bintang
        };
    }


    bintang = Number(
        document.getElementById("bintangMula").value
    );

    if (!bintang) {
        return null;
    }

    return {
        rank: rank,
        bintang: bintang,
        nilai: dapatkanNilaiBintang(rank, bintang)
    };
}


// ==========================================
// DAPATKAN DATA AKHIR
// ==========================================

function dapatkanDataAkhir() {

    const rank = document.getElementById("rankAkhir").value;

    if (!rank) {
        return null;
    }

    let bintang;

    if (rank === "Mythic Immortal") {

        bintang = Number(
            document.getElementById("bintangAkhirImmortal").value
        );

        if (bintang < 100) {
            return null;
        }

        return {
            rank: rank,
            bintang: bintang,
            nilai: bintang
        };
    }


    bintang = Number(
        document.getElementById("bintangAkhir").value
    );

    if (!bintang) {
        return null;
    }

    return {
        rank: rank,
        bintang: bintang,
        nilai: dapatkanNilaiBintang(rank, bintang)
    };
}


// ==========================================
// KIRA HARGA
// ==========================================

function kiraHarga() {

    const hargaBintang =
        document.getElementById("hargaBintang");

    const jumlahBintang =
        document.getElementById("jumlahBintang");

    const jumlahHarga =
        document.getElementById("jumlahHarga");

    const paparRankMula =
        document.getElementById("paparRankMula");

    const paparRankAkhir =
        document.getElementById("paparRankAkhir");

    const jumlahBintangData =
        document.getElementById("jumlahBintangData");

    const hargaBintangData =
        document.getElementById("hargaBintangData");

    const jumlahHargaData =
        document.getElementById("jumlahHargaData");


    const mula = dapatkanDataMula();
    const akhir = dapatkanDataAkhir();


    if (!mula || !akhir) {

        hargaBintang.textContent = "RM0";
        jumlahBintang.textContent = "0 ⭐";
        jumlahHarga.textContent = "RM0";

        paparRankMula.textContent = mula
            ? `${mula.rank} ⭐${mula.bintang}`
            : "-";

        paparRankAkhir.textContent = akhir
            ? `${akhir.rank} ⭐${akhir.bintang}`
            : "-";

        jumlahBintangData.value = "0";
        hargaBintangData.value = "Mengikut rank";
        jumlahHargaData.value = "RM0";

        return;
    }


    paparRankMula.textContent =
        `${mula.rank} ⭐${mula.bintang}`;

    paparRankAkhir.textContent =
        `${akhir.rank} ⭐${akhir.bintang}`;


    if (akhir.nilai <= mula.nilai) {

        hargaBintang.textContent = "RM0";
        jumlahBintang.textContent = "0 ⭐";
        jumlahHarga.textContent = "RM0";

        jumlahBintangData.value = "0";
        jumlahHargaData.value = "RM0";

        return;
    }


    // ======================================
    // KIRA SETIAP BINTANG IKUT HARGA RANK
    // ======================================

    let total = 0;
    let jumlah = 0;

    for (
        let bintang = mula.nilai + 1;
        bintang <= akhir.nilai;
        bintang++
    ) {

        let harga;


        // 1 - 50 = EPIC
        if (bintang <= 50) {
            harga = 2;
        }


        // 51 - 75 = LEGEND
        else if (bintang <= 75) {
            harga = 3;
        }


        // 76 - 99 = MYTHIC
        else if (bintang <= 99) {
            harga = 5;
        }


        // 100 - 124 = MYTHIC HONOR
        else if (bintang <= 124) {
            harga = 6;
        }


        // 125 - 149 = MYTHIC GLORY
        else if (bintang <= 149) {
            harga = 7;
        }


        // 150+
        else {
            harga = 8;
        }


        total += harga;
        jumlah++;
    }


    hargaBintang.textContent =
        "Mengikut rank";

    jumlahBintang.textContent =
        `${jumlah} ⭐`;

    jumlahHarga.textContent =
        `RM${total}`;


    jumlahBintangData.value =
        `${jumlah} bintang`;

    hargaBintangData.value =
        "Mengikut rank";

    jumlahHargaData.value =
        `RM${total}`;
}


// ==========================================
// SUBMIT
// ==========================================

document
    .getElementById("tempahanForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const form = event.target;

        const submitBtn =
            document.getElementById("submitBtn");

        const mesej =
            document.getElementById("mesej");


        const nama =
            document.getElementById("nama")
                .value.trim();

        const gameid =
            document.getElementById("gameid")
                .value.trim();


        const mula = dapatkanDataMula();
        const akhir = dapatkanDataAkhir();


        if (nama === "") {
            alert("Sila masukkan nama.");
            return;
        }


        if (gameid === "") {
            alert("Sila masukkan ID Game.");
            return;
        }


        if (!mula) {
            alert("Sila pilih rank dan bintang permulaan.");
            return;
        }


        if (!akhir) {
            alert("Sila pilih rank dan bintang akhir.");
            return;
        }


        if (akhir.nilai <= mula.nilai) {
            alert("Rank/Bintang akhir mesti lebih tinggi daripada permulaan.");
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

                const totalText =
                    document.getElementById("jumlahHarga")
                        .textContent;


                const role =
                    document.getElementById("role")
                        .value || "Tiada";


                const hero1 =
                    document.getElementById("hero1")
                        .value.trim();

                const hero2 =
                    document.getElementById("hero2")
                        .value.trim();

                const hero3 =
                    document.getElementById("hero3")
                        .value.trim();


                const heroList = [
                    hero1,
                    hero2,
                    hero3
                ]
                .filter(Boolean)
                .join(", ") || "Tiada";


                mesej.style.display = "block";


                mesej.innerHTML = `

                    ✅ <strong>Tempahan berjaya dihantar!</strong><br><br>

                    👤 Nama:
                    ${escapeHtml(nama)}<br>

                    🎮 ID Game:
                    ${escapeHtml(gameid)}<br>

                    🟢 Rank Permulaan:
                    ${escapeHtml(mula.rank)}
                    ⭐${mula.bintang}<br>

                    🔵 Rank Akhir:
                    ${escapeHtml(akhir.rank)}
                    ⭐${akhir.bintang}<br>

                    ⭐ Jumlah:
                    ${document.getElementById("jumlahBintang").textContent}<br>

                    🎯 Request Role:
                    ${escapeHtml(role)}<br>

                    🦸 Request Hero:
                    ${escapeHtml(heroList)}<br>

                    💰 Harga:
                    <strong>${escapeHtml(totalText)}</strong>

                `;


                form.reset();


                document.getElementById("bintangMula").innerHTML =
                    `<option value="">-- Pilih Bintang --</option>`;

                document.getElementById("bintangAkhir").innerHTML =
                    `<option value="">-- Pilih Bintang --</option>`;


                document.getElementById("bintangMulaImmortal").style.display =
                    "none";

                document.getElementById("bintangAkhirImmortal").style.display =
                    "none";

                document.getElementById("bintangMula").style.display =
                    "block";

                document.getElementById("bintangAkhir").style.display =
                    "block";


                kiraHarga();


                mesej.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            } else {

                mesej.style.display = "block";

                mesej.innerHTML =
                    "❌ <strong>Gagal menghantar tempahan. Sila cuba lagi.</strong>";
            }

        } catch (error) {

            mesej.style.display = "block";

            mesej.innerHTML = `
                ❌ <strong>Tiada sambungan.</strong><br>
                Sila semak internet dan cuba hantar semula.
            `;

        } finally {

            submitBtn.disabled = false;

            submitBtn.textContent =
                "🚀 SUBMIT TEMPAHAN";
        }

    });


// ==========================================
// KESELAMATAN HTML
// ==========================================

function escapeHtml(value) {

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}


// ==========================================
// MULA
// ==========================================

kiraHarga();
