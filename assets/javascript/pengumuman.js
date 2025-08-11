// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Sample data for announcements
const announcementsData = [
    {
        id: 'telemedicine',
        category: 'service',
        title: 'Layanan Baru: Telemedicine 24/7',
        excerpt: 'RSUP Jayapura kini menyediakan layanan konsultasi online 24 jam untuk kemudahan akses pelayanan kesehatan.',
        content: `<iframe src="assets/doc/doc.pdf" width="100%" height="600px"></iframe>`,
        date: '2024-08-10',
        author: 'Tim IT RSUP Jayapura',
        tags: ['telemedicine', 'layanan-baru', 'digital-health'],
        views: 1250,
        featured: true
    },
    {
        id: 'vaksin-covid',
        category: 'health',
        title: 'Program Vaksinasi COVID-19 Dosis Booster',
        excerpt: 'Pemberian vaksin booster COVID-19 untuk masyarakat umum dan tenaga kesehatan telah dimulai.',
        content: `
                        <h3>Program Vaksinasi Booster COVID-19</h3>
                        <p>RSUP Jayapura mengundang seluruh masyarakat untuk mengikuti program vaksinasi booster COVID-19 guna meningkatkan kekebalan tubuh.</p>
                        
                        <h3>Syarat dan Ketentuan</h3>
                        <ul>
                            <li>Telah menerima vaksin dosis kedua minimal 6 bulan yang lalu</li>
                            <li>Dalam kondisi sehat</li>
                            <li>Membawa KTP dan kartu vaksin</li>
                            <li>Mengisi formulir screening kesehatan</li>
                        </ul>
                        
                        <h3>Jadwal Vaksinasi</h3>
                        <ul>
                            <li>Senin - Jumat: 08:00 - 15:00 WIT</li>
                            <li>Sabtu: 08:00 - 12:00 WIT</li>
                            <li>Lokasi: Gedung Poliklinik Lantai 1</li>
                        </ul>
                        
                        <p><strong>Catatan:</strong> Vaksinasi gratis untuk seluruh peserta BPJS dan masyarakat umum.</p>
                    `,
        date: '2024-08-08',
        author: 'Bagian Pencegahan dan Pengendalian Infeksi',
        tags: ['vaksin', 'covid-19', 'booster', 'gratis'],
        views: 980,
        featured: false
    },
    {
        id: 'jam-besuk',
        category: 'info',
        title: 'Perubahan Jam Besuk Pasien Rawat Inap',
        excerpt: 'Mulai tanggal 15 Agustus 2024, jam besuk pasien rawat inap mengalami penyesuaian.',
        content: `
                        <h3>Perubahan Jam Besuk</h3>
                        <p>Dalam rangka meningkatkan kualitas pelayanan dan memberikan waktu istirahat optimal bagi pasien, jam besuk mengalami perubahan:</p>
                        
                        <h3>Jam Besuk Baru (Mulai 15 Agustus 2024)</h3>
                        <ul>
                            <li><strong>Sesi 1:</strong> 11:00 - 13:00 WIT</li>
                            <li><strong>Sesi 2:</strong> 17:00 - 19:00 WIT</li>
                        </ul>
                        
                        <h3>Ketentuan Besuk</h3>
                        <ul>
                            <li>Maksimal 2 orang pengunjung per pasien per sesi</li>
                            <li>Wajib menggunakan masker</li>
                            <li>Menunjukkan identitas diri</li>
                            <li>Tidak diperbolehkan membawa makanan dari luar</li>
                            <li>Anak di bawah 12 tahun tidak diperbolehkan berkunjung</li>
                        </ul>
                        
                        <h3>Ruang Khusus</h3>
                        <p><strong>ICU/ICCU:</strong> Jam besuk khusus 14:00-15:00 dan 20:00-21:00 WIT</p>
                    `,
        date: '2024-08-05',
        author: 'Bagian Keperawatan',
        tags: ['jam-besuk', 'rawat-inap', 'kebijakan'],
        views: 2150,
        featured: false
    },
    {
        id: 'dokter-baru',
        category: 'info',
        title: 'Dokter Spesialis Baru Bergabung dengan RSUP Jayapura',
        excerpt: 'Menyambut 3 dokter spesialis baru yang akan memperkuat pelayanan medis di berbagai bidang.',
        content: `
                        <h3>Dokter Spesialis Baru</h3>
                        <p>RSUP Jayapura dengan bangga memperkenalkan 3 dokter spesialis baru yang telah bergabung:</p>
                        
                        <h3>Tim Dokter Baru</h3>
                        <ul>
                            <li><strong>Dr. Maria Sari, Sp.PD</strong> - Spesialis Penyakit Dalam</li>
                            <li><strong>Dr. John Kambu, Sp.JP</strong> - Spesialis Jantung dan Pembuluh Darah</li>
                            <li><strong>Dr. Sarah Numberi, Sp.N</strong> - Spesialis Neurologi</li>
                        </ul>
                        
                        <h3>Jadwal Praktik</h3>
                        <p><strong>Dr. Maria Sari, Sp.PD</strong></p>
                        <ul>
                            <li>Senin, Rabu, Jumat: 08:00-12:00 WIT</li>
                            <li>Selasa, Kamis: 14:00-17:00 WIT</li>
                        </ul>
                        
                        <p><strong>Dr. John Kambu, Sp.JP</strong></p>
                        <ul>
                            <li>Senin-Kamis: 09:00-14:00 WIT</li>
                            <li>Sabtu: 08:00-12:00 WIT</li>
                        </ul>
                        
                        <p><strong>Dr. Sarah Numberi, Sp.N</strong></p>
                        <ul>
                            <li>Selasa, Kamis: 08:00-12:00 WIT</li>
                            <li>Rabu, Jumat: 13:00-17:00 WIT</li>
                        </ul>
                        
                        <p>Untuk pendaftaran, hubungi call center: 0967-533-118</p>
                    `,
        date: '2024-08-01',
        author: 'Bagian SDM dan Pendidikan',
        tags: ['dokter-baru', 'spesialis', 'jadwal-praktik'],
        views: 1680,
        featured: false
    },
    {
        id: 'seminar-kesehatan',
        category: 'event',
        title: 'Seminar Nasional Kesehatan Papua 2024',
        excerpt: 'Seminar dengan tema "Transformasi Digital Kesehatan di Era Modern" akan diselenggarakan pada 25 Agustus 2024.',
        content: `
                        <h3>Seminar Nasional Kesehatan Papua 2024</h3>
                        <p><strong>Tema:</strong> "Transformasi Digital Kesehatan di Era Modern"</p>
                        
                        <h3>Detail Acara</h3>
                        <ul>
                            <li><strong>Tanggal:</strong> 25 Agustus 2024</li>
                            <li><strong>Waktu:</strong> 08:00 - 16:00 WIT</li>
                            <li><strong>Tempat:</strong> Auditorium RSUP Jayapura</li>
                            <li><strong>Kapasitas:</strong> 300 peserta</li>
                        </ul>
                        
                        <h3>Narasumber</h3>
                        <ul>
                            <li>Prof. Dr. Ahmad Rahman - Pakar Digital Health Indonesia</li>
                            <li>Dr. Lisa Wijaya, MARS - Direktur Transformasi Digital Kemenkes</li>
                            <li>Dr. Michael Warouw, Sp.PD - Direktur RSUP Jayapura</li>
                        </ul>
                        
                        <h3>Materi Seminar</h3>
                        <ul>
                            <li>Implementasi Electronic Medical Record</li>
                            <li>Telemedicine dan Aplikasi Kesehatan</li>
                            <li>Artificial Intelligence dalam Diagnosa</li>
                            <li>Keamanan Data Pasien di Era Digital</li>
                        </ul>
                        
                        <h3>Biaya dan Registrasi</h3>
                        <ul>
                            <li>Dokter: Rp 500.000</li>
                            <li>Perawat/Tenaga Kesehatan: Rp 300.000</li>
                            <li>Mahasiswa: Rp 150.000</li>
                        </ul>
                        
                        <p><strong>Registrasi:</strong> seminar.rsupjayapura.go.id atau WhatsApp 0967-533-120</p>
                    `,
        date: '2024-07-28',
        author: 'Panitia Seminar Nasional',
        tags: ['seminar', 'digital-health', 'acara', 'registrasi'],
        views: 850,
        featured: false
    },
    {
        id: 'maintenance-sistem',
        category: 'urgent',
        title: 'Maintenance Sistem Informasi Rumah Sakit',
        excerpt: 'Sistem informasi akan mengalami maintenance pada tanggal 20 Agustus 2024 pukul 01:00-05:00 WIT.',
        content: `
                        <h3>Pemberitahuan Maintenance Sistem</h3>
                        <p>Dalam rangka peningkatan kualitas dan keamanan sistem informasi, RSUP Jayapura akan melakukan maintenance terjadwal.</p>
                        
                        <h3>Jadwal Maintenance</h3>
                        <ul>
                            <li><strong>Tanggal:</strong> 20 Agustus 2024</li>
                            <li><strong>Waktu:</strong> 01:00 - 05:00 WIT</li>
                            <li><strong>Durasi:</strong> 4 jam</li>
                        </ul>
                        
                        <h3>Sistem yang Terpengaruh</h3>
                        <ul>
                            <li>Sistem Pendaftaran Online</li>
                            <li>Aplikasi Mobile RSUP Jayapura</li>
                            <li>Website resmi</li>
                            <li>Sistem Pembayaran Online</li>
                            <li>Telemedicine</li>
                        </ul>
                        
                        <h3>Layanan yang Tetap Berjalan</h3>
                        <ul>
                            <li>Pendaftaran manual di loket</li>
                            <li>Pelayanan medis darurat</li>
                            <li>Call center untuk informasi umum</li>
                            <li>Pembayaran tunai dan kartu</li>
                        </ul>
                        
                        <h3>Saran untuk Pasien</h3>
                        <ul>
                            <li>Lakukan pendaftaran sebelum atau setelah jadwal maintenance</li>
                            <li>Siapkan dokumen fisik untuk backup</li>
                            <li>Hubungi call center untuk informasi lebih lanjut</li>
                        </ul>
                        
                        <p><strong>Mohon maaf atas ketidaknyamanan yang mungkin terjadi.</strong></p>
                    `,
        date: '2024-08-12',
        author: 'Tim IT RSUP Jayapura',
        tags: ['maintenance', 'sistem', 'pemberitahuan'],
        views: 3200,
        featured: false
    },
    {
        id: 'program-diet',
        category: 'health',
        title: 'Program Konsultasi Gizi dan Diet Sehat',
        excerpt: 'Program konsultasi gratis dengan ahli gizi untuk pola makan sehat dan pengelolaan berat badan.',
        content: `
                        <h3>Program Konsultasi Gizi dan Diet Sehat</h3>
                        <p>RSUP Jayapura membuka program konsultasi gizi gratis untuk membantu masyarakat mencapai pola hidup sehat.</p>
                        
                        <h3>Layanan yang Tersedia</h3>
                        <ul>
                            <li>Konsultasi gizi individual</li>
                            <li>Penyusunan menu diet personal</li>
                            <li>Edukasi pola makan sehat</li>
                            <li>Monitoring progres berat badan</li>
                            <li>Konseling untuk kondisi khusus (diabetes, hipertensi)</li>
                        </ul>
                        
                        <h3>Target Peserta</h3>
                        <ul>
                            <li>Penderita diabetes dan hipertensi</li>
                            <li>Pasien dengan obesitas atau underweight</li>
                            <li>Ibu hamil dan menyusui</li>
                            <li>Lansia dengan masalah gizi</li>
                            <li>Masyarakat umum yang ingin hidup sehat</li>
                        </ul>
                        
                        <h3>Jadwal dan Lokasi</h3>
                        <ul>
                            <li><strong>Hari:</strong> Senin - Jumat</li>
                            <li><strong>Waktu:</strong> 08:00 - 15:00 WIT</li>
                            <li><strong>Lokasi:</strong> Poliklinik Gizi, Lantai 2</li>
                            <li><strong>Durasi:</strong> 30-45 menit per konsultasi</li>
                        </ul>
                        
                        <h3>Cara Mendaftar</h3>
                        <ul>
                            <li>Datang langsung ke loket pendaftaran</li>
                            <li>Telepon: 0967-533-118 ext. 235</li>
                            <li>WhatsApp: 0967-533-121</li>
                            <li>Online: gizi.rsupjayapura.go.id</li>
                        </ul>
                        
                        <p><strong>Catatan:</strong> Membawa hasil laboratorium terbaru jika ada (gula darah, kolesterol, dll.)</p>
                    `,
        date: '2024-07-30',
        author: 'Instalasi Gizi',
        tags: ['gizi', 'diet', 'konsultasi-gratis', 'sehat'],
        views: 1420,
        featured: false
    },
    {
        id: 'fasilitas-baru',
        category: 'info',
        title: 'Pembukaan Ruang ICU Baru dengan 20 Bed',
        excerpt: 'Fasilitas ICU baru dengan teknologi terdepan dan kapasitas 20 tempat tidur telah resmi beroperasi.',
        content: `
                        <h3>Ruang ICU Baru RSUP Jayapura</h3>
                        <p>Dengan bangga kami umumkan pembukaan ruang ICU baru yang dilengkapi teknologi medis terdepan dan standar internasional.</p>
                        
                        <h3>Spesifikasi Fasilitas</h3>
                        <ul>
                            <li>20 tempat tidur ICU dengan sistem monitoring terintegrasi</li>
                            <li>Ventilator generasi terbaru</li>
                            <li>Sistem HVAC dengan tekanan positif</li>
                            <li>Monitor multiparameter untuk setiap bed</li>
                            <li>Central monitoring station</li>
                        </ul>
                        
                        <h3>Teknologi yang Tersedia</h3>
                        <ul>
                            <li>Continuous Renal Replacement Therapy (CRRT)</li>
                            <li>Extracorporeal Membrane Oxygenation (ECMO)</li>
                            <li>Intra-Aortic Balloon Pump (IABP)</li>
                            <li>Sistem informasi terintegrasi</li>
                            <li>Nurse call system digital</li>
                        </ul>
                        
                        <h3>Tim Medis</h3>
                        <ul>
                            <li>Dokter spesialis anestesi dan intensive care</li>
                            <li>Perawat ICU bersertifikat</li>
                            <li>Respiratory therapist</li>
                            <li>Fisioterapis</li>
                            <li>Support team 24/7</li>
                        </ul>
                        
                        <h3>Jam Operasional</h3>
                        <p>Ruang ICU beroperasi 24 jam setiap hari dengan tim standby penuh.</p>
                        
                        <p><strong>Lokasi:</strong> Gedung Utama Lantai 3, Wing Timur</p>
                    `,
        date: '2024-07-25',
        author: 'Bagian Humas RSUP Jayapura',
        tags: ['icu', 'fasilitas-baru', 'teknologi', 'pelayanan'],
        views: 2800,
        featured: false
    }
];

