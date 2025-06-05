import React from "react";

export function CardSkeleton() {
  return (
    <div
      className={`animate-pulse relative flex h-[250px] overflow-hidden rounded-md bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex items-center w-2/5 justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
      <div className="flex w-3/5 gap-4 flex-col p-4">
        <div className="h-5 w-8 rounded-md bg-gray-200" />
        <div className="h-6 w-24 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="flex flex-col gap-2">
            <div className="h-4 w-full rounded-md bg-gray-200 text-sm font-medium" />
            <div className="h-4 w-full rounded-md bg-gray-200 text-sm font-medium" />
            <div className="h-4 w-9/10 rounded-md bg-gray-200 text-sm font-medium" />
        </div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
    return (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    );
  }