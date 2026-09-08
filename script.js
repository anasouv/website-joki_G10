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
// KEDUDUKAN RANK EPIC & LEGEND
// Setiap tahap mempunyai 5 bintang
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
    "Legend I": 45
};


// ==========================================
// DAPATKAN KEDUDUKAN SEBENAR
// ==========================================

function dapatkanNilaiBintang(rank, bintang) {

    const nombor = Number(bintang);

    if (!rank || !nombor) {
        return null;
    }

    // EPIC / LEGEND
    if (nilaiRank[rank] !== undefined) {
        return nilaiRank[rank] + nombor;
    }

    // MYTHIC
    // Mythic 1-24
    if (rank === "Mythic") {
        return 50 + nombor;
    }

    // MYTHIC HONOR
    // Honor 25-49
    if (rank === "Mythic Honor") {
        return 50 + nombor;
    }

    // MYTHIC GLORY
    // Glory 50-99
    if (rank === "Mythic Glory") {
        return 50 + nombor;
    }

    // MYTHIC IMMORTAL
    // 100+
    if (rank === "Mythic Immortal") {
        return nombor;
    }

    return null;
}


// ==========================================
// TENTUKAN HARGA MENGIKUT KEDUDUKAN
// ==========================================
//
// 1 - 25   = Epic       RM2
// 26 - 50  = Legend     RM3
// 51 - 74  = Mythic     RM5
// 75 - 99  = Honor      RM6
// 100 -149 = Glory      RM7
// 150+     = Immortal   RM8
//
// Ini kerana:
// Epic = 25 bintang
// Legend = 25 bintang
// Mythic 1-24
// Honor 25-49
// Glory 50-99
// Immortal 100+
// ==========================================

function dapatkanHargaDaripadaKedudukan(posisi) {

    if (posisi <= 25) {
        return 2;
    }

    if (posisi <= 50) {
        return 3;
    }

    if (posisi <= 74) {
        return 5;
    }

    if (posisi <= 99) {
        return 6;
    }

    if (posisi <= 149) {
        return 7;
    }

    return 8;
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

    const rank =
        document.getElementById("rankMula").value;

    const select =
        document.getElementById("bintangMula");

    const inputImmortal =
        document.getElementById("bintangMulaImmortal");


    select.style.display = "block";
    inputImmortal.style.display = "none";


    if (!rank) {

        select.innerHTML =
            `<option value="">-- Pilih Bintang --</option>`;

        kiraHarga();
        return;
    }


    // EPIC / LEGEND
    if (
        rank.startsWith("Epic") ||
        rank.startsWith("Legend")
    ) {

        buatPilihanBintang(
            select,
            1,
            5
        );
    }


    // MYTHIC 1-24
    else if (rank === "Mythic") {

        buatPilihanBintang(
            select,
            1,
            24
        );
    }


    // MYTHIC HONOR 25-49
    else if (rank === "Mythic Honor") {

        buatPilihanBintang(
            select,
            25,
            49
        );
    }


    // MYTHIC GLORY 50-99
    else if (rank === "Mythic Glory") {

        buatPilihanBintang(
            select,
            50,
            99
        );
    }


    // MYTHIC IMMORTAL 100+
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

    const rank =
        document.getElementById("rankAkhir").value;

    const select =
        document.getElementById("bintangAkhir");

    const inputImmortal =
        document.getElementById("bintangAkhirImmortal");


    select.style.display = "block";
    inputImmortal.style.display = "none";


    if (!rank) {

        select.innerHTML =
            `<option value="">-- Pilih Bintang --</option>`;

        kiraHarga();
        return;
    }


    // EPIC / LEGEND
    if (
        rank.startsWith("Epic") ||
        rank.startsWith("Legend")
    ) {

        buatPilihanBintang(
            select,
            1,
            5
        );
    }


    // MYTHIC 1-24
    else if (rank === "Mythic") {

        buatPilihanBintang(
            select,
            1,
            24
        );
    }


    // MYTHIC HONOR 25-49
    else if (rank === "Mythic Honor") {

        buatPilihanBintang(
            select,
            25,
            49
        );
    }


    // MYTHIC GLORY 50-99
    else if (rank === "Mythic Glory") {

        buatPilihanBintang(
            select,
            50,
            99
        );
    }


    // MYTHIC IMMORTAL 100+
    else if (rank === "Mythic Immortal") {

        select.style.display = "none";

        inputImmortal.style.display = "block";

        inputImmortal.value = "";
    }


    kiraHarga();
}


