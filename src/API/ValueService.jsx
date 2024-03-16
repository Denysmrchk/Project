import axios from 'axios';

export default class ValueService {
  static async getById(id) {
    const responce = await axios.get('https://63e4e80c8e1ed4ccf6e8d272.mockapi.io/rp2/cart/' + id);
    return responce;
  }
}
