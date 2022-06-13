import { useContext } from "react";
import { BaseDateContext } from "../Context";

const MonthBlock = () => {
    const {baseDate} : {baseDate : Date}= useContext(BaseDateContext);
    return (
        <div id="monthBlock"><span>{baseDate.getMonth() + 1 < 10 ? "0" + (baseDate.getMonth() + 1) : baseDate.getMonth() + 1}월</span></div>
    )
}

export default MonthBlock;