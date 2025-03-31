import { Dialog } from '@mui/material';
import { JSX } from 'react';

interface DialogContainerProps {
  children: JSX.Element;
  open: boolean;
  onClose: (arg0: string) => void;
}

function DialogContainer(props: DialogContainerProps): JSX.Element {
  const { children, open, onClose } = props;

  return (
    <Dialog open={open} fullWidth maxWidth="md" onClose={onClose}>
      {children}
    </Dialog>
  );
}

export default DialogContainer;
