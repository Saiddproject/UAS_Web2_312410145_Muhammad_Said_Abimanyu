export default {
    template: `
        <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 px-3 sm:px-4">
            <div class="max-w-md w-full animate-fade-in-up">
                <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 overflow-hidden transition-all duration-500 hover:shadow-3xl">
                    
                    <!-- Header -->
                    <div class="relative pt-8 sm:pt-10 pb-4 sm:pb-6 text-center">
                        <div class="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-20 animate-pulse-slow"></div>
                        <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 animate-pulse-slow delay-1000"></div>
                        <div class="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-3 sm:mb-4 shadow-lg animate-bounce-subtle">
                            <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                            </svg>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">Buat Akun</h2>
                        <p class="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-2">Daftar untuk mulai menggunakan E-Inventory</p>
                    </div>

                    <!-- Form -->
                    <div class="px-5 sm:px-8 pb-8 sm:pb-10 pt-1 sm:pt-2">
                        <form @submit.prevent="register" class="space-y-4 sm:space-y-5">
                            <!-- Username -->
                            <div class="animate-fade-in-up animation-delay-200">
                                <label class="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 sm:mb-2">Username</label>
                                <div class="relative group">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                        </svg>
                                    </div>
                                    <input type="text" v-model="username" autofocus
                                        class="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-slate-700 text-sm sm:text-base shadow-sm hover:shadow" 
                                        placeholder="Masukkan username" required minlength="3">
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="animate-fade-in-up animation-delay-300">
                                <label class="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 sm:mb-2">Email</label>
                                <div class="relative group">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <input type="email" v-model="email" 
                                        class="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-slate-700 text-sm sm:text-base shadow-sm hover:shadow" 
                                        placeholder="email@contoh.com" required>
                                </div>
                            </div>

                            <!-- Password -->
                            <div class="animate-fade-in-up animation-delay-400">
                                <label class="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 sm:mb-2">Password</label>
                                <div class="relative group">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                        </svg>
                                    </div>
                                    <input :type="showPassword ? 'text' : 'password'" v-model="password" 
                                        class="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-slate-700 text-sm sm:text-base shadow-sm hover:shadow" 
                                        placeholder="Minimal 4 karakter" required minlength="4">
                                    <button type="button" @click="showPassword = !showPassword" 
                                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-indigo-600 transition-all duration-200 transform hover:scale-110 focus:outline-none">
                                        <svg v-if="showPassword" class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <svg v-else class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.025 10.025 0 014.132-5.4M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 21l-2-2m-2-2l-6-6m-2-2L3 3" />
                                        </svg>
                                    </button>
                                </div>
                                <p class="text-[10px] text-slate-400 mt-1">Minimal 4 karakter</p>
                            </div>

                            <!-- Konfirmasi Password -->
                            <div class="animate-fade-in-up animation-delay-500">
                                <label class="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 sm:mb-2">Konfirmasi Password</label>
                                <div class="relative group">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                        </svg>
                                    </div>
                                    <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword" 
                                        class="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-slate-700 text-sm sm:text-base shadow-sm hover:shadow" 
                                        placeholder="Ulangi password" required>
                                    <button type="button" @click="showConfirmPassword = !showConfirmPassword" 
                                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-indigo-600 transition-all duration-200 transform hover:scale-110 focus:outline-none">
                                        <svg v-if="showConfirmPassword" class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <svg v-else class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.025 10.025 0 014.132-5.4M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 21l-2-2m-2-2l-6-6m-2-2L3 3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- Tombol Daftar -->
                            <div class="pt-1 sm:pt-2 animate-fade-in-up animation-delay-600">
                                <button type="submit" :disabled="isLoading"
                                    class="relative w-full bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-semibold tracking-wide py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group">
                                    <span class="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                    <span class="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                                        <svg v-if="isLoading" class="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        <span>{{ isLoading ? 'Memproses...' : 'Daftar Sekarang' }}</span>
                                    </span>
                                </button>
                            </div>

                            <!-- Pesan Sukses -->
                            <transition enter-active-class="transition ease-out duration-300" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-200" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <div v-if="successMsg" class="flex items-center justify-center gap-2 mt-3 sm:mt-4 p-2.5 sm:p-3 bg-emerald-50 rounded-xl border border-emerald-200 shadow-sm">
                                    <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <p class="text-emerald-600 text-[11px] sm:text-xs font-medium text-center">{{ successMsg }}</p>
                                </div>
                            </transition>

                            <!-- Pesan Error -->
                            <transition enter-active-class="transition ease-out duration-300" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-200" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <div v-if="errorMsg" class="flex items-center justify-center gap-2 mt-3 sm:mt-4 p-2.5 sm:p-3 bg-rose-50 rounded-xl border border-rose-200 shadow-sm animate-shake">
                                    <svg class="w-4 h-4 text-rose-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                    </svg>
                                    <p class="text-rose-600 text-[11px] sm:text-xs font-medium text-center">{{ errorMsg }}</p>
                                </div>
                            </transition>
                        </form>

                        <!-- Link Login -->
                        <div class="mt-6 sm:mt-8 text-center animate-fade-in-up animation-delay-700">
                            <p class="text-[11px] sm:text-xs text-slate-500">Sudah punya akun? 
                                <router-link to="/login" class="text-indigo-600 font-medium hover:text-indigo-800 transition-all duration-200 hover:underline hover:ml-1 inline-flex items-center gap-1 group">
                                    Masuk Sekarang
                                    <svg class="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                </router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errorMsg: '',
            successMsg: '',
            isLoading: false,
            showPassword: false,
            showConfirmPassword: false
        };
    },
    inject: ['axios'],
    methods: {
        async register() {
            // Reset pesan
            this.errorMsg = '';
            this.successMsg = '';
            this.isLoading = true;

            // Validasi password match
            if (this.password !== this.confirmPassword) {
                this.errorMsg = 'Password dan konfirmasi password tidak sama';
                this.isLoading = false;
                // Auto clear error
                setTimeout(() => { this.errorMsg = ''; }, 4000);
                return;
            }

            // Validasi panjang password
            if (this.password.length < 4) {
                this.errorMsg = 'Password minimal 4 karakter';
                this.isLoading = false;
                setTimeout(() => { this.errorMsg = ''; }, 4000);
                return;
            }

            // Validasi username
            if (this.username.length < 3) {
                this.errorMsg = 'Username minimal 3 karakter';
                this.isLoading = false;
                setTimeout(() => { this.errorMsg = ''; }, 4000);
                return;
            }

            try {
                const res = await this.axios.post('/register', {
                    username: this.username.trim(),
                    email: this.email.trim(),
                    password: this.password
                });

                if (res.data.status === 201) {
                    this.successMsg = '✅ Registrasi berhasil! Silakan login.';
                    // Kosongkan form
                    this.username = '';
                    this.email = '';
                    this.password = '';
                    this.confirmPassword = '';
                    // Redirect setelah 2 detik
                    setTimeout(() => {
                        this.$router.push('/login');
                    }, 2000);
                } else {
                    this.errorMsg = res.data.message || 'Registrasi gagal, coba lagi.';
                    setTimeout(() => { this.errorMsg = ''; }, 5000);
                }
            } catch (err) {
                console.error('❌ Error registrasi:', err.response?.data || err.message);
                const msg = err.response?.data?.messages || err.response?.data?.message;
                if (msg && typeof msg === 'object') {
                    this.errorMsg = Object.values(msg).join(', ');
                } else {
                    this.errorMsg = msg || 'Registrasi gagal. Periksa koneksi atau input.';
                }
                setTimeout(() => { this.errorMsg = ''; }, 5000);
            } finally {
                this.isLoading = false;
            }
        }
    }
}