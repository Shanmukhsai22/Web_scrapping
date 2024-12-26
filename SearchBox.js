import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Box } from '@mui/material';
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Ensure this matches your Flask server's URL

const SearchBox = ({ onResultsReceived }) => {
    const [businessName, setBusinessName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!businessName.trim()) {
            setError('Please enter a business name');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`${API_URL}/api/crawl`, {
                business_name: businessName.trim()
            });
            onResultsReceived(response.data);
        } catch (err) {
            setError(
                err.response?.data?.error || 
                'An error occurred during search. Please make sure the backend server is running.'
            );
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        const testConnection = async () => {
            try {
                const response = await axios.get(`${API_URL}/test`);
                console.log('Backend connection test:', response.data);
            } catch (err) {
                console.error('Backend connection test failed:', err);
            }
        };
        testConnection();
    }, []);

    return (
        <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Business Name"
                variant="outlined"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                disabled={loading}
            />
            <Button 
                variant="contained" 
                onClick={handleSearch}
                disabled={loading}
            >
                {loading ? <CircularProgress size={24} /> : 'Search'}
            </Button>
            {error && (
                <Box sx={{ color: 'error.main', mt: 1 }}>
                    {error}
                </Box>
            )}
        </Box>
    );
};

export default SearchBox;
