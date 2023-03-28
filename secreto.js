const fetch = require('node-fetch');
const API_KEY = 'sua_chave_da_API_aqui';

module.exports = async (req, res) => {
  const { page } = req.query;
  const response = await fetch(`https://api.brawlhalla.com/rankings/1v1/brz/1?api_key=C2KZNXSHOPILAEPYOVH6`);
  const data = await response.json();
  res.json(data);
};
