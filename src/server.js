const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(require('cors')());

const contadorPath = './contador.txt';

app.get('/visits', (req, res) => {
  let visitas = 0;
  if (fs.existsSync(contadorPath)) {
    visitas = parseInt(fs.readFileSync(contadorPath, 'utf-8'));
  }
  visitas += 1;
  fs.writeFileSync(contadorPath, visitas.toString());
  res.json({ visitas });
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));