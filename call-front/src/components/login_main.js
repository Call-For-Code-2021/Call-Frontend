import React, {useState} from 'react';
import axios from "axios";
import Cookies from "universal-cookie";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login_main.css';

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
        // console.log(userid);
        // console.log(userpw);
        // var link = 'https://call-for-code-2021.github.io/mypage';
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
                // console.log(response.status);
                // console.log(response.data);
                cookies.set('UTG', response.data['jwt_token'], {path: '/'});
                // console.log(cookies.get('UTG'));
                alert(userid + "님 로그인되었습니다.");
                // window.location.href = link;
            }).catch((error) => {
            // console.log(error);
            alert("다시 로그인해 주십시오. Re Login Plz");
            if(error === 400){
                // console.log("로그인 형식 오류");
                alert("로그인 형식이 잘못되었습니다. Login Failed ");
            }
            else if(error === 401) {
                // console.log("로그인 실패");
                alert("로그인 트래픽 증가로 로그인에 실패했습니다.\n잠시 후 다시 시도해 주십시오.\nLogin failed due to increased login traffic.\nPlease try again shortly.");
            }
        });
    };

    return (
        <div className="whole_form">
            <h3 className="h3_o">로그인</h3>
            <table className="table_form">
                <tr>
                    <td>
                        <p className="t-a_c">
                            <input
                                name="userid"
                                id="input_form"
                                value={userid}
                                onChange={onChange}
                                placeholder="  ID"
                            />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="t-a_c">
                            <input
                                name="userpw"
                                id="input_form"
                                value={userpw}
                                type="password"
                                onChange={onChange}
                                placeholder="  Password"
                            />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="t-a_c">
                            <Link className="nav-link" to="/map_main">
                                <button onClick={handleclicklogin} id="btn_d" className="btn btn-outline-success">Login</button>
                            </Link>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="t-a_c">
                            <Link className="nav-link" to="/register">
                                <button className="btn btn-outline-success" id="btn_d">Register</button>
                            </Link>
                        </p>
                    </td>
                </tr>
            </table>
            <div className="btn_str">

            </div>
        </div>
    );
}

export default Login;