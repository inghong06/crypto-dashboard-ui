import axios from "axios";

export const fetchGlobalStats = async () => {
  var options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/stats",
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "1afa92b453msh4820b80bd5326c2p179b0ajsn3b6f2f91a757",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCoins = async (count) => {
  var options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coins?limit=${count}`,
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "1afa92b453msh4820b80bd5326c2p179b0ajsn3b6f2f91a757",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchNews = async (query, count) => {
  var options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: query,
      count: count,
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "1afa92b453msh4820b80bd5326c2p179b0ajsn3b6f2f91a757",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.value;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCoinDetail = async (id) => {
  var options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "1afa92b453msh4820b80bd5326c2p179b0ajsn3b6f2f91a757",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data.coin;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCoinHistory = async (id, timeFrame) => {
  var options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${id}/history/${timeFrame}`,
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "1afa92b453msh4820b80bd5326c2p179b0ajsn3b6f2f91a757",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data.history;
  } catch (err) {
    console.log(err);
  }
};
