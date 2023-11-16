<template>
    <div class="col-6">
        <Form
        @submit="submitProduct"
        :validation-schema="productFormSchema"
    >
        <div class="form-group">
            <label for="TenHH">Tên Hàng Hóa:</label>
            <Field name="TenHH" type="text" class="form-control" v-model="productLocal.TenHH"
            />
            <ErrorMessage name="TenHH" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="Gia">Giá:</label>
            <Field name="Gia" type="text" class="form-control" v-model="productLocal.Gia" />
            <ErrorMessage name="Gia" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="MoTa">Mô tả hàng hóa:</label>
            <Field name="MoTa" type="text" class="form-control" v-model="productLocal.MotaHH" />
            <ErrorMessage name="MoTa" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="SLH">Số lượng hàng:</label>
            <Field name="SLH" type="number" class="form-control" v-model="productLocal.SoLuongHang" />
            <ErrorMessage name="SLH" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="GhiChu">Ghi chú hàng hóa:</label>
            <Field name="GhiChu" type="text" class="form-control" v-model="productLocal.GhiChu" />
            <ErrorMessage name="GhiChu" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="HinhHH">Hình hàng hóa:</label>
            <Field name="HinhHH" type="text" class="form-control" v-model="productLocal.HinhHH" />
            <ErrorMessage name="HinhHH" class="error-feedback" />
        </div>

        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
        </div>
    </Form>
    </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
    Form,
    Field,
    ErrorMessage,
    },
    emits: ["submit:product"],
    props: {
        product: { type: Object, required: true }
    },
    data() {
        const productFormSchema = yup.object().shape({
            TenHH: yup
                .string()
                .required("Tên hàng hóa phải có giá trị.")
                .min(5, "Tên hàng hóa phải ít nhất 5 ký tự.")
                .max(50, "Tên hàng hóa có nhiều nhất 50 ký tự."),
            Gia: yup
                .string()
                .required("Hàng hóa phải có giá tiền.")
                .min(5, "Giá hàng hóa ít nhất 5 con số.")
                .max(7, " Giá hàng hóa nhiều nhất 7 con số."),
            MoTa: yup.string() 
                .required("Mô tả hàng hóa là bắt buộc.")
                .min(5, "Mô tả hàng hóa có ít nhất 5 ký tự."),
            SLH: yup
                .number()
                .required("Hàng hóa phải có số lượng.")
                .min(1, "Số lượng hàng hóa ít nhất 1.")
                .max(1000, "Số lượng hàng hóa nhiều nhất 1000."),
            GhiChu:  yup.string() 
                .required("Ghi chú hàng hóa là bắt buộc.")
                .min(5, "Ghi chú hàng hóa có ít nhất 5 ký tự."),
            HinhHH:  yup.string() 
                .required("Hình hàng hóa là bắt buộc.")
                .min(20, "Hình hàng hóa có ít nhất 20 ký tự."),
        });
        return {
            productLocal: this.product,
            productFormSchema,
        };
        },
        methods: {
            submitProduct() {
                this.$emit("submit:product", this.productLocal);
            },
        },
    };
</script>

<style scoped>
    @import "@/assets/form.css";
</style>   