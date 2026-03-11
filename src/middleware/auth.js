import { redirect } from "react-router-dom";

export default function auth() {
    const access_token = localStorage.getItem("access_token");

    // cek jika di localStorage ada access_token maka halaman gaboleh akses 
    if (!access_token) {
        // perpindahan halaman : 
        // 1.navigate : jika func dipanggil lewat event (onchange, dsb) 
        // 2. redirect : jika func biasa bukan dari on 
        return redirect("/login");
    }
    // kalau gaada localStorage boleh akses 
    return null;
}