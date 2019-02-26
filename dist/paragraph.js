"use strict";

const paragraph = `Welcome to the future with
better
Javascript
:)
`;
console.log(paragraph);
let primary = 'First';
let second = 'Second';
const p = `<p>
    Some content will go here soon, 
    \${primary}
    ${second}
    Let us really show ${primary}
</p>`;
console.log(p);
let breakfast = 'red bull';
let hoursSlept = null;
let travelTime = '20 minutes';
console.log(`This morning, I had ${breakfast}.
I slept about ${hoursSlept} hours last night.
It took ${travelTime} to get to work today.
`); //I slept about \${hoursSlept\${breakfast}} hours last night.
//# sourceMappingURL=paragraph.js.map