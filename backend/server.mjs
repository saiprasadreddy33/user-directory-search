import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = 5000;

app.use(cors());

let usersData = [];

fs.readFile('./users.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading users data:', err);
  } else {
    try {
      const { results } = JSON.parse(data);
      if (Array.isArray(results)) {
        usersData = results;
      } else {
        throw new Error('Data is not an array');
      }
    } catch (error) {
      console.error('Error parsing users data:', error);
    }
  }
});

app.get('/api/users', (req, res) => {
  res.json(usersData);
});

app.get('/api/search', (req, res) => {
  const { query } = req.query;
  const filteredUsers = usersData.filter(user =>
    user.name.first.toLowerCase().includes(query.toLowerCase()) ||
    user.name.last.toLowerCase().includes(query.toLowerCase())
  );
  res.json(filteredUsers);
});

app.get('/api/filter', (req, res) => {
  const { nationality } = req.query;
  const filteredUsers = usersData.filter(user => user.nat === nationality);
  res.json(filteredUsers);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});