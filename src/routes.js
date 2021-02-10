import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import FirstComponent from "./components/firstComponent";
import DigitalClock from "./DigitalClock";
import ApiCall from "./ApiCall";
import SecondComponent from "./components/secondComponent";
import MaterialHome from "./materialUI/material-home";
import TabUi from "./materialUI/tabUI";
import WeatherHome from './WeatherApp/weatherHome';
import MyFirstHook from './React Hooks/firstHook';
import EffectHookExample from './React Hooks/effectHook';
import TimerApp from './Timer App/TimerApp';
import ApiCallExample from './React Hooks/apiCall';
import PaginationPageNumber from './Pagination/pagination_pagenumber';
import PaginationLoadMore from './Pagination/pagination_loadmore';
import UserProfile from './React Hooks/UserProfile';
import UserProfileList from './React Hooks/user-profile-list';
import LoginPage from './project1/login';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                        <Switch>
                            <Route path="/" exact>
                                <FirstComponent/>
                            </Route>
                            <Route path="/clock" exact>
                                <DigitalClock/>
                            </Route>
                            <Route path="/api-call" exact>
                                <ApiCall/>
                            </Route>
                            <Route path="/mui" exact>
                                <MaterialHome/>
                            </Route>
                            <Route path="/dynamicRoute/:id/:value" exact>
                                <SecondComponent/>
                            </Route>
                            <Route path="/tab" exact>
                                <TabUi/>
                            </Route>
                            <Route path="/weather" exact>
                                <WeatherHome/>
                            </Route>
                            <Route path="/hook" exact>
                                <MyFirstHook/>
                            </Route>
                            <Route path="/effecthook" exact>
                                <EffectHookExample/>
                            </Route>
                            <Route path="/timer" exact>
                                <TimerApp/>
                            </Route>
                            <Route path="/hook-api-call" exact>
                                <ApiCallExample/>
                            </Route>
                            <Route path="/pagination" exact>
                                <PaginationPageNumber/>
                            </Route>
                            <Route path="/pagination-load" exact>
                                <PaginationLoadMore />
                            </Route>
                            <Route path="/userprofile/:id" exact>
                                <UserProfile/>
                            </Route>
                            <Route path="/userprofilelist" exact>
                                <UserProfileList/>
                            </Route>
                            <Route path="/login" exact>
                                <LoginPage/>
                            </Route>
                        </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;
