import { URLs, apiHeaders } from "../../../backend/requestURLs/urls"
import axios from "axios";
const CreateAccessToken = (phone, password) => {

    const requestBody = JSON.stringify({
        "phone": phone,
        "password": password
    });

    const SetAccessToken = (tokenValue) => {
        if(tokenValue !== "" || tokenValue !== null){
            localStorage.setItem('AccessToken',tokenValue);
        }
    }

    var loginPath = URLs[0].login.path;
    axios.post(loginPath,
        requestBody, {
        headers: apiHeaders
    }).then(response => {
        const data = response.data;
        const responseData = JSON.stringify(data);
        const parsedData = JSON.parse(responseData);
        //token = parsedData;
        console.log("parsed data is: "+parsedData);
        SetAccessToken(parsedData.token);
        return parsedData;

    })
        .catch(error => {
            console.error("token data error is : " + error);
        });
}

const GetAccessToken = ()=>{
    var accessToken=localStorage.getItem('AccessToken');
    return accessToken;
}
const RemoveAccessToken = () =>{
    localStorage.removeItem('AccessToken');
}
export {GetAccessToken,CreateAccessToken,RemoveAccessToken };