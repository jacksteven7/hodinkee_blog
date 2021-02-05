import React from "react";
import { Route, Switch } from "react-router-dom";
import Article from "./Article/Article";
import Articles from "./Articles/Articles";
import AddArticle from "./Articles/AddArticle";
import RemoteArticles from "./RemoteArticles/RemoteArticles";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Application = styled.div`
  font-family: "Century Gothic";
`;

const App = () => {
  return (
    <Application>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/local_articles" component={Articles} />
        <Route exact path="/remote_articles" component={RemoteArticles} />
        <Route exact path="/local_articles/:id" component={Article} />
        <Route exact path="/add_article" component={AddArticle} />
      </Switch>
    </Application>
  );
};

export default App;
