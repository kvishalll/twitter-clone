import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon 
                    className = "widgets__SearchIcon" 
                />
                <input placeholder = "Search Twitter" type = "text" />
            </div>
            <div className = "widgets__widgetContainer">
                <h2>
                    Hey! My name is vishal.
                </h2>
                <TwitterTweetEmbed tweetId = {"1538399373213569024"} />

                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "k_vishalll"
                    options = {{ height: 400 }}
                />

                <TwitterShareButton 
                    url = {"https://facebook.com/k.vishalll"}
                    options = { { text : "Subscribe my Youtube Channel #KVISHAL" , via :  "k_vishalll" }}
               />
            </div>
        </div>
    )
}

export default Widgets
