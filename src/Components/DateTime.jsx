import React, { useState } from 'react'

const DateTime = () => {
    const [now,setnow] = useState(new Date());
    setInterval(() => {
        setnow(new Date());
    },1000)
    const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    let hrs = String(now.getHours()).padStart(2,0);
    let min = String(now.getMinutes()).padStart(2,0)
    const notation = hrs > 12 ? "PM" : "AM"
  return (
    <div>
      <p>{weekdays[now.getDay()]} {months[now.getMonth()]} {now.getDate()} {hrs}:{min} {notation}</p>
    </div>
  )
}

export default DateTime
