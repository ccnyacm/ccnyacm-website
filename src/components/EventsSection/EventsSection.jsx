import React, { useState, useEffect, useContext } from 'react';
import { EventList } from '../EventList';
import { getFirstEvents, getFirstMLHEvents } from '../../services'
import { number, bool } from 'prop-types';
import appContext from '../../context/appContext';
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

export const EventsSection = ({ localNum, outsideNum, hasMore, onMore }) => {
  const [events, setEvents] = useState([]);
  const [hackathons, setHackathons] = useState([])
  const [eventNum, setEventNum] = useState(localNum);
  const [hackNum, setHackNum] = useState(outsideNum)
  const { setError, setHasError } = useContext(appContext);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await getFirstEvents(eventNum);
        setEvents(data);
      } catch (err) {
        setError(err.message);
        setHasError(true)
      }
    };
    getEvents();
  }, []);

  useEffect(() => {
    const getMLHEvents = async () => {
      try {
        const hacks = await getFirstMLHEvents(hackNum);
        setHackathons(hacks)
      } catch (err) {
        setError(err.message);
      }
    };
      getMLHEvents();
  },[]);

  const handleOnMore = (mlhEvents) => {
    if (onMore !== undefined) {
      onMore(mlhEvents);
    } else if(mlhEvents) {
      setHackNum(hackNum + 5);
    } else {
      setEventNum(eventNum + 5);
    }
  }
  return (
    <>
      <EventList
        title="CCNY Events"
        events={events}
        hasMore={hasMore}
        onMore={handleOnMore}
      />
      {/** Even for the event brite events, we only can limit up to 8, as you can see its a lot. */}
      <EventList
        title="Hackathon Events"
        events={hackathons}
        mlhEvents={true}
        hasMore={hasMore}
        onMore={handleOnMore}
      />

      {/** WHen we pull the MLH hackathon stuff, we need to pull based on close state, and then include a link at the bottoms that says 
          " for more hacakthons see this (Filter set to NY/NJ/PA ??? I think that's reasonable" */}

    </>
  );
};

EventsSection.defaultProps = {
  hasMore: false,
};

EventsSection.propTypes = {
  localNum: number.isRequired,
  outsideNum: number.isRequired,
  hasMore: bool,
};
