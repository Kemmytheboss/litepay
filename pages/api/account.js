import { getMarketPrices } from '../../utils/binance';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // For example, fetching spot balance and prices
    const balance = await getSpotBalance();
    const price = await getMarketPrices('BTCUSDT');

    return res.status(200).json({ balance, price });
  }
}
