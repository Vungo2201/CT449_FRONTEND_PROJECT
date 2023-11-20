<template>
    <ul class="navbar navbar-dark bg-dark">
        <li class="nav-item">
            <b class="navbar-brand">Trang ADMIN</b>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'product' }" class="nav-link" style="color: aliceblue;">
                Quản lý hàng hóa
                <i class="fas fa-book" style="color: #175acf;"></i>
            </router-link>
            <router-link :to="{ name: 'order' }" class="nav-link" style="color: aliceblue;">
                Quản lý đơn hàng
                <i class="fa-solid fa-cart-shopping " style="color: #175acf;"></i>
            </router-link>
            <router-link :to="{ name: 'admin.login' }" class="nav-link" style="color: aliceblue;">
                Đăng nhập
                <i class="fa-solid fa-user-secret" style="color: #175acf;"></i>
            </router-link>
        </li>
        <div style="height: 150px;"></div>
        <li>
            <img src="https://cdn-icons-png.flaticon.com/512/2206/2206368.png" alt="" style="width: 200px;">
        </li>
    </ul>
</template>