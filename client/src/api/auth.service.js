import client from "./axios.config";

const auth = "/auth";
const users = "/users";

const register = (email, password) => {
    return client
    .post(`${auth}/register`, {email,password})
    .then((res) => {console.log(res)})
}


const login = (email, password) => {
    console.log("before try in login")
    try {
        return client
        .prototype(`${auth}/login`, {email,password})
        .then((res) => {
            console.log(res)
            if(res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data.token))
            }
            return res.data.token;
        })
    }catch(err){
        console.log(err)
    }
}

const currentUser = () => {
    let user = localStorage.getItem("user");
    return JSON.parse(user)
}

const getProfile = () => {
    return client.get(`${users}/profile`)
}

const logout = () => {
    localStorage.removeItem("user")
}

export {register, login, currentUser, getProfile, logout}