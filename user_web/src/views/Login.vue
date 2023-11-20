<template>
    <div class="page" v-if="statusLogin == false">
        <h2 class="name"></h2>
        <div class="col-6">
            <h4  style="text-align: center; color: blue;">ADMIN Đăng Nhập</h4>
        </div>
        <div class="col-6">
            <AdminForm
            :admin="admin"
            @submit:admin="Login"
            />
        </div>
        <br>
        <p style="color: blueviolet;">{{ message }}</p>
    </div>
    <div v-else>
        <h3 style="color: #3d49a9;">Bạn đã đăng nhập thành công với tài khoản:</h3><br>
        <h4>{{ this.account }}</h4>
        <br>
        <button
            type="button"
            class="btn btn-primary"                
            @click="LogOut"
        >
        Đăng xuất
        </button>
    </div>
</template>

<script>
    import AdminForm from "@/components/AdminForm.vue";
    import AdminService from "@/services/admin.service";
    export default{
        components: {
            AdminForm,
        },
        data() {
            return {
                admin: {},
                account: "",
                statusLogin: false,
                message: "",
            };
        },
        methods:{
            async Login(data) {
                try{
                    const res = await AdminService.Login(data);
                    this.message = res;
                    if(res == "Đăng nhập thành công") {
                        sessionStorage.setItem("status",true);
                        sessionStorage.setItem("account",data.Email)
                    }
                }catch(error){
                    console.log(error);
                }
            },
            LogOut(){
                if(confirm("Bạn có muốn đăng xuất khỏi trang admin không ?")){
                    sessionStorage.clear();
                    this.statusLogin = false;
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