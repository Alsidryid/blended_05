import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/filterSlice";
import { useGetCommentsQuery } from "../../redux/commentApi";

export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();

  const filtred = useSelector(getFilter);

  const filterAddComment = () => {
    return comments.filter(({ content }) =>
      content.toLocaleLowerCase().includes(filtred.toLocaleLowerCase())
    );
  };

  return (
    <Grid>
      {comments &&
        filterAddComment().map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
