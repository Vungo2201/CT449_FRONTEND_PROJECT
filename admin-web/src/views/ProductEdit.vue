<template>
    <div v-if="product" class="page">
        <div class="col-6">
            <h4  style="text-align: center; color: red;">Chỉnh sửa hàng hóa</h4>
        </div>
        <ProductForm :product="product" @submit:product="updateProduct"/>
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
import ProductService from "@/services/product.service";

export default {
    components: {
        ProductForm,
    },
    props: {
        id: { type: String, required:true }
    },
    data() {
        return{
            product: null,
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

                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$router.path.split("/").slice(1)
                    },
                    query: this.$router.query,
                    hash: this.$router.hash,
                });
            }
        },

        async updateProduct(data) {
            try {
                await ProductService.updateProduct(this.product._id,data);
                this.message = "Hàng hóa được cập nhật thành công.";
            } catch(error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getProduct(this.id);
        this.message="";            
    }

}
</script>