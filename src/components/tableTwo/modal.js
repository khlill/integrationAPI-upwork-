import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import NextTable from './table';
import MaterialTable from "@material-table/core";
import './table.css'


function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{"& .MuiDialog-container": {"& .MuiPaper-root": {width: "100%",maxWidth: "1380px",},},}}>
      <DialogTitle>Patient number: {window.id }</DialogTitle>
      <NextTable idPat={window.id}/>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo() {
  const [data, setData] = useState([]);

  useEffect(() => {fetchAsync();}, []);

  async function fetchAsync() {
    let response = await fetch(`https://n4dmctglka.execute-api.us-east-2.amazonaws.com/api/patients?page=1&per_page=50`);
    let data = await response.json();
    setData(data);
  }
  
      const columns = [
        { title: "PDPPIN", field: "pdppin" },
        { title: "Condition", field: "condition" },
        // { title: "Notes", field: "notes" },
        { title: "ICD10 Code", field: "icd10" },
        { title: "ICD10 Description", field: "icd_10_cm_description" },
        { title: "Birth sex", field: "birth_sex" },
      ];
      
      
  const [open, setOpen] = React.useState(false);
 
  function handleClickOpen(a){
    setOpen(true);
    window.id = a.pdppin
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
    <div>
      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>  
    {<MaterialTable style={{backgroundColor:"#fff", marginTop:"15px",marginLeft:"1%",width:"98%"}}
            title=""
            actions={[
              {
                icon: 'add',
                tooltip: 'Label Record',
                isFreeAction: true,
                onClick: (event) => alert("You want to add a new row")
              },
              {
                icon: 'edit',
                tooltip: 'Edit Record',
                isFreeAction: true,
                onClick: (event) => alert("You want to add a new row")
              }
            ]}
            columns={columns}
            data={data}
            onRowClick={ (event, rowData) => handleClickOpen(data[(rowData.tableData.id)]) }
            options={{
              filtering:false,
              searchFieldAlignment:"left",
              paginationType:"stepped",
              showFirstLastPageButtons:false,
              headerStyle: {
                backgroundColor: "#bdeafc",
                fontWeight: 'bold',
              },
            }}/>}
            </>

  );
}
