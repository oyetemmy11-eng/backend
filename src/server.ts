

// Application is not function or a variable that runs code. It is a typescript interface that dexcribes the "shape" of an express application.

/*
    *it tells typescript "This object must have all the methods and properties that a standard express app has (like .use(), listen(), get()"). 
*/

import express, { type Application } from 'express';

// Create express application
const app: Application = express();

const PORT = process.env.PORT || 7371;

app.get('api/v1/test', (req, res) => {
    res.status(200).json({ status:'active', message: 'server is healthy'});
});

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`);
});