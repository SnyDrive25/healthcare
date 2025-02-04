const express = require('express');
const axios = require('axios');
const cors = require('cors');

const router = express.Router();
router.use(cors());

const COINMARKETCAP_API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BNB&convert=USD';
const COINMARKETCAP_API_KEY = '13cbb1e2-02d6-444f-97e3-35849c177dc9'; // Replace with your CoinMarketCap API key

router.get('/get_value', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const response = await axios.get(COINMARKETCAP_API_URL, {
            headers: {
                'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY
            }
        });

        const bnbValue = response.data.data.BNB.quote.USD.price;
        console.log(bnbValue);
        res.json({ value: bnbValue });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch BNB value' });
    }
});

module.exports = router;