import City from "../city"
import TodayDate from "./date"

export default function Context() {
    return (
        <div>
            <div className="flex justify-center">
                <TodayDate />
            </div>
            <div className="flex justify-center">
                <City />
            </div>
        </div>
    )
}