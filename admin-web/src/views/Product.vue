<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-12">
            <div class="mt-3 row">
                <h4>
                    Hàng hóa
                    <i class="fas fa-address-book"></i>
                </h4>
            </div>
            <div class="mt-3 row">
                <ProductGrid
                v-if="filteredProductsCount > 0"
                :products="filteredProducts"
                v-model:activeIndex="activeIndex"
                />
                <p v-else>Không có hàng hóa nào.</p>
            </div>

            <div class="mt-3 row">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <i class="fas fa-redo"></i> Làm mới
                </button>
                &emsp;
                <button class="btn btn-sm btn-success" @click="goToAddProduct">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import InputSearch from "@/components/InputSearch.vue";
import ProductGrid from "@/components/ProductGrid.vue";
import ProductService from "@/services/product.service";
export default {
    components: {
        InputSearch,
        ProductGrid
    },
    data() {
        return {
            products: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        productStrings() {
            return this.products.map((product) => {
                const { TenHH,Gia,MotaHH,SoLuongHang,GhiChu,HinhHH } = product;
                return [TenHH,Gia,MotaHH,SoLuongHang,GhiChu,HinhHH].join("");
            });
        },
        filteredProducts() {
            if (!this.searchText) return this.products;
            return this.products.filter((_product, index) =>
            this.productStrings[index].includes(this.searchText)
            );
        },
        filteredProductsCount() {
            return this.filteredProducts.length;
        },
    },
    methods: {
        async retrieveProducts() {
            try {
                this.products = await ProductService.getAllProduct();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveProducts();
            this.activeIndex = -1;
        },
        goToAddProduct() {
            this.$router.push({ name: "product.add" });
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>

<style scoped>
    .page {
        text-align: left;
        max-width: 1000px;
    }
</style>