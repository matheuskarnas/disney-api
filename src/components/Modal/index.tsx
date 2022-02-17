import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { HomeCardProps, baseUrl, AllDataOfCharters } from '../../App'

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

type ModalDataProps = {
  films: string[],
}

export default function BasicModal({ _id, handleClose, isOpen }: ModalProps) {
  const [modalData, setModalData] = useState<AllDataOfCharters[]>([])

  const collection = async (_id: number) => {
    fetch(baseUrl + _id)
      .then(response => response.json())
      .then(data => setModalData(data))
  }

  if (isOpen) {
    collection(_id)
    // console.log('aqui', modalData)
  }

  return (
    <div>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="Data-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} color="primary.main">
          <img src={modalData.imageUrl} />
          <h3>{`name: ${modalData.name}` || ''}</h3>
          <h3>{`allies: ${modalData.allies}` || ''}</h3>
          <h3>{`enemies: ${modalData.enemies}` || ''}</h3>
          <h3>{`films: ${modalData.films}` || ''}</h3>
          <h3>{`parkAttractions: ${modalData.parkAttractions}` || ''}</h3>
          <h3>{`shortFilms: ${modalData.shortFilms}` || ''}</h3>
          <h3>{`tvShows: ${modalData.tvShows}` || ''}</h3>
          <h3>{`videoGames: ${modalData.videoGames}` || ''}</h3>
        </Box>
      </Modal>
    </div>
  );
}
