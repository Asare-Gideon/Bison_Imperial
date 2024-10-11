import axios from "axios";
import { BASE_URL } from "../common/constants";

const trackingUrl = `${BASE_URL}/users/agent/66dad480e2fb5b9d9aa9913f/track`;

export enum TrackKindEnum {
  containerTracking,
  itemTracking,
}

export type TrackShipmentRequestType = {
  trackFor: TrackKindEnum;
  trackingNumber: string;
};
let trackingApi = {
  tag: "Tracking",
  url: trackingUrl,
  useFetch(q: TrackShipmentRequestType) {
    return async () => {
      const r = await axios.get(this.url, {
        params: {
          tckFor: q.trackFor,
          tckNum: q.trackingNumber,
        },
      });
      return r.data;
    };
  },
};

export default trackingApi;
