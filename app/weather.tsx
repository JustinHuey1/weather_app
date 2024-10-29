import WeatherCard from "./ui/card"

type WeatherData = {
    daily: {
      temperature_2m_min: number[];
      temperature_2m_max: number[];
      time: string[];
      weather_code: number[];
    };
    daily_units: {
      temperature_2m_max: string;
    };
  };

export default function Weather({
    data
}: {
    data: WeatherData
}) {
    const minTemperature = data.daily.temperature_2m_min;
    const maxTemperature = data.daily.temperature_2m_max;
    const days = data.daily.time;
    const weatherCode = data.daily.weather_code
    const tempType = data.daily_units.temperature_2m_max;
    
    return (
        <div className="flex flex-row justify-between">
            {days.map((date: string, index: number) => {
                return (
                    <div key={index} className="grow">
                        <WeatherCard  
                            day={date} 
                            minTemp={minTemperature[index]} 
                            maxTemp={maxTemperature[index]}
                            tempType={tempType}
                            weatherCode={weatherCode[index]}
                        />
                    </div>
                )
            })}
        </div>
    )
}