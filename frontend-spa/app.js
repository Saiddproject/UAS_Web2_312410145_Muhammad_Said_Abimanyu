import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Dashboard from './components/Dashboard.js';
import Items from './components/Items.js';

const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// 1. Buat axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: { 'Content-Type': 'application/json' }
});

// 2. Definisikan router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home, name: 'home' },
        { path: '/login', component: Login, name: 'login' },
        { path: '/register', component: Register, name: 'register' },
        { 
            path: '/dashboard', 
            component: Dashboard, 
            name: 'dashboard', 
            meta: { requiresAuth: true } 
        },
        { 
            path: '/items', 
            component: Items, 
            name: 'items', 
            meta: { requiresAuth: true } 
        }
    ]
});

// 3. Interceptor REQUEST
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('api_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// 4. Interceptor RESPONSE (dengan pengecekan agar tidak redirect loop)
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // Jika error 401 dan bukan dari endpoint login, maka token tidak valid
        if (error.response && error.response.status === 401) {
            const currentPath = router.currentRoute.value.path;
            // Hanya redirect jika tidak sedang di halaman login atau register
            if (currentPath !== '/login' && currentPath !== '/register') {
                localStorage.removeItem('api_token');
                localStorage.removeItem('isLoggedIn');
                alert('Sesi habis, silakan login kembali.');
                router.push('/login');
            }
        }
        return Promise.reject(error);
    }
);

// 5. Navigation guard
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (to.meta.requiresAuth && !isLoggedIn) {
        next('/login');
    } else {
        next();
    }
});

// 6. Buat app
const app = createApp({
    template: '<router-view />'
});
app.use(router);
app.provide('axios', axiosInstance);
app.mount('#app');

console.log('🚀 Aplikasi E-Inventory berhasil dimuat!');