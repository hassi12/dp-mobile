import axios from "axios";
import { BASE_URL } from "./base_url";

export async function GetPublicQuestionListings(){
    let finalUel = `${BASE_URL}api/v1/questions/`;
    let resp = await axios.get(finalUel,);
    return resp.data;
}

export async function GetPersonalQuestionListings(headers){
    let finalUel = `${BASE_URL}api/v1/questions/my_questions/`;
    let resp = await axios.get(finalUel,{headers:headers});
    return resp.data;
}

export async function SubmitUserQuestion(payload,headers){
    let finalUel = `${BASE_URL}api/v1/questions/post_question/`;
    let resp = await axios.post(finalUel,payload,{headers:headers});
    return resp;
}