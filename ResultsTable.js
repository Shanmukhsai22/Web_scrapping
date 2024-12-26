import React from 'react';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper 
} from '@mui/material';

const ResultsTable = ({ data }) => {
    if (!data) return null;

    return (
        <TableContainer component={Paper} sx={{ m: 2 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Business Name</TableCell>
                        <TableCell>Mailing Address</TableCell>
                        <TableCell>Principal Contact</TableCell>
                        {/* <TableCell><a href={data.latest_annual_report} target="_blank" rel="noopener noreferrer">
                         Latest Report</a></TableCell> */}
                        <TableCell>Registration Date</TableCell>
                        <TableCell>State</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{data.business_name}</TableCell>
                        <TableCell>{data.mailing_address}</TableCell>
                        <TableCell>{data.principals_and_contact_information}</TableCell>
                        {/* <TableCell>{data.latest_annual_report}</TableCell> */}
                        <TableCell>{data.registration_date}</TableCell>
                        <TableCell>{data.state}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ResultsTable;