<template>
    <div v-if = "statusLogin">
        <h3 style="color: #3d49a9;">Trang quản lý đơn hàng</h3>
    </div>
  <div v-else>
        <h3 style="color: #3d49a9;">Vui lòng đăng nhập để quản lý hàng hóa</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            statusLogin: false,
        };
    },
    
    methods: {
        GetStatus(){
            if(sessionStorage.getItem("status"))
            this.statusLogin = sessionStorage.getItem("status");
        }
    },
   
    created(){
        this.GetStatus();
    },
};
</script>