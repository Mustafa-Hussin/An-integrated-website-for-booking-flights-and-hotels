"use client";

import { Suspense, lazy } from "react";
import { useTrips } from "@/hooks/use-trips";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { ProgressiveList } from "../ui/progressive-loading";

// Lazy load heavy components
const TripCard = lazy(() => import("./trip-card"));
const FilterPanel = lazy(() => import("./filter-panel"));

function TripCardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-48 w-full rounded-lg" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  );
}

export function TripGrid() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useTrips();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <TripCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const trips = data?.pages.flatMap((page) => page.trips) ?? [];

  return (
    <div className="w-full">
      <Suspense
        fallback={
          <div className="p-4">
            <Skeleton className="h-12 w-full max-w-xs mb-6" />
          </div>
        }
      >
        <FilterPanel />
      </Suspense>

      <ProgressiveList
        items={trips}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
        itemClassName="h-full"
        delay={150}
        renderItem={(trip) => (
          <Suspense fallback={<TripCardSkeleton />}>
            <TripCard trip={trip} />
          </Suspense>
        )}
      />

      {hasNextPage && (
        <div className="flex justify-center p-4">
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            variant="outline"
            size="lg"
            className="transition-all duration-300 hover:scale-105"
          >
            {isFetchingNextPage ? "جاري التحميل..." : "تحميل المزيد"}
          </Button>
        </div>
      )}
    </div>
  );
}
