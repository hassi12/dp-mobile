import axios from "axios";

export async function getProducts(){
    let response = await axios.get(`http://ec2-43-206-254-199.ap-northeast-1.compute.amazonaws.com/api/v1/items/`)
    return response.data
}

export async function ProductsCategory(){
    let response = await axios.get(`http://ec2-43-206-254-199.ap-northeast-1.compute.amazonaws.com/api/v1/category/`)
    return response.data
}