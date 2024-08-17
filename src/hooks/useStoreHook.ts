import { create } from "zustand"


export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}


export interface cartState {

    products: Product[];
    cart: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (roduct: Product) => void;
    getTotals: () => number;
}


export const useCartStore = create<cartState>((set, get) => ({
    products: [],
    cart: [],
    addProduct: (product: Product) => {
        const existingProduct = get().cart.find((p) =>
            p.id === product.id)
        if (existingProduct) {
            set((state) =>

            ({
                ...state,
                cart: state.cart.map((p) =>
                    p.id === product.id
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                )
            })

            )
        }
        else {
            set((state) => ({
                ...state,
                cart: [...state.cart, { ...product, quantity: 1 }]
            }))
        }

    },
    removeProduct: (product: Product) => {
        set((state) => ({
            ...state,
            cart: state.cart.map((p) =>
                p.id === product.id
                    ? { ...p, quantity: p.quantity - 1 }
                    : p
            ).filter((p) => p.quantity > 0)
        }))
    },
    getTotals: () => {
        return get().cart.reduce((acc, p) => acc + p.price * p.quantity, 0)
    }
}))

