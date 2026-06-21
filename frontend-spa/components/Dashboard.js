export default {
    template: `
        <div class="flex h-screen bg-slate-50 font-sans antialiased overflow-hidden">
            <!-- TOMBOL HAMBURGER - HANYA MUNCUL SAAT SIDEBAR TERTUTUP -->
            <button v-if="!sidebarOpen" @click="sidebarOpen = true" 
                class="lg:hidden fixed top-4 right-4 z-50 p-2.5 bg-white rounded-xl shadow-lg border border-slate-200/60 hover:bg-slate-50 transition-all duration-200">
                <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>

            <!-- OVERLAY -->
            <div v-if="sidebarOpen" @click="sidebarOpen = false" 
                class="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"></div>

            <!-- SIDEBAR DRAWER -->
            <aside :class="[
                'fixed lg:static inset-y-0 left-0 z-40 w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-300 flex flex-col shadow-2xl border-r border-slate-700/50 transition-transform duration-300 ease-in-out',
                sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            ]">
                <button @click.stop="sidebarOpen = false" 
                    class="lg:hidden absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition z-50">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <div class="p-5 sm:p-6 border-b border-slate-700/50 flex items-center space-x-3 relative">
                    <div class="p-2 bg-indigo-600/20 rounded-xl border border-indigo-500/30 text-indigo-400 shadow-inner">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                        </svg>
                    </div>
                    <div>
                        <span class="text-base sm:text-lg font-bold text-white tracking-wide block">E-Inventory</span>
                        <span class="text-[10px] sm:text-xs text-indigo-400 font-medium tracking-wider uppercase">Management v2.0</span>
                    </div>
                </div>

                <nav class="flex-1 p-3 sm:p-4 space-y-1 mt-4 relative overflow-y-auto">
                    <router-link to="/dashboard" 
                        class="flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 group font-medium text-xs sm:text-sm hover:bg-slate-700/70 hover:text-white hover:translate-x-1 hover:shadow-lg"
                        active-class="bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-600 hover:translate-x-0">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                        <span>Dashboard</span>
                    </router-link>

                    <router-link to="/items" 
                        class="flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 group font-medium text-xs sm:text-sm hover:bg-slate-700/70 hover:text-white hover:translate-x-1 hover:shadow-lg"
                        active-class="bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-600 hover:translate-x-0">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                        </svg>
                        <span>Manajemen Barang</span>
                    </router-link>
                </nav>

                <div class="p-3 sm:p-4 border-t border-slate-700/50 relative">
                    <button @click="logout" 
                        class="flex items-center justify-center space-x-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-rose-500/10 hover:bg-rose-600 text-rose-400 hover:text-white transition-all duration-300 text-xs sm:text-sm font-semibold border border-rose-500/20 hover:border-transparent shadow-sm group hover:shadow-rose-600/20 transform hover:scale-[1.02] active:scale-95">
                        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                        </svg>
                        <span>Keluar Aplikasi</span>
                    </button>
                </div>
            </aside>

            <!-- MAIN CONTENT -->
            <main class="flex-1 overflow-y-auto p-3 sm:p-6 lg:p-10 bg-gradient-to-br from-slate-50 via-white to-slate-100/30">
                <!-- Header -->
                <div class="pb-4 sm:pb-6 mb-4 sm:mb-8 border-b border-slate-200/60 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
                            <span class="bg-indigo-100 text-indigo-600 p-1.5 rounded-lg">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                                </svg>
                            </span>
                            Dashboard
                        </h1>
                        <p class="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1 flex items-center gap-1">
                            <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Sistem Online
                        </p>
                    </div>
                    <div class="mt-3 sm:mt-0 flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-400 flex-wrap">
                        <span class="bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-1.5">
                            <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            <span>Aktif</span>
                        </span>
                        <span class="text-[10px] sm:text-xs">{{ currentDate }}</span>
                    </div>
                </div>

                <!-- Kartu Statistik -->
                <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-8">
                    <!-- Total Barang -->
                    <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200/60 p-3 sm:p-4 lg:p-6 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 group">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-[8px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                    <span class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-indigo-500"></span>
                                    Total Barang
                                </p>
                                <p class="text-lg sm:text-2xl lg:text-4xl font-bold text-slate-800 mt-0.5 sm:mt-1 lg:mt-2 tracking-tight">{{ totalItems }}</p>
                            </div>
                            <div class="p-1.5 sm:p-2.5 lg:p-3.5 bg-indigo-50 rounded-xl sm:rounded-2xl border border-indigo-100/50 group-hover:bg-indigo-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                                </svg>
                            </div>
                        </div>
                        <div class="mt-1 sm:mt-2 lg:mt-4 flex items-center gap-2">
                            <span class="text-[8px] sm:text-[10px] lg:text-xs text-slate-400">Terdaftar di sistem</span>
                        </div>
                    </div>

                    <!-- Total Kategori -->
                    <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200/60 p-3 sm:p-4 lg:p-6 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 group">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-[8px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                    <span class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500"></span>
                                    Total Kategori
                                </p>
                                <p class="text-lg sm:text-2xl lg:text-4xl font-bold text-slate-800 mt-0.5 sm:mt-1 lg:mt-2 tracking-tight">{{ totalCategories }}</p>
                            </div>
                            <div class="p-1.5 sm:p-2.5 lg:p-3.5 bg-emerald-50 rounded-xl sm:rounded-2xl border border-emerald-100/50 group-hover:bg-emerald-100 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="mt-1 sm:mt-2 lg:mt-4 flex items-center gap-2">
                            <span class="text-[8px] sm:text-[10px] lg:text-xs text-slate-400">Untuk pengelompokan barang</span>
                        </div>
                    </div>

                    <!-- Stok Menipis -->
                    <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200/60 p-3 sm:p-4 lg:p-6 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 group">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-[8px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                    <span class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-500"></span>
                                    Stok Menipis
                                </p>
                                <p class="text-lg sm:text-2xl lg:text-4xl font-bold text-slate-800 mt-0.5 sm:mt-1 lg:mt-2 tracking-tight">{{ lowStockCount }}</p>
                            </div>
                            <div class="p-1.5 sm:p-2.5 lg:p-3.5 bg-amber-50 rounded-xl sm:rounded-2xl border border-amber-100/50 group-hover:bg-amber-100 transition-all duration-300 group-hover:scale-110">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="mt-1 sm:mt-2 lg:mt-4 flex items-center gap-2">
                            <span class="text-[8px] sm:text-[10px] lg:text-xs text-slate-400">Barang dengan stok ≤ 5</span>
                        </div>
                    </div>

                    <!-- Total Supplier -->
                    <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200/60 p-3 sm:p-4 lg:p-6 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 group">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-[8px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                    <span class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500"></span>
                                    Total Supplier
                                </p>
                                <p class="text-lg sm:text-2xl lg:text-4xl font-bold text-slate-800 mt-0.5 sm:mt-1 lg:mt-2 tracking-tight">{{ totalSuppliers }}</p>
                            </div>
                            <div class="p-1.5 sm:p-2.5 lg:p-3.5 bg-purple-50 rounded-xl sm:rounded-2xl border border-purple-100/50 group-hover:bg-purple-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="mt-1 sm:mt-2 lg:mt-4 flex items-center gap-2">
                            <span class="text-[8px] sm:text-[10px] lg:text-xs text-slate-400">Supplier terdaftar</span>
                        </div>
                    </div>
                </div>

                <!-- 5 Barang Terakhir - DENGAN INDIKATOR STOK (Merah/Hijau) -->
                <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200/60 p-4 sm:p-6 transition-all duration-500 hover:shadow-xl mb-4 sm:mb-8">
                    <div class="flex items-center justify-between mb-3 sm:mb-4">
                        <h2 class="text-sm sm:text-base lg:text-lg font-semibold text-slate-700 flex items-center gap-2">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                            </svg>
                            5 Barang Terakhir
                        </h2>
                        <router-link to="/items" class="text-[10px] sm:text-xs text-indigo-600 hover:text-indigo-800 font-medium hover:underline flex items-center gap-1">
                            Lihat Semua
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </router-link>
                    </div>
                    <div class="overflow-x-auto -mx-2 sm:mx-0">
                        <div class="inline-block min-w-full align-middle">
                            <table class="min-w-full text-xs sm:text-sm">
                                <thead class="bg-slate-50 border-b border-slate-200/60">
                                    <tr>
                                        <th class="px-2 sm:px-4 py-2 text-left font-semibold text-slate-500">Nama</th>
                                        <th class="px-2 sm:px-4 py-2 text-left font-semibold text-slate-500">Kategori</th>
                                        <th class="px-2 sm:px-4 py-2 text-left font-semibold text-slate-500">Stok</th>
                                        <th class="px-2 sm:px-4 py-2 text-left font-semibold text-slate-500">Harga</th>
                                        <th class="px-2 sm:px-4 py-2 text-left font-semibold text-slate-500">Supplier</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in recentItems" :key="item.id" class="border-b border-slate-100 hover:bg-slate-50/60 transition">
                                        <td class="px-2 sm:px-4 py-2 sm:py-3 font-medium text-slate-700">{{ item.name }}</td>
                                        <td class="px-2 sm:px-4 py-2 sm:py-3">
                                            <span class="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/40">
                                                {{ getCategoryName(item.category_id) || item.category_name || '-' }}
                                            </span>
                                        </td>
                                        <td class="px-2 sm:px-4 py-2 sm:py-3">
                                            <!-- INDIKATOR STOK: MERAH jika ≤ 5, HIJAU jika > 5 -->
                                            <span :class="item.stock <= 5 ? 'text-rose-600 font-bold bg-rose-50 px-1.5 sm:px-2 py-0.5 rounded-md' : 'text-emerald-600 font-bold bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded-md'">
                                                {{ item.stock }} Pcs
                                            </span>
                                        </td>
                                        <td class="px-2 sm:px-4 py-2 sm:py-3 font-medium text-slate-700">{{ formatRupiah(item.price) }}</td>
                                        <td class="px-2 sm:px-4 py-2 sm:py-3 text-slate-500">{{ item.supplier || '-' }}</td>
                                    </tr>
                                    <tr v-if="recentItems.length === 0">
                                        <td colspan="5" class="px-2 sm:px-4 py-4 sm:py-6 text-center text-slate-400 text-xs sm:text-sm">Belum ada barang terdaftar.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Aktivitas Terbaru -->
                <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200/60 p-4 sm:p-6 transition-all duration-500 hover:shadow-xl">
                    <div class="flex items-center justify-between mb-3 sm:mb-4">
                        <h2 class="text-sm sm:text-base lg:text-lg font-semibold text-slate-700 flex items-center gap-2">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Aktivitas Terbaru
                        </h2>
                        <span class="text-[10px] sm:text-xs text-slate-400 bg-slate-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-slate-200">Real-time</span>
                    </div>
                    <div class="space-y-2 sm:space-y-3">
                        <div class="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-50 rounded-xl border border-slate-100/50 hover:bg-slate-100/70 transition-all duration-200 group cursor-default">
                            <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                            <span class="text-xs sm:text-sm text-slate-600 group-hover:text-slate-800">Belum ada aktivitas terbaru untuk saat ini.</span>
                        </div>
                        <div class="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-50/50 rounded-xl border border-slate-100/30 opacity-60">
                            <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-300"></div>
                            <span class="text-xs sm:text-sm text-slate-400">Aktivitas akan muncul disini</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `,
    data() {
        return {
            sidebarOpen: false,
            totalItems: 0,
            totalCategories: 0,
            lowStockCount: 0,
            totalSuppliers: 0,
            recentItems: [],
            categories: [],
            currentDate: new Date().toLocaleDateString('id-ID', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
        }
    },
    inject: ['axios'],
    async mounted() {
        try {
            const [itemsRes, catRes] = await Promise.all([
                this.axios.get('/items'),
                this.axios.get('/categories')
            ]);
            const items = itemsRes.data || [];
            const cats = catRes.data || [];
            this.categories = cats;
            this.totalItems = items.length;
            this.totalCategories = cats.length;
            this.lowStockCount = items.filter(item => item.stock <= 5).length;
            const suppliers = items.map(item => item.supplier).filter(s => s && s.trim() !== '');
            this.totalSuppliers = new Set(suppliers).size;
            this.recentItems = [...items].sort((a, b) => b.id - a.id).slice(0, 5);
        } catch(e) { 
            console.error('Gagal memuat data dashboard:', e);
        }
    },
    methods: {
        getCategoryName(categoryId) {
            const cat = this.categories.find(c => c.id == categoryId);
            return cat ? cat.name : null;
        },
        formatRupiah(value) {
            return 'Rp ' + (Number(value) || 0).toLocaleString('id-ID');
        },
        logout() {
            localStorage.removeItem('api_token');
            localStorage.removeItem('isLoggedIn');
            this.$router.push('/login');
        }
    }
}