// Global variables
let currentPage = 1;
let itemsPerPage = 6;
let filteredData = [...announcementsData];
let currentCategory = 'all';

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        loadAnnouncements();
        setupEventListeners();
    }, 1000); // Simulate loading time
});

// Setup event listeners
function setupEventListeners() {
    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            // Update active filter
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Filter data
            currentCategory = this.dataset.category;
            filterAnnouncements();
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', debounce(function () {
        filterAnnouncements();
    }, 300));
}

// Filter announcements
function filterAnnouncements() {
    let filtered = [...announcementsData];

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }

    // Filter by search term
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.excerpt.toLowerCase().includes(searchTerm) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }

    filteredData = filtered;
    currentPage = 1;
    loadAnnouncements();
}

// Load announcements
function loadAnnouncements() {
    const grid = document.getElementById('announcementsGrid');

    if (filteredData.length === 0) {
        showEmptyState();
        return;
    }

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredData.slice(startIndex, endIndex);

    // Generate HTML
    let html = '';
    pageData.forEach(announcement => {
        html += generateAnnouncementCard(announcement);
    });

    grid.innerHTML = html;

    // Generate pagination
    generatePagination();

    // Add animation
    setTimeout(() => {
        document.querySelectorAll('.announcement-card').forEach((card, index) => {
            card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
        });
    }, 100);
}

