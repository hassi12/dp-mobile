import { View, Text } from 'react-native'
import React,{useEffect, useState} from 'react'

const APITesting = () => {
    // step 6 make a usestate
const [data, setData] = useState(undefined);

    // 1 first make a function 
const    myfirstapi = async () => {
    // step 3 now call the api 
    const apiurl = 'https://jsonplaceholder.typicode.com/posts/1';
    // step 4 now make another varibale where store the result
    let apiresult = await fetch(apiurl);
    //  step 5 now convert the api data into json
    apiresult = await apiresult.json();
    console.warn(apiresult);
    setData(apiresult);

    }
// now make useEffect

useEffect(()=>{
    //  2 now in this useeffect call api function
    myfirstapi();

}, [])

  return (
    <View>
      <Text>APITesting</Text>
      {
        data ? 
        <View>
            <Text>{data.userid}</Text>
            <Text>{data.body}</Text>
            <Text>{data.title}</Text>



             </View>: null
      }

    </View>
  )
}

export default APITesting