<template>
    <div class="container">
        <div class="row">
            <div class="col-5">
                <img :src="`${this.product.HinhHH}`" alt="" height="450" width="400">
            </div>
            <div class="col-7">
                <div class="row">
                    <h4>
                    Tên sách:
                    </h4> &ensp;
                    <h4 style="color: rgb(0, 149, 255);">{{ this.product.TenHH }}</h4>
                </div>
                <br>
                <div class="row">
                    <h3>
                    Mô tả sách:
                    </h3>
                    <p>{{ this.product.MotaHH }}</p>
                </div>
                <br>
                <div class="row">
                    <h4>Giá: </h4> &ensp;
                    <h4 style="color: rgb(0, 149, 255);">{{ this.product.Gia }}</h4> &ensp;
                    <h4> VNĐ/Cuốn</h4>
                </div>
                <br>
                <div class="row">
                    <h4>Tình trạng: </h4> &ensp;
                    <h4 style="color: rgb(0, 149, 255);">{{ this.product.GhiChu }}</h4>
                </div> <br>
                <div class="row">
                    <button
                    @click=" this.count > 1 ? this.count -= 1 : this.count = this.count"
                    type="button"
                    class="btn btn-primary"
                    >-</button> &ensp;
                    <h4>{{ this.count }} cuốn</h4> &ensp;
                    <button
                    @click="this.count += 1"
                    type="button"
                    class="btn btn-primary"
                    >+</button> &ensp;
                    <button
                    v-if="product._id"
                    type="button"
                    class="ml-2 btn btn-danger"
                    @click="addCart(product._id)"
                    >
                    Thêm sản phẩm vào giỏ hàng
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import ProductService from "@/services/product.service";
export default {
    props: {
        id: { type: String, required:true }
    },
    data() {
        return{
            count: 1,
            product: null,
            statusLogin: false,
            message: "",    
        }
    },
    methods: {
        async getProduct (id) {
            try {
                this.product = await ProductService.getProduct(id);
            }
            catch(error) {
                console.log(error);
            }
        },
        GetStatus(){
                if(sessionStorage.getItem("status"))
                this.statusLogin = sessionStorage.getItem("status");
                this.account = sessionStorage.getItem("account");
            },
        addCart () {
            if(this.statusLogin){
                alert(" Sản phẩm này đã được thêm vào giỏ hàng ")
            }
            else{
                this.$router.push({ name : "user.login"})
            }
        }
    },
    created() {
        this.GetStatus();
        this.getProduct(this.id);      
    }
}
</script>