import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { baseApi } from '../../App'
import { useEffect } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  isOpen: boolean,
  _id: number,
  handleClose: () => void,
}

export default function BasicModal({ _id, handleClose, isOpen }: ModalProps) {

  if (isOpen) {
    useEffect(() => {
      fetch(baseApi + _id)
        .then(response => response.json())
        .then(data => console.log('de dentro do modal', data))

    }, [isOpen])
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} color="primary.main">
          <button style={{ color: 'white' }} onClick={() => handleClose}>Close</button>
          <h1>{_id}</h1>
        </Box>
      </Modal>
    </div>
  );
}
