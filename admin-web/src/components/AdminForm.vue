<template>
    <Form class="d-flex flex-column bg-white" @submit="submitAdmin" :validation-schema="adminFormSchema">
        <div class="mb-4 form-contain">
            <label class="form-label fs-5" for="Email">Email: </label>
            <Field v-model="adminLocal.Email" type="text" name="Email" class="form-control" id="Email" />
            <div class="input-line"></div>
            <ErrorMessage name="Email" class="error-feedback text-center"/>
        </div>
        <div class="mb-4 form-contain">
            <label class="form-label fs-5" for="password">Mật khẩu: </label>
            <Field v-model="adminLocal.Password"   type="password" name="password" class="form-control" id="password" />
            <div class="input-line"></div>
            <ErrorMessage name="password" class="error-feedback text-center"/>
        </div>
        <div class="align-self-start">
            <button type="submit" class="btn btn-primary" >Đăng nhập</button>
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
        admin: { type: Object, required: true }
    },
    emits: ["submit:admin"],
    data() {
        const adminFormSchema = yup.object().shape({
            Email: yup
                .string()
                .required("Email là bắt buộc")
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            password: yup.string() 
                .required("Mật khẩu là bắt buộc.")
                .min(8, "Mật khẩu có ít nhất 8 ký tự."),
        });
        
        return {
            adminLocal: this.admin,
            adminFormSchema,
        }
    },

    methods: {
        submitAdmin() {
            this.$emit("submit:admin", this.adminLocal)
        }
    }
}
</script>

<style scoped>
    @import "@/assets/form.css";
</style> 