// Generate announcement card HTML
function generateAnnouncementCard(announcement) {
    const categoryClass = `category-${announcement.category}`;
    const categoryIcon = getCategoryIcon(announcement.category);
    const categoryName = getCategoryName(announcement.category);

    return `
                    <div class="announcement-card" onclick="openAnnouncementModal('${announcement.id}')">
                        <div class="announcement-header">
                            <span class="announcement-category ${categoryClass}">
                                <i class="${categoryIcon} me-1"></i>${categoryName}
                            </span>
                            <h3 class="announcement-title">${announcement.title}</h3>
                            <div class="announcement-meta">
                                <div>
                                    <i class="fas fa-calendar me-1"></i>
                                    ${formatDate(announcement.date)}
                                </div>
                                <div>
                                    <i class="fas fa-user me-1"></i>
                                    ${announcement.author}
                                </div>
                            </div>
                        </div>
                        
                        <div class="announcement-body">
                            <p class="announcement-excerpt">${announcement.excerpt}</p>
                            
                            <div class="announcement-tags">
                                ${announcement.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                            
                            <div class="announcement-actions">
                                <a href="#" class="read-more-btn" onclick="event.stopPropagation(); openAnnouncementModal('${announcement.id}')">
                                    Baca Selengkapnya
                                </a>
                                <div class="announcement-stats">
                                    <span><i class="fas fa-eye me-1"></i>${announcement.views.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
}

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        urgent: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle',
        event: 'fas fa-calendar',
        health: 'fas fa-heartbeat',
        service: 'fas fa-cogs'
    };
    return icons[category] || 'fas fa-bullhorn';
}

// Get category name
function getCategoryName(category) {
    const names = {
        urgent: 'Penting',
        info: 'Informasi',
        event: 'Acara',
        health: 'Kesehatan',
        service: 'Layanan'
    };
    return names[category] || 'Umum';
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

// Generate pagination
function generatePagination() {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const pagination = document.getElementById('paginationNav');

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = '';

    // Previous button
    html += `
                    <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                        <a class="page-link paging-btn" href="#" onclick="changePage(${currentPage - 1})">
                            <i class="fas fa-chevron-left"></i>
                        </a>
                    </li>
                `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `
                            <li class="page-item">
                                <a class="page-link paging-btn ${i === currentPage ? 'paging-btn-active' : ''}" href="#" onclick="changePage(${i})">${i}</a>
                            </li>
                        `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += '<li class="page-item disabled"><span class="page-link">...</span></li>';
        }
    }

    // Next button
    html += `
                    <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                        <a class="page-link paging-btn" href="#" onclick="changePage(${currentPage + 1})">
                            <i class="fas fa-chevron-right"></i>
                        </a>
                    </li>
                `;

    pagination.innerHTML = html;
}

// Change page
function changePage(page) {
    if (page < 1 || page > Math.ceil(filteredData.length / itemsPerPage)) return;

    currentPage = page;
    loadAnnouncements();

    // Scroll to top of announcements
    document.querySelector('.announcements-section').scrollIntoView({
        behavior: 'smooth'
    });
}

// Show empty state
function showEmptyState() {
    const grid = document.getElementById('announcementsGrid');
    grid.innerHTML = `
                    <div class="empty-state col-12">
                        <div class="empty-icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <h3 class="empty-title">Tidak Ada Pengumuman</h3>
                        <p class="empty-text">Maaf, tidak ada pengumuman yang sesuai dengan filter atau pencarian Anda.</p>
                    </div>
                `;

    document.getElementById('paginationNav').innerHTML = '';
}

// Open announcement modal
function openAnnouncementModal(id) {
    const announcement = announcementsData.find(item => item.id === id);
    if (!announcement) return;

    // Update modal content
    document.getElementById('modalTitle').textContent = announcement.title;
    document.getElementById('modalContent').innerHTML = `
                    <div class="announcement-full-content">
                        <div class="mb-3">
                            <span class="badge bg-primary me-2">
                                <i class="${getCategoryIcon(announcement.category)} me-1"></i>
                                ${getCategoryName(announcement.category)}
                            </span>
                            <span class="text-muted">
                                <i class="fas fa-calendar me-1"></i>${formatDate(announcement.date)}
                            </span>
                            <span class="text-muted ms-3">
                                <i class="fas fa-user me-1"></i>${announcement.author}
                            </span>
                            <span class="text-muted ms-3">
                                <i class="fas fa-eye me-1"></i>${announcement.views.toLocaleString()} views
                            </span>
                        </div>
                        ${announcement.content}
                        <div class="mt-4">
                            <strong>Tags: </strong>
                            ${announcement.tags.map(tag => `<span class="badge bg-light text-dark me-1">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('announcementModal'));
    modal.show();

    // Update view count (in real app, this would be sent to server)
    announcement.views++;
}

// Share announcement
function shareAnnouncement() {
    if (navigator.share) {
        navigator.share({
            title: 'Pengumuman RSUP Jayapura',
            text: 'Lihat pengumuman terbaru dari RSUP Jayapura',
            url: window.location.href
        });
    } else {
        // Fallback: copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link telah disalin ke clipboard!');
        });
    }
}

// Print announcement
function printAnnouncement() {
    const modalContent = document.getElementById('modalContent').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
                    <html>
                        <head>
                            <title>Pengumuman RSUP Jayapura</title>
                            <style>
                                body { font-family: Arial, sans-serif; margin: 40px; }
                                .badge { background: #ddd; padding: 4px 8px; border-radius: 4px; }
                                h3 { color: #1e40af; margin-top: 2em; }
                                ul { margin: 1em 0; padding-left: 2em; }
                                li { margin-bottom: 0.5em; }
                            </style>
                        </head>
                        <body>
                            <h1>RSUP Jayapura</h1>
                            ${modalContent}
                        </body>
                    </html>
                `);
    printWindow.document.close();
    printWindow.print();
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        // Close modal if open
        const modal = bootstrap.Modal.getInstance(document.getElementById('announcementModal'));
        if (modal) {
            modal.hide();
        }
    }
});

