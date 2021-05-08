import React from 'react';

// 페이지 내부
import Nav from './components/nav';

// Section 내부에 라우팅할 페이지
import Home from './components/landing';
import Login_main from './components/login_main';
import Map_main from './components/MapContainer';

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
                </Switch>
            </div>
            <Nav/>
        </>
    );
};

export default App;