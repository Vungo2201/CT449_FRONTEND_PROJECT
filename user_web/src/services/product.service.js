import createApiClient from "./api.service";

class ProductService {
    constructor(baseUrl = "/api/shop") {
        this.api = createApiClient(baseUrl);
    }
    async getAllProduct(){
        return (await this.api.get("/products")).data;
    }
    async getProduct(id){
        return (await this.api.get(`/products/${id}`)).data;
    }
}

export default new ProductService();