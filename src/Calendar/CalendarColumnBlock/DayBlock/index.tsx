const DayBlock = ({day,className} : {day : number,className : string}) => {
    return (
      <div className={`dayBlock`}>  
        <span className={`${className}`}>{day}일</span>
      </div>
    )
}

export default DayBlock;