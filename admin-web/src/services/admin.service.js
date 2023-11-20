import createApiClient from "./api.service";

class AdminService {
    constructor(baseUrl = "/api/shop") {
        this.api = createApiClient(baseUrl);
    }
    async Login(data){
        return (await this.api.post("/admin/login", data)).data;
    }
}

export default new AdminService();