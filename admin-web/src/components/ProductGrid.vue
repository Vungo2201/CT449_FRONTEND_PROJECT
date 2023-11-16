<template>
        <div
            class="col-6"
            v-for="(product, index) in products"
            :key="product._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
        >
            <td>id Hàng hóa:{{ product._id }}</td>
            <br>
            <td>{{ product.TenHH }}</td>
            <td>
                <button
                    v-if="product._id"
                    type="button"
                    class="ml-2 btn btn-danger"
                    @click="deleteProduct(product._id)"
                    >
                Xóa
                </button>
                <router-link
                :to="{
                name: 'product.edit',
                params: { id: product._id },
                }"
                >
                <span class="mt-2 badge badge-warning">
                <i class="fas fa-edit"></i> Hiệu chỉnh</span
                >
                </router-link>
            </td>
        </div>
</template>
<script>
import ProductService from "@/services/product.service";
    export default {
        props: {
            products: { type: Array, default: [] },
            activeIndex: { type: Number, default: -1 },
        },
        emits: ["update:activeIndex"],
        methods: {
            updateActiveIndex(index) {
                this.$emit("update:activeIndex", index);
            },
            async deleteProduct(id) {
                if (confirm("Bạn muốn xóa sản phẩm này?")) {
                    console.log(id);
                    try {
                        await ProductService.deleteProduct(id);
                    } catch (error) {
                        console.log(error);
                    }
                }
            },

        }
    };
</script>