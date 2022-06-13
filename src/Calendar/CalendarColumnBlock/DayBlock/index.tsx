import { useContext } from "react";
import { BaseDateContext, CalendarColumnContext } from "../../Context";
import { BaseDateContextType } from "../../Context/BaseDateContext";
import { CalendarColumnContextType } from "../../Context/CalendarColumnContext";

const DayBlock = () => {
    const { baseDate } = useContext<BaseDateContextType>(BaseDateContext);
    const { targetDate } = useContext<CalendarColumnContextType>(
        CalendarColumnContext
    );
    const { today } = useContext<CalendarColumnContextType>(
        CalendarColumnContext
    );

    const isSameMonth = (): boolean =>
        targetDate.getMonth() === baseDate.getMonth();
    const isToday = () =>
        isSameMonth() &&
        targetDate.getMonth() === today.current.getMonth() &&
        targetDate.getDate() === today.current.getDate();

    const date = targetDate.getDate();

    let className = "";

    if (isToday()) {
        className = "isToday";
    } else if (!isSameMonth()) {
        className = "notMonth";
    }

    targetDate.setDate(date + 1);

    return <span className={`${className}`}>{date}일</span>;
};

export default DayBlock;
