import React, { useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ErrorMessage, Field, Form } from "formik";
import UseStyles from "./UserStyles";

const UserForm = ({ formikProps }) => {
  const classes = UseStyles();
  const roles = [
    { roleId: 1, role: "Admin" },
    { roleId: 2, role: "User" },
  ];

  return (
    <Form onSubmit={formikProps.handleSubmit}>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <Field
          as={TextField}
          type="text"
          name="firstName"
          label="First name"
          value={formikProps.values.firstName}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          variant="outlined"
          size="small"
          placeholder="John"
        />
        <ErrorMessage
          component="span"
          className={classes.error}
          name="firstName"
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <Field
          as={TextField}
          type="text"
          name="LastName"
          label="Last name"
          value={formikProps.values.LastName}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          variant="outlined"
          size="small"
          placeholder="Doe"
        />
        <ErrorMessage
          component="span"
          className={classes.error}
          name="LastName"
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <Field
          as={TextField}
          type="email"
          name="email"
          label="Email"
          value={formikProps.values.email}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          variant="outlined"
          size="small"
          placeholder="johndoe@example.com"
        />
        <ErrorMessage component="span" className={classes.error} name="email" />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <Field
          as={TextField}
          type="text"
          name="phone"
          label="Phone"
          value={formikProps.values.phone}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          variant="outlined"
          size="small"
          placeholder="+971520000000"
        />
        <ErrorMessage component="span" className={classes.error} name="phone" />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <Field
          as={TextField}
          type="text"
          name="emiratesId"
          label="Emirates Id"
          value={formikProps.values.emiratesId}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          variant="outlined"
          size="small"
          placeholder="784xxxxxxxxxxxx"
        />
        <ErrorMessage
          component="span"
          className={classes.error}
          name="emiratesId"
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <Field
          as={TextField}
          type="text"
          name="employeeId"
          label="Employee Id"
          value={formikProps.values.employeeId}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          variant="outlined"
          size="small"
          placeholder="cbx-xxxx"
        />
        <ErrorMessage
          component="span"
          className={classes.error}
          name="employeeId"
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }} size="small">
        <InputLabel
          sx={{
            backgroundColor: "white",
            borderRadius: "2px",
            padding: "0 .25rem",
          }}
          id="role"
        >
          Role
        </InputLabel>
        <Field
          as={Select}
          type="text"
          name="role"
          labelId="role"
          id="userrole"
          value={formikProps.values.role}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          variant="outlined"
          // size="small"
        >
          {roles.map((role) => (
            <MenuItem key={role.roleId} value={role.role}>
              {role.role}
            </MenuItem>
          ))}
        </Field>
        <ErrorMessage component="span" className={classes.error} name="role" />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <Field
          as={TextField}
          type="password"
          name="password"
          label="Password"
          value={formikProps.values.password}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          variant="outlined"
          size="small"
          placeholder="********"
        />
        <p>Type new password to change.</p>
        <ErrorMessage
          component="span"
          className={classes.error}
          name="password"
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <Button type="submit" variant="contained">
          Add User
        </Button>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <Button type="submit" variant="outlined" href="/users">
          Cancel
        </Button>
      </FormControl>
    </Form>
  );
};

export default UserForm;
