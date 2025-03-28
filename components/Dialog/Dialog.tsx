import {FC} from "react";
import {Button, DialogActions, DialogContent, DialogTitle, Dialog as MUIDialog} from "@mui/material";


type DialogProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    onSubmit: () => void;
    submitLabel?: string;
    cancelLabel?: string;
}


export const Dialog: FC<DialogProps> = ({
                                            open,
                                            onClose,
                                            title,
                                            children,
                                            onSubmit,
                                            submitLabel = 'Подтверидить',
                                            cancelLabel = 'Отмена',
                                        }) => {
    return (
        <MUIDialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{cancelLabel}</Button>
                <Button onClick={onSubmit} variant="contained" color="primary">
                    {submitLabel}
                </Button>
            </DialogActions>
        </MUIDialog>
    );
}