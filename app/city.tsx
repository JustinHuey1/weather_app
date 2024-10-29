'use client'

import {
    CitySelect,
    CountrySelect,
    StateSelect,
  } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

import React, { useState } from 'react';
import Weather from "./weather";

export default function City({
    tempType
}: {
    tempType: string
}) {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [cityData, setCityData] = useState();
    const [originalTempType, setOriginalTempType] = useState(tempType)

    async function retrieveData(latitude: number, longitude: number) {
        let temp;
        try {
            if (tempType == "fahrenheit") {
                temp = '&temperature_unit=fahrenheit'
            } else {
                temp = ''
            }
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=rain,weather_code&daily=temperature_2m_max,temperature_2m_min${temp}`);

            const data = await response.json();
            
            setCityData(data); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    if (originalTempType != tempType) {
        setOriginalTempType(tempType)

        if (cityData) {
            retrieveData(cityData.latitude, cityData.longitude)
        }
    }
    
    return (
        <div>
            <div className="flex justify-center">
                <div>
                    <h6>Country</h6>
                    <CountrySelect
                        onChange={(e) => {
                            setCountryid(e.id);
                        }}
                        placeHolder="Select Country"
                    />
                </div>
                <div>
                    <h6>State</h6>
                    <StateSelect
                        countryid={countryid}
                        onChange={(e) => {
                            setstateid(e.id);
                        }}
                        placeHolder="Select State"
                    />
                    </div>
                <div>
                    <h6>City</h6>
                    <CitySelect
                        countryid={countryid}
                        stateid={stateid}
                        onChange={(e) => {
                            retrieveData(e.latitude, e.longitude)
                        }}
                        placeHolder="Select City"
                    />
                </div>
            </div>
            <div>
                {cityData && <Weather tempType={tempType} data={cityData}/>}
            </div>
        </div>
    )
}