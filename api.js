// eslint-disable-next-line import/no-dynamic-require
const axios = require('axios');

const requestMethods = ['GET', 'PUT', 'POST', 'DELETE'];
const pathURL = 'https://randomuser.me/api/?results=10';

const requestBody = (method, url) => ({ method, url });

// eslint-disable-next-line import/prefer-default-export
const API_INSPECTOR_GET_COURSES = () => axios(requestBody(requestMethods[0], pathURL));

module.exports = { API_INSPECTOR_GET_COURSES };
