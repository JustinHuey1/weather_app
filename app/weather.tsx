import WeatherCard from "./ui/card"

export default function Weather(data: any) {
    data = data.data
    const minTemperature = data.daily.temperature_2m_min
    const maxTemperature = data.daily.temperature_2m_max
    const days = data.daily.time;

    return (
        <div className="flex flex-row justify-between">
            {days.map((date, index) => {
                return (
                    <div key={index} className="grow">
                        <WeatherCard  
                            day={date} 
                            minTemp={minTemperature[index]} 
                            maxTemp={maxTemperature[index]}
                        />
                    </div>
                )
            })}
        </div>
    )
}