// Auto-refresh announcements every 5 minutes
setInterval(function () {
    // In a real application, this would fetch new data from the server
    console.log('Auto-refreshing announcements...');
}, 300000);

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Track announcement views (analytics)
function trackAnnouncementView(id) {
    // In a real application, this would send analytics data
    console.log(`Announcement viewed: ${id}`);
}

// RSS feed functionality (placeholder)
function generateRSSFeed() {
    console.log('Generating RSS feed for announcements...');
    // In a real application, this would generate an RSS feed
}

// Subscribe to notifications (placeholder)
function subscribeToNotifications() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notification permission granted');
                // Setup push notifications
            }
        });
    }
}

// Archive announcement (admin function)
function archiveAnnouncement(id) {
    const index = announcementsData.findIndex(item => item.id === id);
    if (index !== -1) {
        announcementsData[index].archived = true;
        filterAnnouncements();
    }
}

// Export announcements to PDF (placeholder)
function exportToPDF() {
    console.log('Exporting announcements to PDF...');
    // In a real application, this would generate a PDF
}

// Initialize dark mode toggle (if needed)
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });

        // Load saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
}

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize all features when page loads
document.addEventListener('DOMContentLoaded', function () {
    initializeDarkMode();
    initializeLazyLoading();
    subscribeToNotifications();
});

