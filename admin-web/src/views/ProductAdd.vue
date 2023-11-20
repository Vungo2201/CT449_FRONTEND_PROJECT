<template>
    <div class="page">
        <div class="col-6">
            <h4  style="text-align: center; color: red;">Thêm hàng hóa</h4>
        </div>
        <ProductForm
            :product="product"
            @submit:product="postproduct"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
    import ProductForm from "@/components/ProductForm.vue";
    import ProductService from "@/services/product.service";
    export default{
        components: {
            ProductForm,
        },
        data() {
            return {
                product: {},
                message: "",
            };
        },
        methods:{
            async postproduct(data) {
                try{
                    await ProductService.createProduct(data);
                    alert(" Hàng hóa mới đã được thêm thành công");
                    this.$router.push({ name : "product"});
                }catch(error){
                    console.log(error);
                    this.message = " Hàng hóa mới thêm vào thất bại ";
                }
            }
        },
        created() {
            this.message = "";
        },
    }
</script>