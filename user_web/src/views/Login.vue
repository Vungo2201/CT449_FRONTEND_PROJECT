<template>
    <div class="container" v-if="statusLogin == false" style="position: ;">
        <h2 class="name"></h2>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <h4  style="text-align: center; color: blue;">Đăng Nhập</h4>
                <LoginForm
                :user="user"
                @submit:user="Login"
                />
                <p style="color: blueviolet;">{{ message }}</p>
            </div>
            <br>
            <div class="col-3"></div>
        </div>
        <br>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-3">Bạn không có tài khoản?</div>
            <div class="col-6">
                <router-link
                :to="{
                name: 'user.signup',
                }">
                    <p>Đăng ký</p>
                </router-link>
            </div>
        </div>
    </div>
    <div v-else class="container">
        <h3 style="color: #3d49a9;">Bạn đã đăng nhập thành công với tài khoản:</h3><br>
        <h4>{{ this.account }}</h4>
        <br>
        <div v-if="statusLogin" class="nav-item">
                <button
                type="button"
                class="btn btn-primary"                
                @click="LogOut"
            >
            Đăng xuất
            </button>
        </div>
    </div>
</template>

<script>
    import LoginForm from "@/components/LoginForm.vue";
    import UserService from "@/services/user.service";
    export default{
        components: {
            LoginForm,
        },
        data() {
            return {
                user: {},
                account: "",
                statusLogin: false,
                message: "",
            };
        },
        methods:{
            async Login(data) {
                try{
                    const res = await UserService.Login(data);
                    this.message = res;
                    if(res == "Đăng nhập thành công") {
                        sessionStorage.setItem("status",true);
                        sessionStorage.setItem("account",data.Email)
                    }
                    this.$router.push({ name : "home"});
                }catch(error){
                    console.log(error);
                }
            },
            LogOut(){
                if(confirm("Bạn có muốn đăng xuất khỏi ứng dụng không ?")){
                    sessionStorage.clear();
                    this.statusLogin = false;
                    this.$router.push({ name : "home"});
                }
            },
            GetStatus(){
                if(sessionStorage.getItem("status"))
                this.statusLogin = sessionStorage.getItem("status");
                this.account = sessionStorage.getItem("account");
            }
        },
        created() {
            this.GetStatus();
            this.message = "";
        },
    }
</script>