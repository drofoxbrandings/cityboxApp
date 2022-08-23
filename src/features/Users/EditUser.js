import { Alert, Grid, Paper, Snackbar, Typography } from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, getSingleUser } from "./UserApis";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import { useParams } from "react-router-dom";
import { getUser } from "./UserSlice";
import { current } from "@reduxjs/toolkit";

const EditUser = (props) => {
  //   const [isLoading, setIsLoading] = useState('idle');
  const [open, setOpen] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  // const errorMessage = useSelector((state) => state.users.error);
  const errorMsg = useSelector((state) => state.users.error);
  const successMessage = useSelector((state) => state.users.message);
  const userStatus = useSelector((state) => state.users.status);
  const { userId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setIsError(false);
  };

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(getSingleUser(userId)).unwrap();
    }
    if (userStatus === "pending") {
      setDataLoading(true);
    }
    if (userStatus === "failed") {
      setIsError(true);
      setErrorMessage(errorMsg);
      setDataLoading(false);
    }
    if (userStatus === "success") {
      setIsError(false);
      setErrorMessage("");
      setDataLoading(false);
    }
  }, [userStatus, dispatch, errorMsg]);

  return (
    <Grid container>
      <Grid item xs={12} md={8} sx={{ margin: "auto" }}>
        <Paper elevation={3} sx={{ padding: "2rem" }}>
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            UPDATE USER
          </Typography>
        
           {user && <Formik
              enableReinitialize={true}
              initialValues={{
                firstName: user.firstName,
                LastName: user.LastName,
                email: user.email,
                phone: user.phone,
                emiratesId: user.emiratesId,
                employeeId: user.employeeId,
                role: user.role,
              }}
              validationSchema={Yup.object().shape({
                firstName: Yup.string()
                  .required("Please enter first name!!")
                  .min(3, "Firstname should have minimum 3 characters!!")
                  .max(26, "Maximum 26 characters allowed!!")
                  .matches(
                    /^[a-zA-Z ]*$/,
                    "First name should not contain any special characters"
                  ),
                LastName: Yup.string()
                  .required("Please enter last name!!")
                  .min(3, "Last name should have minimum 3 characters!!")
                  .max(26, "maximum 26 characters allowed!!")
                  .matches(
                    /^[a-zA-Z ]*$/,
                    "Last name should not contain any special characters!!"
                  ),
                email: Yup.string()
                  .required("Please enter email id!!")
                  .email("Invalid email Id!!"),
                phone: Yup.string()
                  .required("Please enter phone number!!")
                  .min(10, "Invalid phone number!!")
                  .max(10, "Invalid Phone number!!")
                  .matches(
                    /^(?:\+971|00971|0)?(?:50|51|52|55|56|58|2|3|4|6|7|9)\d{7}$/,
                    "Please provide a valid UAE phone number!!"
                  ),
                emiratesId: Yup.string()
                  .required("Please enter Emirates Id!!")
                  .matches(
                    /^784-?[0-9]{4}-?[0-9]{7}-?[0-9]{1}$/,
                    "Invalid Emirates Id"
                  ),
                employeeId: Yup.string().required("Please enter employee id!!"),
                role: Yup.string().required("Please select role!!"),
                password: Yup.string()
                  .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                  ),
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setOpen(true);
                try {
                  await dispatch(updateUser(values)).unwrap();
                  setIsError(true);
                  resetForm();
                  setTimeout(() => {
                    navigate("/users");
                  }, 3000);
                } catch (error) {
                  setOpen(false);
                  setIsError(true);
                } finally {
                  // resetForm()
                  setOpen(false);
                }
              }}
              render={(formikProps) => <UserForm formikProps={formikProps} />}
            ></Formik>}
     
          <Loading open={open} />
          <Snackbar
            sx={{ minWidth: "1000px" }}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            open={isError}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              severity={errorMessage ? "error" : "success"}
              onClose={handleClose}
            >
              {errorMessage ? errorMessage : successMessage}
            </Alert>
          </Snackbar>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default EditUser;
