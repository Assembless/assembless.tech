import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Career, WrongPage } from "pages/"

const Routes = () => {

    return <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/career/" exact component={Career} />
        <Route component={WrongPage} />
    </Switch>
}

export default Routes;