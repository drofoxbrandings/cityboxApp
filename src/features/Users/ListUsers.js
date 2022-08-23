import { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  LinearProgress,
  Box,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "./UserSlice";
import { listUsers } from "./UserApis";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);
  const userStatus = useSelector((state) => state.users.status);
  const errorMsg = useSelector((state) => state.users.error);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(listUsers()).unwrap();
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

  const userColumns = [
    {
      field: "employeeId",
      headerName: "Emp Id",
      width: 150,
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
    },
    {
      field: "LastName",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "emiratesId",
      headerName: "Emirates Id",
      width: 170,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton size="small" href={`edituser/${params.row._id}`}>
            <EditIcon />
          </IconButton>
          <IconButton size="small" onClick={() => handleDelete(params)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const handleDelete = (params) => {
    alert(params.row._id);
  };

  const handleClose = () => {
    setIsError(false);
  };

  return (
    <>
      <Paper elevation={3} sx={{ padding: "1rem", margin: "3rem auto" }}>
        <Snackbar
          open={isError}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            <Typography>{errorMessage && errorMessage}</Typography>
          </Alert>
        </Snackbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h5" gutterBottom>
            USERS
          </Typography>
          <Button size="small" variant="contained" href="/addUser">
            Add User
          </Button>
        </Box>
        <DataGrid
          columns={userColumns}
          rows={users ? users : []}
          getRowId={(row) => row._id}
          autoHeight
          disableSelectionOnClick
          loading={dataLoading}
          components={{
            LoadingOverlay: LinearProgress,
          }}
        />
      </Paper>
    </>
  );
};

export default ListUsers;
