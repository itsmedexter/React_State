import axios from "axios";

// The getProducts method retrieves products from the server
// It accepts a "query" or term to search the product api for
export default {
  getProducts: function(query) {
    return axios.get("/api/product", { params: { q: query } });
  }
};
