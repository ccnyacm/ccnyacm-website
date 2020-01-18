import React from 'react';
import {Component} from 'react';

export const Event = (props) => {
    return(
        <div class='EventStyle'>
            <h3>{props.title}</h3>
            <img href={props.image}></img>
            <p></p>
        </div>
    );
}