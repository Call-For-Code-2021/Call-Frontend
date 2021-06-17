import React, {useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import "./Register.css";

function Register() {

    // const [cookies, setCookie, removeCookie] = useCookies(['rememberuserid']);

    const [inputs, setinputs] = useState({
        userid: '',
        userpw: '',
        userna: '',
        userad: '',
    });

    const {userid, userpw, userna, userad} = inputs;//비구조화 할당으로 값 추출

    const onChange = (e) => {
        const {value, name} = e.target;//우선 e.target에서 name과 value 추출
        setinputs({
            ...inputs, //기존의 input 객체 복사
            [name]: value // name 키를 가진 값을 value로 설정
        });
    };

    const handleclick = () => {
        console.log(userid);
        console.log(userpw);
        console.log(userna);
        console.log(userad);
        axios({
            method: "post",
            url: "https://charong.herokuapp.com/auth/join",
            data: {
                id: userid,
                password: userpw,
                name: userna,
                address: userad,
            },
        })
            .then((response) => {
                console.log(response.status)
            }).catch((error) => {
            console.log(error);
        });
        // useEffect(() => {
        //     if (cookies.rememberuserid !== undefined) {
        //         userid(cookies.rememberuserid);
        //     }
        // })
    };

    return (
        <div id="register">
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            <input
                name="userid"
                value={userid}
                onChange={onChange}
                placeholder="ID / More than 10 letters."
            />
            <input
                name="userpw"
                value={userpw}
                type="password"
                onChange={onChange}
                placeholder="Password / Include numbers, special characters"
            />
            <input
                name="userna"
                value={userna}
                onChange={onChange}
                placeholder="User Name"
            />
            <input
                name="userad"
                value={userad}
                onChange={onChange}
                placeholder="Address"
            />
            {/*<input type="checkbox" onChange={cookieChange} checked={isRemember} />*/}
            <div id="register_bt">
                <div>
                    <Link className="nav-link" to="/login">
                        <button id="register_lo">Login</button>
                    </Link>
                </div>
                <div>
                    <button onClick={handleclick} id="register_re">Register</button>
                </div>
            </div>
        </div>
    );
}

export default Register;