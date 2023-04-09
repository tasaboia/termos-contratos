import axios from "axios";

export default axios.create({
  baseURL: "https://us-central1-termos-contratos.cloudfunctions.net/api",
  headers: {
    "Content-type": "application/json",
  },
});
