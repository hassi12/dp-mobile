import axios from "axios";

export async function UserDetail(UserId, headers){
    let response = await axios.get(`http://ec2-43-206-254-199.ap-northeast-1.compute.amazonaws.com/api/v1/user/${UserId}`, {headers:headers})
    return response.data
}