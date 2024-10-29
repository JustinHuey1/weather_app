'use client'

import City from "./city"
import TodayDate from "./date"
import TempType from "./temperatureType"

import { useState } from "react"

export default function Context() {
    const [tempType, setTempType] = useState('fahrenheit');

    function changeTempType(type: string) {
        setTempType(type)
    }

    return (
        <div>
            <div className="flex justify-center">
                <TempType changeTempType={changeTempType}/>
            </div>
            <div className="flex justify-center">
                <TodayDate />
            </div>
            <div>
                <City tempType={tempType}/>
            </div>
        </div>
    )
}