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


In the donate.js file, I started off by adding the functionality of opening the collapsible sections for the charity organisations on the 'Donate' page.

The variables that were utilised are the following:
- var collapse - a targetted class name, which is use to add the 'click' event listener on to connect it to a function
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
called 'data-num' and used 'screen.value += number;' to show the clicked numbers and calculation appear inside of the box at the top of the calculator.

The equal button was also given an event listener called, 'click' and triggered a function that consists of if and else statements. The state that if the value of the screen is empty, then the result
should be 0. Otherwise, if numbers have been inputed, these will be evaluated and calculated.

The clear button has an 'click' event listener, which is connected to a function that turns the value of the calculator screen empty. So, once the button is clicked, the screen turns empty.

Finally, the dragElement has the following variables:
- var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;



For the Google Maps API, on the 'Map' page, the JavaScript code is in the map.js file.

The initMap() function contains all of the code for the displayed map. Inside of it, variables with the names of each marked country have been added. The serve the purpose of latitudes and longitudes of each
country. Furthermore, the map variable causes the initial zoom to be at 2.5 and its center to be at the position of syria, as it is close to the middle of the map. In addition, "var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';" was used
as an array in order to label the markers on the map. Then, variables called contentString were used to use html for the text in the window boxes of the markers.  Numbers got attached in their variable names to indicate that
different info boxes have been targeted. The variables with the name of 'infowindow' in them, enabled the contentString variables to be the displayed content of the info windows and a max width of 200 has been given to the each of them.

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
In order to come up with a style for it, I had to think about the topic, I wanted to work on and what functionalities there are that could be added with JavaScript to deliver enough information about the topic in 
a way that gives users a good user experience. So, I aimed to let people know what the website was all about on the cover of the homepage. In order to make one's experience unique, I caused each background image to be 
fixed, as one scrolls down and included a linear-gradient on top of the pictures to make them look better. Furthermore, the death counter and the box it is in are red to visually represent something bad, as this colour is 
often used for danger or unpleasant things. 

Moreover, the map page has a simple style with the only purpose of displaying an interactive maps with simple instructions and a heading above it.

#### Logic


## Testing
#### User Stories
1. As a person who is visiting the website, I want to know how I could help people in need and why they need my help. 
> - Scroll through the homepage to receive quick information about how countries fall into poverty or war and find out how one could help 
2. As a person who is visiting the website, I want to know what countries are offered to be donated to on the website with quick information about them
> - Click on the 'Map' button in the navigation bar to find an interactive map with markers all over it, each providing short details of why the country currently requires help
3. As a person who is visiting the website, I want know see data and explanation of that data in order to compare the conditions of countries that need help 
> - Click on the 'Statistics' button in the navigation bar to find interactive graphs with explanation beneath them and click on the chart bars to compare (The graphs are not available on mobile or tablet devices)
4. As a person who is visiting the website, I want to have a wide selection of good charity organisations to choose from to help the country/countries that I want to help and keep track of how much I am donating
> - Click on the 'Donate' button in the navigation bar to find information of various countries in need with buttons that link to websites of charity organisations
> - Click on the calculator button in the fixed aside section, to the left to calculate how much you want to donate
5. As a person who is visiting the website, I want to be able to contact to creator of the website to ask questions about the countries in need or request to more charity organisations, if I have some in mind
> - Click on the 'Contact' button in the navigation bar to send me an email and information of who you are and how I can contact you back
6. As a person who is visiting the website, I want to follow this page through social media to see the creator's work for charity organisations
> - Click on the social media icons in the footer on mobile and tablet or in the aside bar on desktop


#### Different browsers, mobile, desktop
In order to check the responsiveness, the live preview was utilised in order to check different screen sizes in the devtools.

#### Code validation

