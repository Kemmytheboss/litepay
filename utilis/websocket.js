// utils/websocket.js
const WebSocket = require('ws');

const subscribeToMarketData = (symbol) => {
  const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@trade`);

  ws.on('open', () => {
    console.log(`Connected to WebSocket for ${symbol}`);
  });

  ws.on('message', (data) => {
    const trade = JSON.parse(data);
    console.log(`Price: ${trade.p}, Quantity: ${trade.q}`); // Real-time trade data
  });

  ws.on('close', () => {
    console.log(`Disconnected from WebSocket for ${symbol}`);
  });
};

module.exports = { subscribeToMarketData };
