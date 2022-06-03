# StudBud Markdown


## **Contents**
1. Recap of my Design Brief
2. What part of the website works and what doesn't work
3. Bugs, Errors and Minor Hiccups
4. Design Reflections / Iterations
6. References

<br><br><br>

## ***1. Recap of Design Brief***
This web app is designed for students who are studying a language, in particular Japanese. Supported by background research, the site provides learners with:
 * A **Kanban board** for students to keep track on their notes as studying a language can be overwhelming and breaking down their tasks into manageble pieces can create a consistent study schedule that is key to learning the language.
 * A **pomodoro timer** and a **stopwatch** as it gives students a way to maintain the time they spending since it has been established from research that students learning the language are also busy juggling with personal matters. 
 * A **resource list** is there for beginners to manage their study materials or advanced learners to refresh their memory on concepts.
 * An **audio player** for students to listen to while they are studying where they can either listen to:
    * **Songs** _or_
    * **Podcasts** since research shows that students struggle with their listening skills so having a podcast integration can help them improve on their skills.

<br><br><br>

## ***2. Functionality of Website***
Over the course of this development, I came to the realisation that some of the tools that I pitched before that would be included in StudBud would be difficult to implement at my current skill level so compromisations were made in which they were either removed or left on the site as dysfunctional areas. I also believe that I had experienced scope creep over the duration of this development where I wanted to add way more features than what was expected in the design brief which had led me to remove some things that was originally pitched. There are also some bugs and small errors that I will point out later in this markdown. <br>
One of the biggest drawbacks is that this site is not responsive so please use the website with a 1080 screen!

### **Kanban board** <br>
The kanban board is _mostly_ functional. You are able to add your own tasks and input many details about the task such as the priority, due date, estimated time of completion and the status. When selecting your status, no matter which column you pressed the add task button for, depending on the status you have chosen, it will end up in that column. _(see example demonstation below)_ <br>
<img src="markdown image assets/GIF1.gif" alt="GIF of Kanban demonstration"> <br>
What unfortunately doesn't work is editing existing tasks, dragging and dropping tasks and unable to create new columns (but the modal still appears when pushing the button). The ability to search for your tasks also does not work. What I tried to do but could not implement was depending on the priority that the user chooses, the priority colour will change _(eg: high = red, medium = blue, low = green)_

### **Resource List** <br>
Once again, most parts of the site works. You are able to create your own resource group and create a resource card. You are also able to expand the resource card and add your own individual resources. Pressing the icon on the top left side of the card will open all of the links within the resource group. However, like the kanban board, I did not implement the option to edit or delete groups/resources and search for your own resource. Also the Lorem Ipsum card needs to stay there, otherwise, adding your own resource card does not work. Below is a short demo of the resource. In the orignal mockup, users would have been able to add their own image for the resource card but was not able to implement it so a preset image was used.<br>
<img src="markdown image assets/GIF2.gif" alt="GIF of Resource demonstration"> <br>

### **Pomodoro Timer and Stopwatch** <br>
The Pomodoro timer works. It is able to cycle between 25 minute and 5 minute intervals, except that I did not implement a 30 minute break after 4 cycles. The stopwatch also does not work. <br>
<img src="markdown image assets/GIF4.gif" alt="GIF of Timer demonstration"> <br> 
_note: timer is counting down really fast for the sake for a quick demonstration_

### **Music and Podcast Player** <br>
The modals do not function and cannot play music. However, you are able to play the music and skip/go back to previous songs from the top nav menu. However, I only coded it so it only applies to the music, so the podcast audio does not work. <br>
<img src="markdown image assets/GIF3.gif" alt="GIF of Music Player from the nav bar demonstration"> <br>

<br><br><br>

## ***3. Bugs, Errors and Minor Hiccups***
While you are messing around with this website, you might see some errors that may happen during it and these are the current errors that I am aware of, so if you come across one, it's something that I'm not sure about with how to fix it.

