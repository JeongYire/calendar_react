import { useMemo } from "react";
import { BaseDateContextType, useBaseDate } from "../Context/BaseDateContext";

const MonthBlock = () => {
    const { baseDate }: Pick<BaseDateContextType, "baseDate"> = useBaseDate();

    const month = useMemo(() => baseDate.getMonth(), [baseDate]);

    const getMonthName = () => {
        return month + 1 < 10 ? "0" + (month + 1) : month + 1;
    };

    return (
        <div id="monthBlock">
            <span>{getMonthName()}월</span>
        </div>
    );
};

export default MonthBlock;
