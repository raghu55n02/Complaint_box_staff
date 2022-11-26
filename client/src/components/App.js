import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import ComplaintAssignPage from "./views/ComplaintAssignPage/CompalintAssignPage"
import Reply from "./views/Reply/Reply"
import CreateNotice from './views/Create_Notice/Create_Notice';
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, true)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/complaintassign/:complaintId/:dept" component={Auth(ComplaintAssignPage, true)} />
          <Route exact path="/send_reply_to/:userId/:dept" component={Auth(Reply, true)} />
          <Route exact path="/CreateNotice" component={Auth(CreateNotice, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
