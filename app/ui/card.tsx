export default function WeatherCard({
    day, minTemp, maxTemp
}: {
    day: string,
    minTemp: number,
    maxTemp: number
}) {

    return (
        <div className="border-4 border-solid rounded-full">
            <div className="flex justify-start flex-col h-lvh items-center">
                <div className="mt-8 underline">
                    {day}
                </div>
                <div className="">
                    Min: {minTemp}
                </div>
                <div className="">
                    Max: {maxTemp}
                </div>
            </div>
        </div>   
    )
}