import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleForm from "./ArticleForm";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";

const AddArticle = (props) => {
  const [article, setArticle] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setArticle(Object.assign({}, article, { [e.target.name]: e.target.value }));
    console.log("article: ", article);
  };

  const redirect = () => {
    history.push("/local_articles");
  };

  const handleSubmit = (e) => {
    axios
      .post("/api/v1/articles", { article })
      .then((resp) => {
        console.log(resp);
        setShowAlert(true);
        //history.push("/local_articles");
        window.location();
      })
      .catch((resp) => console.log(resp));
  };

  return (
    <Article>
      <h1>Add New Post</h1>
      {showAlert && (
        <Alert variant="success" id="alert">
          <Alert.Heading>Post successfully created!</Alert.Heading>
        </Alert>
      )}
      <button onClick={redirect}>Push</button>
      <ArticleForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        article={article}
      />
    </Article>
  );
};

const Article = styled.div`
  text-align: center;
`;

export default AddArticle;
