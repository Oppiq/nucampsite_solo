export const validateCommentForm = (values) => {
  const errors = {};

  if (!values.rating) {
    errors.rating = "Required";
  }

  if (values.author.length < 2) {
    errors.author = "Must be at least two characters";
  } else if (values.author.length > 15) {
    errors.author = "Must be less than 15 characters";
  }
  return errors;
};
