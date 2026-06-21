export default {
    template: `
        <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 font-sans antialiased overflow-x-hidden">
            <!-- NAVBAR -->
            <nav class="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
                <div class="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <div class="p-1.5 sm:p-2 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-600/20">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                            </svg>
                        </div>
                        <span class="text-base sm:text-xl font-bold text-slate-800">E-Inventory</span>
                        <span class="text-[10px] sm:text-xs font-medium text-indigo-600 bg-indigo-50 px-1.5 sm:px-2 py-0.5 rounded-full border border-indigo-200">v2.0</span>
                    </div>
                    <router-link to="/login" 
                        class="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 text-xs sm:text-sm">
                        Login
                    </router-link>
                </div>
            </nav>

            <!-- HERO SECTION -->
            <section class="container mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-28 text-center">
                <div class="max-w-3xl mx-auto">
                    <div class="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 bg-indigo-50 border border-indigo-200 rounded-full text-[10px] sm:text-sm font-medium text-indigo-700 mb-4 sm:mb-6 animate-fade-in-up">
                        <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
                        Manajemen Inventaris Modern
                    </div>
                    <h1 class="text-2xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight animate-fade-in-up">
                        Kelola Stok & 
                        <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Barang</span> 
                        Lebih Efisien
                    </h1>
                    <p class="mt-3 sm:mt-6 text-sm sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                        Sistem manajemen inventaris modern untuk memantau stok, kategori, dan supplier dalam satu platform terintegrasi.
                    </p>
                    <div class="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in-up animation-delay-300">
                        <router-link to="/login" 
                            class="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base">
                            Mulai Sekarang
                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </router-link>
                        <a href="#" class="px-6 sm:px-8 py-2.5 sm:py-3.5 border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold rounded-xl transition-all duration-200 hover:bg-slate-50 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Lihat Demo
                        </a>
                    </div>
                </div>
            </section>

            <!-- STATISTIK (Angka) -->
            <section class="container mx-auto px-4 sm:px-6 pb-8 sm:pb-16">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                    <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/60 p-4 sm:p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                        <p class="text-xl sm:text-3xl md:text-4xl font-extrabold text-indigo-600">150+</p>
                        <p class="text-[10px] sm:text-xs text-slate-500 mt-1 font-medium">Barang Terdaftar</p>
                    </div>
                    <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/60 p-4 sm:p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                        <p class="text-xl sm:text-3xl md:text-4xl font-extrabold text-emerald-600">12</p>
                        <p class="text-[10px] sm:text-xs text-slate-500 mt-1 font-medium">Kategori Aktif</p>
                    </div>
                    <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/60 p-4 sm:p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                        <p class="text-xl sm:text-3xl md:text-4xl font-extrabold text-purple-600">8</p>
                        <p class="text-[10px] sm:text-xs text-slate-500 mt-1 font-medium">Supplier Terdaftar</p>
                    </div>
                    <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/60 p-4 sm:p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                        <p class="text-xl sm:text-3xl md:text-4xl font-extrabold text-amber-600">99%</p>
                        <p class="text-[10px] sm:text-xs text-slate-500 mt-1 font-medium">Kepuasan Pengguna</p>
                    </div>
                </div>
            </section>

            <!-- FEATURES - 6 FITUR (Responsif: 1 → 2 → 3 kolom) -->
            <section class="bg-white/60 backdrop-blur-sm py-10 sm:py-16 border-t border-slate-200/60">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="text-center mb-8 sm:mb-12">
                        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">Fitur Unggulan</h2>
                        <p class="text-sm sm:text-base text-slate-500 mt-2">Semua kebutuhan inventaris Anda dalam satu aplikasi</p>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        <!-- 1 -->
                        <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div class="p-2.5 sm:p-3 bg-indigo-50 rounded-xl w-fit mb-3 sm:mb-4 border border-indigo-100/50">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                                </svg>
                            </div>
                            <h3 class="text-base sm:text-lg font-bold text-slate-800">Manajemen Barang</h3>
                            <p class="text-xs sm:text-sm text-slate-500 mt-2">Tambah, edit, hapus, dan lacak stok barang dengan mudah.</p>
                        </div>
                        <!-- 2 -->
                        <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div class="p-2.5 sm:p-3 bg-emerald-50 rounded-xl w-fit mb-3 sm:mb-4 border border-emerald-100/50">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"/>
                                </svg>
                            </div>
                            <h3 class="text-base sm:text-lg font-bold text-slate-800">Kategori & Supplier</h3>
                            <p class="text-xs sm:text-sm text-slate-500 mt-2">Kelompokkan barang dan kelola data supplier.</p>
                        </div>
                        <!-- 3 -->
                        <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div class="p-2.5 sm:p-3 bg-amber-50 rounded-xl w-fit mb-3 sm:mb-4 border border-amber-100/50">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                </svg>
                            </div>
                            <h3 class="text-base sm:text-lg font-bold text-slate-800">Laporan & Historis</h3>
                            <p class="text-xs sm:text-sm text-slate-500 mt-2">Pantau mutasi stok dan histori barang.</p>
                        </div>
                        <!-- 4 -->
                        <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div class="p-2.5 sm:p-3 bg-rose-50 rounded-xl w-fit mb-3 sm:mb-4 border border-rose-100/50">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
                                </svg>
                            </div>
                            <h3 class="text-base sm:text-lg font-bold text-slate-800">Keamanan Data</h3>
                            <p class="text-xs sm:text-sm text-slate-500 mt-2">Sistem aman dengan autentikasi token dan enkripsi.</p>
                        </div>
                        <!-- 5 -->
                        <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div class="p-2.5 sm:p-3 bg-cyan-50 rounded-xl w-fit mb-3 sm:mb-4 border border-cyan-100/50">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                </svg>
                            </div>
                            <h3 class="text-base sm:text-lg font-bold text-slate-800">Responsif & Modern</h3>
                            <p class="text-xs sm:text-sm text-slate-500 mt-2">Tampilan optimal di semua perangkat.</p>
                        </div>
                        <!-- 6 -->
                        <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div class="p-2.5 sm:p-3 bg-fuchsia-50 rounded-xl w-fit mb-3 sm:mb-4 border border-fuchsia-100/50">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 class="text-base sm:text-lg font-bold text-slate-800">Cepat & Ringan</h3>
                            <p class="text-xs sm:text-sm text-slate-500 mt-2">Dibangun dengan teknologi modern.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- TESTIMONIAL -->
            <section class="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
                <div class="text-center mb-8 sm:mb-12">
                    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">Apa Kata Mereka?</h2>
                    <p class="text-sm sm:text-base text-slate-500 mt-2">Testimoni dari pengguna E-Inventory</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300">
                        <div class="flex items-center gap-1 sm:gap-2 text-amber-400 text-xs sm:text-sm mb-2 sm:mb-3">
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-600 italic">"Sistem ini sangat membantu kami dalam mengelola stok barang. Sangat direkomendasikan!"</p>
                        <div class="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs sm:text-sm">A</div>
                            <div>
                                <p class="text-xs sm:text-sm font-semibold text-slate-700">Ahmad F.</p>
                                <p class="text-[10px] sm:text-xs text-slate-400">Manajer Logistik</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300">
                        <div class="flex items-center gap-1 sm:gap-2 text-amber-400 text-xs sm:text-sm mb-2 sm:mb-3">
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-600 italic">"Fitur kategori dan supplier sangat membantu, semua terintegrasi dengan baik."</p>
                        <div class="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs sm:text-sm">S</div>
                            <div>
                                <p class="text-xs sm:text-sm font-semibold text-slate-700">Siti R.</p>
                                <p class="text-[10px] sm:text-xs text-slate-400">Staff Gudang</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300">
                        <div class="flex items-center gap-1 sm:gap-2 text-amber-400 text-xs sm:text-sm mb-2 sm:mb-3">
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <p class="text-xs sm:text-sm text-slate-600 italic">"Tampilan modern dan mudah digunakan. Sangat membantu operasional kami."</p>
                        <div class="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs sm:text-sm">B</div>
                            <div>
                                <p class="text-xs sm:text-sm font-semibold text-slate-700">Budi P.</p>
                                <p class="text-[10px] sm:text-xs text-slate-400">Owner UMKM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA BANNER -->
            <section class="container mx-auto px-4 sm:px-6 pb-10 sm:pb-16">
                <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl shadow-indigo-600/20">
                    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold">Siap Mengelola Inventaris Anda?</h2>
                    <p class="text-indigo-100 mt-2 max-w-xl mx-auto text-sm sm:text-base">Daftar sekarang dan rasakan kemudahan mengelola stok, kategori, dan supplier dalam satu platform.</p>
                    <router-link to="/register" 
                        class="inline-block mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base">
                        Daftar Gratis
                    </router-link>
                </div>
            </section>

            <!-- FOOTER -->
            <footer class="bg-slate-900 text-slate-300 py-6 sm:py-8 border-t border-slate-800">
                <div class="container mx-auto px-4 sm:px-6 text-center">
                    <p class="text-xs sm:text-sm">&copy; 2026 E-Inventory. Muhammad Said Abimanyu.</p>
                    <p class="text-[10px] sm:text-xs text-slate-500 mt-1">Built with ❤️ using Vue 3 & CodeIgniter 4</p>
                </div>
            </footer>
        </div>
    `
};