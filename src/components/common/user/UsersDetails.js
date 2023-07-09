import { URLs, domainURL, apiHeaders } from "../../../backend/requestURLs/urls";
import axios from "axios";
import { GetAccessToken } from "../utility/AccessToken";
const getUserByPhone = (phone) => {

    const requestBody = JSON.stringify({
        "phone": phone
    });
    var registerPath = URLs[0].getUser.path;
    registerPath = registerPath.replace("{phone}", phone);
    axios.get(registerPath,
        requestBody, {
        headers: apiHeaders
    }).then(response => {
        console.log("phone data is : " + response.data);
    })
        .catch(error => {
            console.error("phone data error is : " + error);
        });
}

const isUserLoggedIn = () => {

    const accessToken = GetAccessToken();
    // Check if the access token exists or has a valid value
    if (accessToken && accessToken !== '') {
        return true;
    } else {
        return false;
    }
}
export { getUserByPhone, isUserLoggedIn };