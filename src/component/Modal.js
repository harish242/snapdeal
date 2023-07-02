import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
// import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
// import CongratCard from './Congratulations';
import { useNavigate} from 'react-router-dom'
import {useState} from 'react'

export default function Modals() {
  const [open, setOpen] = React.useState(false);
  const [doo,setDo]=useState({card:'',cvv:''})
  const navigate=useNavigate()

  const change=(e)=>{
     setDo(prev=>({...prev,[e.target.name]:e.target.value}))
     console.log(doo)
  }
  const onSubmit=()=>{
    if(doo.card&&doo.cvv){
      navigate('/success')
    }
    

  }

//   const[card,setcard]=React.useState(false)
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="success"
        
        // startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        Check out
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            Card Details
          </Typography>
          <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
            add Credit/Debit card 
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl onChange={change}>
                <FormLabel>Card Number</FormLabel>
                <Input autoFocus required name='card' />
              </FormControl>
              <FormControl onChange={change}>
                <FormLabel>Cvv</FormLabel>
                <Input required name='cvv' />
              </FormControl>
              <Button type="click" onClick={onSubmit}>Pay</Button>
              {/* {card&&<CongratCard/>} */}
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}