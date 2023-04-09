import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { ContactsItemStyled } from './ContactsItem.styled';
import { deleteContact } from '../../redux/operations';
import { BackgroundLetterAvatars } from '../Avatar/Avatar';
import { BasicModal } from '../Modal/Modal';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const ContactsItem = ({ contactName, contactNumber, contactId }) => {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3,
        }}
      >
        <ContactsItemStyled item xs={3}>
          <Item className="Name">
            <BackgroundLetterAvatars name={contactName} />
            <span>{contactName}</span>
          </Item>
        </ContactsItemStyled>
        <ContactsItemStyled item xs={2}>
          <Item className="Number">☎️ {contactNumber}</Item>
        </ContactsItemStyled>
        <ContactsItemStyled item xs={1}>
          <Item className="FunctionBtn">
            <button onClick={() => onOpenModal(contactId)}>
              <EditIcon color="primary" />
            </button>
          </Item>
        </ContactsItemStyled>
        <ContactsItemStyled item xs={1}>
          <Item className="FunctionBtn">
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contactId))}
            >
              <DeleteIcon sx={{ color: 'red' }} />
            </button>
          </Item>
        </ContactsItemStyled>
      </Grid>
      {openModal && (
        <BasicModal
          contactId={contactId}
          contactName={contactName}
          contactNumber={contactNumber}
          onCloseModal={onCloseModal}
        />
      )}
    </Box>
  );
};

ContactsItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
