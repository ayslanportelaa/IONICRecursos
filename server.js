const express = require('express');
const request = require('request');

const app = express();

app.use(express.json());

app.get('/scrum', (req, res) => {
  // const url = 'https://lookerstudio.google.com/reporting/create?c.reportId=6250676f-0957-4541-9c6c-6da1289476ce&ds.ds0.connector=google';
  const url ='https://moshe.visualstudio.com/Moshe/_dashboards/dashboard/501c8226-4c3e-41cd-bccd-2100810d8f3d';
  
  request.get(url, (error, response, body) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error');no
    } else {
      res.send(body);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));