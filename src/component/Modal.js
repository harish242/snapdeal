import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';
import { CartState } from './Home';
import { useState, useEffect } from 'react';

export default function Modals({ cont }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false); // State for loading modal
  const [doo, setDo] = useState({ card: '', cvv: '', date: '' });
  const [err, setError] = useState('');
  const [errs, setErrCvv] = useState('');
  const [errss, setErrdate] = useState('');
  const { navigate,setTotalSelected,totalSelected,setSelectedProducts} = CartState();

  const change = (e) => {
    setDo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!err && !errs&&!errss) {
      // Show loading modal
      setLoading(true);

      // Simulate a delay (2 seconds) before navigation
      setTimeout(() => {
        setLoading(false); // Hide loading modal
        setOpen(false); // Close existing modal
        setSelectedProducts([])
        navigate('/success'); // Navigate further
      }, 2000);
    }
  };

  useEffect(() => {
    setError(doo.card.length !== 16 ? 'please enter correct details' : '');
    setErrCvv(doo.cvv.length !== 3 ? 'please enter correct details' : '');
    setErrdate(doo.date === '' ? 'please enter correct details' : '');
  }, [doo.card.length, doo.cvv.length, doo.date]);

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="success"
        onClick={() => setOpen(true)}
        disabled={cont ? false : true}
        style={{ color: 'black' }}
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
          <form>
            <Stack spacing={2}>
              <FormControl onChange={change}>
                <FormLabel>Card Number</FormLabel>
                <Input autoFocus required name="card" type="number" placeholder="enter 16 digits" value={doo.card} />
                {err && <span style={{ color: 'red' }}>{err}</span>}
              </FormControl>
              <FormControl onChange={change}>
                <FormLabel>Cvv</FormLabel>
                <Input required name="cvv" type="number" placeholder="enter 3 digits" value={doo.cvv} />
                {errs && <span style={{ color: 'red' }}>{errs}</span>}
              </FormControl>
              <FormControl onChange={change}>
                <FormLabel>Expiry date</FormLabel>
                <Input required name="date" type="date" placeholder="valid thru" value={doo.date} />
                {errss && <span style={{ color: 'red' }}>{errss}</span>}
              </FormControl>
              <Button onClick={onSubmit}>Pay</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
      {/* Loading modal */}
      {loading && (
        <Modal open={loading} onClose={() => setLoading(false)}>
          <ModalDialog sx={{ maxWidth: 300 }}>
            <Typography component="div" textAlign="center">
              <p style={{color:'green'}}>processing payment...</p>
            </Typography>
          </ModalDialog>
        </Modal>
      )}
    </React.Fragment>
  );
}
