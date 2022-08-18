import axios from "axios";

const instanceAxiosBDD = axios.create({
    baseURL:
      "https://test-dispatch-b09c6-default-rtdb.europe-west1.firebasedatabase.app",
  });
  export default instanceAxiosBDD