### **Toggling between the timer and stopwatch modals** <br>
Changing to the stopwatch screen removes the dark background and changes positions. <br>
<img src="markdown image assets/GIF5.gif" alt="GIF of timer and stopwatch toggle acting strangly"> <br>

### **Clicking the open all links for a group icon ends up opening EVERY single link you inputted no matter the group that they are in** <br>
I do know that the problem is that I am using `querySelectorAll` . However this is the best that I can do to achieving opening all links at once for the design brief. Below is the function from my `resourceExpanded.js` file.
```function openAllLink() {
    links = document.querySelectorAll('.resourceLink')

    links.forEach(function(element) {
        window.open(element.innerHTML);
    });
}
```

### **Unable to Exit Music Modal** <br>
What should happen was that by clicking outside of the modal (the darkened part of the screen), you should be able to exit the modal but that does not work. However, clicking on the podcast modal, you are able to exit it. It may be the case of me using the same ids for the modals which causes it to break. <br>
<img src="markdown image assets/GIF6.gif" alt="GIF of music modal and podcast modals not working properly"> <br>

### **Opening any modals AFTER opening and collapsing the Lorem Ipsum resource card will cause some weird overlapping** <br>
<img src="markdown image assets/GIF7.gif" alt="GIF of modal and resource card overlapping"> <br>

<br><br><br>

## ***4. Design Reflections / Iterations***
The design of the web app compared to the mockup is very similar and minimal changes have been made overall. Howver, while I was working on the site during development, I made some changes to the UI to improve the experience of users and removed/added parts that would make sense. For example:

### **Removing the Filter Options** <br>
In my original mockup, for the kanban board, I added the option for users to filter their tasks by priority and due date as shown below. <br>
<img src="markdown image assets/Screenshot2.png" alt="Image of Mockup containing filter options" width="600px"> <br>
However, in the final mockup, I removed that. I did that because what I had hoped to do _(but did not implement in the end from the large scope)_ was when a user were to input a task, it would automatically rank the task by priority and due date in the column, with higher priority/closer due date being on the top of the column. If that was to be implemented as I had planned, I think that that would create a better experience as they do not have to change some extra settings. <br>

### **The freedom of changing timer increments** <br>
In my mockup, the timer modal was a lot more complicated, where users were able to set up their own study length, break lengths and amount of cycles as shown below. <br>
<img src="markdown image assets/Screenshot3.png" alt="Image of Mockup Timer Modal Screen" width="600px"> <br>
 However, I decided to stick with a predetermined time of 25 minutes of studying and 5 minutes of break times. This is because this time follows the pomodoro principles and developing a good habit of having a consistent time to study will be beneficial. By giving the ability to create their custom times, they could be more prone to breaking their study habits by lowering their study time or increase the break time.

 ### **Changing the location of a button** <br>
For the resource buttons, initially, upon clicking on the view more button, the `+add group` button will change to an `+resources` button. However, upon further relfection, I thought that it was a sutble change which some people may not be able to pick up so instead, in the final web prototype, I created a new button inside the expanded resource card. <br>
<img src="markdown image assets/Screenshot4.png" alt="Image of resource page in mockups" width="600px">
<img src="markdown image assets/Screenshot5.png" alt="Image of resource page in mockups" width="600px"> <br>
_(mockups)_ <br>
<img src="markdown image assets/Screenshot6.png" alt="Image of resource page on the final web app" width="600px"> <br>
_(button in web app in new location)_ <br>
I also changed the text of the button in the timer/stopwatch modals from "Cancel" to "Exit". From user feedback, the cancel button gave them the impression that it was the button to stop the timer but it was only closing the modal. Changing it to 'Exit' removes that misunderstanding.

<br><br><br>

