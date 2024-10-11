import axios from "axios";
import { BASE_URL } from "../common/constants";

export type AmountCalculatorRequestType = {
  l?: number;
  w?: number;
  h?: number;
  qty?: number;
  weight?: number;
  isAir: boolean;
  from?: string;
  to?: string;
};
export type AmountCalculatorResponseType = {
  price: number;
  dollarRate: number;
  rate: number;
};
const calculatorApi = {
  tag: "Calculator",
  url: `${BASE_URL}/users/agent/66dad480e2fb5b9d9aa9913f/calculate`,
  useFetch(q: AmountCalculatorRequestType) {
    return async () => {
      const r = await axios.get(this.url, {
        params: {
          ...q,
        },
      });
      return r.data;
    };
  },
};

export default calculatorApi;
