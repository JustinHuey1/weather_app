export default function TempType({changeTempType}) {
    function handleChange(e) {
        changeTempType(e.target.value)
    }

    return (
        <div>
            <select onChange={handleChange} className="border-4 border-solid">
                <option value="fahrenheit">Fahreinheit</option>
                <option value="celsius">Celsius</option>
            </select>
        </div>
    )
}