import { Request, Response } from 'express';
const express = require('express');

const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

const port = process.env.PORT || 4000;

const host = 'localhost';

app.listen(port, host, () =>
  console.log(`server is runnning in ${host}:${port}`),
);
