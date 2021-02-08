import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { Trash } from "react-bootstrap-icons";
import axios from "axios";

const Article = (props) => {
  return (
    <Art>
      <table>
        <tbody>
          <tr>
            <td>
              <Title>
                <Link to={`/local_articles/${props.attributes.id}`}>
                  <h2>{props.attributes.title}</h2>
                </Link>
                <Trash
                  onClick={(e) => props.deleteArticle(e, props.attributes.id)}
                />
                <div>{props.attributes.content}</div>
              </Title>
            </td>
            <td>
              <Image>
                <Link to={`/local_articles/${props.attributes.id}`}>
                  <div className="article-image">
                    <img src={props.attributes.image_url} />
                  </div>
                </Link>
              </Image>
            </td>
          </tr>
        </tbody>
      </table>
    </Art>
  );
};

const Art = styled.div`
  padding: 50px;
  border-bottom: 1px solid #eaeaea;
`;

const Title = styled.div`
  max-width: 500px;
`;

const Image = styled.div`
  img {
    max-width: 500px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Td = styled.td`
  max-width: 50%;
`;

export default Article;
