import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import {Link} from "react-router-dom";

import "./mypage.css";

import LeafImg from "./img/leaf.png";
import UserImg from "./img/user.png";
import EditImg from "./img/edit.png";
import {map} from "react-bootstrap/ElementChildren";

function Users() {

    const cookies = new Cookies();

    const handleclicklogout = () => {
        cookies.remove('UTG', {path: '/'});
    }

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setUsers(null);
                setLoading(true);
                console.log(cookies.get('UTG'));
                const cookieresponse = await axios({
                    method: "get",
                    url: "http://charong.herokuapp.com/auth/login?jwt_token=" + cookies.get('UTG'),
                });
                console.log(cookieresponse.data);
                console.log(cookieresponse.data['id']);
                const response = await axios({
                    method: "get",
                    url: "https://charong.herokuapp.com/auth/get_user?id="+cookieresponse.data['id'],
                });
                console.log(response.data);
                setUsers(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             // 요청이 시작 할 때 error 와 users 를 초기화
    //             setError(null);
    //             setUsers(null);
    //             // loading 상태를 true 로
    //             setLoading(true);
    //             const response = await axios.get(
    //             'https://jsonplaceholder.typicode.com/users'
    //             );
    //             setUsers(response.data); // 데이터는 response.data 안에.
    //         } catch (e) {
    //             setError(e);
    //         }
    //         setLoading(false);
    //     };

    //     fetchUsers();
    // }, []);

    if(loading)
        return <div>On Loading...</div>;
    if(error)
        return <div>Error Occurred</div>;
    if(!users)
        return null;

    return (
        <div className="query_section">
            <div className="div_my">
                <header>
                    <h3>my페이지</h3>
                    <Link className="nav-link" to="/login">
                        <button onClick={handleclicklogout}>Logout</button>
                    </Link>
                </header>
                <section>
                    <div className="profile">
                        <img src={UserImg} alt="User" id="user"/>
                        <span className="UserInfo">
                            <span id="UserName">
                                {/* {users.map(user => (<div key={user.id}>{user.username}</div>))} */}

                            </span>&nbsp;님
                        </span>
                        <br/>
                        <a href="/" className="scrap_p">총 스크랩 횟수 : 5번</a>
                        <a href="/"><img src={EditImg} alt="Edit" id="edit"/></a>
                    </div>
                    <br/>
                    <p className="st">이한나 님의 주문으로 절약된 나무</p>
                    <img src={LeafImg} alt="Leaf" className="leaf"/>
                    <img src={LeafImg} alt="Leaf" className="leaf"/>
                    <img src={LeafImg} alt="Leaf" className="leaf"/>
                    <p className="st">새 소식</p>
                    <div className="news">
                        <span className="n_name">환경뉴스</span> 님의 새로운 기사가 있어요.
                    </div>
                    <div className="read_news">
                        <span className="n_name">환경뉴스</span> 님의 새로운 기사가 있어요.
                    </div>
                    <div className="read_news">
                        <span className="n_name">환경뉴스</span> 님의 새로운 기사가 있어요.
                    </div>
                    <br/>
                </section>
            </div>
        </div>
    );
}

export default Users;