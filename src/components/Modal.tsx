//@ts-nocheck
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { blueGrey, grey } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import { AllDataOfCharters } from '../App'


type ModalProps = {
  isOpen: boolean,
  character: AllDataOfCharters,
  handleClose: () => void,
}

export const CharacterModal = ({ character, handleClose, isOpen }: ModalProps) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  console.log(smDown)


  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: '#35313f',
    boxShadow: 24,
    borderRadius: '1rem',
    border: 'none',


    maxWidth: smDown ? '90%' : '70%',
    minWidth: smDown ? '350px' : '450px',
    maxHeight: smDown ? '90%' : '90%',
    p: 1,
    textAlign: 'center',


    img: {
      maxHeight: '50vh',
      borderRadius: '0.5rem',
      width: '100%',
    },

    h2: {
      marginTop: '0.25rem',
      color: grey[50],
    },

    h3: {
      textAlign: 'left',
      fontSize: '1rem',
      fontWeight: 'lighter',

      marginX: smDown ? 0 : 2,
      span: {
        color: blueGrey[100],
      },
    }
  }
  return (
    < div >
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="Data-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} color="primary.main">
          <img
            src={character.imageUrl}
            alt={`personagem de nome ${character.name} da disney`}
          />

          <h2>{`${character.name}` || ''}</h2>

          {character.allies.length > 0 && <h3> <span>Aliados : &nbsp;</span> {character.allies}.</h3>

          }

          {character?.enemies.length > 0
            ? <h3> <span>Inimigos : &nbsp;</span> {character.enemies}.</h3>
            : null
          }

          {character.films.length > 0
            ? <h3> <span>Filmes : &nbsp;</span> {character.films}.</h3>
            : null
          }

          {character.shortFilms.length > 0
            ? <h3> <span>Curtas-metragens : &nbsp;</span> {character.shortFilms}.</h3>
            : null
          }

          {character.tvShows.length > 0
            ? <h3> <span>Programas de TV : &nbsp;</span> {character.tvShows}.</h3>
            : null
          }

          {character.videoGames.length > 0
            ? <h3> <span>Videogames : &nbsp;</span> {character.videoGames}.</h3>
            : null
          }
        </Box>
      </Modal>
    </div >
  )
}