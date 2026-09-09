// ==========================================
// HARGA SETIAP RANK
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
// NILAI ASAS RANK
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
// DAPATKAN NILAI BINTANG
// ==========================================

function dapatkanNilaiBintang(rank, bintang) {

    if (!rank || bintang === "" || bintang === null) {
        return null;
    }

    const stars = Number(bintang);

    if (isNaN(stars)) {
        return null;
    }


    // ======================================
    // EPIC & LEGEND
    // ======================================

    if (Object.prototype.hasOwnProperty.call(nilaiRank, rank)) {

        if (stars < 1 || stars > 5) {
            return null;
        }

        return nilaiRank[rank] + stars;
    }


    // ======================================
    // MYTHIC
    // ======================================

    if (rank === "Mythic") {

        if (stars < 1 || stars > 24) {
            return null;
        }

        return 50 + stars;
    }


    // ======================================
    // MYTHIC HONOR
    // ======================================

    if (rank === "Mythic Honor") {

        if (stars < 25 || stars > 49) {
            return null;
        }

        return 50 + stars;
    }


    // ======================================
    // MYTHIC GLORY
    // ======================================

    if (rank === "Mythic Glory") {

        if (stars < 50 || stars > 99) {
            return null;
        }

        return 50 + stars;
    }


    // ======================================
    // MYTHIC IMMORTAL
    // ======================================

    if (rank === "Mythic Immortal") {

        if (stars < 100) {
            return null;
        }

        return 150 + (stars - 100);
    }


    return null;
}


// ==========================================
// HARGA MENGIKUT KEDUDUKAN GLOBAL
// ==========================================

function dapatkanHargaDaripadaKedudukan(kedudukan) {

    // EPIC
    // Kedudukan 1 - 25
    if (kedudukan <= 25) {
        return 2;
    }


    // LEGEND
    // Kedudukan 26 - 50
    if (kedudukan <= 50) {
        return 3;
    }


    // MYTHIC
    // Kedudukan 51 - 74
    if (kedudukan <= 74) {
        return 5;
    }


    // MYTHIC HONOR
    // Kedudukan 75 - 99
    if (kedudukan <= 99) {
        return 6;
    }


    // MYTHIC GLORY
    // Kedudukan 100 - 149
    if (kedudukan <= 149) {
        return 7;
    }


    // MYTHIC IMMORTAL
    // Kedudukan 150+
    return 8;
}


// ==========================================
// TAMBAH PILIHAN BINTANG
// ==========================================

function tambahPilihanBintang(select, mula, akhir) {

    for (let i = mula; i <= akhir; i++) {

        const option = document.createElement("option");

        option.value = i;

        option.textContent = i + " ⭐";

        select.appendChild(option);
    }
}


// ==========================================
// KEMASKINI BINTANG PERMULAAN
// ==========================================

function kemaskiniBintangMula() {

    const rank =
        document.getElementById("rankMula").value;

    const select =
        document.getElementById("bintangMula");

    const inputImmortal =
        document.getElementById("bintangMulaImmortal");


    // Kosongkan pilihan lama
    select.innerHTML =
        '<option value="">-- Pilih Bintang --</option>';


    // Papar rank
    document.getElementById("paparRankMula").textContent =
        rank || "-";


    // Reset input Immortal
    inputImmortal.style.display = "none";

    inputImmortal.required = false;

    inputImmortal.value = "";


    // Jika belum pilih rank
    if (!rank) {

        select.style.display = "block";

        select.required = true;

        kiraHarga();

        return;
    }


    // ======================================
    // MYTHIC IMMORTAL
    // ======================================

    if (rank === "Mythic Immortal") {

        select.style.display = "none";

        select.required = false;

        inputImmortal.style.display = "block";

        inputImmortal.required = true;

        inputImmortal.min = 100;

        kiraHarga();

        return;
    }


    // ======================================
    // EPIC
    // ======================================

    if (rank.startsWith("Epic")) {

        tambahPilihanBintang(
            select,
            1,
            5
        );
    }


    // ======================================
    // LEGEND
    // ======================================

    else if (rank.startsWith("Legend")) {

        tambahPilihanBintang(
            select,
            1,
            5
        );
    }


    // ======================================
    // MYTHIC
    // ======================================

    else if (rank === "Mythic") {

        tambahPilihanBintang(
            select,
            1,
            24
        );
    }


    // ======================================
    // MYTHIC HONOR
    // ======================================

    else if (rank === "Mythic Honor") {

        tambahPilihanBintang(
            select,
            25,
            49
        );
    }


    // ======================================
    // MYTHIC GLORY
    // ======================================

    else if (rank === "Mythic Glory") {

        tambahPilihanBintang(
            select,
            50,
            99
        );
    }


    select.style.display = "block";

    select.required = true;

    kiraHarga();
}


