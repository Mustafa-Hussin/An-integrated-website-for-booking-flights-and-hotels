import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Trip {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  rating: number;
  duration: string;
  location: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

interface TripsResponse {
  trips: Trip[];
  nextCursor?: string;
}

export function useTrips(filters?: Record<string, any>) {
  return useInfiniteQuery({
    queryKey: ["trips", filters],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await axios.get<TripsResponse>("/api/trips", {
        params: {
          cursor: pageParam,
          ...filters,
        },
      });
      return data;
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    keepPreviousData: true,
  });
}

export function useTripDetails(tripId: string) {
  return useQuery({
    queryKey: ["trip", tripId],
    queryFn: async () => {
      const { data } = await axios.get<Trip>(`/api/trips/${tripId}`);
      return data;
    },
    enabled: !!tripId,
  });
}

export function usePopularTrips() {
  return useQuery({
    queryKey: ["popular-trips"],
    queryFn: async () => {
      const { data } = await axios.get<Trip[]>("/api/trips/popular");
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
