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

    // Epic
    if (kedudukan <= 25) {
        return 2;
    }

    // Legend
    if (kedudukan <= 50) {
        return 3;
    }

    // Mythic
    if (kedudukan <= 74) {
        return 5;
    }

    // Mythic Honor
    if (kedudukan <= 99) {
        return 6;
    }

    // Mythic Glory
    if (kedudukan <= 149) {
        return 7;
    }

    // Mythic Immortal
    return 8;
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


    // Paparkan rank

    document.getElementById("paparRankMula").textContent =
        rank || "-";


    // Reset input Immortal

    inputImmortal.style.display = "none";
    inputImmortal.required = false;
    inputImmortal.value = "";


    // Jika tiada rank

    if (!rank) {

        select.style.display = "block";
        select.required = true;

        kiraHarga();

        return;
    }


    // ======================================
    // MYTHIC IMMORTAL
    // INPUT MANUAL 100+
    // ======================================

    if (rank === "Mythic Immortal") {

        select.style.display = "none";
        select.required = false;

        inputImmortal.style.display = "block";
        inputImmortal.required = true;

        kiraHarga();

        return;
    }


    // ======================================
    // EPIC
    // ======================================

    if (rank.startsWith("Epic")) {

        for (let i = 1; i <= 5; i++) {

            const option =
                document.createElement("option");

            option.value = i;
            option.textContent = i + " ⭐";

            select.appendChild(option);
        }
    }


    // ======================================
    // LEGEND
    // ======================================

    else if (rank.startsWith("Legend")) {

        for (let i = 1; i <= 5; i++) {

            const option =
                document.createElement("option");

            option.value = i;
            option.textContent = i + " ⭐";

            select.appendChild(option);
        }
    }


    // ======================================
    // MYTHIC
    // ======================================

    else if (rank === "Mythic") {

        for (let i = 1; i <= 24; i++) {

            const option =
                document.createElement("option");

            option.value = i;
            option.textContent = i + " ⭐";

            select.appendChild(option);
        }
    }


    // ======================================
    // MYTHIC HONOR
    // ======================================

    else if (rank === "Mythic Honor") {

        for (let i = 25; i <= 49; i++) {

            const option =
                document.createElement("option");

            option.value = i;
            option.textContent = i + " ⭐";

            select.appendChild(option);
        }
    }


    // ======================================
    // MYTHIC GLORY
    // ======================================

    else if (rank === "Mythic Glory") {

        for (let i = 50; i <= 99; i++) {

            const option =
                document.createElement("option");

            option.value = i;
            option.textContent = i + " ⭐";

            select.appendChild(option);
        }
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


    // Paparkan rank

    document.getElementById("paparRankAkhir").textContent =
        rank || "-";


    // Reset input Immortal

    inputImmortal.style.display = "none";
    inputImmortal.required = false;
    inputImmortal.value = "";


    // Jika tiada rank

    if (!rank) {

        select.style.display = "block";
        select.required = true;

        kiraHarga();

        return;
    }


    // ======================================
    // MYTHIC IMMORTAL
    // INPUT MANUAL 100+
    // ======================================

    if (rank === "Mythic Immortal") {

        select.style.display = "none";
        select.required = false;

        inputImmortal.style.display = "block";
        inputImmortal.required = true;

        kiraHarga();

        return;
    }


    // ======================================
    // EPIC
    // ======================================

    if (rank.startsWith("Epic")) {

        for (let i = 1; i <= 5; i++) {

            const option =
                document.createElement("option");

            option.value = i;
            option.textContent = i + " ⭐";

            select.appendChild(option);
        }
    }


    // ======================================
    // LEGEND
    // ======================================

    else if (rank.startsWith("Legend")) {

        for (let i = 1; i <= 5; i++) {

            const option =
                document.createElement("option");

            option.value = i;
            option.textContent = i + " ⭐";

            select.appendChild(option);
        }
    }


    // ======================================
    // MYTHIC
    // ======================================

    else if (rank === "Mythic") {

        for (let i = 1; i <= 24; i++) {

            const option =
                document.createElement("option");

            option.value = i;
            option.textContent = i + " ⭐";

            select.appendChild(option);
        }
    }


    // ======================================
    // MYTHIC HONOR
    // ======================================

    else if (rank === "Mythic Honor") {

        for (let i = 25; i <= 49; i++) {

            const option =
                document.createElement("option");

            option.value = i;
            option.textContent = i + " ⭐";

            select.appendChild(option);
        }
    }


    // ======================================
    // MYTHIC GLORY
    // ======================================

    else if (rank === "Mythic Glory") {

        for (let i = 50; i <= 99; i++) {

            const option =
                document.createElement("option");

            option.value = i;
            option.textContent = i + " ⭐";

            select.appendChild(option);
        }
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
            document.getElementById("bintangMulaImmortal").value
        );
    }


    return Number(
        document.getElementById("bintangMula").value
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
            document.getElementById("bintangAkhirImmortal").value
        );
    }


    return Number(
        document.getElementById("bintangAkhir").value
    );
}


