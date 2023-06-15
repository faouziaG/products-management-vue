import {ref} from "vue";
import api from "../boot/api.js";

export default function useProducts() {

    const products = ref([])
    const errors = ref({})
    const loading = ref(false)
    const successMessage = ref("")

    const currentPage = ref(1)
    const totalOfPages = ref(1)

    const fetchAllProducts = async (filters) => {
        loading.value = true;
        await api.get("api/v1/products", {
            params: {
                ...filters,
                page : currentPage.value
            }
        }).then((res) => {
            products.value = res.data.products.data;
            currentPage.value = res.data.products.current_page
            totalOfPages.value = res.data.products.last_page
        }).catch((error) => {
            errors.value.message = error.response.message;
        })
    }

    const fetchProductById = async (id) => {
        loading.value = true;
        let product = null;
        console.log("test");
        await api.get("api/v1/products/" + id,).then((res) => {
            product = res.data.product;
        }).catch((error) => {
            errors.value.message = error.response.message;
        })
        loading.value = false;

        return product;
    };

    const deleteProduct = async (id) => {
        loading.value = true;
        console.log("delete");
        let status = false
        await api.delete("api/v1/products/" + id
        ).then((res) => {
            status = true;
        }).catch((error) => {
            errors.value.message = error.response.message;
        })
        return status;
    }

    const createProduct = async (products) => {
        loading.value = true;
        errors.value = {};
        let status = false;
        await api.post("api/v1/products", products
        ).then((res) => {
            status = true;
            successMessage.value = res.data.message;
        }).catch((error) => {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                errors.value.message = error.response.message;
            }
        })
        return status;
    }

    const updateProduct = async (product) => {
        loading.value = true;
        errors.value = {};
        let status = false;
        await api.put("api/v1/products/" + product.id, product
        ).then((res) => {
            status = true;
            successMessage.value = res.data.message;
        }).catch((error) => {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            } else {
                errors.value.message = error.response.message;
            }
        })
        return status;
    }


    return {
        fetchAllProducts,
        createProduct,
        deleteProduct,
        updateProduct,
        fetchProductById,
        currentPage,
        totalOfPages,

        products,
        loading,
        errors,
    }
}
