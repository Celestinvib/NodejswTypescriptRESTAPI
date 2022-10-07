// import express = require('express');
import express from 'express'; //Ts accept this syntax 
import bodyParser from 'body-parser';

import notesRoutes from './routes/notes';

const app = express();

app.use(bodyParser.json());

app.use(notesRoutes);

app.listen(3000);