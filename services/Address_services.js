import axios from "axios";
import { BASE_URL } from "./base_url";
export async function getAddress(){
    let response = await axios.get(`${BASE_URL}api/v1/items/`)
    return response.data
}

export async function CreateAddress(payload,headers){
    let addAddressUrl =
    `${BASE_URL}api/v1/user/add_address/`
    const response = await axios.post(addAddressUrl,payload, {headers: headers});
    return response.data
}
