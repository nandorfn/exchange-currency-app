const axios = require('axios');

export default async function getData() {
    try {
      const response = await axios.get('https://api.apilayer.com/exchangerates_data/convert?to=USD&from=IDR&amount=15000', {
        headers: {
            apikey: 'BAJ8CvVEq9m75mCqXOgLu904Ql3kKpxw'
        }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }