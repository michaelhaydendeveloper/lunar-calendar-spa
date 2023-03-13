import axios from 'axios';

export const applicationInformation = {
    getInfo: () => axios.get('/applicationInformation'),
  };