// Service Worker registration for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            console.log('ServiceWorker registration successful');
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// Handle online/offline status
window.addEventListener('online', function () {
    document.body.classList.remove('offline');
    console.log('Connection restored');
});

window.addEventListener('offline', function () {
    document.body.classList.add('offline');
    console.log('Connection lost');
});

// Add floating action button for quick actions (mobile)
function addFloatingActionButton() {
    if (window.innerWidth <= 768) {
        const fab = document.createElement('div');
        fab.className = 'floating-action-button';
        fab.innerHTML = `
                        <button class="btn btn-primary rounded-circle" style="width: 60px; height: 60px; position: fixed; bottom: 20px; right: 20px; z-index: 1000; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                            <i class="fas fa-plus"></i>
                        </button>
                    `;
        document.body.appendChild(fab);

        fab.addEventListener('click', function () {
            // Show quick actions menu
            console.log('Quick actions menu');
        });
    }
}

// Initialize floating action button on mobile
if (window.innerWidth <= 768) {
    addFloatingActionButton();
}

// Handle window resize
window.addEventListener('resize', function () {
    // Adjust layout for responsive design
    if (window.innerWidth > 768) {
        const fab = document.querySelector('.floating-action-button');
        if (fab) {
            fab.remove();
        }
    } else {
        if (!document.querySelector('.floating-action-button')) {
            addFloatingActionButton();
        }
    }
});

