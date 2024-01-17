import axios from 'axios';

export async function Userorders(headers) {
  let response = await axios.get(
    `http://ec2-43-206-254-199.ap-northeast-1.compute.amazonaws.com/api/v1/orders/`,
    {headers: headers},
  );
  return response.data;
}

export async function UserorderDetail(headers, orderId) {
  let response = await axios.get(
    `http://ec2-43-206-254-199.ap-northeast-1.compute.amazonaws.com/api/v1/orders/${orderId}/`,
    {headers: headers},
  );
  return response.data;
}
