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
            <div class="card-body" style="height: 80px;">
                <i><h4 class="card-title">{{ product.TenHH }}</h4></i>
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
            </ul>
            <div class="card-body">
                <div class="row">
                    <router-link
                    :to="{
                    name: 'product.detail',
                    params: { id: product._id },
                    }">
                        <button type="button" class="btn btn-primary">Xem chi tiết</button>
                    </router-link>
                </div>
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
        data() {
            return {
                Count: 1,
            };
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