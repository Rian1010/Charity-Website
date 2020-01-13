# Second Milestone Project

## Charity Base
The link, at which my website is published is [here](https://rian1010.github.io/Charity-Website/).
> A website that spreads awareness on economic and political problems, which cause poverty and life threatening situations in many countries.
This was made for the second milestone project for the full stack developer course of Code Institute. The goal is to make a user interactive web application and to use HTML, CSS and JavaScript.

## Table of Contents
1. [**Team**](#team)
2. [**UX**](#ux)
    - [**Users Stories**](#users-stories)
    - [**Wireframes**](#wireframes)
3. [**Features**](#features)
4. [**Logic**](#logic)
    - [**Logic of the Homepage**](#logic-of-the-homepage)
    - [**Logic of the Map Page**](#logic-of-the-map-page)
    - [**Logic of the Statistics Page**](#logic-of-the-statistics-page)
    - [**Logic of the Donate Page**](#logic-of-the-donate-page)
    - [**Logic of the Contact Page**](#logic-of-the-contact-page)
5. [**Style and Layout**](#style-and-layout)
    - [**Overall Style**](#overall-style)
    - [**Navigation**](#navigation)
    - [**Aside Bar**](#aside-bar)
    - [**Footer**](#footer)
6. [**Technologies Used**](#technologies-used)
7. [**Project Approach and Difficulties**](#project-approach-and-difficulties)
    - [**Style**](#style)
    - [**Solving Bugs and Problems**](#solving-bugs-and-problems)
        - [**Solved Bugs on the Homepage**](#solved-bugs-on-the-homepage)
        - [**Solved Bugs on the Map Page**](#solved-bugs-on-the-map-page)
        - [**Solved Bugs on the Statistics Page**](#solved-bugs-on-the-statistics-page)
        - [**Solved Bugs on the Contact Page**](#solved-bugs-on-the-contact-page)
    - [**Unsolved bugs**](#unsolved-bugs)
        - [**Unsolved Bugs on the Homepage**](#unsolved-bugs-on-the-homepage)
        - [**Unsolved Bugs on the Map Page**](#unsolved-bugs-on-the-map-page)
8. [**Testing**](#testing)
    - [**Client Story Testing**](#client-story-testing)
    - [**Tests**](#tests)
    - [**Different Devices and Browsers**](#different-devices-and-browsers)
    - [**Code Validation**](#code-validation)
9. [**Deployment**](#deployment)
    - [**Steps on How to Push the Workspace onto Github**](#steps-on-how-to-push-the-workspace-onto-github)
    - [**Steps on the Final Deployment**](#steps-on-the-final-deployment)
10. [**Content**](#content)
    - [**Content on the homepage**](#content-on-the-homepage)
    - [**Images on the homepage**](#images-on-the-homepage)
    - [**Content on the Map and Statistics Pages**](#content-on-the-map-and-statistics-pages)
    - [**Images on the Statistics Page**](#images-on-the-statistics-page)
    - [**Content on the Donate Page**](#content-on-the-donate-page)
    - [**Images on the Donate Page**](#images-on-the-donate-page)
11. [**Acknowledgements**](#acknowledgements)

## Team
- __Author__ - Rian Sunthbocus
- __Mentor__ - Antonija Šimić

## UX
The aim of this website is to let users know of some of the problems that are happening around the world and offer the access to some of the most popular charity organisation for people in need.
The target audience of this site are people, who are looking for good charity organisations and or want to have an idea of some of the places in the world, in which people require help. 
Basic information of economic and political problems are presented on the homepage with buttons that lead to the 'Donate' page, if a user wants to find a popular charity organisation
for a country in the list. There is also another button, so one gets linked to the 'Statistics' page to compare data of countries in need.

The 'Map' web page has a map that was made with a Google Maps API. On the map, one can click on the markers, in order to get short and quick information
about specific countries and get linked to the 'Donate' page to find a charity organisation.

The 'Donate' page offers a number of accordions that contain information of one or more charity organisations in various countries of six continents. If one 
decides to donate, the user is lead to the charity organisation's website. Also, if one wants to keep track of how much they are donating, a calculator in 
the aside section is available, which displays a calculator, if clicked. 

If one wants to see statistics about which countries need the most help at the moment, the user can go on the 'Statistics' page, which is linked in the navigation bar,
to find interactive charts with explanations.

In case, someone wants to contact me about the website, one can go to the 'Contact' page, through a button in the navigation bar or the footer. On there, one can
send me an email to ask questions or suggest other charities that could be added to this website.

I was inspired to do this website because I have learned a lot about countries in need before and I still often see news about political or economical instability, which cause
war, hatred and poverty. Also, in the country I live in there are lots of refugees from countries that are or were in war, so I got to hear lots of their stories in school, 
courses, my sports team and the media. Furthermore, a few friends of mine live in countries that do not have a good economy, so I get to know of things that people in their countries struggle
with a lot and how different their conditions are, compared to people in countries with much better politics and a good economy. 

As a result, I tried to make the website that is easy to utilise for users because it would encourage them to help people in a quick and simple way with a wide variety of options. The aim was to provide
clear statistics, informations and donation possibilities for people, who choose to help and want to know more about this topic. 

### Users Stories
1. As a person, who is visiting the website, I want to read why I should donate to any organisation
2. As someone, who is interested in helping people in need, I would like to know what causes people to urgently require my assistance by finding quick information on the homepage
3. As someone, who is interested in helping people in need, I would like to find information about countries with economic problems and political instability
4. As someone, who is interested in knowing about countries in need, I would like to know where those countries are locate at on a map and get short and quick information about them, simply through markers
5. As someone, who is interested in helping people in need or just gathering knowledge about the world, I would like to find data and statistics about economic situations of countries in need and want to be able to compare them visually
6. As someone, who wants to find a good charity organisation, I want to have a wide range of options to donate to on a donation page and be able to have a look at their websites myself by clicking on buttons that link me to them
7. As someone, who wants to donate, I want to be able to keep track of how much I want to spend and therefore, have the option to use an online calculator on the same web page
8. As someone, who cares about helping people in need, I want to spread awareness about a charity that has not been included on the website yet, and contact the developer to add information about that certain charity organisation to the website
9. As someone, who wants to find out more information about the website or charity organisations, I want to contact the web developer to ask questions

### Wireframes
- Please find the paper and pen mockups for this website [here](https://github.com/Rian1010/Charity-Website/tree/master/Mockups)

I have changed a lot from what I had originally planned for the design of the website in the Wireframes. The idea that I had for the homepage at first, ended up being too messy and included too many images, which the website would need to load, and a user would need to focus on 
too many things at once. Furthermore, I have changed the statistics page, in order for it to resemble the homepage a bit more and for a user to have a clear view on it overall. Also, I have changed the design of the contact page and reduced the content, so that it does not look so complicated to 
contact me and to keep the purpose of that web page clear and consise on the first look. So, the donate page was added later to the mockups, so that all the ways to donate to charities would be on one web page.

## Features
- Death counter
    - Informs a user of how quickly people pass away during the time, one is present on the homepage or 'Statistics' page
- Scroll animation
    - As a user scrolls down the homepage, the information fades in
- Google Maps API
    - Allows a user to have a visual representation of where some of the countries are that the charity organisations help in
    - A user can find short and quick information about the countries' needs by clicking on the markers
- D3 and DC
    - Allows a user to compare some of the data given on the 'Statistics' page by clicking on the first bar chart
    - A reset button, on the top-right side of the 'Statistics' page, enables a user to restore the data to their original state
    - Allows a user to find and compare data about the economy of countries
    - The D3 and DC content is not available on phone screen sizes
- Accordions with information of charity organisations
    - Gives a user a clear and clean overview of what countries, the 'Donate' page offers help for
    - Offers a user information about a country's popular charity organisation/s, instead of being stuffed with information of each country's charities at once
- A fixed and draggable calculator
    - Enables a user to calculate and keep track of how much one would like to donate overall
    - Appears by a click on the calculator button in the aside bar of the 'Donate' page
    - Is unavailable on phone screen sizes
- Bootstrap carousels
    - Allow a user to view images of different countries that require assistance
    - Switch from one picture to another automatically or by manually clicking a bootstrap carousel arrow
- Email.JS
    - Allows a user to send the developer any questions or suggestions that one may have about the website

## Logic
The logic of this project is contained in all of the JavaScript files, which are located in the js folder that is in the assets folder.

Various JavaScript effects have been implemented into this project in order to provide a pleasant user experience and make
user interactions visually appealing and satisfying. 

### Logic of the Homepage
As for the homepage, I have used multiple functions to include the desired functionalities.

One example for it is that I used the constants, 'readBtn', 'more' and 'dots' to let a user trigger events on the web page. I connected the 'readBtn' variable to an event listener called 'click' and
concatenated each of the three variables to innerText or style with a property, which I set equal to a variable to accomplish the effect that I wanted to bring forth. Furthermore,
I repeated the same procedure for another section. The purpose of this was to let the user be able to press a button, in order to show or hide texts.

Secondly, I used the constant called, 'textEffect', 'textEffect2', 'textEffect3', 'textEffect4' and 'textEffect5' and the window object with scrollY, so that most of the texts and buttons would fade in, while sliding in from the left, on scroll.
I attached the window object to the 'scroll' event listener to automatically use the scrollByPage() function in order to change the styles through an if statement. This process was repeated multiple
times with different if statements that cause other sections at various scrolling positions to do the effect and added else statements to those. One example of those multiple functions is this:
```javascript
const textEffect3 = document.getElementById("textEffect3");

window.addEventListener("scroll", scrollByPage3);

function scrollByPage3() {
    if (window.scrollY >= 1300) {
        textEffect3.style.opacity = '1';
        textEffect3.style.transform = 'translateX(0px)';
        textEffect3.style.transition = '1s ease-in-out';
    }
    else {
        textEffect3.style.opacity = '0';
        textEffect3.style.transform = 'translateX(-20px)';
    }
}
scrollByPage3();
```

However, as it was too much repeated code, I tried refactoring it in many different ways and finally came to the following result to use one function that loops through each section, and removed the unnecessary IDs of the previous JavaScript code from the HTML codes: 
```javascript
let sections = document.querySelectorAll(".section");
window.onscroll = function fadeIn() {
    sections.forEach(section => {
        let sectionSize = section.getBoundingClientRect();
        let bottomPart = sectionSize.bottom;
        if (window.scrollY >= bottomPart) {
            section.style.opacity = "1";
            section.style.transform = "translateX(0)";
            section.style.transition = "1s ease-in-out";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateX(-20px)";
            section.style.transition = "1s ease-in-out";
        }
    });
}
```

Thirdly, I made a death counter per second. One line of text, is supposed to show the amount of time that has passed, since a user has entered the page and another line is meant to display the amount of
people that are estimated to have passed away each second, since then. The way I did this, was to use 'document.addEventListener("DOMContentLoaded", countSeconds());' to have the counts start when the page has loaded and
connect them to the countSeconds() function.

The 'COUNTER' and 'DEATHS' constants are used to implement the desired text on the homepage. Moreover, the 'seconds' variable is set as 'seconds++', inside the function to increment numbers by one,
and the 'count' variable is set to be incremented by two each second for the count of estimated deaths per second.

The if statements make sure that once the the seconds have counted up to 60, it immediately changes to '00'. Additionally, the seconds and minutes got set to display a '0'
in front of any number under 10, through the 'seconds' and 'theMinutes' variables in the if statements. Finally, the 'time' variable is set to 'setInterval(countSeconds, 1000);', so that the displayed numbers
get incremented by each second to show the time and number of deaths. In addition, I have done the exact same thing for the time and death counters at the top of the 'Statistics' page.

### Logic of the Map Page

For the Google Maps API, on the 'Map' page, the JavaScript code is in the map.js file.

The initMap() function contains all of the code for the displayed map. Inside of it, variables with the names of each marked country have been added. These serve the purpose of latitudes and longitudes of each
country. Furthermore, the map variable causes the initial zoom to be at 2.5 and its center to be at the position of syria, as it is close to the middle of the map. In addition, "var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';" was used
as an array in order to label the markers on the map. Then, variables called contentString were used to use HTML of the text in the window boxes of the markers.  Numbers got attached in their variable names to indicate that
different info boxes have been targeted. The variables with the name of 'infowindow' in them, enabled the contentString variables to be the displayed content of the info windows. In addition, a maximum width of 250 has been given to each of them.


### Logic of the Statistics Page

As for the 'Statistics' page, crossfilter.JS, D3.JS and DC.JS, those were used to create interactive charts. The queue is used to connect to the JSON files in the data folder. The createDataVis function is connected to the each function below it and 
renders all of them. The show_country_data function displays three charts that are connected, so that users can visually compare the given data. Below this function, there are three further functions that display other graphs with different kinds of data to be shown to a user. 
The comments above each function in the statistics.js file, indicate what the functions are for. The graphs are not responsive, as it is not a requirement in the course, so they are hidden on phone sizes and are bigger, than the rest of the page on tablet sizes.
Also, I have conntected the first three data charts for a user to compare their information, but I did not conntect any of the other data charts, as they contain different kinds of information.

### Logic of the Donate Page

In the donate.js file, I started off by adding the functionality of opening and closing the collapsible sections for the charity organisations on the 'Donate' page.

The variables that were utilised are the following:
- var collapse - a targetted class name, which is use to add the 'click' event listener to connect it to a function
- var i - used to iterate through all of the elements with the same class of the 'collapse' variable
- var content - used to target the next sibling element to cause the collapsible bars to open up, when clicked and close again, if clicked again

A for loop was used to iterate through all of the elements with the same class. The collapse variable was connected to a 'click' event listener with the 'i' variable to
represent index numbers inside of it. Then, the symbol class was targeted to replace the 'charity-collapse' class, so that the plus symbol would change to a minus symbol when clicked,
and back to a plus sign, after being clicked again. Through the if and else statement, I edited the style of the content to cause the scrollHeight property to appear and disappear to make it
look like the collapsible bars open, when clicked and close, if clicked again.

Furthermore, for the calculator to work, the following constants were used:
- const btns - connected it to each of the buttons with the, 'calcBtn' class
- const equalBtn - connected to the equal button of the calculator
- const clearBtn - connected to the clear button on the calculator
- const screen - connected to the box at the top of the calculator, which is supposed to display the calculations

A for loop was used to iterate through each if the elements with a class of 'calcBtn'. A 'click' event listener was used to trigger a function that targets all the buttons with the attributes
called 'data-num' and used 'screen.value += number;' to show the clicked numbers and calculations appear inside of the box at the top of the calculator.

The equal button was also given an event listener called, 'click' and triggered a function that consists of if and else statements. These state that if the value of the screen is empty, then the result
should be 0, otherwise, if numbers have been inputed, these will be evaluated and calculated.

The clear button has an 'click' event listener, which is connected to a function that turns the value of the calculator screen empty. So, once the button is clicked, the screen turns empty.


Finally, the dragElement has the following variables:
```javascript
var position1 = 0,
    position2 = 0,
    position3 = 0,
    position4 = 0;
```

These are initialised values to work with throughout the functions beneath it. Then, the functions named dragMouseDown, calculatorDrag and closeDragcalculator are used.

```javascript
e = e || window.event;
e.preventDefault();
```

In function dragMouseDown, the code above either triggers a mouse event or window.event. The second line of the code is used to prevent any disruption to stop the item's ability of being dragged throughout the page. 
Then, the function uses the following code to get the position of the item at the startup and to connect to the functions below it: 

```javascript
position3 = e.clientX;
position4 = e.clientY;

document.onmouseup = closeDragElement;
document.onmousemove = elementDrag;
```

The function called closeDragCalculator stops the process of dragging the calculator, when the mouse is released, whereas the function calculatorDrag, gets triggered through the movement of the mouse. It keeps the process of dragging the item consistently by adding the lines, e = e || window.event; and e.preventDefault(); too, 
in order to prevent other things from stopping the procedure. Afterwards, the following code enables the item to be dragged around: 

```javascript
position1 = position3 - e.clientX;
position2 = position4 - e.clientY;
position3 = e.clientX;
position4 = e.clientY;
        
 
calculator.style.top = (calculator.offsetTop - position2) + "px";
calculator.style.left = (calculator.offsetLeft - position1) + "px";
```

It gets the position of the item, calculates its new position when dragged and enables the calculator to be moved by subtracting calculator.offsetTop by position2 and calculator.offsetTop by position1, using pixels for the unit of the result. 

Finally, the closeDragCalculator function uses the following codes to stop the process, once the mouse is released:

```javascript 
document.onmouseup = null;
document.onmousemove = null;
```

### Logic of the Contact Page

As for the contact page, Email.JS was used to enable users to contact me. The JavaScript codes are in the sendEmail.js file. Three parameters were used in the sendMail function, name, email and message.

```javascript 
emailjs.send("gmail", "first_template", {
    "from_name": name,
    "from_email": email,
    "project_request": message,
})
```

The code above, is used to set values to the stored properties in the Email.JS template, which are first_template, from_name, from_email and project_request. Afterwards, there are two functions in a then statement that display a thank you and confirmation message, if
a user's message got sent. However, the second function in the then statement gets triggered instead, if an error occurs, so that it displays a text, which lets one know of the error.

The sendMail function gets called in the sendMsg function, which is located inside of another function that causes the page to load before triggering what is inside of it. The other function, inside of it, makes sure that an alarm pops up, in case a user forgets to fill in a required field, before clicking on the submit button.

## Style and Layout
### Overall Style
- The website has five different web pages
- The website should be as responsive as possible
- I tried my best to use lots of semantic HTML5 elements, in order to have a good structure of the codes
- SASS was utilized, in order to organise the CSS3 codes in a cleaner way and have a better overview of them

### Navigation
- The website has a responsive navigation bar at the top, so that one can be linked to other web pages of the website

### Aside Bar
- Has buttons that lead to multiple social media pages
- Has a calculator button on the 'Donate' page, which causes a draggable and fixed online calculator to appear
- Are unavailable on phone size

### Footer
- Gives contact information
- Links a user the 'Contact', 'Map' and 'Statistics' pages
- Shows social media buttons on phone screen sizes that link to social media pages

## Technologies Used
- HTML5
    - To make a layout for the website
- CSS3
    - To design the website
- Bootstrap v4.1.3
    - Used for responsiveness, styling and grids
- JavaScript
    - Used for DOM manipulation, in order to add functionalities to the website
- D3.JS, DC.JS and Crossfliter.JS
    - Used to show data through interactive charts
- Email.JS
    - Used to allow users to send me messages for enquiries
- Google fonts
    - To change the font-family of the texts on the website
- Google Maps API
    - Used to have a map on a web page and get information from it
- Git and GitHub
    - Used for the project's control and deployment

## Project Approach and Difficulties
### Style
In order to come up with a style for it, I had to think about the topic that I wanted to work on and what functionalities there are that could be added with JavaScript to deliver enough information about the topic in 
a way that gives users a good user experience. So, I aimed to let people know what the website was all about, on the cover of the homepage. In order to make one's experience unique, I caused each background image to be 
fixed, as one scrolls down and included a linear-gradient on them to make them look better. Furthermore, the death counter and the box it is in are red to visually represent something bad, as this colour is 
often used for danger or unpleasant things. As the user scrolls through the homepage to read about how countries end up in poverty, they want to see statistics, which they can be directed to through a linked text in the second
section or the 'Statistics' link in the navbar.  

On the statistics page, they see another death counter again because it is estimated statistics of how many people have died, since the web page was opened. As one scrolls down, a yellow banner grabs one's attention to 
let one know that he or she can compare the data, by clicking on the bars of the first chart and comparing the selected bars with the data in the charts below. The background of each chart is white, while the background of 
the rest of the page's content is light blue, so that the areas for texts can be visually distinguished with the areas for the charts. 

Moreover, the map page has a simple style, which only serves the purpose of displaying an interactive Google world map with simple instructions and a heading above them. When people click on the markers that are displayed
in the map, they get to read short and quick information about why a country is in need. If they are interested, they can either click on the donate button in the marker window, or in the navigation bar to go to the donation page.
However, clicking the donate button in a country's marker window enables a user to be directed to the section of the donate page that the country is in.

Furthermore, the donate page has a light blue background and starts off with a picture carousel that consists of three images, which show poverty in Asia and Africa. Below it there is text, which clarifies that I do not personally
offer donation services and that one can use a calculator from the aside bar to keep track of how much one is donating in total. I made the calculator colorful to make it not look boring and to visually distinguish the different
sections in it. So, I made sure that a user could easily tell numbers, symbols, the screen and the clear button apart. Also, the calculator can be dragged everywhere across the page for simplicity and comfort, when one utilises the pages features. 
Further below, there are sections for each continent that contain accordions for every country that the page offers help for, with information about one or more of their charities. There is a slight hover effect as one hovers over the 
accordion title, which gives its background a darker blue colour to make it look appealing to the eye. The backgrounds of the information inside of the accordions are white and there are one or more donate buttons, as call to action to encourage users 
to donate on the charity organisations' pages. As one scrolls further down the page, one can see a picture carousel over more accordions for countries of other continents, which is a style that repeats two more times.

Finally, there is a contact page, which specifies what a user can contact me and assures a reply from me within 24 hours. This list is highlighted inside of a box on desktop sizes above a form. The form allows a user to contact me with one's names and email address. 

The navbar and the footer are both white with black texts because I wanted to keep the website bright. The navbar has blue hover effects, as the most of the pages' colors are blue as well.

### Solving Bugs and Problems

#### Solved Bugs on the Homepage
I tried to refactor the code for the functions called scrollByPage2, scrollByPage3, scrollByPage4 and scrollByPage5 by using calculations, for example: 
```javascript 
(window.scrollY + window.innerHeight) - scrollEffect.height / 2
``` 
However, everything that I tried did not completely work and only hard coded numbers in the if statements would work, as in the following part: 
```javascript
if (window.scrollY >= 600)
```

Finally, I there was a way to solve it using the following code, which loops through each of the same class names:
```javascript
let sections = document.querySelectorAll(".section");
window.onscroll = function fadeIn() {
    sections.forEach(section => {
        let sectionSize = section.getBoundingClientRect();
        let bottomPart = sectionSize.bottom;
        if (window.scrollY >= bottomPart) {
            section.style.opacity = "1";
            section.style.transform = "translateX(0)";
            section.style.transition = "1s ease-in-out";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateX(-20px)";
            section.style.transition = "1s ease-in-out";
        }
    });
}

```

#### Solved Bugs on the Map Page
- Tested each of the the JavaScript codes by using console.log() and the console in the devtools on Google Chrome
- Had problems with the codes in the maps.js file, as the codes were almost 1000 lines long, so I solved it using the following procedures:
> - Used a constructor to call the longitude and latitude values of the countries that are displayed
```javascript
    function countryPosition(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
```

Also, there was an error that kept occuring, which said the following: 

> Uncaught (in promise) zd {message: "initMap is not a function", name: "InvalidValueError", stack: "Error↵    at new zd (https://maps.googleapis.com/m…1G505RUOrZ3EJpIqBqpMGNcs&callback=initMap:145:124"}

I solved that problem by adding the following code:

```javascript
    window.initMap = function () {}
```

However, although the error does not appear most of the time, it would still sometimes show up, when I loaded the page twice, so quickly that I didn't let the page fully load the first time around. 
I have tried to solve this bug using the following two approaches, but none of these worked. 

```javascript
    window.onload = function () {}
```

```javascript
    $(document).ready(function(){});
```

Finally, when loading the JavaScript file, before all of the other script files and using the following code, the error totally stopped appearing: 
```javascript
    function initMap() {
        GoogleMap.initGoogleMap();
    }
```

#### Solved Bugs on the Statistics Page
- The line charts did not work, so I found a way to make them work by using the following code, which was repeated for each given data in both of the data charts to make the information be displayed in the graphs: 

```javascript
femaleUnempRateDRC = unemp_rate_female_dim.group().reduceCount(function(d) {
    if (d.unemploymentRateCountry === 'DRC') {
        return +d.femaleUnemploymentRate;
        }
    else {
        return 0;
    }
}),
```
- I did not have enough time to try to refactor these repetitive codes, but I am planning to do so in the future

#### Solved Bugs on the Contact Page
There was the problem that every time one pressed submit on the contact page, an empty email would be sent to me. Therefore, I added the sendMsg function, which contains if statements that cause alerts to show up,
if one does not write anything into any of the input boxes. 

### Unsolved Bugs

#### Unsolved Bugs on the Homepage
I wanted to refactor the functions for the 'Read More' and 'Read Less' buttons by using classes and querySelectorAll, instead of IDs and querySelector, which I currently use. However, it would not work, so I tried looping
through the classes, but it also did not work. Due to the little amount of time, I did not manage to look further into it, but I am planning to do so in the future. 

#### Unsolved Bugs on the Map Page
I tried to refactor the code in the map.js file, so that code would not be as long as it is now however, because of the little amount of time I had left for this project, I was not able to find a good solution to accomplish
this task. I used objects and more variables to reduce the amount of code for the content in the info windows of the markers that are on the map, but the text that the content turned into, kept being undefined, although I had defined the variables.
My mentor and a tutor suggested to move on because of the time limit, but I am still planning to reduce the code, probably by using objects and JSON files.

## Testing

### Client Story Testing
I have asked friends and a parent of mine to go through the website to give me feedback about it. This is the information that they gave me: 
- The website is easy to read and gather the most important information from
- Clear indications of call to action 
- The colours on the website fit well and are nice
- It is great to have such a wide range of good charity organisations available to donate to 
- Easy to understand why each specific country requires help
- The statistics and map pages gives a clearer overall view of where and why people struggle so much
- The images on the homepage and the scrolling effects are a good and suitable addition to the page
- Easy to contact me through the contact page

### Tests
- All JavaScript codes were tested by using console.log(), the console in the Google Chrome devtools and manual testing of the interactive effects
- Scrolled through the homepage to check if the fixed value for the background attachment is working correctly
- Checked if the counters and the text for them at the top of the homepage and the 'Statistics' page work or not
- Clicked on the 'Read More' buttons on the homepage texts to make sure that more text would appear on click
- Pressed on the 'Read Less' buttons on the homepage texts to make sure that less text would be displayed on click
- Checked if the map on the 'Map' page displays or not
- Clicked on the markers that appear on the map to open up the info boxes of each of them 
- Looked if the charts on the 'Statistics' page are working or not
- Clicked on the visually displayed chart data that are supposed to be interactive, in order to see, if they were working or not
- Hovered over the displayed data to check, if the expected numbers would be shown or not
- Clicked on the arrows of each bootstrap carousel, on the 'Donate' page to check if the sliders are working and if each image shows up or not
- Pressed on each of the of the 'Donate' page to check, if they would open up and close again, and if the + symbol changes to the - symbol, if an accordion is opened and back to the + symbol, if it is closed
- Made sure that an alert would pop up, if any of the input boxes on the 'Contact' page are empty when clicking on the submit button
- Checked if I received an email with the correct information, in case one filled in all of the input boxes on the 'Contact' page and submitted the form
- Made sure that all of it looked good and worked responsively too by using the devtools in Google Chrome and a smartphone
- Checked if each aside bar was working on each page by checking, if their hover effects are working and if they lead to the right pages when they are pressed on
- Checked if each of the texts or icons that are supposed to link to other web pages, work or not


### Different Devices and Browsers
- Check the responsiveness by utilising the live preview to look at the website in different screen sizes in the devtools on Google Chrome
- Opened up the website on my phone
- Asked friends to check out the website on their devices and let me know of any bugs they found 
- Used my smartphone to see, if all the functionalities work on there too or not, and if the design looks good or not
- Opened up the website on Google Chrome and Firefox to check, if it would be working well on other browsers too or not, and it did go well


### Code Validation
The three websites that I used to validate the HTML, CSS and JavaScript codes are:
[HTML Validator](https://validator.w3.org/nu/) for validation of HTML
[CSS Validator](https://jigsaw.w3.org/css-validator/) for validation of CSS
[JavaScript Validator](https://jshint.com/) for validation of JavaScript

## Deployment
The GitHub pages that the project has been deployed on, can be viewed here: [live preview of project](https://rian1010.github.io/Charity-Website/) 

### Steps on How to Push the Workspace onto Github
- git add .
- git status (to check if the correct file/s were added or not)
- git commit -m "a short description of what has been updated"
- git remote add origin
- git push -u origin master
- Insert Github username
- Insert Github password

### Steps on the Final Deployment
Go to the github repository
Click on 'Settings'
Scroll down to the 'Github Pages' section
Set the source to 'master branch'
The link, at which the site is published, should appear

## Content
### Content on the Homepage
- [Food Aid Foundation](https://www.foodaidfoundation.org/)
- [Investopedia](https://www.investopedia.com/terms/p/poverty-trap.asp)
- [Federal Reserve Bank of St. Louis](https://www.stlouisfed.org/education/economic-lowdown-podcast-series/episode-2-factors-of-production)
- [Insight](https://insight.wfp.org/where-do-you-think-you-would-find-the-most-expensive-plate-of-food-in-the-world-408ed2856108)
- [World Food Program](https://cdn.wfp.org/2018/plate-of-food/)
- [the balance](https://www.thebalance.com/gdp-per-capita-formula-u-s-compared-to-highest-and-lowest-3305848)

### Images on the Homepage
- [Max Pixels](https://www.maxpixel.net/Disease-Africa-Sick-Poverty-Young-Face-Sadness-1783794)
- [pxhere](https://pxhere.com/en/photo/1053497)
- [Harry S. Trueman](https://www.trumanlibrary.gov/photograph-records/61-102)
- [Starving Children In Africa](https://sites.google.com/site/starvingchildreninafrica777/)

### Content on the Map and Statistics Pages
- [Grafiti](https://beta.grafiti.io/facts/557233-extreme-poverty-asia-2018)
- [Statistics Times](http://statisticstimes.com/economy/countries-by-projected-gdp-capita.php)
- [Medium](https://insight.wfp.org/where-do-you-think-you-would-find-the-most-expensive-plate-of-food-in-the-world-408ed2856108)
- [Food Aid Foundation](https://www.foodaidfoundation.org/world-hunger-statistics.html)
- [The World Bank](https://data.worldbank.org/indicator/SI.POV.GINI?view=map)
- [FOCUS ECONOMICS](https://www.focus-economics.com/blog/the-poorest-countries-in-the-world)
- [The Guardian](https://www.theguardian.com/inequality/datablog/2017/apr/26/inequality-index-where-are-the-worlds-most-unequal-countries)
- [Trading Economics](https://tradingeconomics.com/country-list/unemployment-rate)

### Images on the Statistics Page
- [pxhere](https://pxhere.com/en/photo/1053497)

### Content on the Donate Page
- [Muslim Global Relief](https://www.muslimglobalrelief.org/syria-emergency-appeal/?gclid=Cj0KCQjw3PLnBRCpARIsAKaUbgvUScWalFRhKSaO9QfHb4Yqc6ELL2ZnKetlWrllvhLzkHA6GlKolYoaAh5HEALw_wcB)
- [Save the Children](https://www.savethechildren.org/us/what-we-do/where-we-work/asia/indonesia)
- [SOS Children's Village](https://www.sos-childrensvillages.org/where-we-help/asia/uzbekistan)
- [Muslim Global Relief](https://www.muslimglobalrelief.org/yemen-appeal/?gclid=Cj0KCQjw3PLnBRCpARIsAKaUbgvNFvUQUUdqdHrAim-qYZFtI6PKp01Pg_wEmg5umdZLj-Z_PG3wj3waAkYiEALw_wcB)
- [Mercy Corps](https://www.mercycorps.org.uk/countries/kyrgyzstan)
- [Safer World](https://www.saferworld.org.uk/bangladesh/bangladesh?gclid=Cj0KCQjw3PLnBRCpARIsAKaUbgvOdMX2IhVG6Mf2eu34327kK0FJ6bFemejU_f3AIDNUi65qwB7FZTQaAhUbEALw_wcB)
- [Caritas](https://www.caritas.org/where-caritas-work/asia/tajikistan/)
- [Educate for Life](https://www.educateforlife.org.uk/?gclid=Cj0KCQjwov3nBRDFARIsANgsdoHuIokzfAvWhEunEczs1grnd4VH6rh0tflLgN2qm_stAsozX9pVWR8aApWpEALw_wcB)
- [Save the Children](https://www.savethechildren.org/us/what-we-do/where-we-work/africa/democratic-republic-of-congo)
- [Save the Children](https://www.savethechildren.org/us/what-we-do/where-we-work/africa/mozambique)
- [Care](https://www.care.org/country/mozambique)
- [Aid for Africa](https://www.aidforafrica.org/?cat=120&type=member-charities)
- [Child Voice](https://childvoice.org/where/?gclid=Cj0KCQjw3PLnBRCpARIsAKaUbgsudzI2Kw11ir_0bA5hQE_BUiYRBA0573u7A-5d6rHbzD73Xn0X5SQaAnezEALw_wcB#nigeria)
- [International Rescue Committee](https://www.rescue-uk.org/country/zimbabwe?gclid=CjwKCAjw__fnBRANEiwAuFxETzsg0b6hsHly42kNSUhj5sHudZnrvFQmF1xaWccGOKwNjubah3RAgBoC8xEQAvD_BwE)
- [Ripple Africa](https://www.rippleafrica.org/)
- [Save the Children](https://www.savethechildren.org/us/what-we-do/where-we-work/africa/somalia)
- [Greater Good SA](http://www.greatergoodsa.co.za/)
- [SOS Childrens Villages](https://www.sos-childrensvillages.org/where-we-help/africa/botswana)
- [Charity Water](https://www.charitywater.org/our-projects/south-america/bolivia)
- [Save the Children](https://www.savethechildren.org/us/what-we-do/where-we-work/latin-america/bolivia)
- [Guyana Medical Relief](https://guyanamedicalrelief.com/)
- [We](https://www.we.org/we-villages/where-we-work/ecuador/)
- [Haiti Now](https://www.haiti-now.org/?gclid=CjwKCAjw__fnBRANEiwAuFxET2zCLeE2kcl3GCy02NX7mQCljwT0KdOlE_0BkoV2Wk1QZ-ocFomxcBoCosQQAvD_BwE)
- [Action Aid](https://www.actionaid.org.uk/about-us/where-we-work/brazil)
- [Outreach Moldova](https://www.outreachmoldova.org/)
- [Ukraine Charity](https://www.ukrainecharity.org/)
- [SOS Children's Villages](https://www.sos-childrensvillages.org/where-we-help/europe/kosovo)
- [Love Life Hope](http://lovelifehope.com/)
- [DETROIT MOM](https://detroit.citymomsblog.com/detroit-charities/)
- [American Red Cross](https://www.redcross.org/)
- [Ronald McDonald House Charities](http://www.rmhc.org.au/tax2019?gclsrc=aw.ds&gclid=Cj0KCQjwov3nBRDFARIsANgsdoGNpLUkE8DFjiOWXXlHrwg68jQDcvTxap9pOu77qWQIL04nghRgHhgaAvZVEALw_wcB&gclsrc=aw.ds)
- [Australian Red Cross](https://www.redcross.org.au/)
- [SOS Children's Villages](https://www.sos-childrensvillages.org/where-we-help/asia/kyrgyzstan)
- [ActionAid](https://www.actionaid.org.uk/about-us/where-we-work/democratic-republic-of-congo)

### Images on the Donate Page
- [flickr](https://www.flickr.com/photos/syriafreedom/21076307990)
- [Pixabay](https://pixabay.com/photos/children-uganda-africa-poverty-663392/)
- [Wikimedia](https://commons.wikimedia.org/wiki/File:Jakarta_slumlife71.JPG)
- [Blogspot](http://mad2145651.blogspot.com/2018/11/blog-post-9-influential-image.html)
- [Wikipedia](https://de.wikipedia.org/wiki/Datei:Gona%C3%AFves,_Haiti.JPG)
- [Cardiff Uni's Student Paper](https://cardiffstudentmedia.co.uk/gairrhydd/the-european-refugee-crisis-protagonists-failures-and-controversies/)
- [Wikimedia](https://commons.wikimedia.org/wiki/File:Katrina-14501.jpg)
- [flickr](https://www.flickr.com/photos/elainevigneault/351169448)

## Acknowledgements
I was inspired to do this project from [Code Institute](https://www.codeinstitute.net/).
Thank you to my mentor, Antonija Simic to guide me throughout the process of the project!
Thank you to the tutors, Haley, Tim, Xavier, Stephan, Kevin, Michael, Samantha and Niel for helping me with the problems that I encountered.