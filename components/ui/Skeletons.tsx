import React from "react";
import Breadcrumbs from "./Breadcrumbs";

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
export function MenuSelectSkeleton() {
  return (
    <div
      className={`animate-pulse relative flex flex-col gap-4 max-w-[1280px] m-auto overflow-hidden rounded-md bg-gray-100 px-4 py-12 shadow-sm`}
    >
     
      <div className="flex w-full gap-4 flex-col">
        <div className="h-6 w-24 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="flex flex-col gap-2">
            <div className="h-4 w-full rounded-md bg-gray-200 text-sm font-medium" />
            <div className="h-4 w-7/10 rounded-md bg-gray-200 text-sm font-medium" />
        </div>
      </div>
      <div className="flex items-center justify-end w-full truncate rounded-xl bg-white px-4 py-4">
        <div className="h-4 w-8 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}
export function MenuSkeleton() {
  return (
    <div
      className={`animate-pulse relative flex flex-col max-w-[1280px] mt-12 m-auto gap-4 overflow-hidden rounded-md h-screen  bg-gray-100`}
    >
     <div className="flex items-center justify-between w-full truncate rounded-xl bg-gray-50 px-4 py-8">
        <div className="h-8 w-22 rounded-md bg-gray-200" />
        <div className="h-4 w-12 rounded-md bg-gray-200" />
      </div>
      <div className="flex w-full gap-4 flex-col px-4">
        <div className="h-6 w-24 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="flex flex-col justify-between  gap-8">
            <div className="flex justify-between">
              <div className="h-4 w-1/6 rounded-md bg-gray-200 text-sm font-medium" />
              <div className="h-4 w-1/8 rounded-md bg-gray-200 text-sm font-medium" />
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-1/6 rounded-md bg-gray-200 text-sm font-medium" />
              <div className="h-4 w-1/8 rounded-md bg-gray-200 text-sm font-medium" />
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-1/6 rounded-md bg-gray-200 text-sm font-medium" />
              <div className="h-4 w-1/8 rounded-md bg-gray-200 text-sm font-medium" />
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-1/6 rounded-md bg-gray-200 text-sm font-medium" />
              <div className="h-4 w-1/8 rounded-md bg-gray-200 text-sm font-medium" />
            </div>
        </div>
      </div>
      
    </div>
  );
}

export function ContactSkeleton() {
  return (
        <div className={`animate-pulse relative flex flex-col gap-4 h-full items-center justify-center overflow-hidden rounded-md bg-gray-100 py-21 px-6 shadow-sm`}>
          <div className="flex w-3/5 gap-4 flex-col max-w-[768px]">
            <div className="h-5 w-8 rounded-md bg-gray-200" />
            <div className="h-8 w-32 rounded-md bg-gray-200 text-sm font-medium" />
            <div className="flex flex-col gap-4">
                <div className="h-4 w-full rounded-md bg-gray-200 text-sm font-medium" />
                <div className="h-4 w-full rounded-md bg-gray-200 text-sm font-medium" />
                <div className="h-4 w-full rounded-md bg-gray-200 text-sm font-medium" />
                <div className="h-4 w-9/10 rounded-md bg-gray-200 text-sm font-medium" />
            </div>
          </div>
          <div className="flex items-center h-[300px] w-[768px] justify-center truncate rounded-xl bg-white px-4 py-8">
            <div className="h-3/4 w-2/3 rounded-md bg-gray-200" />
          </div>
        </div>
      );
}

export function CardsSkeleton() {
    return (
      <>
        <Breadcrumbs breadcrumbs={[
          { label: 'Forsiden', href: '/' },
          {
            label: 'Produkter',
            href: '/products',
            active: true,
          },
        ]} />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    );
  }