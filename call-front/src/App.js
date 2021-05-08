import React from 'react';

// 페이지 내부
import Nav from './components/nav';

// Section 내부에 라우팅할 페이지
import Home from './components/landing';
import Login_main from './components/login_main';
import Notfound from './components/notfound';

// Redirect 컴포넌트 import
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
    return (
        <>
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login_main} />
                    <Route path="/not-found" component={Notfound} /> {/* NotFound 컴포넌트 */}
                    <Redirect to="/not-found" component={Notfound} /> {/* NotFound 컴포넌트로 리디렉션 */}
                </Switch>
            </div>
            <Nav/>
        </>
    );
};

export default App;