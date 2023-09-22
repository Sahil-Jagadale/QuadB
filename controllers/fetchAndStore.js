const axios = require("axios");
const Top10Data = require('../models/top10data');

const fetchAndStore = async (req, res) => {
    try {
      const response = await axios.get(process.env.FETCH_API);
      const data = response.data;
  
      // Extract the top 10 trading pairs and only include the required fields
      const top10Data = Object.entries(data)
        .slice(0, 10)
        .map(([pair, details]) => ({
          name: details.name,
          last: details.last,
          buy: details.buy,
          sell: details.sell,
          volume: details.volume,
          base_unit: details.base_unit,
        }));
  
      // Insert the data into MongoDB using the imported model
      await Top10Data.insertMany(top10Data);
  
      res.json(top10Data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports=fetchAndStore;