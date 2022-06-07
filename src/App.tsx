import React from 'react';


function App() {

  const baseDate : Date = new Date(new Date().setDate(1));
  let [year,setYear] = React.useState(baseDate.getFullYear());
  let [month,setMonth] = React.useState(baseDate.getMonth());

  const Maker = () => {
    const today : Date = new Date();
    const dayWeek = ["일","월","화","수","목","금","토"];

    const month = baseDate.getMonth();
    const lastDay : number = (new Date(baseDate.getFullYear(),baseDate.getMonth(),0)).getDate();

    const valueArray = [];

    for(let i = 0; i < 35; i++){
        const array = [];
        for(let j = 0; j < 7; j++){
           array.push(j);
        }
        valueArray.push(array);
    }

    return (
      <div id="monthBlock">
 
      </div>
    )

  }


  return (
    <div id="body" style={{"width" : "100%"}}>
        <div id="calendar">
            <div id="yearBlock">
                <span>{year+"년"+(month + 1)+"월"}</span>
            </div>
            <div id="monthBlock">
              {Maker()}
            </div>
        </div>
    </div>
  );
}

export default App;
