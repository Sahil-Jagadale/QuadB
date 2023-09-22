const Top10Data = require('../models/top10data');

const fetchFromDB = async (req, res) => {
    try {
      const dataFromDB = await Top10Data.find({}).exec();
      res.json(dataFromDB);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports=fetchFromDB;