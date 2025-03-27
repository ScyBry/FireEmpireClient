"use client"

import {useState} from "react";
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


const Row = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
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
                <TableCell>
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
        </>
    )
}

export const CollapsibleTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    Заголовк главной таблицы
                </TableHead>
                <TableBody>
                    <Row/>
                </TableBody>
            </Table>
        </TableContainer>
    )
}