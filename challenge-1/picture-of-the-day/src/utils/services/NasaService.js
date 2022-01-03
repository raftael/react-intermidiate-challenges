import { URL_API_NASA } from '../constants';
import { APIKEY } from '../../config';
import pictureMock from '../mocks/pictureOftheDay';
import { formatDate } from '../fns';

const YoutubeService = {
  devGetPicture: async (query) => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(pictureMock);
        }, 300);
      });
  },
  getPicture: async (query) => {
    try {
      const formattedDate = formatDate(query)
      const url = `${URL_API_NASA}?date=${formattedDate}&api_key=${APIKEY}`;
      const response = await fetch(url);      
      const data = await response.json();
      if(!response.ok)
        throw data.msg;
      return data;
    } catch (error) {
      throw error;
    }
  },  
};

export default YoutubeService;