// ==========================================
// KEMASKINI BINTANG AKHIR
// ==========================================

function kemaskiniBintangAkhir() {

    const rank =
        document.getElementById("rankAkhir").value;

    const select =
        document.getElementById("bintangAkhir");

    const inputImmortal =
        document.getElementById("bintangAkhirImmortal");


    // Kosongkan pilihan lama
    select.innerHTML =
        '<option value="">-- Pilih Bintang --</option>';


    // Papar rank
    document.getElementById("paparRankAkhir").textContent =
        rank || "-";


    // Reset input Immortal
    inputImmortal.style.display = "none";

    inputImmortal.required = false;

    inputImmortal.value = "";


    // Jika belum pilih rank
    if (!rank) {

        select.style.display = "block";

        select.required = true;

        kiraHarga();

        return;
    }


    // ======================================
    // MYTHIC IMMORTAL
    // ======================================

    if (rank === "Mythic Immortal") {

        select.style.display = "none";

        select.required = false;

        inputImmortal.style.display = "block";

        inputImmortal.required = true;

        inputImmortal.min = 100;

        kiraHarga();

        return;
    }


    // ======================================
    // EPIC
    // ======================================

    if (rank.startsWith("Epic")) {

        tambahPilihanBintang(
            select,
            1,
            5
        );
    }


    // ======================================
    // LEGEND
    // ======================================

    else if (rank.startsWith("Legend")) {

        tambahPilihanBintang(
            select,
            1,
            5
        );
    }


    // ======================================
    // MYTHIC
    // ======================================

    else if (rank === "Mythic") {

        tambahPilihanBintang(
            select,
            1,
            24
        );
    }


    // ======================================
    // MYTHIC HONOR
    // ======================================

    else if (rank === "Mythic Honor") {

        tambahPilihanBintang(
            select,
            25,
            49
        );
    }


    // ======================================
    // MYTHIC GLORY
    // ======================================

    else if (rank === "Mythic Glory") {

        tambahPilihanBintang(
            select,
            50,
            99
        );
    }


    select.style.display = "block";

    select.required = true;

    kiraHarga();
}


// ==========================================
// DAPATKAN BINTANG PERMULAAN
// ==========================================

function dapatkanBintangMula() {

    const rank =
        document.getElementById("rankMula").value;


    if (rank === "Mythic Immortal") {

        return Number(
            document.getElementById(
                "bintangMulaImmortal"
            ).value
        );
    }


    return Number(
        document.getElementById(
            "bintangMula"
        ).value
    );
}


// ==========================================
// DAPATKAN BINTANG AKHIR
// ==========================================

function dapatkanBintangAkhir() {

    const rank =
        document.getElementById("rankAkhir").value;


    if (rank === "Mythic Immortal") {

        return Number(
            document.getElementById(
                "bintangAkhirImmortal"
            ).value
        );
    }


    return Number(
        document.getElementById(
            "bintangAkhir"
        ).value
    );
}


// ==========================================
// RESET PAPARAN HARGA
// ==========================================

function resetPaparanHarga() {

    document.getElementById(
        "jumlahBintang"
    ).textContent = "0 ⭐";


    document.getElementById(
        "hargaBintang"
    ).textContent = "RM0";


    document.getElementById(
        "jumlahHarga"
    ).textContent = "RM0";


    document.getElementById(
        "jumlahBintangData"
    ).value = "";


    document.getElementById(
        "hargaBintangData"
    ).value = "";


    document.getElementById(
        "jumlahHargaData"
    ).value = "";
}


// ==========================================
// KIRA HARGA
// ==========================================

