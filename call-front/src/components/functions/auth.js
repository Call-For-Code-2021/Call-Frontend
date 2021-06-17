import axios from 'axios'
import cookie from 'react-cookies'

async function login(id, password){
    const jwt_token = await axios({
        url: "/auth/login",
        method: "post",
        data: {
            id: id,
            password: password
        }
    })//데이터 구조 확인하기
    const expires = new Date()
    expires.setDate(60)

    cookie.save(
        'a_j_session',
        jwt_token,
        {
            path: '/',
            expires,
            httpOnly: true
        }
    )
    cookie.save(
        'id',
        jwt_token,
        {
            path: '/',
            expires,
            httpOnly: true
        }
    );
}
async function join(id, password, name, address){

     axios({
        url: "auth/join",
        method: "post",
        data: {
            id: id,
            password: password,
            name: name,
            address: address
        }
    }).then(function(response){
        return response; //성공 했으면 redirect to login page
     }).catch(function (error){
         // console.log(error)//실패시 alert 띄우기
     });
}
function deleteUser(id, password){
    axios({
        url: "post",
        data: {
            id: id,
            password: password
        }
    }).then(function(response){

    }).catch(function(error){
        // console.log(error);
    })
}