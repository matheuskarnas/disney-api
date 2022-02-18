import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AllDataOfCharters } from '../../App'

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
  character: AllDataOfCharters,
  handleClose: () => void,
}

export const CharacterModal = ({ character, handleClose, isOpen }: ModalProps) => (
  <div>

    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="Data-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} color="primary.main">
        <img src={character.imageUrl} />
        <h3>{`name: ${character.name}` || ''}</h3>
        <h3>{`allies: ${character.allies}` || ''}</h3>
        <h3>{`enemies: ${character.enemies}` || ''}</h3>
        <h3>{`films: ${character.films}` || ''}</h3>
        <h3>{`parkAttractions: ${character.parkAttractions}` || ''}</h3>
        <h3>{`shortFilms: ${character.shortFilms}` || ''}</h3>
        <h3>{`tvShows: ${character.tvShows}` || ''}</h3>
        <h3>{`videoGames: ${character.videoGames}` || ''}</h3>
      </Box>
    </Modal>
  </div>
)

