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
import { CartState } from './Home';
import {useState,useEffect} from 'react'

export default function Modals() {
  const [open, setOpen] = React.useState(false);
  const [doo,setDo]=useState({card:'',cvv:''})
  const [err,setError]=useState('')
  const [errs,setErrCvv]=useState('')
  // const{navigate}=CartState()
  const navigate=useNavigate()

  const change=(e)=>{
     setDo(prev=>({...prev,[e.target.name]:e.target.value}))
    //  console.log(doo)
  }
  const onSubmit=(e)=>{
   
 

  

    if(!err&&!errs){
      navigate('/success')
    }
    

  }
  useEffect(()=>{
    setError(doo.card.length !== 16 ? "please enter correct details" : "");
    setErrCvv(doo.cvv.length !== 3 ? "please enter correct details" : "");
  },[doo.card.length,doo.cvv.length])


//   const[card,setcard]=React.useState(false)
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="success"
        style={{color:'white',marginLeft:'300px',marginTop:'30px'}}
        
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
            onSubmit={(e)=>{
              e.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl onChange={change}>
                <FormLabel>Card Number</FormLabel>
                <Input autoFocus required name='card' type='number' value={doo.card}/>
                {err&&<span style={{color:'red'}}>{err}</span>}
              </FormControl>
              <FormControl onChange={change}>
                <FormLabel>Cvv</FormLabel>
                <Input required name='cvv' type='number' value={doo.cvv} />
                {errs&&<span style={{color:'red'}}>{errs}</span>}

              </FormControl>
              <Button  onClick={onSubmit}>Pay</Button>
              {/* {card&&<CongratCard/>} */}
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}