import {ref} from "vue";
import api from "../boot/api.js";

const user = ref(null);

export default function useAuth() {

    const errors = ref({})
    const loading = ref(false)

    const fetchProfile = async () => {
        let status = false;
        loading.value = true;
        await api.get("/api/user").then((res) => {
            user.value = res.data.value = res.data;
            status = true;
        }).catch((err) => {
            errors.value.message = err.response.message;
        })
        loading.value = false;
        return status;
    }

    const login = async (email, password) => {
        let status = false;
        loading.value = true;
        await api.post("/api/login", {
            email,
            password
        }).then((res) => {
            localStorage.setItem("token", res.data.token)
            user.value = res.data.value = res.data.user;
            status = true;
        }).catch((err) => {
            if (err.response.status === 422) {
                errors.value = err.response.data.errors;
            } else {
                errors.value.message = err.response.message;
            }
        })
        loading.value = false;
        return status;
    }

    const register = async (name, email, password, password_confirmation) => {
        let status = false;
        loading.value = true;
        await api.post("/api/register", {
            name,
            email,
            password,
            password_confirmation,
        }).then((res) => {
            localStorage.setItem("token", res.data.token)
            user.value = res.data.value = res.data.user;
            status = true;
        }).catch((err) => {
            if (err.response.status === 422) {
                errors.value = err.response.data.errors;
            } else {
                errors.value.message = err.response.message;
            }
        })
        loading.value = false;
        return status;
    }

    const logout = async () => {
        let status = false;
        loading.value = true;
        await api.post("/api/logout").then((res) => {
            localStorage.setItem("token", null)
            user.value = null;
            status = true;
        }).catch((err) => {
            errors.value.message = err.response.message;
        })
        loading.value = false;
        return status;
    }

    return {
        login,
        register,
        logout,
        fetchProfile,

        errors,
        user,
        loading,
    }
}
