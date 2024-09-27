import { baseApi } from "./baseApi";

const tripsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTrips: build.query({
      query: () => ({
        url: "/trips",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetTripsQuery } = tripsApi;
