import { useContext } from "react";
import { DateFormat } from "../../types";
import { BaseDateContext } from "../Context";
import { BaseDateContextType } from "../Context/BaseDateContext";

const CalendarButton = () => {
    const { setDate } = useContext<BaseDateContextType>(BaseDateContext);

    const nextMonth = () => {
        setDate((prevValue: DateFormat) => {
            let prevDate = new Date(prevValue);
            prevDate.setDate(1);
            return new Date(prevDate.setMonth(prevDate.getMonth() + 1));
        });
    };
    const prevMonth = () => {
        setDate((prevValue: DateFormat) => {
            let prevDate = new Date(prevValue);
            prevDate.setDate(1);
            return new Date(prevDate.setMonth(prevDate.getMonth() - 1));
        });
    };

    return (
        <>
            <button
                onClick={() => {
                    prevMonth();
                }}
                id="prevMonthButton"
            />
            <button
                onClick={() => {
                    nextMonth();
                }}
                id="nextMonthButton"
            />
        </>
    );
};

export default CalendarButton;
