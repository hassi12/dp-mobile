import axios from "axios";

export async function getAddress(){
    let response = await axios.get(`http://ec2-43-206-254-199.ap-northeast-1.compute.amazonaws.com/api/v1/items/`)
    return response.data
}

export async function CreateAddress(payload,headers){
    let addAddressUrl =
    `http://ec2-43-206-254-199.ap-northeast-1.compute.amazonaws.com/api/v1/user/add_address/`
    const response = await axios.post(addAddressUrl,payload, {headers: headers});
    return response.data
}
