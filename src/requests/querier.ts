import type { AxiosError, AxiosResponse } from "axios";
import { writable } from "svelte/store";

const Querier = () => {
  const querier = {
    state: writable<{ loading: boolean; data: any; error: any }>({
      loading: false,
      data: null,
      error: null,
    }),
    async query(queryFn: any) {
      this.state.set({ data: null, loading: true, error: null });
      try {
        const r = (await queryFn()) as AxiosResponse;
        this.state.set({ data: r, loading: false, error: null });
        return r;
      } catch (err: any) {
        this.state.set({
          data: null,
          error: (err as AxiosError)?.response?.data,
          loading: false,
        });
      }
    },
    call(queryFn: Function | any) {
      this.query(queryFn);
      return this.state;
    },
    getState() {
      return this.state;
    },
    reset() {
      this.state.set({ loading: false, data: null, error: null });
    },
  };
  return querier;
};

export default Querier;
