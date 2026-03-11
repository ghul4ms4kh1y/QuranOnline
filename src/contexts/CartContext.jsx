import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    function updateCart(item, qty) {
        // cek jika di cart sudah ada produk, jangan ditambahkan tapi update qty nya aja 
        let product = cart.find((data) => data.id == item.id);
        if (product) {
            setCart((prev) => {
                // loop nilai cart sebelumnya, untuk menjadi produk yang dimaksud 
                return prev.map((data) => {
                    if (data.id == item.id) {
                        // update bagian qty dari data ditambahkan 1 
                        return {...data, qty: data.qty+1}
                    }
                });
            })
        }else {
            // jika produk yang dimasukan ke keranjang belum ada di state cart, bikin baru 
            let newProduct = {
                id: item.id,
                title: item.title,
                image: item.images[0],
                price: item.price,
                qty: qty
            }
            setCart ([...cart, newProduct])
        }
    }

    function updateQtyProduct(id, type) {
        setCart((prev) => {
            return prev.map((item) => {
                // cari yang idnya sesuai yang mau diupdate 
                if (item.id == id) {
                    if (type == "+") {
                        return {...item, qty: item.qty+1}
                    }else {
                        // jika pengurangan, pastikan 1 gkbisa dikurangin lagi 
                        if (item.qty > 1) {
                            return {...item, qty: item.qty-1}
                        }
                    }
                }
                return item;
            })
        })
    }

    function deleteProduct(id) {
        setCart((prev) => {
            // filter data cart, selain yang mau dihapus 
            return prev.filter((item) => item.id != id);
        })
    }

    function deleteAll() {
        setCart([]);
    }

    const navigate = useNavigate();


    // function handleOpenModalPayment() {
    //     setOpenModal(true);
    // }

    function handleCloseModalPayment() {
        setOpenModal(false);
    }

    function checkoutProduct() {
        // hapus semua 
        setCart([]);
        // pindahkan halaman  
        navigate("/");
        // munculin popup
        setOpenModal(true);
    }
    

    return (
        <>
            <CartContext.Provider value={{cart, updateCart, updateQtyProduct, deleteProduct, deleteAll, checkoutProduct}}>
                {children}
            </CartContext.Provider>
        </>
    )
}