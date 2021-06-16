import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./mypage.css";

import LeafImg from "./img/leaf.png";
import UserImg from "./img/user.png";
import EditImg from "./img/edit.png";

const Users = (props) => {

    const cookies = new Cookies();

    const handleclicklogout = () => {
        cookies.remove('UTG', {path: '/'});
    }

    const [users, setUsers] = useState(null);
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(async () => {
        try {
            let json = await axios({
                url: "https://charong.herokuapp.com/news/get_all?from=0&limit=5",
                method: "get",
                data: {
                    from: 0,
                    limit: 5
                }
            });
            let data = [];
            for (let news_v in json.data) {
                data.push(json.data[news_v])
            }
            console.log(data);
            setNews(data)
        } catch (e){
            console.log(e)
        }
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setUsers(null);
                setLoading(true);
                console.log(cookies.get('UTG'));
                const cookieresponse = await axios({
                    method: "get",
                    url: "https://charong.herokuapp.com/auth/login?jwt_token=" + cookies.get('UTG'),
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
                        <button onClick={handleclicklogout} className="btn btn-outline-success">Logout</button>
                    </Link>
                </header>
                <section>
                    <div className="profile">
                        <img src={UserImg} alt="User" id="user"/>
                        <span className="UserInfo">
                            <span id="UserName">
                                {users.name}
                            </span>&nbsp;님
                        </span>
                        <br/>
                        <a href="/" className="scrap_p">총 스크랩 횟수 : 5번</a>
                        <a href="/"><img src={EditImg} alt="Edit" id="edit"/></a>
                    </div>
                    <br/>
                    <p className="st">{users.name} 님의 주문으로 절약된 나무</p>
                    <img src={LeafImg} alt="Leaf" className="leaf"/>
                    <img src={LeafImg} alt="Leaf" className="leaf"/>
                    <img src={LeafImg} alt="Leaf" className="leaf"/>
                    <p className="st">새 소식</p>
                    <Link className="nav-link" to="/notice">
                        {news && news.map(id =>
                            <div className="news">
                                <span className="n_name" key={id.writer}>{id.writer}</span>의 새로운 기사가 있어요!
                            </div>
                        )}
                    </Link>
                    <br/>
                </section>
            </div>
        </div>
    );
}

export default Users;