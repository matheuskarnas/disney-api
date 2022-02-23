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

        {character.allies.length > 0
          ? <h3>{`Aliados: ${character.allies}`}</h3>
          : null
        }

        {character.enemies.length > 0
          ? <h3>{`inimigos: ${character.enemies}`}</h3>
          : null
        }

        {character.films.length > 0
          ? <h3>{`Filmes: ${character.films}`}</h3>
          : null
        }

        {character.shortFilms.length > 0
          ? <h3>{`Curta metragem: ${character.shortFilms}`}</h3>
          : null
        }

        {character.tvShows.length > 0
          ? <h3>{`programas de TV: ${character.tvShows}`}</h3>
          : null
        }

        {character.videoGames.length > 0
          ? <h3>{`Videogames: ${character.videoGames}`}</h3>
          : null
        }

      </Box>
    </Modal>
  </div>
)

