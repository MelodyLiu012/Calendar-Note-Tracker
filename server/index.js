const express = require('express'); 
const path = require('path');

const { readFile } = require('fs').promises;

const app = express(); 
const port = process.env.PORT || 5000; 

// app.get('/', async (req, res) => {
//   res.send(await readFile('../public/index.html', 'utf-8'));
// });
// app.use(express.static(path.join()));
// app.get("/", (req, res) => {
//   res.sendFile(path.join("__dirname", "public", "index.html"));
// });


// Test
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
}); 


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
}); 