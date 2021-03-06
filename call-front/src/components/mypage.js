import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from "universal-cookie";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./mypage.css";

import LeafImg from "./img/leaf.png";
import UserImg from "./img/user.png";
import EditImg from "./img/edit.png";

const Users = (props, history) => {

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
            // console.log(data);
            setNews(data)
        } catch (e){
            // console.log(e)
        }
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setUsers(null);
                setLoading(true);
                // console.log(cookies.get('UTG'));
                const cookieresponse = await axios({
                    method: "get",
                    url: "https://charong.herokuapp.com/auth/login?jwt_token=" + cookies.get('UTG'),
                });
                // console.log(cookieresponse.data);
                // console.log(cookieresponse.data['id']);
                const response = await axios({
                    method: "get",
                    url: "https://charong.herokuapp.com/auth/get_user?id="+cookieresponse.data['id'],
                });
                // console.log(response.data);
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
    //             // ????????? ?????? ??? ??? error ??? users ??? ?????????
    //             setError(null);
    //             setUsers(null);
    //             // loading ????????? true ???
    //             setLoading(true);
    //             const response = await axios.get(
    //             'https://jsonplaceholder.typicode.com/users'
    //             );
    //             setUsers(response.data); // ???????????? response.data ??????.
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
        return <p className="no_login"><button className="no_login_btn btn btn-outline-success" onClick={() => props.history.push('/login')}>Login required</button></p>;
    if(!users)
        return null;

    return (
        <div className="query_section">
            <div className="div_my">
                    <h3>MYPAGE</h3>
                <section>
                    <div className="profile">
                        <img src={UserImg} alt="User" id="user"/>
                        <table>
                            <tr>
                                <td className="t-a_c">
                                    <p className="t-a_c dd">
                                        <span id="UserName" className="float_le">
                                            {users.name}
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="t-a_c">
                                    <p className="t-a_c dd">
                                        <Link className="nav-link float_ri" to="/login">
                                            <button onClick={handleclicklogout} className="btn btn-outline-success">Logout</button>
                                        </Link>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br/>
                                    <a href="/" className="scrap_p">??? ????????? ?????? : 5???</a>
                                    <a href="/"><img src={EditImg} alt="Edit" id="edit"/></a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <p className="t-a_c">
                    </p>
                    <br/>
                    <p className="st">{users.name} ?????? ???????????? ????????? ??????</p>
                    <p className="t-a_c">
                        <img src={LeafImg} alt="Leaf" className="leaf"/>
                        <img src={LeafImg} alt="Leaf" className="leaf"/>
                        <img src={LeafImg} alt="Leaf" className="leaf"/>
                    </p>
                    <p className="st">??? ??????</p>
                    <Link className="nav-link" to="/notice">
                        {news && news.map(id =>
                            <div className="news">
                                <span className="n_name" key={id.writer}>{id.writer}</span>??? ????????? ????????? ?????????!
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