/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/

const noun1 = 'book'
const noun2 = 'tv'
const verb1 = 'laugh'
const noun3 = 'photo'
const adj1 = 'gloomy'
const adj2 = 'dark'
const noun4 = 'flowers'
const adj3 = 'frozen'
const verb2 = 'dump'
const noun5 = 'water'
const noun6 = 'bottle'

const story = `
You go to the ${noun1} one day with your ${noun2} in order to ${verb1} together. 
On your way, you come across ${noun3}, who happens to be ${adj1} on this ${adj2} 
day and joins you on your journey. The two of them begin a conversation with each 
other about ${noun4}, which turns out to be a mutual interest of theirs, and you 
start to feel ${adj3} since you don't have anything to ${verb2}. Luckily, they 
quickly notice your ${noun5} and change ${noun6}. Feels great to hang out with 
friends!
`

console.log(story)
