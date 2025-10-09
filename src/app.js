const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// rota que serve o HTML em src/views/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// só iniciar o servidor se este arquivo for o processo principal (facilita testes)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app;
