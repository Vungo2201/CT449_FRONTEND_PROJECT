<template>
    <div class="container">
        <div v-if = "statusLogin">
            <h3 style="color: #3d49a9;">Trang giỏ hàng của người dùng</h3>
        </div>
        <div v-else>
           {{ this.$router.push({ name : "user.login" }) }}
        </div>
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