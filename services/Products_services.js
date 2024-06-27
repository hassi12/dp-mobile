import axios from "axios";
import { BASE_URL } from "./base_url";

export async function getProducts(){
    let response = await axios.get(`${BASE_URL}/api/v1/items/`)
    return response.data
}

export async function searchProducts(headers,search){
    let response = await axios.get(`${BASE_URL}/api/v1/items/?search=${search}`, { headers: headers })
    return response.data
}

export async function getProductDetail(productId){
    let response = await axios.get(`${BASE_URL}/api/v1/items/${productId}/detail_item/`)
    return response.data
}

export async function ProductsCategory(){
    let response = await axios.get(`${BASE_URL}/api/v1/category/`)
    return response.data
}

export async function FavouriteItems(headers){
    let response = await axios.get(`${BASE_URL}api/v1/favourite/items/`, {headers:headers})
    return response.data
}
