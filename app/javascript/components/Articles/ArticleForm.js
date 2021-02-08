import React from "react";
import styled from "styled-components";

const ArticleForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Field>
        <input
          onChange={props.handleChange}
          type="text"
          name="title"
          value={props.article.title}
          placeholder="Post title"
          required
        />
      </Field>
      <Field>
        <textarea
          onChange={props.handleChange}
          type="text"
          name="content"
          value={props.article.content}
          placeholder="Post content"
          required
        />
      </Field>
      <Field>
        <input
          onChange={props.handleChange}
          type="text"
          name="image_url"
          value={props.article.image_url}
          placeholder="Img url"
          required
        />
      </Field>
      <Field>
        <button type="submit" value="Submit">
          Create Article
        </button>
      </Field>
    </Form>
  );
};

const Field = styled.div`
  padding: 20px;
  width: -webkit-fill-available;
  input,
  textarea {
    width: 100%;
    height: 100%;
  }
`;
const Form = styled.form`
  padding: 0px 200px 0px 200px;
`;

export default ArticleForm;
