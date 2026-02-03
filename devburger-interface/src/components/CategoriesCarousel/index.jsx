import { api } from "../../services/api";

import { useEffect, useState } from "react";



export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const response = await api.get("/categories");
            
            console.log(response.data);
        } 

        loadCategories();

        }, []);

    return (
        <div>
            <div>ok</div>
        </div>
    )
}