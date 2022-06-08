import React from "react";

const Calendar = () => {
  const [baseDate,setDate] = React.useState(new Date(new Date().setDate(1)));
  const today = React.useRef(new Date());

  const DateTools =  {
    'NextMonth' : () => {
      setDate((prevValue) => {
        let prevDate = new Date(prevValue);
        prevDate.setDate(1);
        return new Date(prevDate.setMonth(prevDate.getMonth() + 1))
      })
    },
    'PrevMonth' : () => {
      setDate((prevValue) => {
        let prevDate = new Date(prevValue);
        prevDate.setDate(1);
        return new Date(prevDate.setMonth(prevDate.getMonth() - 1))
      })
    },
  }

  const YearBlock = () => {
    return (
      <div id="yearBlock">
          <span>{baseDate.getFullYear()}년</span>
          <button onClick={DateTools.PrevMonth} id="prevMonthButton" />
          <button onClick={DateTools.NextMonth} id="nextMonthButton" />
      </div>
    )
  }
  const MonthBlock = () => {
    return (
      <div id="monthBlock"><span>{baseDate.getMonth() + 1 < 10 ? "0" + (baseDate.getMonth() + 1) : baseDate.getMonth() + 1}월</span></div>
    )
  }
  const DayOfWeekBlock = () => {
    return (
      <div id="dayOfWeekBlock">
        <div>
          <span>일</span>
        </div>
        <div>
          <span>월</span>
        </div>
        <div>
          <span>화</span>
        </div>
        <div>
          <span>수</span>
        </div>
        <div>
          <span>목</span>
        </div>
        <div>
          <span>금</span>
        </div>
        <div>
          <span>토</span>
        </div>
      </div>
    )
  }

  const CalendarBlock = () => {
    
    const targetDate = new Date(baseDate);
    targetDate.setDate(targetDate.getDate()-targetDate.getDay());
  
    const isSameMonth = () : boolean => {
      return targetDate.getMonth() === baseDate.getMonth();
    }
    const isToday = () => {
      return isSameMonth() && targetDate.getMonth() === today.current.getMonth() && targetDate.getDate() === today.current.getDate();
    }
  
    const Week = () => {
      const dayArray : JSX.Element[] = [];
    
      for( let i = 0; i < 7; i++ ){
  
        const date = targetDate.getDate();
  
        if(isToday()){
          dayArray.push(<Day day = {date} key = {"DAY_" + date} className='isToday'/>)
        }else if(!isSameMonth()){
          dayArray.push(<Day day = {date} key = {"DAY_" + date} className='notMonth'/>)
        }else{
          dayArray.push(<Day day = {date} key = {"DAY_" + date} className=''/>)
        }
  
        targetDate.setDate(date + 1);
        
      }
  
      return (
        <div className='weekBlock'>
          {
            dayArray.map((oneDay) => {
              return oneDay;
            })
          }
        </div>
      )
    }
    const Day = ({day,className} : {day : number,className : string}) => {
      return (
        <div className={`dayBlock`}>  
          <span className={`${className}`}>{day}일</span>
        </div>
      )
    }
  
    return (
      <div id="calendarBlock">
        <Week />
        <Week />
        <Week />
        <Week />
        <Week />
        <Week />
      </div>
    );
  }

  
  return(
    <div id="calendar" >
      <YearBlock />
      <MonthBlock />
      <DayOfWeekBlock />
      <CalendarBlock/>
    </div>
  )

}

export default Calendar;
