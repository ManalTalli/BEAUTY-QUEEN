import axios from "axios";
import useAuthStore from "../store/useAuthStore";
import i18n from "../i18next";

const authAxiosInstance = axios.create({
    baseURL: 'https://knowledgeshop.runasp.net/api',
    withCredentials: true,

});
authAxiosInstance.interceptors.request.use((config) => {
    const { token } = useAuthStore.getState();
    config.headers["Accept-Language"] = i18n.language;
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
})
authAxiosInstance.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);
    if (error.response?.status === 401 && !originalRequest._rety) {
        originalRequest._rety = true;
        try {
            const refreshResponse = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/RefreshToken', {}, {
                withCredentials: true,
            });
            console.log("بيانات الريفريش:", refreshResponse.data);
            const newToken = refreshResponse.data.accessToken;
            useAuthStore.getState().setToken(newToken);
            originalRequest.headers.Authorization = `Bearer ${newToken}`
            return authAxiosInstance(originalRequest);
        }
        catch (error) {
            console.log("error");
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);

})
export default authAxiosInstance;