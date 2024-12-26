import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import ResultsTable from './components/ResultsTable';
import { Container, Typography, Box } from '@mui/material';
import './App.css';

function App() {
  const [results, setResults] = useState(null);

  return (
      <Container className="container">
          <Box className="header">
              <Typography variant="h3" gutterBottom>
                  Florida Business Search
              </Typography>
          </Box>
          <div className="search-container">
              <SearchBox onResultsReceived={(data) => setResults(data.data)} />
          </div>
          <div className="table-wrapper">
              <ResultsTable data={results} />
          </div>
      </Container>
  );
}

export default App;
