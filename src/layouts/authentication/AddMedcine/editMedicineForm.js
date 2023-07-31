import React from "react"
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Label } from '@mui/icons-material';
import { useMutation } from "@apollo/client";
import { INSERT_BANNER } from "api/mutations/advertisementMutations";
import MDButton from "components/MDButton";
const BannerForm = (props) =>{
    const handleSubmit = (event)=>{
        event.preventDefault();
        insert_banner({ variables: { id: imgId, start_date:start_date, end_date:end_date ,bussiness_name:bussinessName} });
        event.preventDefault();
       }
    const [start_date, setStart_date] = React.useState("");
    const [end_date, setEnd_date] = React.useState("");
    const [bussinessName, setBussinessName] = React.useState("");
    const [imgId, setImgId] = React.useState(props.imgId);
    const[insert_banner, {data,loading,error}] = useMutation(INSERT_BANNER);
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  if (data) return 'sucesss'
    return(
        <form onSubmit={handleSubmit}>
             <TextField
            fullWidth
            margin="dense"
            id="imageid"
            label="image id"
            type="text"
            variant="standard"
            required
            value={imgId}
            onChange = {(e)=>setImgId(e.target.value)}
            error = {!setImgId}
            helperText= {
              !setImgId? 'Required' : " "
            }
          /><br/><br/>1446
          
        <TextField
            fullWidth
            margin="dense"
            id="name"
            label="Bussiness name"
            type="text"
            variant="standard"
            required
            value={bussinessName}
            onChange = {(e)=>setBussinessName(e.target.value)}
            error = {!bussinessName}
            helperText= {
              !bussinessName? 'Required' : " "
            }
          /><br/><br/>
         <p className='text-gray-700'> Start Date:</p>
           <TextField
           fullWidth
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="date"
            variant="standard"
            required
            value={start_date}
            onChange = {(e)=>setStart_date(e.target.value)}
            error = {!start_date}
            helperText= {
              !start_date? 'Required' : " "
            }
          />
        <p className='text-gray-700'> End Date:</p>
        
           <TextField
            autoFocus
            fullWidth
            margin="dense"
            id="name"
            label=""
            type="date"
            value={end_date}
            variant="standard"
            required
            onChange = {(e)=>setEnd_date(e.target.value)}
            error = {!end_date}
            helperText= {
              !end_date? 'Required' : " "
            }
          /><br/><br/>
          <MDButton variant="gradient" color="dark" onClick={handleSubmit}>
          publish
        </MDButton>
         
        </form>
    )
}
export default BannerForm;
