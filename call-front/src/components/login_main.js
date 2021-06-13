import React, {useState} from 'react';
import axios from "axios";
import Cookies from "universal-cookie";
import {Link} from "react-router-dom";

function Login(){
    const cookies = new Cookies();

    const [inputs, setinputs] = useState({
        userid: '',
        userpw: '',
    });

    const {userid, userpw} = inputs;//비구조화 할당으로 값 추출

    const onChange = (e) => {
        const {value, name} = e.target;//우선 e.target에서 name과 value 추출
        setinputs({
            ...inputs, //기존의 input 객체 복사
            [name]: value // name 키를 가진 값을 value로 설정
        });
    };

    const handleclicklogin = () => {
        console.log(userid);
        console.log(userpw);
        axios({
            method: "post",
            url: "https://charong.herokuapp.com/auth/login",
            data: {
                id: userid,
                password: userpw,
            },
        })
            .then((response) => {
                cookies.remove('UTG', {path: '/'});
                console.log(response.status);
                console.log(response.data);
                cookies.set('UTG', response.data['jwt_token'], {path: '/'});
                console.log(cookies.get('UTG'));
            }).catch((error) => {
            console.log(error);
            if(error === 400){
                console.log("로그인 형식 오류");
                alert("로그인 형식이 잘못되었습니다.");
            }
            else if(error === 401) {
                console.log("로그인 실패");
                alert("로그인 트래픽 증가로 로그인에 실패했습니다.\n잠시 후 다시 시도해 주십시오.");
            }
        });
    };

    return (
        <div>
            <input
                name="userid"
                value={userid}
                onChange={onChange}
            />
            <input
                name="userpw"
                value={userpw}
                type="password"
                onChange={onChange}
            />
            <button onClick={handleclicklogin}>Login</button>
            <Link className="nav-link" to="/register">
                <button>Register</button>
            </Link>
            <Link className="nav-link" to="/getuserinfo">
                <button>Userinfo</button>
            </Link>
        </div>
    );
}

export default Login;