import {FC} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Dialog} from "@/components/Dialog/Dialog";
import {TextField} from "@mui/material";


const schema = z.object({
    category: z.string().min(1, 'Category is required'),
    name: z.string().min(1, 'Name is required'),
});

type FormValues = z.infer<typeof schema>;

interface AddCategoryFormProps {
    open: boolean;
    onClose: () => void;
    onSave: (item: FormValues) => void;
    defaultValues?: FormValues | null;
}

export const AddCategoryForm: FC<AddCategoryFormProps> = ({open, onClose, onSave, defaultValues}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const onSubmit = (data: FormValues) => {
        onSave(data);
        reset();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            title={defaultValues ? 'Edit Item' : 'Add Item'}
            onSubmit={handleSubmit(onSubmit)}
            submitLabel={defaultValues ? 'Save Changes' : 'Add Item'}
        >
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
        </Dialog>
    );
};


