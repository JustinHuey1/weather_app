'use client'

import React, { useState, useEffect } from 'react';

export default function TodayDate({
  timeZone
 }: {
  timeZone: string
 } ) {
    const [curTime, setCurTime] = useState(new Date());
    useEffect(() => {
      if (timeZone) {
        const intervalId = setInterval(() => {
          setCurTime(new Date());
        }, 1000);
  
        return () => clearInterval(intervalId);
      }
    }, [timeZone]);

    return (
        <div>
            {timeZone && curTime && 
            <div>
              <h1>Current time: {curTime.toLocaleString('en-US', {timeZone: timeZone})}</h1>
            </div>}
        </div>
    )
}