'use client'

import React, { useState, useEffect } from 'react';

export default function TodayDate() {
    const today = new Date();
    const [curDate, setCurDate] = useState(today);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurDate(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);

    return (
        <div>
            <h1>Today's date: {curDate.toDateString()}</h1>
        </div>
    )
}