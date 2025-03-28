"use client"

import {Fragment, useState} from "react";
import {
    Collapse,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
import {AddCategoryForm} from "@/components/AddCategoryForm/AddCategoryForm";

const TABLE_HEAD: string[] = [
    "Название",
    "Время",
    "Видео",
    "Цена",
    "Класс опасности",
    "Общее количество",
    "Свободно"
]


export const CollapsibleTable = () => {
    const [openAddCategoryModal, setOpenAddCategoryModal] = useState(false);
    return (
        <Paper>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        {TABLE_HEAD.map((header) => (
                            <TableCell key={header}>
                                {header}
                            </TableCell>
                        ))}
                        <TableCell>
                            <IconButton onClick={() => {
                                setOpenAddCategoryModal(true)
                            }}>
                                <AddIcon/>
                            </IconButton>
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        <Row/>
                    </TableBody>
                </Table>
            </TableContainer>
            <AddCategoryForm open={openAddCategoryModal} onClose={() => setOpenAddCategoryModal(false)}
                             onSave={() => console.log("save")}/>
        </Paper>
    )
}

const Row = () => {
    const [open, setOpen] = useState(false);


    return (
        <Fragment>
            <TableRow>
                <TableCell>
                    <IconButton
                        size="small"
                        onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                    <TableCell>
                        Название
                    </TableCell>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <div>
                            <Table size="small">
                                <TableHead>Таблица заголовок</TableHead>
                                <TableBody>Тело таблицы</TableBody>
                            </Table>
                        </div>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    )
}