## ***5. References***
### **Image References** <br>
* Tsubono, H. (2020). Japanese book. [Image]. Retrieved from https://unsplash.com/photos/UyVbyimlAgE
* Teppei. (2019). Japanese Podcast for beginners by Teppei podcast art cover. [Image]. Retrieved from https://www.youtube.com/watch?v=drTGtJEvRCA
* YOASOBI. (2019). Racing into the Night album art. [Image]. Retrieved from https://www.youtube.com/watch?v=x8VYWazR5mE 
* Yorushika. (2020). Ghost in a Flower Album art. [Image]. Retrieved from https://www.youtube.com/watch?v=qaOPHnbaBdM
* (n.d.). Nihongo no Tane with Yumi podcast cover. [Image]. Retrieved from https://open.spotify.com/show/55CHeEiWj3wroNiNbGYwTt 
* (n.d.). Learn Japanese with Noriko podcast cover. [Image]. Retrieved from https://www.youtube.com/channel/UCKa6jaRaKR9-n-cuWSBKqsA 
* HAL Laboratory. (2022). Kirby and the Forgotten Land Box Cover. [Image]. Retrieved from https://en.wikipedia.org/wiki/Kirby_and_the_Forgotten_Land 
* Ado. (2021). Ado Gira Gira song cover art. [Image]. Retrieved from https://www.youtube.com/watch?v=sOiMD45QGLs&t=0s
* (n.d.). Let's Talk in Japanese podcast cover. [Image]. Retrieved from https://open.spotify.com/show/7rzB4zCdrSf67jd3nHm8Vy 

### **Icon References** <br>
* (n.d.). Font Awesome Icon Library. [Icon]. Retrieved from https://fontawesome.com/icons 

### **Audio References** <br>
* Yuuta Ogasawara Hirokazu Ando. (2022). _A Trip to Alivel Mall_. [Video Game Song]. HAL Laboratory. (Originally Published 2022, March 25). Retrieved from https://youtu.be/ukzcYjd5HOk
* ヨルシカ / n-buna Official. (2020). _Yorushika - Hana ni Bourei (Ghost In A Flower) [OFFICIAL VIDEO]_. [Album 盗作]. UMG. (Originally Published 2020, April 22). Retrieved from https://www.youtube.com/watch?v=9lVPAWLWtWc
* Ado. (2021). _【Ado】ギラギラ (Gira Gira)_. [Album 狂言]. UMG. (Originally Published 2021 February 14). Retrieved from https://www.youtube.com/watch?v=sOiMD45QGLs
* Ayase / YOASOBI. _YOASOBI "Racing into the Night" Official Music Video_. [Album 'THE BOOK']. The Orchard Music. (Originally Published 2019, November 17). Retrieved from https://www.youtube.com/watch?v=x8VYWazR5mE

### **Code References _(including the code that was sampled and used)_** <br>
* Guria. (2010). _How to store objects in HTML5 localStorage_. Stack Overflow. Retrieved from https://stackoverflow.com/questions/2010892/how-to-store-objects-in-html5-localstorage 
```
localStorage.setItem('testObject', JSON.stringify(testObject));
```
* styks. (2016). _How to correctly iterate through getElementsByClassName_. Stack Overflow. Retrieved from https://stackoverflow.com/questions/15843581/how-to-correctly-iterate-through-getelementsbyclassname
```
document.querySelectorAll('.edit').forEach(function(button) {
    // Now do something with my button
});
```
* Bernhard Wagner. (2021). _How to find the value of a radio button with pure javascript?_. Stack Overflow. Retrieved from https://stackoverflow.com/questions/7986391/how-to-find-the-value-of-a-radio-button-with-pure-javascript
```
document.querySelector('input[name=colors]:checked').value;
```
* (2016). _Customize Radio Button Appearance with CSS_. Retrieved from https://www.markheath.net/post/customize-radio-button-css
* Traversy Media. (2021, April 11). _Build a Music Player | Vanilla JavaScript_. [Video]. YouTube. https://youtu.be/QTHRWGn_sJw
* Florin Pop. (2020, January 22). _Simple Countdown Timer with JavaScript - Day 21_. [Video]. YouTube. https://www.youtube.com/watch?v=x7WJEmxNlEs






