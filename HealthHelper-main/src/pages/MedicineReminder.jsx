import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AlarmClock from './components/AlarmClock.jsx';

const MedicineReminder = () => {
 const [alarm, setAlarm] = useState(null);

 return (
  <React.StrictMode>
    <AlarmClock alarm={alarm} setAlarm={setAlarm} />
  </React.StrictMode>
 );
}

ReactDOM.render(<MedicineReminder />, document.getElementById('root'));
