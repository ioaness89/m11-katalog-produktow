// Kod do api
const API_URL = 'https://dummyjson.com';

export const getProducts = async () => {
    const response = await fetch(`${API_URL}/products?limit=10&skip=0`);

    if(!response.ok){
        throw new Error("Nie udało się pobrać produktów");
    }

    const data = await response.json();

    return data.products;
}