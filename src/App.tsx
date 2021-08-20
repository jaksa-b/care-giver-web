import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [events, setEvents] = useState([]);
  const getEvents = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/events`)
      .then((res) => {
        console.log(res);
        setEvents(res?.data?.events);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  /* 
    {  
      "id":"decaa026-2ce5-49cb-aff9-92326b85a98c",
      "event_type":"mood_observation",
      "visit_id":"39b94aab-cc35-4874-807f-c23472aec663",
      "timestamp":"2019-04-23T10:53:13+01:00",
      "caregiver_id":"4786d616-259e-4d52-80f7-8cf7dc6d881a",
      "care_recipient_id":"03f3306d-a4a3-4179-ab88-81af66df8b7c",
      "mood":"okay",
    }
  */

  return (
    <div className="App">
      <h1>Care Giver</h1>
      {events.length !== 0 ? (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>event_type</th>
              <th>visit_id</th>
              <th>timestamp</th>
              <th>caregiver_id</th>
              <th>care_recipient_id</th>
              <th>mood</th>
            </tr>
          </thead>
          <tbody>
            {events.map(
              ({
                id,
                event_type,
                visit_id,
                timestamp,
                caregiver_id,
                care_recipient_id,
              }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{event_type}</td>
                  <td>{visit_id}</td>
                  <td>{timestamp}</td>
                  <td>{caregiver_id}</td>
                  <td>{care_recipient_id}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}

export default App;