// ==========================================
// KIRA HARGA
// ==========================================

function kiraHarga() {

    const rankMula =
        document.getElementById("rankMula").value;

    const rankAkhir =
        document.getElementById("rankAkhir").value;

    const bintangMula =
        dapatkanBintangMula();

    const bintangAkhir =
        dapatkanBintangAkhir();


    // Paparkan rank

    document.getElementById("paparRankMula").textContent =
        rankMula || "-";

    document.getElementById("paparRankAkhir").textContent =
        rankAkhir || "-";


    // ======================================
    // JIKA BELUM LENGKAP
    // ======================================

    if (
        !rankMula ||
        !rankAkhir ||
        !bintangMula ||
        !bintangAkhir
    ) {

        document.getElementById("jumlahBintang").textContent =
            "0 ⭐";

        document.getElementById("hargaBintang").textContent =
            "RM0";

        document.getElementById("jumlahHarga").textContent =
            "RM0";

        document.getElementById("jumlahBintangData").value =
            "";

        document.getElementById("hargaBintangData").value =
            "";

        document.getElementById("jumlahHargaData").value =
            "";

        return;
    }


    // ======================================
    // DAPATKAN KEDUDUKAN
    // ======================================

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

        return;
    }


    // ======================================
    // PASTIKAN AKHIR LEBIH TINGGI
    // ======================================

    if (akhir <= mula) {

        document.getElementById("jumlahBintang").textContent =
            "Tidak sah";

        document.getElementById("hargaBintang").textContent =
            "RM0";

        document.getElementById("jumlahHarga").textContent =
            "RM0";

        document.getElementById("jumlahBintangData").value =
            "";

        document.getElementById("hargaBintangData").value =
            "";

        document.getElementById("jumlahHargaData").value =
            "";

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

        jumlahHarga +=
            dapatkanHargaDaripadaKedudukan(
                kedudukan
            );
    }


    // ======================================
    // HARGA PURATA
    // ======================================

    const hargaPurata =
        jumlahHarga / jumlahBintang;


    // ======================================
    // PAPAR HASIL
    // ======================================

    document.getElementById("jumlahBintang").textContent =
        jumlahBintang + " ⭐";

    document.getElementById("hargaBintang").textContent =
        "RM" + hargaPurata.toFixed(2);

    document.getElementById("jumlahHarga").textContent =
        "RM" + jumlahHarga.toFixed(2);


    // ======================================
    // DATA UNTUK FORMSPREE
    // ======================================

    document.getElementById("jumlahBintangData").value =
        jumlahBintang;

    document.getElementById("hargaBintangData").value =
        "RM" + hargaPurata.toFixed(2);

    document.getElementById("jumlahHargaData").value =
        "RM" + jumlahHarga.toFixed(2);
}


// ==========================================
// DAPATKAN ELEMEN FORM
// ==========================================

const form =
    document.getElementById("tempahanForm");

const mesej =
    document.getElementById("mesej");

const submitBtn =
    document.getElementById("submitBtn");


// ==========================================
// SUBMIT TEMPAHAN
// ==========================================

