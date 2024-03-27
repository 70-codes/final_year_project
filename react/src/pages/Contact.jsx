import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Container, Paper } from "@mui/material";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email must be valid")
    .required("Email is required"),
  message: Yup.string()
    .min(5, "Message must be at least 5 characters long")
    .max(500, "Message cannot exceed 500 characters")
    .required("Message is required"),
});

const ContactForm = ({ status, message }) => {
  return (
    <div className="status-message">
      {status === "success" && <p>{message}</p>}
      {status === "error" && <p>{message}</p>}
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="page-content section-padding">
      <Container maxWidth="md">
        <Paper
          elevation={8}
          square
          sx={{ bgcolor: "#fafafa", p: 4, borderRadius: 2 }}
        >
          <div className="text-center heading-section">
            <span className="subheading">Get in touch</span>
            <h2 className="title">Reach Out To Out Team for Any Inquiry</h2>
          </div>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            validateOnBlur
            onSubmit={async (values, actions) => {
              // Handle submission logic here, e.g., sending values to API endpoint
            }}
          >
            {({ errors, touched, status, resetForm }) => (
              <Form autoComplete="off">
                <Stack spacing={2}>
                  <Field name="name">
                    {({ field, meta }) => (
                      <TextField
                        label="Your Name"
                        type="text"
                        placeholder="Enter Your Full Name"
                        margin="normal"
                        fullWidth
                        color="secondary"
                        value={field.value}
                        onChange={field.onChange}
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched ? meta.error : null}
                      />
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, meta }) => (
                      <TextField
                        label="Your Email Address"
                        type="email"
                        placeholder="Enter Valid Email Address"
                        margin="normal"
                        fullWidth
                        color="secondary"
                        value={field.value}
                        onChange={field.onChange}
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched ? meta.error : null}
                      />
                    )}
                  </Field>
                  <Field name="message">
                    {({ field, meta }) => (
                      <TextField
                        multiline
                        rows={5}
                        label="Type Message Here..."
                        placeholder="Write Something Nice!"
                        margin="normal"
                        fullWidth
                        color="secondary"
                        value={field.value}
                        onChange={field.onChange}
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched ? meta.error : null}
                      />
                    )}
                  </Field>
                  <Button
                    disabled={
                      !(errors || touched) || Object.keys(errors).length !== 0
                    }
                    type="submit"
                    variant="contained"
                    color="secondary"
                    endIcon={<SendIcon />}
                    fullWidth
                  >
                    Submit
                  </Button>
                  <ContactForm
                    status={status}
                    message={
                      status === "success"
                        ? "Thank you for reaching us."
                        : "Something went wrong, please try again later."
                    }
                  />
                </Stack>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </div>
  );
};

export default Contact;
