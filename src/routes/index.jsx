import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Template from "../Template";
import Surat from "../pages/Surat";
    
// variable yang menyimpan daftar routing, di export biar bisa dipake di file lain
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        //Mengisi ke Outlet di Template.jsx         
        children: [
            {
                path: "/", //url path
                element: <App />, //file yang akan ditampilkan
            },
            {
                path: "/surat/:suratId", 
                element: <Surat />,
            },
        ]
    },
])