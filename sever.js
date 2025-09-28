const express = require('express');
const path = require('path');
const { Script } = require('vm');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
{Script = \public}
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
