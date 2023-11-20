<template>
    <div class="page">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <h4  style="text-align: center; color: blue;">Đăng Ký</h4>
                <SignupForm
                    :user="user"
                    @submit:user="signup"
                />
                <p>{{ message }}</p>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-3">Bạn đã có tài khoản?</div>
            <div class="col-6">
                <router-link
                :to="{
                name: 'user.login',
                }">
                    <p>Đăng nhập</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import SignupForm from "@/components/SignupForm.vue";
    import UserService from "@/services/user.service";
    export default{
        components: {
            SignupForm,
        },
        data() {
            return {
                user: {},
                message: "",
            };
        },
        methods:{
            async signup(data) {
                try{
                    Text = await UserService.Signup(data);
                    if(Text.toString() == "Tài khoản này đã tồn tại")
                        alert(Text.toString());
                    else{
                        alert("Bạn đã đăng ký thành công");
                        this.$router.push({ name : "user.login"});
                    }
                }catch(error){
                    console.log(error);
                    this.message = "Đăng ký không thành công";
                }
            }
        },
        created() {
            this.message = "";
        },
    }
</script>