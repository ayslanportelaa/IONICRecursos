const express = require('express');
const request = require('request');

const app = express();

app.use(express.json());

app.get('/lookerMoshe', (req, res) => {
  const url = 'https://lookerstudio.google.com/reporting/create?c.reportId=fe0d3824-346d-4361-ab76-a6840735963c&ds.ds0.connector=googleCloudStorage&ds.ds0.pathType=FILE&ds.ds0.path=moshereport/temp-csv/report_20230414_20230413_scs_40825v_modelo_crm_v01_65532_9138C4C1F_3381E1929842189A.csv&c.mode=edit&r.reportName=NEW_AYSLAN';
  //const url ='https://moshe.visualstudio.com/Moshe/_dashboards/dashboard/501c8226-4c3e-41cd-bccd-2100810d8f3d';
  
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