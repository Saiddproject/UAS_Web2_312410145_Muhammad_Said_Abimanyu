export default {
    template: `
        <div class="flex h-screen bg-slate-50 font-sans antialiased overflow-hidden">
            <!-- TOMBOL HAMBURGER -->
            <button v-if="!sidebarOpen" @click="sidebarOpen = true" 
                class="lg:hidden fixed top-4 right-4 z-50 p-2.5 bg-white rounded-xl shadow-lg border border-slate-200/60 hover:bg-slate-50 transition-all duration-200">
                <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>

            <!-- OVERLAY -->
            <div v-if="sidebarOpen" @click="sidebarOpen = false" 
                class="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"></div>

            <!-- SIDEBAR -->
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
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 sm:pb-6 mb-4 sm:mb-8 border-b border-slate-200/60">
                    <div class="pr-8 sm:pr-0">
                        <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">Manajemen Barang</h1>
                        <p class="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1">Kelola, tambah, ubah, dan pantau stok inventaris secara real-time.</p>
                    </div>
                    <div class="mt-3 sm:mt-0">
                        <button @click="openModal()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-lg transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
                            Tambah Barang
                        </button>
                    </div>
                </div>

                <!-- TABEL -->
                <div class="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
                    <div class="overflow-x-auto -mx-2 sm:mx-0">
                        <div class="inline-block min-w-full align-middle">
                            <table class="min-w-full text-left border-collapse text-xs sm:text-sm">
                                <thead class="bg-slate-50/70 border-b border-slate-100 text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                                    <tr>
                                        <th class="px-2 sm:px-6 py-3 sm:py-4 font-semibold">ID</th>
                                        <th class="px-2 sm:px-6 py-3 sm:py-4 font-semibold">Nama Barang</th>
                                        <th class="px-2 sm:px-6 py-3 sm:py-4 font-semibold">Kategori</th>
                                        <th class="px-2 sm:px-6 py-3 sm:py-4 font-semibold">Stok</th>
                                        <th class="px-2 sm:px-6 py-3 sm:py-4 font-semibold">Harga</th>
                                        <th class="px-2 sm:px-6 py-3 sm:py-4 font-semibold">Supplier</th>
                                        <th class="px-2 sm:px-6 py-3 sm:py-4 font-semibold text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody class="text-slate-600 divide-y divide-slate-100">
                                    <tr v-for="item in items" :key="item.id" class="hover:bg-slate-50/60 transition duration-150">
                                        <td class="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap font-mono text-[10px] sm:text-xs text-slate-400">#{{ item.id }}</td>
                                        <td class="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap font-semibold text-slate-800">{{ item.name }}</td>
                                        <td class="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                                            <span class="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/40">
                                                {{ getCategoryName(item.category_id) || item.category_name || '-' }}
                                            </span>
                                        </td>
                                        <!-- KOLOM STOK DENGAN BADGE MERAH / HIJAU -->
                                        <td class="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                                            <span :class="[
                                                'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium',
                                                item.stock <= 5 
                                                    ? 'bg-rose-100 text-rose-700 border border-rose-200' 
                                                    : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                            ]">
                                                <span :class="[
                                                    'w-1.5 h-1.5 rounded-full',
                                                    item.stock <= 5 ? 'bg-rose-500' : 'bg-emerald-500'
                                                ]"></span>
                                                {{ item.stock }} Pcs
                                            </span>
                                        </td>
                                        <td class="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap font-medium text-slate-700">{{ formatRupiah(item.price) }}</td>
                                        <td class="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-slate-500">{{ item.supplier || '-' }}</td>
                                        <td class="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-center">
                                            <div class="flex items-center justify-center gap-1 sm:gap-2">
                                                <button @click="openModal(item)" 
                                                    class="group relative p-1.5 sm:p-2 text-indigo-600 hover:text-white bg-indigo-50 hover:bg-indigo-600 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-indigo-200"
                                                    title="Edit Item">
                                                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                                    </svg>
                                                    <span class="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap">Edit</span>
                                                </button>
                                                <button @click="deleteItem(item.id)" 
                                                    class="group relative p-1.5 sm:p-2 text-rose-600 hover:text-white bg-rose-50 hover:bg-rose-600 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-rose-200"
                                                    title="Hapus Item">
                                                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                                    </svg>
                                                    <span class="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap">Hapus</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="items.length === 0">
                                        <td colspan="7" class="px-2 sm:px-6 py-8 sm:py-12 text-center text-slate-400 bg-slate-50/20">
                                            <svg class="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-slate-300 mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                                            <span class="text-xs sm:text-sm font-medium">Belum ada komoditas terdaftar. Silakan tambah data baru.</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- MODAL -->
                <div v-if="showModal" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
                    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden border border-slate-100 transform transition-all duration-300 scale-100 opacity-100">
                        <div class="bg-gradient-to-r from-slate-900 to-slate-800 px-5 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                            <h2 class="text-base sm:text-lg font-bold text-white tracking-wide">{{ isEdit ? '✏️ Update Inventaris' : '📦 Registrasi Barang Baru' }}</h2>
                            <button @click="closeModal" class="text-slate-400 hover:text-white transition duration-200 hover:rotate-90">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            </button>
                        </div>
                        <form @submit.prevent="saveItem" class="p-5 sm:p-6 space-y-4">
                            <div>
                                <label class="block text-slate-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">Nama Komoditas</label>
                                <input v-model="form.name" type="text" 
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition" 
                                    placeholder="Contoh: Asus ROG Zephyrus" required>
                            </div>
                            <div>
                                <label class="block text-slate-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">Kategori</label>
                                <select v-model="form.category_id" 
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition appearance-none"
                                    required>
                                    <option value="" disabled selected class="text-slate-400">--- Pilih Kategori ---</option>
                                    <option v-for="cat in categories" :key="cat.id" :value="cat.id" class="text-slate-700">{{ cat.name }}</option>
                                </select>
                            </div>
                            <div class="grid grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label class="block text-slate-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">Stok</label>
                                    <input v-model.number="form.stock" type="number" min="0" 
                                        class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition" required>
                                </div>
                                <div>
                                    <label class="block text-slate-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">Harga</label>
                                    <input v-model="displayPrice" type="text" 
                                        @focus="onPriceFocus" @blur="onPriceBlur"
                                        class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition" 
                                        placeholder="Contoh: 1000000">
                                </div>
                            </div>
                            <div>
                                <label class="block text-slate-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">Supplier</label>
                                <input v-model="form.supplier" type="text" 
                                    class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 sm:p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition" 
                                    placeholder="Contoh: PT. Sinar Abadi Logistics">
                            </div>
                            <div class="flex justify-end gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-100 mt-4 sm:mt-6">
                                <button type="button" @click="closeModal" 
                                    class="px-4 sm:px-5 py-2 sm:py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition text-xs sm:text-sm font-semibold">
                                    Batal
                                </button>
                                <button type="submit" 
                                    class="px-4 sm:px-5 py-2 sm:py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/10 transition text-xs sm:text-sm font-semibold hover:shadow-lg">
                                    Simpan Data
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    `,
    data() {
        return {
            sidebarOpen: false,
            items: [],
            categories: [],
            showModal: false,
            isEdit: false,
            form: { id: null, name: '', category_id: '', stock: 0, price: 0, supplier: '' },
            displayPrice: ''
        }
    },
    inject: ['axios'],
    watch: {
        'form.price': {
            handler(val) {
                if (val !== null && val !== undefined && val !== '') {
                    this.displayPrice = this.formatNumberWithDots(val);
                } else {
                    this.displayPrice = '';
                }
            },
            immediate: true
        }
    },
    async mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const [itemsRes, catRes] = await Promise.all([
                    this.axios.get('/items'),
                    this.axios.get('/categories')
                ]);
                this.items = itemsRes.data || [];
                this.categories = catRes.data || [];
                if (!this.isEdit && this.categories.length > 0) {
                    this.form.category_id = this.categories[0].id;
                }
            } catch(e) {
                console.error('Gagal mengambil data:', e);
            }
        },
        getCategoryName(categoryId) {
            const category = this.categories.find(c => c.id == categoryId);
            return category ? category.name : null;
        },
        openModal(item = null) {
            if (item) {
                this.isEdit = true;
                this.form = { ...item };
            } else {
                this.isEdit = false;
                this.form = { 
                    id: null, 
                    name: '', 
                    category_id: this.categories[0]?.id || '', 
                    stock: 0, 
                    price: 0, 
                    supplier: '' 
                };
                this.displayPrice = '';
            }
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        onPriceFocus() {
            if (this.displayPrice) {
                this.displayPrice = this.displayPrice.replace(/\./g, '');
            }
        },
        onPriceBlur() {
            if (this.displayPrice) {
                const clean = this.displayPrice.replace(/\./g, '');
                const num = parseFloat(clean);
                if (!isNaN(num) && num >= 0) {
                    if (num === 0) {
                        this.displayPrice = '0';
                        this.form.price = 0;
                    } else {
                        this.displayPrice = this.formatNumberWithDots(num);
                        this.form.price = num;
                    }
                } else {
                    this.displayPrice = '';
                    this.form.price = 0;
                }
            } else {
                this.form.price = 0;
            }
        },
        formatNumberWithDots(num) {
            if (!num && num !== 0) return '';
            return Number(num).toLocaleString('id-ID');
        },
        async saveItem() {
            try {
                const payload = {
                    ...this.form,
                    price: this.form.price || 0
                };
                if (this.isEdit) {
                    await this.axios.put(`/items/${this.form.id}`, payload);
                } else {
                    await this.axios.post('/items', payload);
                }
                this.closeModal();
                this.fetchData();
            } catch(e) {
                console.error('Gagal menyimpan:', e);
                alert('Gagal menyimpan data. Periksa koneksi atau input.');
            }
        },
        async deleteItem(id) {
            if (confirm('Apakah Anda yakin ingin menghapus komoditas inventaris ini?')) {
                try {
                    await this.axios.delete(`/items/${id}`);
                    this.fetchData();
                } catch(e) {
                    console.error('Gagal menghapus:', e);
                    alert('Gagal menghapus data.');
                }
            }
        },
        formatRupiah(value) {
            return 'Rp ' + (Number(value) || 0).toLocaleString('id-ID');
        },
        logout() {
            localStorage.clear();
            this.$router.push('/login');
        }
    }
}