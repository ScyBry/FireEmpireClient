import React from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material';

const schema = z.object({
    category: z.string().min(1, 'Category is required'),
    name: z.string().min(1, 'Name is required'),
});

type FormValues = z.infer<typeof schema>;

interface ModalFormProps {
    open: boolean;
    onClose: () => void;
    onSave: (item: FormValues) => void;
    defaultValues?: FormValues | null;
}

const ModalForm: React.FC<ModalFormProps> = ({open, onClose, onSave, defaultValues}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onSubmit = (data: FormValues) => {
        onSave(data);
        reset();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{defaultValues ? 'Edit Item' : 'Add Item'}</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Category"
                        {...register('category')}
                        error={!!errors.category}
                        helperText={errors.category?.message}
                        fullWidth
                        margin="dense"
                    />
                    <TextField
                        label="Name"
                        {...register('name')}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        fullWidth
                        margin="dense"
                    />
                    <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="submit" variant="contained" color="primary">
                            {defaultValues ? 'Save Changes' : 'Add Item'}
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ModalForm;
