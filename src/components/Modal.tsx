import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AllDataOfCharters } from '../App'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 350,
  bgcolor: '#35313f',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  borderRadius: '4rem',
  border: 'none',  

  h3: {
    fontSize: '1rem',
    span: {
      color: '#000000ad',
      fontSize: '0.95rem'
    },
  }
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
        <h2>{`${character.name}` || ''}</h2>

        {character.allies.length > 0
          ? <h3> <span>Aliados &nbsp;</span> {character.allies} </h3>
          : null
        }

        {character.enemies.length > 0
          ? <h3> <span>Inimigos &nbsp;</span> {character.enemies} </h3>
          : null
        }

        {character.films.length > 0
          ? <h3> <span>Filmes &nbsp;</span> {character.films} </h3>
          : null
        }

        {character.shortFilms.length > 0
          ? <h3> <span>Curtas-metragens &nbsp;</span> {character.shortFilms} </h3>
          : null
        }

        {character.tvShows.length > 0
          ? <h3> <span>programas de TV &nbsp;</span> {character.tvShows} </h3>
          : null
        }

        {character.videoGames.length > 0
          ? <h3> <span>Videogames &nbsp;</span> {character.videoGames} </h3>
          : null
        }
      </Box>
    </Modal>
  </div>
)