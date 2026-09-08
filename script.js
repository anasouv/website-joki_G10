const hargaRank = {
    "Epic": 2,
    "Legend": 3,
    "Mythic": 5,
    "Mythic Honor": 6,
    "Mythic Glory": 7,
    "Mythic Immortal": 8
};

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
// TUKAR RANK + BINTANG KEPADA NILAI
// ==========================================

function dapatkanNilaiBintang(rank, bintang) {
    const nombor = Number(bintang);

    if (!rank || Number.isNaN(nombor)) {
        return null;
    }

    if (nilaiRank[rank] !== undefined) {
        return nilaiRank[rank] + nombor;
    }

    if (rank === "Mythic") {
        return 50 + nombor;
    }

    if (rank === "Mythic Honor") {
        return 50 + nombor;
    }

    if (rank === "Mythic Glory") {
        return 50 + nombor;
    }

    // IMMORTAL
    // Immortal 100 = kedudukan 150
    // Immortal 101 = kedudukan 151
    // Immortal 200 = kedudukan 250
    if (rank === "Mythic Immortal") {
        if (nombor < 100) {
            return null;
        }

        return 150 + (nombor - 100);
    }

    return null;
}


// ==========================================
// HARGA SETIAP KEDUDUKAN
// ==========================================

function dapatkanHargaDaripadaKedudukan(posisi) {

    // Epic
    if (posisi <= 25) {
        return 2;
    }

    // Legend
    if (posisi <= 50) {
        return 3;
    }

    // Mythic 1-24
    if (posisi <= 74) {
        return 5;
    }

    // Mythic Honor 25-49
    if (posisi <= 99) {
        return 6;
    }

    // Mythic Glory 50-99
    if (posisi <= 149) {
        return 7;
    }

    // Mythic Immortal 100+
    return 8;
}


// ==========================================
// BUAT PILIHAN BINTANG
// ==========================================

function buatPilihanBintang(select, min, max) {

    select.innerHTML = `
        <option value="">-- Pilih Bintang --</option>
    `;

    for (let i = min; i <= max; i++) {

        const option = document.createElement("option");

        option.value = i;
        option.textContent = `${i} ⭐`;

        select.appendChild(option);
    }
}


// ==========================================
// KEMASKINI RANK PERMULAAN
// ==========================================

function kemaskiniBintangMula() {

    const rank =
        document.getElementById("rankMula").value;

    const select =
        document.getElementById("bintangMula");

    const inputImmortal =
        document.getElementById("bintangMulaImmortal");


    // Reset keadaan
    select.style.display = "block";
    select.required = false;

    inputImmortal.style.display = "none";
    inputImmortal.required = false;


    if (!rank) {

        select.innerHTML = `
            <option value="">-- Pilih Bintang --</option>
        `;

        kiraHarga();
        return;
    }


    // EPIC
    if (rank.startsWith("Epic")) {

        buatPilihanBintang(
            select,
            1,
            5
        );

        select.required = true;
    }


    // LEGEND
    else if (rank.startsWith("Legend")) {

        buatPilihanBintang(
            select,
            1,
            5
        );

        select.required = true;
    }


    // MYTHIC
    else if (rank === "Mythic") {

        buatPilihanBintang(
            select,
            1,
            24
        );

        select.required = true;
    }


    // MYTHIC HONOR
    else if (rank === "Mythic Honor") {

        buatPilihanBintang(
            select,
            25,
            49
        );

        select.required = true;
    }


    // MYTHIC GLORY
    else if (rank === "Mythic Glory") {

        buatPilihanBintang(
            select,
            50,
            99
        );

        select.required = true;
    }


    // MYTHIC IMMORTAL
    else if (rank === "Mythic Immortal") {

        select.style.display = "none";
        select.required = false;
        select.value = "";

        inputImmortal.style.display = "block";
        inputImmortal.required = true;

        inputImmortal.value = "";
    }


    kiraHarga();
}


// ==========================================
// KEMASKINI RANK AKHIR
// ==========================================

function kemaskiniBintangAkhir() {

    const rank =
        document.getElementById("rankAkhir").value;

    const select =
        document.getElementById("bintangAkhir");

    const inputImmortal =
        document.getElementById("bintangAkhirImmortal");


    // Reset keadaan
    select.style.display = "block";
    select.required = false;

    inputImmortal.style.display = "none";
    inputImmortal.required = false;


    if (!rank) {

        select.innerHTML = `
            <option value="">-- Pilih Bintang --</option>
        `;

        kiraHarga();
        return;
    }


    // EPIC
    if (rank.startsWith("Epic")) {

        buatPilihanBintang(
            select,
            1,
            5
        );

        select.required = true;
    }


    // LEGEND
    else if (rank.startsWith("Legend")) {

        buatPilihanBintang(
            select,
            1,
            5
        );

        select.required = true;
    }


    // MYTHIC
    else if (rank === "Mythic") {

        buatPilihanBintang(
            select,
            1,
            24
        );

        select.required = true;
    }


    // MYTHIC HONOR
    else if (rank === "Mythic Honor") {

        buatPilihanBintang(
            select,
            25,
            49
        );

        select.required = true;
    }


    // MYTHIC GLORY
    else if (rank === "Mythic Glory") {

        buatPilihanBintang(
            select,
            50,
            99
        );

        select.required = true;
    }


    // MYTHIC IMMORTAL
    else if (rank === "Mythic Immortal") {

        select.style.display = "none";
        select.required = false;
        select.value = "";

        inputImmortal.style.display = "block";
        inputImmortal.required = true;

        inputImmortal.value = "";
    }


    kiraHarga();
}


