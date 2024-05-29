import axios from 'axios';
import { BASE_URL } from './base_url'

export async function Userorders(headers) {
  let response = await axios.get(
    `${BASE_URL}api/v1/orders/`,
    {headers: headers},
  );
  return response.data;
}

export async function UserorderDetail(headers, orderId) {
  let response = await axios.get(
    `${BASE_URL}api/v1/orders/${orderId}/`,
    {headers: headers},
  );
  return response.data;
}

export async function OrderCancel(id,headers){
  let finalURL = `${BASE_URL}api/v1/orders/` + `${id}/canceled_order/`
  const resp = await axios.post(finalURL,{}, { headers: headers })
  return resp.data
}