import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Modal, Typography, TextField } from '@mui/material';

import { StyledForm, StyledEditBtn } from './Modal.styled';
import { editContact } from 'redux/operations';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #3d6cb9',
  borderRadius: 10,
  boxShadow: 24,
  background: 'white',
  p: 4,
};

export function BasicModal({
  contactName,
  contactNumber,
  contactId,
  onCloseModal,
}) {
  const rootRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const onSubmitHandler = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    dispatch(editContact({ contactId, contactData: formData }));

    onCloseModal();
    form.reset();
  };

  return (
    <div>
      <Modal
        ref={rootRef}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledForm onSubmit={onSubmitHandler}>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, mb: 3, textAlign: 'center' }}
            >
              Edit the contact
            </Typography>
            <TextField
              name="name"
              required
              fullWidth
              id="filled-required"
              label="Required"
              defaultValue={contactName}
              variant="filled"
              margin="dense"
            />
            <TextField
              fullWidth
              name="number"
              required
              id="filled-required"
              label="Required"
              defaultValue={contactNumber}
              variant="filled"
              margin="dense"
            />
            <StyledEditBtn type="submit" sx={{ mt: 2 }} className="EditBtn">
              Edit
            </StyledEditBtn>
          </StyledForm>
        </Box>
      </Modal>
    </div>
  );
}

Modal.propTypes = {
  contactName: PropTypes.string,
  contactNumber: PropTypes.string,
  contactId: PropTypes.string,
  onCloseModal: PropTypes.func,
};
