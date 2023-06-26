const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to handle the AJAX request for saving votes
app.post('/save_votes', (req, res) => {
    // Process the vote data received from the client
    // Save the votes to a JSON file or perform any necessary operations

    // Send a response indicating the success or failure of saving votes
    res.send('Votes saved successfully!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
