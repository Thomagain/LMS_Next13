import React from "react";

function page() {
  return (
    <div className="w-full px-7 h-scren">
      {/* bg-gradient-to-r from-gray-200 via-gray-200 to-[#FFFFFF] */}
      <div className="flex justify-between py-4">
        <div className="font-bold text-">Dashboard</div>
        <div>Feb 09, 2023</div>
      </div>
      <div className="flex">
        <div className="px-3 py-6 mr-3 text-sm font-semibold text-center bg-[#E7EAEE] shadow-2xl rounded-xl">
          <div>Overll Progress</div>
          <div>progress here</div>
        </div>
        <div className="px-3 py-6 mr-3 text-sm font-semibold text-center bg-[#E7EAEE] shadow-2xl rounded-xl">
          <div>Account Balance</div>
          <div>P12,300</div>
        </div>
        <div className="px-3 py-6 mr-3 text-sm font-semibold text-center bg-[#E7EAEE] shadow-2xl rounded-xl">
          <div>Semester Progress</div>
          <div>Progress here</div>
        </div>
        <div className="px-3 py-6 mr-3 text-sm font-semibold text-center bg-[#E7EAEE] shadow-2xl rounded-xl">
          <div>Total Units</div>
          <div>32</div>
        </div>
        <div className="px-3 py-6 mr-3 text-sm font-semibold text-center bg-[#E7EAEE] shadow-2xl rounded-xl">
          <div>Remaining Units</div>
          <div>124</div>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <div className="font-bold text-">Activity</div>
        <div className="flex justify-center px-4 text-xs text-white bg-[#3A3C43] rounded-xl">
          <button>All</button>
        </div>
      </div>
      <div className=" bg-[#E7EAEE] rounded-xl p-3 shadow-2xl">
        <div className="font-semibold">MON FEB 13 2023 | 23:09</div>
        <div className="pt-2 font-semibold">Activity 1 (Part 1)</div>
        <div className="text-xs font-medium">
          CALCULUS 2 (INTEGRAL CALCULUS (1ADCET) ASSIGNMENT DUE)
        </div>
      </div>
      <div className=" bg-[#E7EAEE] rounded-xl p-3 mt-3 shadow-2xl">
        <div className="font-semibold">MON FEB 13 2023 | 23:09</div>
        <div className="pt-2 font-semibold">Activity 1 (Part 1)</div>
        <div className="text-xs font-medium">
          CALCULUS 2 (INTEGRAL CALCULUS (1ADCET) ASSIGNMENT DUE)
        </div>
      </div>
      <div className="flex justify-between py-4">
        <div className="font-bold text-">Calendar and Tasks</div>
        <div className="flex justify-center px-4 text-xs text-white bg-[#3A3C43] rounded-xl">
          <button>All</button>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <div className="w-1/2 p-3 mr-3 text-center bg-[#E7EAEE] rounded-lg shadow-2xl">
          Insert Calendar here
        </div>
        <div className="w-1/2 p-3 bg-[#E7EAEE] rounded-lg shadow-2xl">
          <div>
            <div className="flex justify-between p-3 ">
              <div className="font-bold">TASKS</div>
              <div>Feb 09, 2023</div>
            </div>
            <div className="px-3 py-1">
              <div className="font-semibold">Activity #1 (Part 1)</div>
              <div className="text-xs font-medium">
                CALCULUS 2 (INTEGRAL CALCULUS (1ADCET) ASSIGNMENT DUE)
              </div>
            </div>
            <div className="px-3 py-1">
              <div className="font-semibold">Activity #1 (Part 2)</div>
              <div className="text-xs font-medium">
                CALCULUS 2 (INTEGRAL CALCULUS (1ADCET) ASSIGNMENT DUE)
              </div>
            </div>
            <div className="px-3 py-1">
              <div className="font-semibold">Activity #1 (Part 3)</div>
              <div className="text-xs font-medium">
                CALCULUS 2 (INTEGRAL CALCULUS (1ADCET) ASSIGNMENT DUE)
              </div>
            </div>
            <div className="pt-28">
              <div className="w-full text-center text-md text-white bg-[#3A3C43] rounded-3xl ">
                <button>Submit +</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
