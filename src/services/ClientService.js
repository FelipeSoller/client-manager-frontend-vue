/* eslint-disable consistent-return */
import Api from './Api';

export default {
  async createNewClient(client) {
    try {
      const response = await Api().post('/clients', client);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getClients() {
    try {
      const response = await Api().get('/clients');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getClientId(id) {
    try {
      const response = await Api().get(`/clients/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async updateClient(id) {
    try {
      const response = await Api().put(`/clients/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteClient(id) {
    try {
      const response = await Api().delete(`/clients/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