form.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        // ======================================
        // DATA ASAS
        // ======================================

        const nama =
            document.getElementById("nama").value.trim();

        const gameid =
            document.getElementById("gameid").value.trim();

        const telefon =
            document.getElementById("telefon").value.trim();


        const rankMula =
            document.getElementById("rankMula").value;

        const rankAkhir =
            document.getElementById("rankAkhir").value;


        const bintangMula =
            dapatkanBintangMula();

        const bintangAkhir =
            dapatkanBintangAkhir();


        const role =
            document.getElementById("role").value;


        const hero1 =
            document.getElementById("hero1").value.trim();

        const hero2 =
            document.getElementById("hero2").value.trim();

        const hero3 =
            document.getElementById("hero3").value.trim();


        // ======================================
        // SEMAK DATA
        // ======================================

        if (!nama) {

            alert("Sila masukkan nama.");

            return;
        }


        if (!gameid) {

            alert("Sila masukkan ID Game.");

            return;
        }


        if (!telefon) {

            alert("Sila masukkan nombor telefon.");

            return;
        }


        if (!rankMula) {

            alert("Sila pilih Rank Permulaan.");

            return;
        }


        if (!rankAkhir) {

            alert("Sila pilih Rank Akhir.");

            return;
        }


        if (!bintangMula) {

            alert("Sila pilih bintang permulaan.");

            return;
        }


        if (!bintangAkhir) {

            alert("Sila pilih bintang akhir.");

            return;
        }


        if (!role) {

            alert("Sila pilih Request Role.");

            return;
        }


        // ======================================
        // DAPATKAN NILAI RANK
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
        // PASTIKAN AKHIR > MULA
        // ======================================

        if (nilaiAkhir <= nilaiMula) {

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
            jumlahHarga / jumlahBintang;


        // ======================================
        // MASUKKAN DATA KE HIDDEN INPUT
        // ======================================

        document.getElementById(
            "jumlahBintangData"
        ).value = jumlahBintang;


        document.getElementById(
            "hargaBintangData"
        ).value =
            "RM" + hargaPurata.toFixed(2);


        document.getElementById(
            "jumlahHargaData"
        ).value =
            "RM" + jumlahHarga.toFixed(2);


        // ======================================
        // PAPAR STATUS MENGHANTAR
        // ======================================

        submitBtn.disabled = true;

        submitBtn.textContent =
            "⏳ MENGHANTAR...";


        // ======================================
        // ABORT CONTROLLER
        // ELak FETCH TERGANTUNG SELAMANYA
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

            // ==================================
            // AMBIL DATA FORM
            // ==================================

            const formData =
                new FormData(form);


            // ==================================
            // HANTAR KE FORMSPREE
            // ==================================

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

                throw new Error(
                    "Gagal menghantar tempahan."
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


                    <p style="font-size:14px;">

                        Tekan nombor di atas untuk terus
                        masuk ke WhatsApp.

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

                </div>

            `;


            // ==================================
            // FORM KEKAL
            // JANGAN RESET FORM
            // ==================================

            submitBtn.disabled = false;

            submitBtn.textContent =
                "🚀 SUBMIT TEMPAHAN";


            // ==================================
            // SCROLL KE RESIT
            // ==================================

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


        // ======================================
        // JIKA GAGAL
        // ======================================

        catch (error) {

            clearTimeout(timeout);

            console.error(error);


            let teksError =
                "Sila cuba lagi.";


            // Jika timeout

            if (
                error.name ===
                "AbortError"
            ) {

                teksError =
                    "Sambungan mengambil masa terlalu lama. Sila cuba lagi.";
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

                    ❌

                    <strong>
                        Gagal menghantar tempahan.
                    </strong>


                    <p>
                        ${teksError}
                    </p>

                </div>

            `;


            // ==================================
            // AKTIFKAN SEMULA BUTTON
            // ==================================

            submitBtn.disabled = false;

            submitBtn.textContent =
                "🚀 SUBMIT TEMPAHAN";


            // ==================================
            // FORM TETAP KEKAL
            // ==================================

        }

    }
);