// Add accessibility improvements
function improveAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only sr-only-focusable';
    skipLink.style.position = 'absolute';
    skipLink.style.top = '10px';
    skipLink.style.left = '10px';
    skipLink.style.zIndex = '9999';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA labels where needed
    document.querySelectorAll('.announcement-card').forEach((card, index) => {
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `Pengumuman ${index + 1}`);
    });

    // Add keyboard navigation for cards
    document.querySelectorAll('.announcement-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Initialize accessibility improvements
document.addEventListener('DOMContentLoaded', function () {
    improveAccessibility();
});

// Error handling for failed requests
function handleError(error) {
    console.error('Error:', error);

    const errorToast = document.createElement('div');
    errorToast.className = 'toast position-fixed top-0 end-0 m-3';
    errorToast.setAttribute('role', 'alert');
    errorToast.innerHTML = `
                    <div class="toast-header">
                        <i class="fas fa-exclamation-triangle text-warning me-2"></i>
                        <strong class="me-auto">Error</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
                    </div>
                    <div class="toast-body">
                        Terjadi kesalahan saat memuat data. Silakan coba lagi.
                    </div>
                `;

    document.body.appendChild(errorToast);
    const toast = new bootstrap.Toast(errorToast);
    toast.show();

    // Remove toast after it's hidden
    errorToast.addEventListener('hidden.bs.toast', function () {
        this.remove();
    });
}

// Success notification
function showSuccessNotification(message) {
    const successToast = document.createElement('div');
    successToast.className = 'toast position-fixed top-0 end-0 m-3';
    successToast.innerHTML = `
                    <div class="toast-header">
                        <i class="fas fa-check-circle text-success me-2"></i>
                        <strong class="me-auto">Berhasil</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
                    </div>
                    <div class="toast-body">
                        ${message}
                    </div>
                `;

    document.body.appendChild(successToast);
    const toast = new bootstrap.Toast(successToast);
    toast.show();

    successToast.addEventListener('hidden.bs.toast', function () {
        this.remove();
    });
}

// Initialize page with proper error handling
document.addEventListener('DOMContentLoaded', function () {
    try {
        // All initialization code here
        console.log('Page initialized successfully');
    } catch (error) {
        handleError(error);
    }
});