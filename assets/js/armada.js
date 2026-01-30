document.addEventListener("DOMContentLoaded", function () {
    const armadaData = {
        commuter: {
            title: "Hiace Commuter",
            desc: "Hiace Commuter berkapasitas besar dan nyaman untuk perjalanan jauh, cocok untuk wisata atau rombongan keluarga.",
            img: "assets/img/armada/commuter.png"
        },
        premio: {
            title: "Hiace Premio",
            desc: "Hiace Premio memberikan kemewahan dan kenyamanan premium dengan interior modern untuk perjalanan anda.",
            img: "assets/img/armada/premio.png"
        }
    };

    const buttons = document.querySelectorAll("#armadaList button");
    const img = document.getElementById("armadaImage");
    const title = document.getElementById("armadaTitle");
    const desc = document.getElementById("armadaDesc");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const key = btn.getAttribute("data-armada");
            const data = armadaData[key];

            // Tambah efek fade
            [img, title, desc].forEach((el) => {
                el.classList.add("fade-out");
            });

            setTimeout(() => {
                img.src = data.img;
                img.alt = data.title;
                title.textContent = data.title;
                desc.textContent = data.desc;

                [img, title, desc].forEach((el) => {
                    el.classList.remove("fade-out");
                    el.classList.add("fade-in");
                    setTimeout(() => el.classList.remove("fade-in"), 500);
                });
            }, 400);
        });
    });
});