// ==========================================
// DATA PERMULAAN
// ==========================================

function dapatkanDataMula() {

    const rank =
        document.getElementById("rankMula").value;

    if (!rank) {
        return null;
    }


    let bintang;


    // IMMORTAL
    if (rank === "Mythic Immortal") {

        bintang = Number(
            document.getElementById(
                "bintangMulaImmortal"
            ).value
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


    // RANK LAIN
    bintang = Number(
        document.getElementById(
            "bintangMula"
        ).value
    );


    if (!bintang) {
        return null;
    }


    return {
        rank: rank,
        bintang: bintang,
        nilai: dapatkanNilaiBintang(
            rank,
            bintang
        )
    };
}


// ==========================================
// DATA AKHIR
// ==========================================

function dapatkanDataAkhir() {

    const rank =
        document.getElementById("rankAkhir").value;

    if (!rank) {
        return null;
    }


    let bintang;


    // IMMORTAL
    if (rank === "Mythic Immortal") {

        bintang = Number(
            document.getElementById(
                "bintangAkhirImmortal"
            ).value
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


    // RANK LAIN
    bintang = Number(
        document.getElementById(
            "bintangAkhir"
        ).value
    );


    if (!bintang) {
        return null;
    }


    return {
        rank: rank,
        bintang: bintang,
        nilai: dapatkanNilaiBintang(
            rank,
            bintang
        )
    };
}


// ==========================================
// KIRA HARGA
// ==========================================

function kiraHarga() {

    const hargaBintang =
        document.getElementById(
            "hargaBintang"
        );

    const jumlahBintang =
        document.getElementById(
            "jumlahBintang"
        );

    const jumlahHarga =
        document.getElementById(
            "jumlahHarga"
        );

    const paparRankMula =
        document.getElementById(
            "paparRankMula"
        );

    const paparRankAkhir =
        document.getElementById(
            "paparRankAkhir"
        );

    const jumlahBintangData =
        document.getElementById(
            "jumlahBintangData"
        );

    const hargaBintangData =
        document.getElementById(
            "hargaBintangData"
        );

    const jumlahHargaData =
        document.getElementById(
            "jumlahHargaData"
        );


    const mula =
        dapatkanDataMula();

    const akhir =
        dapatkanDataAkhir();


    // PAPAR RANK
    paparRankMula.textContent =
        mula
            ? `${mula.rank} ⭐${mula.bintang}`
            : "-";

    paparRankAkhir.textContent =
        akhir
            ? `${akhir.rank} ⭐${akhir.bintang}`
            : "-";


    // BELUM LENGKAP
    if (!mula || !akhir) {

        hargaBintang.textContent = "RM0";

        jumlahBintang.textContent =
            "0 ⭐";

        jumlahHarga.textContent =
            "RM0";

        jumlahBintangData.value =
            "0";

        hargaBintangData.value =
            "Mengikut rank";

        jumlahHargaData.value =
            "RM0";

        return;
    }


    // AKHIR MESTI LEBIH TINGGI
    if (akhir.nilai <= mula.nilai) {

        hargaBintang.textContent =
            "RM0";

        jumlahBintang.textContent =
            "0 ⭐";

        jumlahHarga.textContent =
            "RM0";

        jumlahBintangData.value =
            "0";

        jumlahHargaData.value =
            "RM0";

        return;
    }


    // ======================================
    // KIRA SETIAP BINTANG
    // ======================================

    let total = 0;

    let jumlah = 0;


    for (
        let posisi = mula.nilai + 1;
        posisi <= akhir.nilai;
        posisi++
    ) {

        const harga =
            dapatkanHargaDaripadaKedudukan(
                posisi
            );

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
        "Epic RM2 | Legend RM3 | Mythic RM5 | Honor RM6 | Glory RM7 | Immortal RM8";


    jumlahHargaData.value =
        `RM${total}`;
}


// ==========================================
// SUBMIT TEMPAHAN
// ==========================================

document
    .getElementById("tempahanForm")
    .addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const form =
                event.target;

            const submitBtn =
                document.getElementById(
                    "submitBtn"
                );

            const mesej =
                document.getElementById(
                    "mesej"
                );


            const nama =
                document.getElementById(
                    "nama"
                ).value.trim();


            const gameid =
                document.getElementById(
                    "gameid"
                ).value.trim();


            const mula =
                dapatkanDataMula();


            const akhir =
                dapatkanDataAkhir();


            // ==================================
            // VALIDASI
            // ==================================

            if (nama === "") {

                alert(
                    "Sila masukkan nama."
                );

                return;
            }


            if (gameid === "") {

                alert(
                    "Sila masukkan ID Game."
                );

                return;
            }


            if (!mula) {

                alert(
                    "Sila pilih rank dan bintang permulaan."
                );

                return;
            }


            if (!akhir) {

                alert(
                    "Sila pilih rank dan bintang akhir."
                );

                return;
            }


            if (akhir.nilai <= mula.nilai) {

                alert(
                    "Rank/Bintang akhir mesti lebih tinggi daripada permulaan."
                );

                return;
            }


            // KIRA SEMULA
            kiraHarga();


            submitBtn.disabled = true;

            submitBtn.textContent =
                "⏳ MENGHANTAR...";


            try {

                const response =
                    await fetch(
                        form.action,
                        {
                            method: "POST",

                            body:
                                new FormData(form),

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    const total =
                        document
                            .getElementById(
                                "jumlahHarga"
                            )
                            .textContent;


                    const jumlah =
                        document
                            .getElementById(
                                "jumlahBintang"
                            )
                            .textContent;


                    const role =
                        document
                            .getElementById(
                                "role"
                            )
                            .value
                            .trim() ||
                        "Tiada";


                    const hero1 =
                        document
                            .getElementById(
                                "hero1"
                            )
                            .value
                            .trim();


                    const hero2 =
                        document
                            .getElementById(
                                "hero2"
                            )
                            .value
                            .trim();


                    const hero3 =
                        document
                            .getElementById(
                                "hero3"
                            )
                            .value
                            .trim();


                    const heroList = [
                        hero1,
                        hero2,
                        hero3
                    ]
                    .filter(Boolean)
                    .join(", ") || "Tiada";


                    mesej.style.display =
                        "block";


                    mesej.innerHTML = `

                        ✅ <strong>
                        Tempahan berjaya dihantar!
                        </strong>

                        <br><br>

                        👤 Nama:
                        ${escapeHtml(nama)}

                        <br>

                        🎮 ID Game:
                        ${escapeHtml(gameid)}

                        <br>

                        🟢 Rank Permulaan:
                        ${escapeHtml(mula.rank)}
                        ⭐${mula.bintang}

                        <br>

                        🔵 Rank Akhir:
                        ${escapeHtml(akhir.rank)}
                        ⭐${akhir.bintang}

                        <br>

                        ⭐ Jumlah:
                        ${escapeHtml(jumlah)}

                        <br>

                        🎯 Request Role:
                        ${escapeHtml(role)}

                        <br>

                        🦸 Request Hero:
                        ${escapeHtml(heroList)}

                        <br>

                        💰 Harga:
                        <strong>
                        ${escapeHtml(total)}
                        </strong>
                    `;


                    // RESET FORM
                    form.reset();


                    document
                        .getElementById(
                            "bintangMula"
                        )
                        .innerHTML =
                        `<option value="">
                        -- Pilih Bintang --
                        </option>`;


                    document
                        .getElementById(
                            "bintangAkhir"
                        )
                        .innerHTML =
                        `<option value="">
                        -- Pilih Bintang --
                        </option>`;


                    document
                        .getElementById(
                            "bintangMulaImmortal"
                        )
                        .style.display =
                        "none";


                    document
                        .getElementById(
                            "bintangAkhirImmortal"
                        )
                        .style.display =
                        "none";


                    document
                        .getElementById(
                            "bintangMula"
                        )
                        .style.display =
                        "block";


                    document
                        .getElementById(
                            "bintangAkhir"
                        )
                        .style.display =
                        "block";


                    kiraHarga();


                    mesej.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });


                } else {

                    mesej.style.display =
                        "block";

                    mesej.innerHTML =
                        "❌ <strong>Gagal menghantar tempahan. Sila cuba lagi.</strong>";
                }


            } catch (error) {

                mesej.style.display =
                    "block";

                mesej.innerHTML = `
                    ❌ <strong>
                    Tiada sambungan.
                    </strong>
                    <br>
                    Sila semak internet dan cuba hantar semula.
                `;

            } finally {

                submitBtn.disabled =
                    false;

                submitBtn.textContent =
                    "🚀 SUBMIT TEMPAHAN";
            }
        }
    );


// ==========================================
// KESELAMATAN HTML
// ==========================================

function escapeHtml(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}


// ==========================================
// MULAKAN SISTEM
// ==========================================

kiraHarga();
