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

            /** NOTE, I DO NOT HAVE LINK WORKING!!!! LINK WORKS FROM CURRENT PAGE NOT GLOBAL?? */
            events: [
                {id: 1, url:'google.com', title: 'Google Visits ACM', host: 'Google', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'1pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
                {id: 2, url: 'facebook.com', title: 'Career Fair', host:'CPDI', description:'Description', date:'12/12/2019', timeStart:'12pm', timeEnd:'2pm', eventImage:'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'},
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
            hackathons: []
        };
        //this.getMLHEvents = this.getMLHEvents.bind(this);
    }


    /** Pull in the events from the database */
    componentDidMount(){
        /** Might want to change the 'year' parmeter so that it auto-updates for future reference */

        async function getMLHEvents(){
            /** First time using async await ==> Declare outer function asyhronous so it works the same */
            /** First get the response + store it. Declare as await so the rest of the numbers will pause */
            const res = await fetch('https://mlh-events.now.sh/na-2020');
            /** Converting to JSON is also an await process */
            const hackathons = await res.json(); 
            console.log(hackathons);


            //this.setState({hackathons: hackathons});
            //console.log(this.state.hackathons);
            /*
            .then(res => res.json())*/
            /*
            .then(hackathons => {this.setState({hackathons})
                    console.log(hackathons)  
                }
            )*/

            /** After we get the hackathons, we want to filter them, 
             * to only show the hackathons past current date 
             * college level
             * and potentially in the AREA (Though that does not seemto be given...).  
             * 
             * Notice that the event cards that i created call different named properities,
             * Thus, we also need to rename the kay utalized in each!, and give each an id number. 
             * */



            // hackathons = this.state.hackathons; /** Get the list of hackathons -- After it has been set */
            //var today = new Date();
            //var dd = String(today.getDate()).padStart(2, '0');
            //var mm = String(today.getMonth()+1).padStart(2, '0'); /** Januaray Starts at 0 */

            //console.log(hackathons);
            //console.log("Day:" + dd);
            //console.log("Month:" + mm);

           // const filteredHackathons = hackathons.filter(  hackathon => {  
            //                                    const isHighschool = hackathon.isHighSchool; 
             //                                   const date = hackathon.startDate;
             //                                   /** NOTE, this isn't a long term solution. 
              //                                   * Might be better to find dashes - and then parse month + day from that  */ 
              //                                  const day = date.substring(8);
              //                                  const month = date.substring(5,7);

                                                /** First check that its a college appropriate hackathon */
                //                                if(isHighschool){
                 //                                   if(month > mm){
                  //                                      return hackathon;
                    //                                }else if(month==mm && day >= dd ){
                                                        /** If its the same month, make sure day is on or past */
                      //                                  return hackathon;
                       //                             }
                        //                        }
           // }   )

            //console.log(filteredHackathons); /** Let's see if we actually did something up to this point lol */

        }

        (async () => {
            await getMLHEvents();
        })();


    }

    /** This is the function that React 'robot' calls to generate the page */
    render() {
        return(
            <div>
                <h1> This is the events Page </h1>
                <EventList
                    title="CCNY Events"
                    events={this.state.events}
                ></EventList>
                
                {/** Even for the event brite events, we only can limit up to 8, as you can see its a lot. */}
                <EventList
                    title="EventBrite Events"
                    events={this.state.events1}
                ></EventList>
                
                {/** WHen we pull the MLH hackathon stuff, we need to pull based on close state, and then include a link at the bottoms that says 
                " for more hacakthons see this (Filter set to NY/NJ/PA ??? I think that's reasonable" */}

            </div>
        );
    }


}

export default Events;