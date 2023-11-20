import createApiClient from "./api.service";

class UserService {
    constructor(baseUrl = "/api/shop") {
        this.api = createApiClient(baseUrl);
    }
    async Login(data){
        return (await this.api.post("/users/login", data)).data;
    }
    async Signup(data){
        return (await this.api.post("/users/signup", data)).data;
    }
}

export default new UserService();