import Image from 'next/image';
import weather_codes from '../../descriptions.json'

export default function WeatherCard({
    day, 
    minTemp, 
    maxTemp, 
    tempType,
    weatherCode
}: {
    day: string,
    minTemp: number,
    maxTemp: number,
    tempType: string,
    weatherCode: number
}) {

    const imageLink = weather_codes[weatherCode].day.image;
    const imageDescription = weather_codes[weatherCode].day.description;

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
                <div>
                    <Image 
                        src={imageLink}
                        alt={imageDescription}
                        width={100}
                        height={100}
                    />
                    <p>{imageDescription}</p>
                </div>
            </div>
        </div>   
    )
}