import axios from 'axios';
import { BASE_URL } from './base_url'
export async function UserDetail(UserId, headers) {
  let response = await axios.get(
    `${BASE_URL}api/v1/user/${UserId}`,
    {headers: headers},
  );
  return response.data;
}
export async function userUpdate(payload,headers){
  let finalUel = `${BASE_URL}api/v1/user/update_user_details/`;
  let resp = await axios.post(finalUel,payload, {headers:headers});
  return resp.data;
}