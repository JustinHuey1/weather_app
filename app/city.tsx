'use client'

import {
    CitySelect,
    CountrySelect,
    StateSelect,
  } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

import React, { Suspense, useState, useEffect } from 'react';
import Weather from "./weather";

export default function City() {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [cityData, setCityData] = useState();

    async function retrieveData(latitude: number, longitude: number) {
        await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min`)
        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit`);
            const data = await response.json();
            
            setCityData(data); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        if (cityData) {
            console.log("Fetched city data:", cityData);
        }
    }, cityData);

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
                {cityData && <Weather data={cityData}/>}
            </div>
        </div>
    )
}