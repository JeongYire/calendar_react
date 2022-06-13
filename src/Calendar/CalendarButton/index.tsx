import { DateFormat } from "../../types";
import { useBaseDate } from "../Context/BaseDateContext";

const CalendarButton = () => {
    const { setDate } = useBaseDate();

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
