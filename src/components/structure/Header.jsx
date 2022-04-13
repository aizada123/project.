import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 6,
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content_logo">
            <img className="header-img" src="/images/logo.png" />
          </div>
          <div className="header__content_buttons">
            <button className="button_link" onClick={handleOpen}>
              Sign In
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h1">
                  Sign In
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
