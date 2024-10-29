export default function WeatherCard({
    day, 
    minTemp, 
    maxTemp, 
    tempType
}: {
    day: string,
    minTemp: number,
    maxTemp: number,
    tempType: string
}) {
    
    return (
        <div className="border-4 border-solid rounded-full weatherCard">
            <div className="flex justify-start flex-col h-lvh items-center">
                <div className="mt-8 underline">
                    {day}
                </div>
                <div className="">
                    Min: {minTemp} {tempType}
                </div>
                <div className="">
                    Max: {maxTemp} {tempType}
                </div>
            </div>
        </div>   
    )
}