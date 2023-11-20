<template>
    <Form class="d-flex flex-column bg-white" @submit="submitUser" :validation-schema="userFormSchema">
        <div class="form-group">
            <label for="Hoten">Họ Tên:</label>
            <Field name="Hoten" type="text" class="form-control" v-model="userLocal.HoTenKH" />
            <ErrorMessage name="Hoten" class="error-feedback" />
        </div>
        <div class="mb-4 form-contain">
            <label class="form-label fs-5" for="Email">Email: </label>
            <Field v-model="userLocal.Email" type="text" name="Email" class="form-control" id="Email" />
            <div class="input-line"></div>
            <ErrorMessage name="Email" class="error-feedback text-center"/>
        </div>
        <div class="mb-4 form-contain">
            <label class="form-label fs-5" for="password">Mật khẩu: </label>
            <Field v-model="userLocal.Password"   type="password" name="password" class="form-control" id="password" />
            <div class="input-line"></div>
            <ErrorMessage name="password" class="error-feedback text-center"/>
        </div>
        <div class="form-group">
            <label for="DiaChi">Địa chỉ:</label>
            <Field name="DiaChi" type="text" class="form-control" v-model="userLocal.DiaChi" />
            <ErrorMessage name="DiaChi" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="SDT">Số điện thoại:</label>
            <Field name="SDT" type="text" class="form-control" v-model="userLocal.SDT" />
            <ErrorMessage name="SDT" class="error-feedback" />
        </div>
        <div class="align-self-start">
            <button type="submit" class="btn btn-primary" >Đăng ký</button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import {Form, Field, ErrorMessage} from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    props: {
        user: { type: Object, required: true }
    },
    emits: ["submit:user"],
    data() {
        const userFormSchema = yup.object().shape({
            Hoten: yup.string() 
                .required("Họ tên là bắt buộc.")
                .min(5, "Họ tên cần có ít nhất 5 ký tự."),
            Email: yup
                .string()
                .required("Email là bắt buộc")
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            password: yup.string() 
                .required("Mật khẩu là bắt buộc.")
                .min(8, "Mật khẩu có ít nhất 8 ký tự."),
            DiaChi: yup.string() 
            .required("Địa chỉ là bắt buộc.")
            .min(10, "Địa chỉ có ít nhất 10 ký tự."),
            SDT: yup.string() 
            .required("Số điện thoại là bắt buộc.")
            .min(10, "Số điện thoại có ít nhất 10 ký tự.")
            .max(12, "Số điện thoại có nhiều nhất 12 ký tự."),
        });
        
        return {
            userLocal: this.user,
            userFormSchema,
        }
    },

    methods: {
        submitUser() {
            this.$emit("submit:user", this.userLocal)
        }
    }
}
</script>

<style scoped>
    @import "@/assets/form.css";
</style> 