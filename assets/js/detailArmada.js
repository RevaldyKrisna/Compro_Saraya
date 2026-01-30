const armadaData = {
      commuter: {
        title: "Hiace Commuter",
        badge: "Kapasitas Besar",
        img: "assets/img/armada/commuter.png",
        desc: "Hiace Commuter menawarkan kapasitas besar dan kenyamanan maksimal untuk perjalanan wisata, ziarah, atau keperluan rombongan. Dilengkapi AC dingin, kursi reclining, dan kabin luas yang menunjang kenyamanan sepanjang perjalanan. Sempurna untuk keluarga besar dan grup wisata yang menginginkan pengalaman perjalanan yang memorable.",
        fasilitas: [
          { icon: "bi-people-fill", text: "Kapasitas hingga 15 penumpang" },
          { icon: "bi-snow", text: "AC Dingin Merata" },
          { icon: "bi-tv-fill", text: "Audio & Video Entertainment" },
          { icon: "bi-usb-symbol", text: "USB Charging Port" },
          { icon: "bi-lightning-charge-fill", text: "Lampu Ambient LED" },
          { icon: "bi-cup-hot-fill", text: "Interior Bersih & Nyaman" },
          { icon: "bi-shield-fill-check", text: "Driver Profesional & Ramah" },
          { icon: "bi-shield-lock-fill", text: "Fitur Keamanan Lengkap" }
        ],
        extra: "Armada ini sangat ideal untuk perjalanan wisata keluarga besar, ziarah rombongan, atau keperluan dinas. Dengan teknologi terkini dan perawatan berkala, kami menjamin kenyamanan dan keamanan perjalanan Anda.",
        interior: [
          { img: "assets/img/armada/interior11.jpg", text: "Kabin luas dengan kursi reclining yang nyaman untuk perjalanan jauh." },
          { img: "assets/img/armada/interior2.jpg", text: "Pendingin udara merata di seluruh kabin menjaga kenyamanan penumpang." }
        ],
        eksterior: [
          { img: "assets/img/armada/exterior1.jpg", text: "Desain eksterior modern dengan warna elegan khas Toyota." },
          { img: "assets/img/armada/exterior2.jpg", text: "Pintu geser lebar memudahkan akses keluar-masuk penumpang." }
        ]
      },
      premio: {
        title: "Hiace Premio",
        badge: "Luxury Class",
        img: "assets/img/armada/premio.png",
        desc: "Hiace Premio hadir dengan desain lebih modern, kabin mewah, dan suspensi halus. Cocok untuk perjalanan eksklusif, bisnis, atau wisata premium dengan tampilan elegan dan kenyamanan kelas atas. Nikmati pengalaman berkendara yang tak terlupakan dengan standar luxury yang mengutamakan detail dan kepuasan pelanggan.",
        fasilitas: [
          { icon: "bi-people-fill", text: "Kapasitas hingga 10 penumpang" },
          { icon: "bi-stars", text: "Premium Executive Seat" },
          { icon: "bi-snow", text: "AC Dingin Multi-Zone" },
          { icon: "bi-tv-fill", text: "Premium Entertainment System" },
          { icon: "bi-usb-symbol", text: "Fast USB Charging" },
          { icon: "bi-lightning-charge-fill", text: "Smart Ambient LED" },
          { icon: "bi-cup-hot-fill", text: "Luxury Interior Design" },
          { icon: "bi-shield-fill-check", text: "Expert Professional Driver" },
          { icon: "bi-shield-lock-fill", text: "Advanced Safety Features" }
        ],
        extra: "Hiace Premio menawarkan pengalaman perjalanan yang mewah dengan kenyamanan kelas eksekutif. Setiap detail dirancang untuk memberikan kemewahan maksimal, dari material premium hingga teknologi canggih yang memanjakan setiap perjalanan Anda.",
        interior: [
          { img: "assets/img/armada/interior11.jpg", text: "Interior premium dengan material kulit dan tata cahaya elegan." },
          { img: "assets/img/armada/interior2.jpg", text: "Kursi ergonomis dengan sandaran kepala dan ruang kaki luas." }
        ],
        eksterior: [
          { img: "assets/img/armada/exterior1.jpg", text: "Velg stylish dan bodi aerodinamis menambah kesan eksklusif." },
          { img: "assets/img/armada/exterior2.jpg", text: "Desain eksterior elegan dan modern dengan grill berlapis krom." }
        ]
      }
    };

    const buttons = document.querySelectorAll('.list-group-armada button');
    const detailSection = document.getElementById('armadaDetail');

    function loadArmada(key) {
      const a = armadaData[key];
      detailSection.style.opacity = 0;

      setTimeout(() => {
        detailSection.innerHTML = `
          <div class="armada-image-wrapper">
            <img src="${a.img}" alt="${a.title}" class="main-image">
          </div>
          <span class="armada-badge"><i class="bi bi-award-fill me-2"></i>${a.badge}</span>
          <h3>${a.title}</h3>
          <p class="description">${a.desc}</p>
          
          <div class="fasilitas-section">
            <h4 class="fasilitas-title">Fasilitas Premium</h4>
            <div class="row g-3">
              ${a.fasilitas.map(f => `
                <div class="col-md-6 col-lg-3">
                  <div class="fasilitas-item">
                    <i class="bi ${f.icon}"></i> <span>${f.text}</span>
                  </div>
                </div>`).join('')}
            </div>
          </div>
          
          <p class="description mt-5">${a.extra}</p>
          
          <div class="interior-eksterior">
            <div class="row g-5">
              <div class="col-md-6">
                <h5>Interior</h5>
                ${a.interior.map(i => `
                  <div class="gallery-item">
                    <img src="${i.img}" alt="Interior">
                    <p>${i.text}</p>
                  </div>`).join('')}
              </div>
              <div class="col-md-6">
                <h5>Eksterior</h5>
                ${a.eksterior.map(e => `
                  <div class="gallery-item">
                    <img src="${e.img}" alt="Eksterior">
                    <p>${e.text}</p>
                  </div>`).join('')}
              </div>
            </div>
          </div>
          
          <div class="cta-section">
            <p class="cta-text">Siap memulai perjalanan tak terlupakan bersama ${a.title}?</p>
            <a href="#" class="btn btn-primary">
              Pesan Sekarang <i class="bi bi-arrow-right-circle-fill"></i>
            </a>
          </div>
        `;
        detailSection.style.opacity = 1;
      }, 300);
    }

    // Event tombol
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadArmada(btn.getAttribute('data-armada'));
      });
    });

    // Default tampil commuter saat pertama
    loadArmada('commuter');