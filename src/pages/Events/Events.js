import React from 'react';
import { EventsSection } from '../../components/EventsSection';
import { Container } from '@material-ui/core';
import { TodayEvents } from '../../components/TodayEvents/TodayEvents';
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

export const Events = () => (
  <Container>
    <TodayEvents />
    <EventsSection localNum={3} outsideNum={8} hasMore />
  </Container>
  );
