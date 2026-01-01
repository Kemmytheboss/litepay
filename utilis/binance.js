// utils/binance.js
const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: process.env.BINANCE_API_KEY,
  APISECRET: process.env.BINANCE_API_SECRET,
});

export const getMarketPrices = async (symbol) => {
  try {
    const prices = await binance.prices(symbol); // Returns the current prices of the symbol (e.g., "BTCUSDT")
    return prices;
  } catch (error) {
    console.error("Error fetching market prices", error);
    throw error;
  }
};

export const placeSpotOrder = async (symbol, quantity, side, price) => {
  try {
    const order = await binance.marketOrder(symbol, side, { quantity, price });
    return order;
  } catch (error) {
    console.error("Error placing spot order", error);
    throw error;
  }
};
