import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";

const Contacts = () => {
  return (
    <Box>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
