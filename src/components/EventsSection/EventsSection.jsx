import React, { useState, useEffect } from 'react';
import { EventList } from '../EventList';
import { apiRequest, getFirstMLHEvents } from '../../services'
import { ErrorDialog } from '../ErrorDialog/ErrorDialog';
import { number} from 'prop-types';
/** 
 * We can create components such as Event List, which desing all the events nicely
 * We can create an event/card component, which has the details of each event (And call/generate them via Event List )
 */

/**
 * Some notes on how I vision the design of this. 
 * We have two columns, 70% CCNY Events, 30% Outside events/potentially evenet brite
 * Another alternative,
 * Rows: 
 *  Row of Our events
 *  Row of Event Brite Events
 *  Row of MLH events. 
 *  (And these would be in turnstile/gallery method)
 */

export const EventsSection = ({ localNum, outsideNum }) => {
  const [events, setEvents] = useState([]);
  const [hackathons, setHackathons] = useState([])
  const [error, setError] = useState('');

  const getEvents = async () => {
    try {
      const response = await apiRequest('/events', 'POST', {num: localNum});
      const data = await response.json();
      if (response.status === 200) {
        setEvents(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (events.length === 0) {
      getEvents();
    }
  });

  const getMLHEvents = async () => {
    try {
      const hacks = await getFirstMLHEvents(outsideNum);
      setHackathons(hacks)
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (hackathons.length === 0) {
      getMLHEvents();
    }
  });
  return (
    <>
    {
      error !== ''
      && <ErrorDialog title="Error" message={error} open={error !== ''} onClose={() => setError('')} />
    }
      <EventList
        title="CCNY Events"
        events={events}
      ></EventList>

      {/** Even for the event brite events, we only can limit up to 8, as you can see its a lot. */}
      <EventList
        title="Hackathon Events"
        events={hackathons}
        mlhEvents={true}
      ></EventList>

      {/** WHen we pull the MLH hackathon stuff, we need to pull based on close state, and then include a link at the bottoms that says 
          " for more hacakthons see this (Filter set to NY/NJ/PA ??? I think that's reasonable" */}

    </>
  );
};

EventsSection.propTypes = {
  localNum: number.isRequired,
  outsideNum: number.isRequired,
};
