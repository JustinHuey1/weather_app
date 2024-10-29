export default function CurrentTemp({
    currentTemp,
    tempType
}: {
    currentTemp: number,
    tempType: string
}) {
    return (
        <div>
            {currentTemp != 0 && <h1>Current temperature: {currentTemp}{tempType} </h1>}
        </div>
    )
}