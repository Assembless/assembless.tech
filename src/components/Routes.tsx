import React from "react";
import { Switch, Route } from "react-router-dom";

const HomeRoute = React.lazy(() => import("pages/Home/"));
const CareerRoute = React.lazy(() => import("pages/Career/"));
const WrongRoute = React.lazy(() => import("pages/WrongPage/"));

const Routes = () => {

    return <Switch>
        <Route path="/" exact component={HomeRoute} />
        <Route path="/career/" exact component={CareerRoute} />
        <Route component={WrongRoute} />
    </Switch>
}

export default Routes;