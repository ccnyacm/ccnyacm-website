import React from 'react';
import {Component} from 'react';
import {EventCard} from '../components/Event/EventComponentMUI'
import Grid from "@material-ui/core/Grid";
import {EventList} from '../components/EventList/EventListComponentMUI'
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




class Events extends Component {

    /** Set the data that we need for this page. (NOTE if we transition to single page app,
     * we can move this all to props.) */
    constructor(){
        super();
        this.state = {
            /** Note, we may want "dates" instead of date */
            events: [
                {id: 1, title: 'Google Visits ACM', host: 'Google', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'1pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 2, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 3, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 4, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 5, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 6, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 7, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'}
            ],
            events1: [
                {id: 1, title: 'Google Visits ACM', host: 'Google', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'1pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 2, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 3, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 4, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 5, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 6, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 7, title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'}

            ],
        };
    }


    /** Pull in the events from the database */
    componentDidMount(){

    }

    /** This is the function that React 'robot' calls to generate the page */
    render() {
        return(
            <div>
                <div> This is the events Page </div>
                <Grid container spacing={2}>
                    <Grid item>
                        <EventList
                            events={this.state.events}
                        ></EventList>
                    </Grid>
                    <Grid item>
                        <EventList
                            /*direction="column"
                            alignItems="flex-end"*/
                            events={this.state.events1}
                        ></EventList>
                    </Grid>
                </Grid>

                {/* <Grid container spacing='2'>
                    <Grid item>
                        <EventCard
                            title={this.state.events[0].title}
                            host={this.state.events[0].host}
                            eventImage={this.state.events[0].eventImage}
                            date= {this.state.events[0].date}
                            timeStart={this.state.events[0].timeStart}
                            timeEnd={this.state.events[0].timeEnd}
                        ></EventCard>
                    </Grid>
                    <Grid item>
                        <EventCard
                            title={this.state.events[0].title}
                            host={this.state.events[0].host}
                            eventImage={this.state.events[0].eventImage}
                            date= {this.state.events[0].date}
                            timeStart={this.state.events[0].timeStart}
                            timeEnd={this.state.events[0].timeEnd}
                        ></EventCard>
                    </Grid>
                    <Grid item>
                        <EventCard
                            title={this.state.events[0].title}
                            host={this.state.events[0].host}
                            eventImage={this.state.events[0].eventImage}
                            date= {this.state.events[0].date}
                            timeStart={this.state.events[0].timeStart}
                            timeEnd={this.state.events[0].timeEnd}
                        ></EventCard>
                    </Grid>
                    <Grid item>
                        <EventCard
                            title={this.state.events[0].title}
                            host={this.state.events[0].host}
                            eventImage={this.state.events[0].eventImage}
                            date= {this.state.events[0].date}
                            timeStart={this.state.events[0].timeStart}
                            timeEnd={this.state.events[0].timeEnd}
                        ></EventCard>
                    </Grid>
                </Grid>*/}

            </div>
        );
    }


}

export default Events;