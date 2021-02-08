import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleForm from "./ArticleForm";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const AddArticle = (props) => {
  const [article, setArticle] = useState({
    title: "",
    content: "",
    image_url: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setArticle(Object.assign({}, article, { [e.target.name]: e.target.value }));
    console.log("article: ", article);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    axios
      .post("/api/v1/articles", { article })
      .then((resp) => {
        setShowAlert(true);
        setArticle({ title: "", content: "", image_url: "" });
        setTimeout(function () {
          setShowAlert(false);
        }, 3000);
      })
      .catch((resp) => {
        console.log(resp);
      });
  };

  return (
    <Article>
      <h1>Add New Post</h1>
      {showAlert && (
        <Alert variant="success" id="alert">
          <Alert.Heading>Post successfully created!</Alert.Heading>
        </Alert>
      )}
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
