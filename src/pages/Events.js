import React from 'react';
import {Component} from 'react';
/* import {EventCard} from '../components/Event/EventComponentMUI'*/
/*import Grid from "@material-ui/core/Grid";*/
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





function formatDate(date) {
    /** Numerically indexed */
    /*var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];*/
  
    /** NOTE, this SHOULD be edited to find '-' and then store year/day/month. 
     * This will ensure more proper written code (OTHERWISE WHAT I HAVE IS HANDWRITTEN!)
     */
    const day = date.substring(8);
    //const month = parseInt(date.substring(5,7)) - 1; /** Januaray = 1 thus need 0! */
    const month = date.substring(5,7);
    const year = date.substring(0, 4);

  
    //return monthNames[month] + ' ' + day +  ' ' + year;
    return month +  '/' + day +  '/' + year;
  }





class Events extends Component {
    /** Set the data that we need for this page. (NOTE if we transition to single page app,
     * we can move this all to props.) */
    constructor(){
        super();
        this.state = {
            /** Note, we may want "dates" instead of date */

            events: [
                {id: 'ccny1', url:'', title: 'Mock Technical Interview Session', host: '', description:'Join ACM for our third Mock Interview Session on solving technical problems! This week\'s topics is strings!', date:'1/25/2020', timeStart:'1:00pm', timeEnd:'3:00pm', eventImage:'http://theinterviewpro.com/wp-content/uploads/2016/05/Mock-Interview.png'}
            ],
            hackathons: []
        };
        //this.getMLHEvents = this.getMLHEvents.bind(this);
    }


    /** Pull in the events from the database */
    componentDidMount(){

        /** First time using async await ==> Declare outer function asyhronous so it works the same */
        const getMLHEvents = async () => {
            
            /** First get the response + store it. Declare as await so the rest of the numbers will pause */
            const res = await fetch('https://mlh-events.now.sh/na-2020');
            /** Converting to JSON is also an await process */
            const hackathons = await res.json(); 
            //console.log(res);
            //console.log("Okay await async seems to work");
            //console.log(hackathons);
            this.setState({hackathons: hackathons}); /** SETTING IT JUST TO SET IT! NOT ACTUALLY GOING TO USE THIS! */
            //console.log("Converted to arrow function to be able to set state \'AutoBinding\' ");
            //console.log(this.state.hackathons);
            //console.log("Wverything seems fine up to here!")


            /** After we get the hackathons, we want to filter them, 
             * to only show the hackathons past current date and college level
             * Location does not actually show AREA (Would have been nice to filter for NY,NJ,PA) 
             * 
             * Notice that the event cards that i created call different named properities,
             * Thus, we also need to rename the kay utalized in each!, and give each an id number. 
             * */

            //const hackathons = this.state.hackathons; /** Get the list of hackathons -- After it has been set */
            //Reuse the same variable of Hackathons!
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth()+1).padStart(2, '0'); /** Januaray Starts at 0 */

            //console.log(hackathons);
            //console.log("Day:" + dd);
            //console.log("Month:" + mm);

            const filteredHackathons = hackathons.filter(  hackathon => {  
                                                const isHighschool = hackathon.isHighSchool; 
                                                const date = hackathon.startDate;
                                                /** NOTE, this isn't a long term solution. 
                                                 * Might be better to find dashes - and then parse month + day from that  */ 
                                                const day = date.substring(8);
                                                const month = date.substring(5,7);

                                                /** First check that its a college appropriate hackathon */
                                                if(!isHighschool){
                                                    if(month > mm){
                                                        return hackathon;
                                                    }else if(month===mm && day >= dd ){
                                                        /** If its the same month, make sure day is on or past */
                                                        return hackathon;
                                                    }
                                                }
            }   )

            //console.log(filteredHackathons); /** Let's see if we actually did something up to this point lol */

            let id = 1; /** This can't be constant! */
            /** NEED to find a better way to assign an id to each hackathon 
             * (As it CANNOT interfer) with other values.
             * What I am doing, is appending mlh to the front of the value! 
             * That way id variable can continue to increase. 
            */
           // const keyAdjustedHackathons = //Originally used .map however didn't work! Use same array and call forEach! 
            filteredHackathons.forEach( hackathon => {
                                                        hackathon['id']= 'mlh'+id;
                                                        id++; /** Incremeent ID */
                                                        hackathon['eventImage'] = hackathon.imageUrl; /** Rename */ 
                                                        hackathon['date'] = hackathon.location; /** NOTE, we have to use the location as the DATE! [Hopefully this parameter doesn't change in the future, otherwise it will produce un-predicted results] */
                                                        /**NOTE, A Hackathon DOES NOT have START-END TIME. However, I use when and NOT time: therefore we will utalize the dates in place of time */
                                                        /** FORMAT FUNCTION created outside of class! */
                                                        hackathon['timeStart'] = formatDate(hackathon.startDate); /** Another Alternative to no time is simply saying "NA? but that's pretty bad..." */
                                                        hackathon['timeEnd'] = formatDate(hackathon.endDate);
                                                        hackathon['title'] = hackathon.name;

                                                        /** NOTE, we can either choose to keep the hackathon original keys (Just for reference)
                                                         * However, I am just deleteing them to "save space" 
                                                         * NOTE, I haven't really worked much with this to know if it is a tradeoff
                                                         */
                                                        delete hackathon.name;
                                                        delete hackathon.startDate;
                                                        delete hackathon.endDate;
                                                        delete hackathon.imageUrl;

         })
        //console.log(filteredHackathons);
        this.setState({hackathons: filteredHackathons});
        }

        /** We needed a way to call the function to be able to make the API CALL!!! */
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
                    title="Hackathon Events"
                    events={this.state.hackathons.slice(0,8) /** NOTE, WE WANT ONLY 8 ELEMENTS! Otherwise we will be overloaded with events! */}
                ></EventList>
                
                {/** WHen we pull the MLH hackathon stuff, we need to pull based on close state, and then include a link at the bottoms that says 
                " for more hacakthons see this (Filter set to NY/NJ/PA ??? I think that's reasonable" */}

            </div>
        );
    }


}

export default Events;