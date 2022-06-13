import { useContext } from "react";
import { BaseDateContext } from "../Context";

const CalendarButton = () => {

    const {setDate} = useContext(BaseDateContext);

    const nextMonth = () => {
        setDate((prevValue : any) => {
            let prevDate = new Date(prevValue);
            prevDate.setDate(1);
            return new Date(prevDate.setMonth(prevDate.getMonth() + 1))
        })
    }
    const prevMonth = () => {
        setDate((prevValue : any) => {
            let prevDate = new Date(prevValue);
            prevDate.setDate(1);
            return new Date(prevDate.setMonth(prevDate.getMonth() - 1))
        })
    }

    return (
        <>
        <button onClick={()=>{prevMonth();}} id="prevMonthButton" />
        <button onClick={()=>{nextMonth();}} id="nextMonthButton" />
        </>
    )
}

export default CalendarButton;