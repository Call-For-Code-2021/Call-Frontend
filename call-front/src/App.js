import React from 'react';
import styled from "styled-components";

// 페이지 내부
import Nav from './components/nav';

// Section 내부에 라우팅할 페이지
import Home from './components/landing';
import Login_main from './components/login_main';
import Map_main from './components/SearchPlace';
import Query from './components/query';
import Notice from './components/notice';
import MyPage from './components/mypage';


// Redirect 컴포넌트 import
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <>
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login_main} />
                    <Route path="/map_main" component={Map_main} />
                    <Route path="/query" component={Query} />
                    <Route path="/notice" component={Notice} />
                    <Route path="/mypage" component={MyPage} />
                </Switch>
            </div>
            <Nav/>
        </>
    );
}

export default App;