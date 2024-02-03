import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { comments } from "../../helpers/comments";
import { getFilter } from "../../redux/filterSlice";
import { useSelector } from "react-redux";

export const Comments = () => {
  const filter = useSelector(getFilter);
  const getFilteredComments = comments.filter(({ content }) =>
    content.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Grid>
      {comments &&
        getFilteredComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
