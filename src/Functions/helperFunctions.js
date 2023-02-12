import { Link } from "react-router-dom";
const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

// DATE FUNCTIONS
let gridColStart;
function daysInMonth(month, year) {
    // Use 1 for January, 2 for February, etc.
    const dateArr = [];
    for (let index = 1; index <= new Date(year, month, 0).getDate(); index++) {
      dateArr.push(index);
    }
    // get weekday NAME from date
    // getDay() -> 0 = Sun, 1 = Mon,....
    const daysObjArr = dateArr.map((num, i) => {
      if (i === 0) {
        gridColStart = new Date(year, month, num).getDay() + 1;
      }
      const obj = {};
      obj.dayOfWeek = daysOfWeek[new Date(year, month, num).getDay()];
      obj.date = num;
      return obj;
    });
    return daysObjArr;
  }

  // function to slice/convert datestamp into ->mm-dd-yy
  function convertDateStamp(string){
    let date = string.slice(2, 10).split("-");
    date.push(date[0]);
    date.shift();
    return date.join("/");
  }

   // function for upcoming (not current day) events Max:3
   function upcomingEvents (date, arr) {
    const upcoming = arr.map(({day_start, title, id}, i) => {
      // console.log(date < day_start)
        // if(day_start > date ){
        //     return <Link to ={`/index/${id}`}>{title}</Link>
        // }
    })
    return upcomingEvents
}

function handleTextChange(e, stateVar, setFunction) {
  const value = e.target.value
  const id = e.target.id
  setFunction({...stateVar, [id]:value})
}

function handleCheckbox(e, var1, setFunction1, var2, setFunction2){
  const id = e.target.id
  setFunction1(!var1)
  setFunction2({...var2, [id]: !var1 })
}
  


  export  {
    daysInMonth,
    gridColStart,
    convertDateStamp,
    upcomingEvents,
    handleTextChange,
    handleCheckbox,
  }