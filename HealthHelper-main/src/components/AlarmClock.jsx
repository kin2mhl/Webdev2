import React, { useState } from 'react';

const AlarmClock = () => {
 const [alarms, setAlarms] = useState([]);

 const setAlarm = (event) => {
   event.preventDefault();
   const id = Math.random().toString();
   const newAlarm = { id, time: new Date() };
   setAlarms([...alarms, newAlarm]);
 }

 const triggerAlarm = (id) => {
   new Notification('Alarm!', {
     body: 'Time to take your medicine.',
     tag: id,
   });
 }

 const deleteAlarm = (id) => {
   const updatedAlarms = alarms.filter((alarm) => alarm.id !== id);
   setAlarms(updatedAlarms);
 }

 return (
   <div>
     <button onClick={setAlarm}>Set Alarm</button>
     {alarms.map((alarm) => (
       <div key={alarm.id}>
         <p>Alarm: {alarm.time.toLocaleTimeString()}</p>
         <button onClick={() => deleteAlarm(alarm.id)}>Delete Alarm</button>
       </div>
     ))}
   </div>
 );
}

export default AlarmClock;
