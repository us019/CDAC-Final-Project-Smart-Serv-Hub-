import axios from 'axios';
const USER_API_BASE_URL="http://localhost:9000/user";

class UserServise{
getUsers(){
    return axios.get(USER_API_BASE_URL);
}

authenticateUser(loginrequest) {
    //return axios.post(USER_API_BASE_URL+'/authenticate?email='+email+"&password="+password);
    return axios.post("http://localhost:9000" + "/authenticate", loginrequest);
  }

createUser(user){
    return axios.post("http://localhost:9000/newUser",user)
}

getUserById(userId){
    return axios.get("http://localhost:9000/user"+"/"+userId);
}
updateUser(user,userId){
    return axios.put("http://localhost:9000/userUpdate",user);
}

}
export default new UserServise()