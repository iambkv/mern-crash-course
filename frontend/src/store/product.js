import { create } from "zustand"

const getAuthHeaders = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
        "Content-Type": "application/json",
        ...(user?.token && { Authorization: `Bearer ${user.token}` })
    };
};

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { success: false, message: "Please fill in all fields." }
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };
        set((state) => ({ products: [...state.products, data.data] }))
        return { success: true, message: "Product created successfully" }
    },
    fetchProducts: async () => {
        const res = await fetch("/api/products", {
            headers: getAuthHeaders(),
        });
        const data = await res.json();
        set({ products: data.data });
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
            headers: getAuthHeaders(),
        })
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };

        // update the ui immediately, without needing a refresh
        set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
        return { success: true, message: data.message };
    },
    updateProduct: async (pid, updatedProduct) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: getAuthHeaders(),
            body: JSON.stringify(updatedProduct),
        });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message }

        //update the ui immediately, without needing a refresh
        set((state) => ({ products: state.products.map((product) => (product._id === pid ? data.data : product)) }))
        return { success: true, message: data.message };
    }
}))
