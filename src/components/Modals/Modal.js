import { Divider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import UserForm from "../FormComponent/UserForm";
import "./Modal.css";
import image1 from "../../images/image1.jpg";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="dialog"
        maxWidth={false}
      >
        <div className="modal">
          <img src={image1} alt="not Found" className="modalImg" />
          <div className="modal_content">
            <DialogTitle id="form-dialog-title">
              <Typography className="modalHeader">SignUp</Typography>
            </DialogTitle>
            <Divider variant="middle" />
            <DialogContent>
              <UserForm />
            </DialogContent>
            <Divider variant="middle" />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
