<template>
    <ul class="navbar navbar-dark bg-dark container">
            <li class="nav-item">
                <b class="navbar-brand" href="/">Trang Người Dùng</b>
            </li>
            <router-link :to="{ name: 'home' }" class="nav-link" style="color: aliceblue;">
                Trang chủ
            </router-link>
            <router-link :to="{ name: 'product' }" class="nav-link" style="color: aliceblue;">
                Trang sản phẩm
            </router-link>
            <router-link :to="{ name: 'user.login' }" class="nav-link" style="color: aliceblue;">
                Đăng nhập/Đăng xuất
            </router-link>
            <router-link :to="{ name: 'order' }" class="nav-link" style="color: aliceblue;">
                Giỏ hàng 
            </router-link>
            <router-link :to="{ name: 'cart' }" class="nav-link" style="color: aliceblue;">
                Đơn hàng
            </router-link>
    </ul>
</template>