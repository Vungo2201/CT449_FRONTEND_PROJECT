<template>
    <div
        class="col-4"
        v-for="(product, index) in products"
        :key="product._id"
        :class="{ active: index === activeIndex }"
        @click="updateActiveIndex(index)"
    >
        <div class="card" style="width: 18rem;">
            <img :src="`${product.HinhHH}`" class="card-img-top" alt="..."  style="height: 350px;">
            <div class="card-body" style="height: 300px; overflow-y: auto;">
                <i><h4 class="card-title">{{ product.TenHH }}</h4></i>
                <p class="card-text">
                    <h5>Mô Tả:</h5>
                    {{ product.MotaHH }}
                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <b>Giá:</b> &nbsp;
                    <i>{{ product.Gia }}</i> VNĐ
                </li>
                <li class="list-group-item">
                    <b>Tình trạng:</b>  &nbsp;
                    <i>{{ product.GhiChu }}</i>
                </li>
                <li class="list-group-item">
                    <b>Số lượng hàng:</b>  &nbsp;
                    <i>{{ product.SoLuongHang }}</i> cuốn
                </li>
            </ul>
            <div class="card-body">
                <button
                    v-if="product._id"
                    type="button"
                    class="ml-2 btn btn-danger"
                    @click="deleteProduct(product._id)"
                    >
                Xóa
                </button> &emsp;
                <router-link
                :to="{
                name: 'product.edit',
                params: { id: product._id },
                }">
                    <button type="button" class="btn btn-warning">Chỉnh sửa</button>
                </router-link>
            </div>
        </div>
        <br>
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