function kiraHarga() {

    const rankMula =
        document.getElementById(
            "rankMula"
        ).value;


    const rankAkhir =
        document.getElementById(
            "rankAkhir"
        ).value;


    const bintangMula =
        dapatkanBintangMula();


    const bintangAkhir =
        dapatkanBintangAkhir();


    // Papar rank
    document.getElementById(
        "paparRankMula"
    ).textContent =
        rankMula || "-";


    document.getElementById(
        "paparRankAkhir"
    ).textContent =
        rankAkhir || "-";


    // Belum lengkap
    if (
        !rankMula ||
        !rankAkhir ||
        !bintangMula ||
        !bintangAkhir
    ) {

        resetPaparanHarga();

        return;
    }


    // Dapatkan nilai
    const mula =
        dapatkanNilaiBintang(
            rankMula,
            bintangMula
        );


    const akhir =
        dapatkanNilaiBintang(
            rankAkhir,
            bintangAkhir
        );


    if (
        mula === null ||
        akhir === null
    ) {

        resetPaparanHarga();

        return;
    }


    // Rank akhir mesti lebih tinggi
    if (akhir <= mula) {

        document.getElementById(
            "jumlahBintang"
        ).textContent =
            "Tidak sah";


        document.getElementById(
            "hargaBintang"
        ).textContent =
            "RM0";


        document.getElementById(
            "jumlahHarga"
        ).textContent =
            "RM0";


        document.getElementById(
            "jumlahBintangData"
        ).value = "";


        document.getElementById(
            "hargaBintangData"
        ).value = "";


        document.getElementById(
            "jumlahHargaData"
        ).value = "";


        return;
    }


    // ======================================
    // KIRA HARGA SATU-SATU BINTANG
    // ======================================

    let jumlahHarga = 0;

    const jumlahBintang =
        akhir - mula;


    for (
        let kedudukan = mula + 1;
        kedudukan <= akhir;
        kedudukan++
    ) {

        const harga =
            dapatkanHargaDaripadaKedudukan(
                kedudukan
            );


        jumlahHarga += harga;
    }


    // Harga purata
    const hargaPurata =
        jumlahHarga / jumlahBintang;


    // ======================================
    // PAPAR HASIL
    // ======================================

    document.getElementById(
        "jumlahBintang"
    ).textContent =
        jumlahBintang + " ⭐";


    document.getElementById(
        "hargaBintang"
    ).textContent =
        "RM" +
        hargaPurata.toFixed(2);


    document.getElementById(
        "jumlahHarga"
    ).textContent =
        "RM" +
        jumlahHarga.toFixed(2);


    // ======================================
    // DATA FORMSPREE
    // ======================================

    document.getElementById(
        "jumlahBintangData"
    ).value =
        jumlahBintang;


    document.getElementById(
        "hargaBintangData"
    ).value =
        "RM" +
        hargaPurata.toFixed(2);


    document.getElementById(
        "jumlahHargaData"
    ).value =
        "RM" +
        jumlahHarga.toFixed(2);
}


// ==========================================
// ESCAPE HTML
// Elak input pengguna masuk sebagai HTML
// ==========================================

