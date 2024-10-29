export default function WeatherCard({
    day, minTemp, maxTemp, tempType
}: {
    day: string,
    minTemp: number,
    maxTemp: number,
    tempType: string
}) {
    
    return (
        <div className="border-4 border-solid rounded-full">
            <div className="flex justify-start flex-col h-lvh items-center">
                <div className="mt-8 underline">
                    {day}
                </div>
                <div className="">
                    Min: {minTemp} °{tempType=="fahrenheit" ? 'F' : 'C'}
                </div>
                <div className="">
                    Max: {maxTemp} °{tempType=="fahrenheit" ? 'F' : 'C'}
                </div>
            </div>
        </div>   
    )
}