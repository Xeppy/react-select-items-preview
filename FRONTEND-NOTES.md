Name: Abraham Sedri
Email: abraham.sedri@gmail.com
Time to complete: 60 minutes

Notes:

My thought process for this challenge was as follows.
I saw this as 2 main data structures, one is the left hand panel and the
other is the asset preview panel.
Rendering the cards in the left hand panel was a simple matter of importing the 
data into redux and then passing it into a component that maps the data in the format that was demo'd. The time was given in a strange format, some of the data points gave the durationType as minutes but the duration itself as a decmial. I simply multiplied it by 60 in order to give it in seconds since that's a lot more user friendly but I am not sure that's what's intended due to the irregular times.
As a card gets clicked, it calls a method and gives it the id of the card.
the method sends a dispatch to the store that finds the given id in the left hand array objects and filters it out, then adds the same item to the right hand array.
For re-usability sake, we can use the same Card component to render the cards 
in the right hand panel but we need to make two parts of it conditional.
One is the handle click when you click on the card itself, we don't want the same action (or any action really when we click on it) and we also need to render
a close button if it is in the right hand panel. So we can pass in a bollean prop
called "isPreview" which we can use to achieve both.
The close button method is actually incredibly similar but I chose to split it into a separate method for the single responsibility principle as well as to be able to expand the logic later on should we want to do any additional checks, calls or validation. The close button's reducer method does the same thing as the previous one but in reverse, filtering the item from the right hand array and adding it to the left one.
The counters at the top simply create arrays for all the different types inside the right hand panel array and displays the lengths of each array. If the array is empty, it implies none of that type have been added to the preview and so we don't render that span. We also do a small check to see if the length is greater than 1 on each and then pluralise the type.



