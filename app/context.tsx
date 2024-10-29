'use client'

import City from "./city"
import TodayDate from "./date"
import TempType from "./temperatureType"
import CurrentTemp from "./currentTemperature"

import { useState } from "react"

export default function Context() {
    const [tempType, setTempType] = useState('fahrenheit');
    const [timeZone, setTimeZone] = useState('');
    const [currentTemp, setCurrentTemp] = useState(0)
    const [tempUnit, setUnitType] = useState('');

    function changeTempType(type: string) {
        setTempType(type)
    }

    function changeCurrWeather(date: string, temp: number, unit: string) {
        setTimeZone(date)
        setCurrentTemp(temp)
        setUnitType(unit)
    }

    return (
        <div>
            <div className="flex justify-center">
                <TempType changeTempType={changeTempType}/>
            </div>
            <div className="flex justify-center">
                <TodayDate timeZone={timeZone}/>
            </div>
            <div className="flex justify-center">
                <CurrentTemp currentTemp={currentTemp} tempType={tempUnit}/>
            </div>
            <div>
                <City tempType={tempType} changeCurrWeather={changeCurrWeather}/>
            </div>
        </div>
    )
}