import router from "@/router";
import { useAuthStore } from "@/store/auth";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
    withXSRFToken: true,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const auth = useAuthStore();
        switch (error.response.status) {
            case 401:
                auth.cleanState();
                router.push({ name: "login" });
                break;
            case 404:
                router.push({ name: "errorcode", query: { code: "404" } });
                break;
            case 419:
                auth.cleanState();
                router.push({ name: "login" });
                break;
            case 500:
                router.push({ name: "errorcode", query: { code: "500" } });
                break;
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;