// ==========================================
// DATA RANK MULA
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

        bintang =
            Number(
                document.getElementById(
                    "bintangMulaImmortal"
                ).value
            );

        if (
            Number.isNaN(bintang) ||
            bintang < 100
        ) {
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


    // RANK BIASA
    bintang =
        Number(
            document.getElementById(
                "bintangMula"
            ).value
        );

    if (
        Number.isNaN(bintang) ||
        bintang <= 0
    ) {
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
// DATA RANK AKHIR
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

        bintang =
            Number(
                document.getElementById(
                    "bintangAkhirImmortal"
                ).value
            );

        if (
            Number.isNaN(bintang) ||
            bintang < 100
        ) {
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


    // RANK BIASA
    bintang =
        Number(
            document.getElementById(
                "bintangAkhir"
            ).value
        );

    if (
        Number.isNaN(bintang) ||
        bintang <= 0
    ) {
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


    const mula =
        dapatkanDataMula();

    const akhir =
        dapatkanDataAkhir();


    // Papar rank
    paparRankMula.textContent =
        mula
            ? `${mula.rank} ⭐${mula.bintang}`
            : "-";

    paparRankAkhir.textContent =
        akhir
            ? `${akhir.rank} ⭐${akhir.bintang}`
            : "-";


    // Belum lengkap
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


    // Akhir mesti lebih tinggi
    if (akhir.nilai <= mula.nilai) {

        hargaBintang.textContent =
            "RM0";

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


    let total = 0;
    let jumlah = 0;


    // Kira satu per satu bintang
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
// SUBMIT BORANG
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


            const telefon =
                document.getElementById(
                    "telefon"
                ).value.trim();


            const mula =
                dapatkanDataMula();

            const akhir =
                dapatkanDataAkhir();


            // NAMA
            if (nama === "") {

                alert(
                    "Sila masukkan nama."
                );

                return;
            }


            // ID GAME
            if (gameid === "") {

                alert(
                    "Sila masukkan ID Game."
                );

                return;
            }


            // TELEFON
            if (telefon === "") {

                alert(
                    "Sila masukkan nombor telefon."
                );

                return;
            }


            // RANK MULA
            if (!mula) {

                alert(
                    "Sila pilih rank dan bintang permulaan."
                );

                return;
            }


            // RANK AKHIR
            if (!akhir) {

                alert(
                    "Sila pilih rank dan bintang akhir."
                );

                return;
            }


            // AKHIR MESTI LEBIH TINGGI
            if (akhir.nilai <= mula.nilai) {

                alert(
                    "Rank/Bintang akhir mesti lebih tinggi daripada permulaan."
                );

                return;
            }


            // KIRA HARGA
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
                                new FormData(
                                    form
                                ),

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    const total =
                        document.getElementById(
                            "jumlahHarga"
                        ).textContent;


                    const jumlah =
                        document.getElementById(
                            "jumlahBintang"
                        ).textContent;


                    const role =
                        document.getElementById(
                            "role"
                        ).value.trim()
                        || "Tiada";


                    const hero1 =
                        document.getElementById(
                            "hero1"
                        ).value.trim();


                    const hero2 =
                        document.getElementById(
                            "hero2"
                        ).value.trim();


                    const hero3 =
                        document.getElementById(
                            "hero3"
                        ).value.trim();


                    const heroList =
                        [
                            hero1,
                            hero2,
                            hero3
                        ]
                        .filter(Boolean)
                        .join(", ")
                        || "Tiada";


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

                        📱 Nombor Telefon:
                        ${escapeHtml(telefon)}

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


                    // RESET BORANG
                    form.reset();


                    document.getElementById(
                        "bintangMula"
                    ).innerHTML = `
                        <option value="">
                            -- Pilih Bintang --
                        </option>
                    `;


                    document.getElementById(
                        "bintangAkhir"
                    ).innerHTML = `
                        <option value="">
                            -- Pilih Bintang --
                        </option>
                    `;


                    document.getElementById(
                        "bintangMula"
                    ).style.display =
                        "block";


                    document.getElementById(
                        "bintangAkhir"
                    ).style.display =
                        "block";


                    document.getElementById(
                        "bintangMula"
                    ).required = true;


                    document.getElementById(
                        "bintangAkhir"
                    ).required = true;


                    document.getElementById(
                        "bintangMulaImmortal"
                    ).style.display =
                        "none";


                    document.getElementById(
                        "bintangAkhirImmortal"
                    ).style.display =
                        "none";


                    document.getElementById(
                        "bintangMulaImmortal"
                    ).required =
                        false;


                    document.getElementById(
                        "bintangAkhirImmortal"
                    ).required =
                        false;


                    kiraHarga();


                    mesej.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });


                } else {

                    mesej.style.display =
                        "block";

                    mesej.innerHTML = `
                        ❌ <strong>
                        Gagal menghantar tempahan.
                        Sila cuba lagi.
                        </strong>
                    `;
                }


            } catch (error) {

                mesej.style.display =
                    "block";

                mesej.innerHTML = `
                    ❌ <strong>
                    Tiada sambungan.
                    </strong>

                    <br>

                    Sila semak internet
                    dan cuba hantar semula.
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
// ESCAPE HTML
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
// MULA
// ==========================================

kiraHarga();