## Deployment
The site that it has been deployed on on GitHub pages can be viewed here: [live preview of project](https://rian1010.github.io/Charity-Website/) 

#### Steps on how to push it:
git add .
git status (to check if the correct file/s were added or not)
git commit -m "a short description of what has been updated"
git remote add origin
git push -u origin master
Insert Github username
Insert Github password

#### Steps on the final deployment:
Go to the github repository
Click on 'Settings'
Scroll down to the 'Github Pages' section
Set the source to 'master branch'
The link, at which the site is published should appear

## Content
#### Content on index.html 
- [Food Aid Foundation](https://www.foodaidfoundation.org/)
- [Investopedia](https://www.investopedia.com/terms/p/poverty-trap.asp)
- [Federal Reserve Bank of St. Louis](https://www.stlouisfed.org/education/economic-lowdown-podcast-series/episode-2-factors-of-production)
- [Insight](https://insight.wfp.org/where-do-you-think-you-would-find-the-most-expensive-plate-of-food-in-the-world-408ed2856108)
- [World Food Program](https://cdn.wfp.org/2018/plate-of-food/)
- [the balance](https://www.thebalance.com/gdp-per-capita-formula-u-s-compared-to-highest-and-lowest-3305848)

#### Images index.html
The images in index.html were obtained from the following websites: 
- [Max Pixels](https://www.maxpixel.net/Disease-Africa-Sick-Poverty-Young-Face-Sadness-1783794)
- [pxhere](https://pxhere.com/en/photo/1053497)
- [Harry S. Trueman](https://www.trumanlibrary.gov/photograph-records/61-102)
- [Starving Children In Africa](https://sites.google.com/site/starvingchildreninafrica777/)

#### Content on statistics.html
- [Grafiti](https://beta.grafiti.io/facts/557233-extreme-poverty-asia-2018)
- [Statistics Times](http://statisticstimes.com/economy/countries-by-projected-gdp-capita.php)
- [Medium](https://insight.wfp.org/where-do-you-think-you-would-find-the-most-expensive-plate-of-food-in-the-world-408ed2856108)
- [Food Aid Foundation](https://www.foodaidfoundation.org/world-hunger-statistics.html)
- [The World Bank](https://data.worldbank.org/indicator/SI.POV.GINI?view=map)
- [FOCUS ECONOMICS](https://www.focus-economics.com/blog/the-poorest-countries-in-the-world)
- [The Guardian](https://www.theguardian.com/inequality/datablog/2017/apr/26/inequality-index-where-are-the-worlds-most-unequal-countries)
- [Trading Economics](https://tradingeconomics.com/country-list/unemployment-rate)

#### Images on statistics.html
- [pxhere](https://pxhere.com/en/photo/1053497)

#### Content information on donate.html
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

#### Images on donate.html
- [flickr](https://www.flickr.com/photos/syriafreedom/21076307990)
- [Pixabay](https://pixabay.com/photos/children-uganda-africa-poverty-663392/)
- [Wikimedia](https://commons.wikimedia.org/wiki/File:Jakarta_slumlife71.JPG)
- [Blogspot](http://mad2145651.blogspot.com/2018/11/blog-post-9-influential-image.html)
- [Wikipedia](https://de.wikipedia.org/wiki/Datei:Gona%C3%AFves,_Haiti.JPG)
- [Cardiff Uni's Student Paper](https://cardiffstudentmedia.co.uk/gairrhydd/the-european-refugee-crisis-protagonists-failures-and-controversies/)
- [Wikimedia](https://commons.wikimedia.org/wiki/File:Katrina-14501.jpg)
- [flickr](https://www.flickr.com/photos/elainevigneault/351169448)

## Acknowldgements
I was inspired to do this project from [Code Institute](https://www.codeinstitute.net/).
Thank you to my mentor, Antonija Simic to guide me throughout the process of the project
Thank you to the tutors, Haley, Tim, Xavier, Stephan, Kevin, Michael, Samantha and Niel for helping me with the problems I encountered 