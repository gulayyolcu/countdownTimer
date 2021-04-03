

import React from 'react'

const Timer = () => {
  return (
    <div>
              <div className="relative bg-black p-8">
              {/* <!-- background grid of black squares --> */}
              <div className="absolute inset-0 grid grid-rows-2">
                <div className="bg-gradient-to-br from-gray-800 to-black"></div>
                <div className="bg-gradient-to-br from-gray-700 to-black"></div>
              </div>

              {/* <span className="relative">{timerMinutes}</span> */}

              {/* <!-- line across the middle --> */}
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-black"></div>
              </div>
              </div>


              <div className="relative bg-black p-8">
              {/* <!-- background grid of black squares --> */}
              <div className="absolute inset-0 grid grid-rows-2">
                <div className="bg-gradient-to-br from-gray-800 to-black"></div>
                <div className="bg-gradient-to-br from-gray-700 to-black"></div>
              </div>

              {/* <span className="relative">{timerSeconds}</span> */}

              {/* <!-- line across the middle --> */}
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-black"></div>
              </div>
              </div>
    </div>
  )
}

export default Timer
