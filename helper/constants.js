'use strict';

const EMAIL_SERVER_URL  = `https://o4xjvb0dzd.execute-api.us-east-1.amazonaws.com/dev/mail/`;
const NEWS_CATEGORIZER_URL = 'URL';

const randomNumberOneOrTwo = () => {
    return Math.round(Math.random() * (1 - 0) + 0);
  }

module.exports = {
    EMAIL_SERVER_URL,
    NEWS_CATEGORIZER_URL,
    randomNumberOneOrTwo
};