function escapeHtml(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ==========================================
// SUBMIT TEMPAHAN
// ==========================================

const form =
    document.getElementById(
        "tempahanForm"
    );


const mesej =
    document.getElementById(
        "mesej"
    );


const submitBtn =
    document.getElementById(
        "submitBtn"
    );


// ==========================================
// FORM SUBMIT
// ==========================================

form.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        // ======================================
        // DATA ASAS
        // ======================================

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


        const rankMula =
            document.getElementById(
                "rankMula"
            ).value;


        const rankAkhir =
            document.getElementById(
                "rankAkhir"
            ).value;


        const bintangMula =
            dapatkanBintangMula();


        const bintangAkhir =
            dapatkanBintangAkhir();


        const role =
            document.getElementById(
                "role"
            ).value;


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


        // ======================================
        // SEMAK DATA
        // ======================================

        if (!nama) {

            alert(
                "Sila masukkan nama."
            );

            return;
        }


        if (!gameid) {

            alert(
                "Sila masukkan ID Game."
            );

            return;
        }


        if (!telefon) {

            alert(
                "Sila masukkan nombor telefon."
            );

            return;
        }


        if (!rankMula) {

            alert(
                "Sila pilih Rank Permulaan."
            );

            return;
        }


        if (!rankAkhir) {

            alert(
                "Sila pilih Rank Akhir."
            );

            return;
        }


        if (!bintangMula) {

            alert(
                "Sila pilih bintang permulaan."
            );

            return;
        }


        if (!bintangAkhir) {

            alert(
                "Sila pilih bintang akhir."
            );

            return;
        }


        // ======================================
        // NILAI RANK
        // ======================================

        const nilaiMula =
            dapatkanNilaiBintang(
                rankMula,
                bintangMula
            );


        const nilaiAkhir =
            dapatkanNilaiBintang(
                rankAkhir,
                bintangAkhir
            );


        if (
            nilaiMula === null ||
            nilaiAkhir === null
        ) {

            alert(
                "Pilihan rank atau bintang tidak sah."
            );

            return;
        }


        // ======================================
        // PASTIKAN AKHIR LEBIH TINGGI
        // ======================================

        if (
            nilaiAkhir <= nilaiMula
        ) {

            alert(
                "Rank Akhir mesti lebih tinggi daripada Rank Permulaan."
            );

            return;
        }


        // ======================================
        // KIRA JUMLAH
        // ======================================

        const jumlahBintang =
            nilaiAkhir - nilaiMula;


        let jumlahHarga = 0;


        for (
            let kedudukan = nilaiMula + 1;
            kedudukan <= nilaiAkhir;
            kedudukan++
        ) {

            jumlahHarga +=
                dapatkanHargaDaripadaKedudukan(
                    kedudukan
                );
        }


        const hargaPurata =
            jumlahHarga /
            jumlahBintang;


        // ======================================
        // SIMPAN DATA HIDDEN
        // ======================================

        document.getElementById(
            "jumlahBintangData"
        ).value =
            jumlahBintang;


        document.getElementById(
            "hargaBintangData"
        ).value =
            "RM" +
            hargaPurata.toFixed(2);


        document.getElementById(
            "jumlahHargaData"
        ).value =
            "RM" +
            jumlahHarga.toFixed(2);


        // ======================================
        // BUTANG MENGHANTAR
        // ======================================

        submitBtn.disabled = true;

        submitBtn.textContent =
            "⏳ MENGHANTAR...";


        // ======================================
        // FORMSPREE
        // ======================================

        const formData =
            new FormData(form);


        // ======================================
        // TIMEOUT 15 SAAT
        // Supaya tidak sangkut selama-lamanya
        // ======================================

        const controller =
            new AbortController();


        const timeout =
            setTimeout(
                function() {

                    controller.abort();

                },
                15000
            );


        try {

            const response =
                await fetch(
                    form.action,
                    {
                        method: "POST",

                        body: formData,

                        headers: {
                            "Accept":
                                "application/json"
                        },

                        signal:
                            controller.signal
                    }
                );


            // Hentikan timer
            clearTimeout(timeout);


            // ==================================
            // SEMAK RESPONSE
            // ==================================

            if (!response.ok) {

                let errorMessage =
                    "Gagal menghantar tempahan.";

                try {

                    const data =
                        await response.json();

                    if (
                        data &&
                        data.errors &&
                        data.errors.length > 0
                    ) {

                        errorMessage =
                            data.errors
                                .map(
                                    error =>
                                        error.message
                                )
                                .join(", ");
                    }

                } catch (jsonError) {

                    // Abaikan jika response
                    // bukan JSON
                }


                throw new Error(
                    errorMessage
                );
            }


            // ==================================
            // WHATSAPP
            // ==================================

            const nomborWhatsApp =
                "601117957091";


            const mesejWhatsApp =
                encodeURIComponent(
                    "Assalamualaikum, saya sudah membuat tempahan joki. Saya ingin menghantar bukti pembayaran."
                );


            const linkWhatsApp =
                `https://wa.me/${nomborWhatsApp}?text=${mesejWhatsApp}`;


            // ==================================
            // DATA UNTUK RESIT
            // ==================================

            const namaSafe =
                escapeHtml(nama);


            const gameidSafe =
                escapeHtml(gameid);


            const telefonSafe =
                escapeHtml(telefon);


            const rankMulaSafe =
                escapeHtml(rankMula);


            const rankAkhirSafe =
                escapeHtml(rankAkhir);


            const roleSafe =
                escapeHtml(role);


            const hero1Safe =
                escapeHtml(hero1 || "-");


            const hero2Safe =
                escapeHtml(hero2 || "-");


            const hero3Safe =
                escapeHtml(hero3 || "-");


            // ==================================
            // PAPAR RESIT
            // ==================================

            mesej.innerHTML = `

                <div
                    class="receipt-success"
                    style="
                        margin-top:20px;
                        padding:20px;
                        border-radius:12px;
                        background:#f0fff4;
                        border:2px solid #25D366;
                        text-align:center;
                    "
                >

                    <h3>
                        ✅ TEMPAHAN BERJAYA!
                    </h3>


                    <p>
                        Terima kasih kerana membuat
                        tempahan di G10 STORE.
                    </p>


                    <hr>


                    <h4>
                        📋 MAKLUMAT TEMPAHAN
                    </h4>


                    <p>
                        👤 Nama:
                        <strong>
                            ${namaSafe}
                        </strong>
                    </p>


                    <p>
                        🎮 ID Game:
                        <strong>
                            ${gameidSafe}
                        </strong>
                    </p>


                    <p>
                        📱 Telefon:
                        <strong>
                            ${telefonSafe}
                        </strong>
                    </p>


                    <p>
                        🟢 Rank Mula:
                        <strong>
                            ${rankMulaSafe}
                        </strong>
                    </p>


                    <p>
                        🔵 Rank Akhir:
                        <strong>
                            ${rankAkhirSafe}
                        </strong>
                    </p>


                    <p>
                        ⭐ Jumlah Bintang:
                        <strong>
                            ${jumlahBintang}
                        </strong>
                    </p>


                    <p>
                        🎯 Role:
                        <strong>
                            ${roleSafe}
                        </strong>
                    </p>


                    <p>
                        🦸 Hero 1:
                        <strong>
                            ${hero1Safe}
                        </strong>
                    </p>


                    <p>
                        🦸 Hero 2:
                        <strong>
                            ${hero2Safe}
                        </strong>
                    </p>


                    <p>
                        🦸 Hero 3:
                        <strong>
                            ${hero3Safe}
                        </strong>
                    </p>


                    <hr>


                    <p>
                        💰
                        <strong>
                            SILA BUAT PEMBAYARAN KE:
                        </strong>
                    </p>


                    <a
                        href="${linkWhatsApp}"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="
                            display:inline-block;
                            font-size:24px;
                            font-weight:bold;
                            color:#25D366;
                            text-decoration:none;
                            margin:10px 0;
                        "
                    >
                        📱 01117957091
                    </a>


                    <p
                        style="
                            font-size:14px;
                        "
                    >
                        Tekan nombor di atas
                        untuk terus masuk ke WhatsApp.
                    </p>


                    <hr>


                    <p>
                        📸
                        <strong>
                            Selepas membuat pembayaran,
                        </strong>
                        sila screenshot resit pembayaran
                        dan hantar kepada admin melalui WhatsApp.
                    </p>


                    <p>
                        ⭐ Jumlah Bintang:
                        <strong>
                            ${jumlahBintang}
                        </strong>
                    </p>


                    <p>
                        💵 Jumlah Harga:
                        <strong>
                            RM${jumlahHarga.toFixed(2)}
                        </strong>
                    </p>


                    <p
                        style="
                            margin-top:15px;
                            font-size:13px;
                            color:#555;
                        "
                    >
                        ℹ️ Borang anda dikekalkan.
                        Anda boleh melihat semula
                        maklumat tempahan di atas.
                    </p>

                </div>

            `;


            // ==================================
            // PENTING:
            // JANGAN GUNA form.reset()
            //
            // Semua pilihan pengguna
            // KEKAL DI DALAM BORANG
            // ==================================


            // Aktifkan semula butang
            submitBtn.disabled = false;

            submitBtn.textContent =
                "🚀 SUBMIT TEMPAHAN";


            // Scroll ke resit
            setTimeout(
                function() {

                    mesej.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                },
                100
            );


        } catch (error) {

            // ==================================
            // HENTIKAN TIMER
            // ==================================

            clearTimeout(timeout);


            console.error(
                "Ralat submit:",
                error
            );


            // ==================================
            // MESEJ ERROR
            // ==================================

            let teksError =
                "Sila cuba lagi.";


            if (
                error.name ===
                "AbortError"
            ) {

                teksError =
                    "Sambungan mengambil masa terlalu lama. Sila semak internet dan cuba lagi.";

            } else if (
                error.message
            ) {

                teksError =
                    error.message;
            }


            mesej.innerHTML = `

                <div
                    style="
                        margin-top:20px;
                        padding:15px;
                        border-radius:10px;
                        background:#fff0f0;
                        border:2px solid red;
                        text-align:center;
                    "
                >

                    <h3>
                        ❌ GAGAL MENGHANTAR
                    </h3>


                    <p>
                        ${escapeHtml(teksError)}
                    </p>


                    <p>
                        Maklumat borang anda
                        masih dikekalkan.
                    </p>


                    <p>
                        Sila cuba tekan
                        <strong>
                            SUBMIT TEMPAHAN
                        </strong>
                        sekali lagi.
                    </p>

                </div>

            `;


            // ==================================
            // AKTIFKAN SEMULA BUTANG
            // ==================================

            submitBtn.disabled = false;

            submitBtn.textContent =
                "🚀 SUBMIT TEMPAHAN";


            // Scroll ke error
            setTimeout(
                function() {

                    mesej.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                },
                100
            );
        }

    }
);
