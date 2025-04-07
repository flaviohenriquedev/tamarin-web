import {AuthService} from "@/pages/login/auth-service";
import {loginEndpoint} from "@/pages/login/login-endpoint";

export class LoginService extends AuthService{
    constructor() {
        super(loginEndpoint)
    }
}