import React from 'react';

export default function PageBanner() {
  return (
    <div className="bg-[#EA80B0] sticky w-screen">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className=" w-0 flex-1 items-center">
            <p className="ml-3 text-center font-medium text-white">
              <span className="text-base md:text-lg">
                For the month of October, 15% of every order will be donated to
                The Breast Cancer Foundation
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
