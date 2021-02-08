import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Article from "./Article";
import styled from "styled-components";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Articles = () => {
  const [itemDeleted, setItemDeleted] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/articles.json")
      .then((resp) => {
        setArticles(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }, [articles.length]);

  const deleteArticle = (e, article_id) => {
    e.preventDefault();

    axios
      .delete(`/api/v1/articles/${article_id}`)
      .then((res) => {
        const article_list = articles.filter(
          (article) => article.attributes.id != article_id
        );
        setArticles(article_list);
        setItemDeleted(true);
        setTimeout(function () {
          setItemDeleted(false);
          console.log("cleaning");
        }, 1000);
      })
      .catch((resp) => console.log(resp));
  };

  const articles_list = articles.map((item) => {
    return (
      <Article
        key={item.id}
        attributes={item.attributes}
        deleteArticle={deleteArticle}
      />
    );
  });

  return (
    <Fragment>
      <Home>
        <Title>
          <h1>
            Local Articles
            <Link to="/add_article">
              <PlusCircleFill color="#add8e6" />
            </Link>
          </h1>
        </Title>
        {itemDeleted && (
          <Alert variant="success" id="alert">
            <Alert.Heading>Post successfully deleted!</Alert.Heading>
          </Alert>
        )}
        <Grid>{articles_list}</Grid>
      </Home>
    </Fragment>
  );
};

const Home = styled.div`
  padding: 100px 300px 100px 300px;
`;
const Grid = styled.div``;
const Title = styled.div`
  text-align: center;
`;

export default Articles;
