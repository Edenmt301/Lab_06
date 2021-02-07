/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 

const All_collections= document.querySelectorAll(".collection")
const location_items=All_collections[0].children
const browser_items=All_collections[1].children
const screen_items=All_collections[2].children
const browsing_history_items=All_collections[3].children



// Display the BOM Information on the innerHTML of the elements

location_items[0].firstElementChild.innerHTML=location.href
location_items[1].firstElementChild.innerHTML=location.protocol
location_items[2].firstElementChild.innerHTML=location.host
location_items[3].firstElementChild.innerHTML=location.port
location_items[4].firstElementChild.innerHTML=location.hostname


browser_items[0].firstElementChild.innerHTML=navigator.appName
browser_items[1].firstElementChild.innerHTML=navigator.appVersion
browser_items[2].firstElementChild.innerHTML=navigator.platform
browser_items[3].firstElementChild.innerHTML=navigator.language
browser_items[4].firstElementChild.innerHTML=navigator.cookieEnabled

screen_items[0].firstElementChild.innerHTML=screen.height
screen_items[1].firstElementChild.innerHTML=screen.width
screen_items[2].firstElementChild.innerHTML=screen.pixelDepth


browsing_history_items[0].firstElementChild.innerHTML=history.length
browsing_history_items[1].firstElementChild.innerHTML=history.state