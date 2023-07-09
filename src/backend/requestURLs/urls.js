const  domainURL = "https://8080-maldanna-springangularf-svhd02he0s4.ws-us101.gitpod.io";
const  URLs = [
  {
    "register": { method: "POST", path: domainURL + "/user/register" },
    "login": { method: "POST", path: domainURL + "/user/login" },
    "getUser": { method: "GET", path: domainURL + "/user/getuser/{phone}" },
    "updateUser": { method: "POST", path: domainURL + "/user/update" }
  }
];

const apiHeaders = {
  'Content-Type': 'application/json',
   'Access-Control-Allow-Origin':'*'
}

export {domainURL,URLs,apiHeaders}

