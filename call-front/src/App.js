import React from 'react';

// 페이지 내부
import Nav from './components/nav';

// Section 내부에 라우팅할 페이지
import Home from './components/landing';
import Login_main from './components/login_main';
import Map_main from './components/SearchPlace';
import Query from './components/QuSearchPlace';
import Notice from './components/notice';
import MyPage from './components/mypage';
import Register from './components/Register';
import Admin from './components/Admin';

// Redirect 컴포넌트 import
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <>
            <meta name="apple-mobile-web-app-capable" content="yes"></meta>
            <meta name="mobile-web-app-capable" content="yes"></meta>
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login_main} />
                    <Route path="/map_main" component={Map_main} />
                    <Route path="/query" component={Query} />
                    <Route path="/notice" component={Notice} />
                    <Route path="/mypage" component={MyPage} />
                    <Route path="/register" component={Register} />
                    <Route path="/admin" component={Admin} />
                </Switch>
            </div>
            <Nav/>
        </>
    );
}

export default App;