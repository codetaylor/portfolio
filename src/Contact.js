import React from "react";
import { Paper, Button, TextField, Grid } from "@material-ui/core";
import { withFormik } from "formik";
import * as Yup from "yup";
import "./Contact.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  message: Yup.string().required()
});

const handleSubmit = (values, { setSubmitting }) => {
  setSubmitting(true);
  // TODO: do stuff
  window.setTimeout(() => setSubmitting(false), 2000);
};

const initialValues = {
  name: "",
  email: "",
  message: ""
};

const Form = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  return (
    <form
      className="Contact-form"
      // onSubmit={handleSubmit}
      action="https://formspree.io/contact@codetaylor.com"
      method="POST"
    >
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} sm={6}>
          <TextField
            variant="filled"
            margin="dense"
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name : " "}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="filled"
            margin="dense"
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : " "}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="filled"
            margin="dense"
            multiline
            rows={5}
            fullWidth
            name="message"
            label="Message"
            type="message"
            id="message"
            autoComplete="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.message && touched.message}
            helperText={
              errors.message && touched.message ? errors.message : " "
            }
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            type="submit"
            className="Contact-submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const FormikForm = withFormik({
  mapPropsToValues: () => initialValues,
  handleSubmit: handleSubmit,
  validationSchema: validationSchema
})(Form);

export default () => {
  return (
    <Paper className="Contact-paper">
      <FormikForm />
    </Paper>
  );
};
