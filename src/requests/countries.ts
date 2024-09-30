import axios from "axios";

const countriesIncluded = ["AE", "TR", "CN"];
const countriesApi = {
  tag: "Countries",
  url: `https://api.shipmanglobal.com/misc/countries`,
  useFetch() {
    return async () => {
      const r = await axios.get(this.url, {
        params: { include: countriesIncluded.join(",") },
      });
      return r.data;
    };
  },
};

export default countriesApi;
