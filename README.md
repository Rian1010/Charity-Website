#### Second Milestone Project

# Charity Base
> A website that spreads awareness on economic and political problems, which cause poverty and life threatening situations in many countries.
This was made for the seconds milestone project for the full stack developer course of Code Institute. The goal is to make a user interactive web application and to use HTML, CSS and JavaScript.

## Table of Contents

## Team
-__Author__- Rian Sunthbocus
-__Mentor__- Antonija Šimić

## UX
The aim of this website is to let users know of some of the problems that are happening around the world
and offer the option of accessing the some of the most popular charity organisation for people in need.
The target audience of this site are people, who are looking for good charity organisation and or want to have an
idea of some of the places in the world, in which people require help and why. Basic information of economic and political problems
are presented on the homepage with buttons included, that lead to the 'Donate' page, if a user wants to find a popular charity organisation
for a country in the list and another button, so one gets linked to the 'Statistics' page to compare data of countries in need.

The 'Map' web page has a map that was made with a Google Maps API. On the map, one can click on the markers, in order to get short and quick information
about specific countries and get linked to the 'Donate' page to find a charity organisation.

#### Users Stories
1. As a person who is visiting the website, I want to read why I should donate to any organisation
2. As a person who is visiting the website, I want to easily find good charity organisations and know how my part of donation could help people in need
3. As someone who is interested in helping people in need, I would like to find information on countries with economic problems and political instabily
4. As someone who is interested in knowing about countries in need, I would like to know where those countries are locate on a map and get short and quick information about them through the markers
5. As someone who is interested in helping people in need, I would like to know what causes people to urgently require my assistance
6. As someone who is interested in helping people in need or just gathering knowledge about the world, I would like to find data and statistics about the economic situations
7. As someone who wants to find a good charity organisation, I want to have a wide range of options to donate to
8. As someone who wants to donate, I want to be able to keep track of how much I want to spend and therefore, have the option to use an online calculator on the same web page
9. As someone who cares about helping people in need, I want to spread awareness about it and contact the developer of the website, to request to include information about a certain charity organisation to the website
10. As someone who wants to find out more information about the website or charity organisations, I want to contact the web developer to ask questions

#### Wireframes

## Features
- Death counter
    - Informs a user of how quickly people pass away during the time, one is present on the homepage or 'Statistics' page
- Scroll animation
    - As a user scrolls down the homepage, the information fades in
- Google Maps API
    - Allows a user to have a visual representation of what some of the countries are that the charity organisations help in
    - A user can find short and quick information about the countries' needs by clicking on the markers
- D3 and DC
    - Allows a user to compare some of the data given on the 'Statistics' page by clicking on the first bar chart
    - A reset button, on the top-right side of the 'Statistics' page, enables a user to restore the data to their original state
    - Allows a user to find and compare data about the economy of country
    - The D3 and DC content is not available on phone screen sizes
- Collapsing sections with information of charity organisations
    - Gives a user a clear and clean overview of what countries, the 'Donate' page offers help for
    - Offers a user a free choice of what coutries' popular charity organisation/s one would like to see information of, instead of being stuffed with information
- A fixed and draggable calculator
    - Enables a user to calculate and keep track of how much one would like to donate overall
    - Appears by a click on the calculator button on the aside bar on the 'Donate' page
    - Is unavailable on phone screen sizes
- Bootstrap carousels
    - Allows a user to view images of different countries that require assistance
    - Switches from one picture to another automatically or by a manually clicked bootstrap carousel arrow of the user
- Email.JS
    - Allows a user to send the developer any questions or suggestions that one may have about the website

## Logic
The logic of this project is contained in all of the JavaScript files, which are located in the js folder that is in the assets folder.

Various JavaScript effects have been implemented into this project in order to provide a pleasant user experience and make
user interactions visually appealing and satisfactory. As for the homepage, I have used multiple functions to include the desired functionalities.

One example for it is that I used the constants, readBtn, more and dots to let a user trigger events on the web page. I connected the readBtn variable to an event listener called 'click' and
concatenated each of the three variables to innerText or style with a property, which I set equal to a variable to accomplish the effect that I wanted to bring forth. Furthermore,
I repeated the same procedure for another section. The purpose of this was to let the user be able to press a button, in order to show or hide texts.

Secondly, I used the constant called, textEffect and the window object with scrollY, so that most of the texts and buttons would only fade in, while sliding in from the left, on scroll.
I attached the window object to the 'scroll' event listener to automatically use the scrollByPage() function in order to change the styles through an if statement. This process was repeated multiple
times for sections at different scrolling positions and added else statements to those.

Thirdly, I made a death counter per second. One line of text, is supposed to show the amount of time that has passed, since a user has entered the page and another line is meant to display the amount of
people that are estimated to have passed away each second. The way I did this was to use 'document.addEventListener("DOMContentLoaded", countSeconds());' to have the counts start when the page has loaded and
connect it to the countSeconds() function.
The 'COUNTER' and 'DEATHS' constants are used to implement the desired text on the homepage. Moreover, the 'seconds' variable is set as 'seconds++', inside the function to increment numbers by one
and the 'count' variable is set to be incremented by two each second.
The if statements make sure that once the the seconds have counted up to 60, it immediately changes to '00'. Additionally, the seconds and minutes got set to display a '0'
in front of any number under 10, through the 'seconds' and 'theMinutes' variables in the if statements. Finally, the time variable is set to 'setInterval(countSeconds, 1000);', so that the displayed numbers
get incremented by each second to show the time and number of deaths. In addition, I have done the exact same thing for the time and death counters at the top of the 'Statistics' page.




## Style and Layout
-__Overall Style__-
The website should have four different web pages
The website should be as responsive as possible
I tried my best to use lots of semantic HTML5 elements, in order to have a good structure of the codes
SASS was utilized, in order to organise the CSS3 codes in a cleaner way and to have a better overview of them

-__Navigation__-
The website has a responsive navigation bar at the top, so that one can be linked to other web pages of the website

-__Aside buttons__-
Has buttons that lead to multiple social media pages
Has a calculator button on the 'Donate' page, which causes a draggable and fixed online calculator appear
Are unavailable on phone size

-__Footer__-
Gives contact information
Links a user the 'Contact', 'Map' and 'Statistics' pages
Shows social media buttons on phone screen sizes that link to social media pages

## Technologies Used
- HTML5
    - To make a layout for the website
- CSS3
    - To design the website
- Bootstrap v4.1.3
    - Used for responsiveness, styling and grids
- JavaScript
    - Used for DOM manipulation, in order to add functionalities to the website
- D3 and DC
    - Used to show data through interactive charts
- Email.JS
    - Used to allow users to send me messages for enquiries
- Google fonts
    - To give the scripture of the texts on the website a better style, than the default one
- Google Maps Api
    - Used to have a map on a web page and to get information from it
- Git and GitHub
    - Used for the project's control and deployment

## Project approach and difficulties
#### Style

#### Logic


## Testing
#### User Stories

#### Different browsers, mobile, desktop

#### Code validation

## Deployment

## Content
#### Images

#### Audio

## Acknowldgements
