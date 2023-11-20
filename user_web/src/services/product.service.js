import createApiClient from "./api.service";

class ProductService {
    constructor(baseUrl = "/api/shop") {
        this.api = createApiClient(baseUrl);
    }
    async getAllProduct(){
        return (await this.api.get("/products")).data;
    }
    async createProduct(data){
        return (await this.api.post("/products", data)).data;
    }
    async getProduct(id){
        return (await this.api.get(`/products/${id}`)).data;
    }
    async updateProduct(id,data){
        return (await this.api.put(`/products/${id}`,data)).data;
    }
    async deleteProduct(id){
        return (await this.api.delete(`/products/${id}`)).data;
    }
}

export default new ProductService();