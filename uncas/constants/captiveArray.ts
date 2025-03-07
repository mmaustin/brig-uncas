//0-5: 8
//6-10:4
//11-15: 16
//16-20: 35
//21-25: 18
//26-30: 9
//31-35: 1
//36-40: 1

type AgesType = {
  name: string,
  value: number,
}

export const agesArray: AgesType[] = [
  {name: 'Ages 0-5', value: 8},
  {name: 'Ages 6-10', value: 4},
  {name: 'Ages 11-15', value: 16},
  {name: 'Ages 16-20', value: 35},
  {name: 'Ages 21-25', value: 18},
  {name: 'Ages 26-30', value: 9},
  {name: 'Ages 31-35', value: 1},
  {name: 'Ages 36-40', value: 1},
]

export const transportedHumans = [
  {name: 'Clawey Ford & 4 children', age: 30, feet: '5', inches: '5"', colour: 'Copper'},
  {name: 'John D.', age: 7, feet: '4\'', inches: '..', colour: 'Copper'},
  {name: 'Matty D.', age: 5, feet: '3\'', inches: '3 1/4"', colour: 'Copper'},
  {name: 'Andrew D.', age: 4, feet: '2\'', inches: '10"', colour: 'Copper'},
  {name: 'Clowey Ann', age: '9 months', feet: '2\'', inches: '10"', colour: 'Copper'},
  {name: 'Eliza Smith', age: 19, feet: '5\'', inches: '10 1/4"', colour: 'Black'},
  {name: 'Ann Mariah Hawkins', age: 20, feet: '5\'', inches: '3 1/2"', colour: 'Black'},
  {name: 'Ann Adison', age: 19, feet: '5\'', inches: '1"', colour: 'Black'},
  {name: 'Mary Clarke', age: 18, feet: '5\'', inches: '3"', colour: 'Black'},
  {name: 'Elizabeth Ducket', age: 18, feet: '5\'', inches: '1"', colour: 'Black'},
  {name: 'Louisa Fisher', age: 15, feet: '5\'', inches: '1"', colour: 'Black'},
  {name: 'Anny Digs & 1 Child', age: 20, feet: '4\'', inches: '9"', colour: 'Black'},
  {name: 'Henry', age: 2, feet: '2\'', inches: '4 1/2"', colour: 'Black'},
  {name: 'Sharlotta Camphhour & 1 C', age: 25, feet: '5\'', inches: '..', colour: 'Copper'},
  {name: 'Ann Moriah', age: '1 1/2', feet: '..', inches: '..', colour: 'Copper'},
  {name: 'Melinda Davis & 1 Child', age: 21, feet: '4\'', inches: '11"', colour: 'Black'},
  {name: 'Ann Morah', age: 2, feet: '2\'', inches: '7 1/2"', colour: 'Black'},
  {name: 'Arlivia Brisco', age: 14, feet: '4\'', inches: '10 1/2"', colour: 'Black'},
  {name: 'Henny Blackston', age: 17, feet: '5\'', inches: '3"', colour: 'Black'},
  {name: 'Eliza Blackston', age: 12, feet: '4\'', inches: '5 1/2"', colour: 'Black'},
  {name: 'Ann Markston', age: 10, feet: '4\'', inches: '1"', colour: 'Black'},
  {name: 'Moriah Hawkins', age: 16, feet: '5\'', inches: '1/2"', colour: 'Black'},
  {name: 'Sophy Smith', age: 19, feet: '4\'', inches: '..', colour: 'Black'},
  {name: 'Benjamin Smith', age: 7, feet: '3\'', inches: '7"', colour: 'Black'},
  {name: 'William Digs', age: 20, feet: '5\'', inches: '9 1/4"', colour: 'Black'},
  {name: 'George Ford', age: 20, feet: '5\'', inches: '7 1/4"', colour: 'Black'},
  {name: 'Dennez Griffin', age: 20, feet: '5\'', inches: '8"', colour: 'Black'},
  {name: 'John Brown', age: 19, feet: '5\'', inches: '4"', colour: 'Black'},
  {name: 'Vernon Louis', age: 19, feet: '5\'', inches: '4 1/2"', colour: 'Black'},
  {name: 'Frederick Staley', age: 25, feet: '5\'', inches: '7 1/4"', colour: 'Black'},
  {name: 'Dick Cothert', age: 20, feet: '5\'', inches: '7 1/2"', colour: 'Black'},
  {name: 'Hanible Simms', age: 20, feet: '5\'', inches: '10 1/4"', colour: 'Black'},
  {name: 'Aaron Harrison', age: 30, feet: '5\'', inches: '8 1/2"', colour: 'Black'},
  {name: 'Andrew Scholfield', age: 21, feet: '5\'', inches: '5 1/2"', colour: 'Yellow'},
  {name: 'Sampson ??', age: 21, feet: '5\'', inches: '4"', colour: 'Black'},
  {name: 'Bib Gray', age: 22, feet: '5\'', inches: '5 1/2"', colour: 'Black'},
  {name: 'Sawney Johnson', age: 23, feet: '5\'', inches: '5"', colour: 'Black'},
  {name: 'Lloyd Steward', age: 18, feet: '5\'', inches: '4"', colour: 'Black'},
  {name: 'Solloman Harriss', age: 20, feet: '5\'', inches: '2"', colour: 'Yellow'},
  {name: 'Amos Hardon', age: 17, feet: '5\'', inches: '5"', colour: 'Black'},
  {name: 'William Bayer', age: 26, feet: '5\'', inches: '9 1/2"', colour: 'Black'},
  {name: 'Reason Hanson', age: 21, feet: '5\'', inches: '7"', colour: 'Black'},
  {name: 'Robert Green', age: 20, feet: '5\'', inches: '3 1/2"', colour: 'Black'},
  {name: 'John Gordon', age: 19, feet: '5\'', inches: '8 3/4"', colour: 'Black'},
  {name: 'Clarke Buttons', age: 26, feet: '5\'', inches: '3 1/2"', colour: 'Black'},
  {name: 'Charles Simms', age: 26, feet: '5\'', inches: '7 3/4"', colour: 'Black'},
  {name: 'Richard Howell', age: 33, feet: '5\'', inches: '8 3/4"', colour: 'Black'},
  {name: 'Dawson Fairfax', age: 20, feet: '5\'', inches: '4 1/4"', colour: 'Black'},
  {name: 'George Rioden', age: 25, feet: '5\'', inches: '8"', colour: 'Black'},
  {name: 'January Penn', age: 21, feet: '5\'', inches: '3 1/4"', colour: 'Black'},
  {name: 'Gusta Jackson', age: 21, feet: '5\'', inches: '7"', colour: 'Black'},
  {name: 'John Johnson', age: 21, feet: '5\'', inches: '7"', colour: 'Black'},
  {name: 'Henry Thornton', age: 14, feet: '4\'', inches: '8"', colour: 'Black'},
  {name: 'Alfred Brisco', age: 15, feet: '4\'', inches: '10"', colour: 'Black'},
  {name: 'Jane Tilman and Child', age: 20, feet: '5\'', inches: '3 1/4"', colour: 'Black'},
  {name: 'Ann Moriah', age: 2, feet: '2\'', inches: '6"', colour: 'Black'},
  {name: 'Sam Jackson', age: 14, feet: '4\'', inches: '4 3/4"', colour: 'Copper'},
  {name: 'George Shorter', age: 13, feet: '4\'', inches: '7"', colour: 'Black'},
  {name: 'Anton Burke', age: 13, feet: '4\'', inches: '7"', colour: 'Black'},
  {name: 'Thomas Gaskins', age: 13, feet: '4\'', inches: '7"', colour: 'Black'},
  {name: 'James Lewis', age: 12, feet: '4\'', inches: '4 1/2"', colour: 'Black'},
  {name: 'Martin ...', age: 11, feet: '4\'', inches: '2 1/2"', colour: 'Black'},
  {name: 'Mary Surrey', age: 40, feet: '5\'', inches: '1/2"', colour: 'Black'},
  {name: 'Austine Surrey', age: 18, feet: '5\'', inches: '6 1/2"', colour: 'Black'},
  {name: 'Charles Surrey', age: 15, feet: '4\'', inches: '11 1/2"', colour: 'Black'},
  {name: 'Fredericks Surrey', age: 13, feet: '4\'', inches: '4 1/2"', colour: 'Black'},
  {name: 'Margaret Ann Surrey', age: 9, feet: '3\'', inches: '6 1/4"', colour: 'Black'},
  {name: 'Thomas Surrey', age: 2, feet: '2\'', inches: '6 1/4"', colour: 'Black'},
  {name: 'Lucinda Brown', age: 20, feet: '5\'', inches: '3"', colour: 'Yellow'},
  {name: 'Mary Morris', age: 15, feet: '11\'', inches: '8 1/4"', colour: 'Yellow'},
  {name: 'Clarasey Fletcher', age: 24, feet: '5\'', inches: '4 1/2"', colour: 'Black'},
  {name: 'Dolly Armstead', age: 25, feet: '4\'', inches: '11 1/4"', colour: 'Black'},
  {name: 'Mary Carter', age: 16, feet: '5\'', inches: '3 1/4"', colour: 'Black'},
  {name: 'Elin Beal', age: 15, feet: '5\'', inches: '.."', colour: 'Black'},
  {name: 'Secelia Brown', age: 22, feet: '5\'', inches: '3 1/2"', colour: 'Black'},
  {name: 'Moses Murphy', age: 27, feet: '6\'', inches: '2 1/2"', colour: 'Black'},
  {name: 'Thomas Johnson', age: 19, feet: '5\'', inches: '8"', colour: 'Black'},
  {name: 'Peter Settles', age: 26, feet: '5\'', inches: '5"', colour: 'Black'},
  {name: 'Amus Brown', age: 27, feet: '5\'', inches: '3"', colour: 'Black'},
  {name: 'Aaron Carter', age: 24, feet: '5\'', inches: '7 1/4"', colour: 'Black'},
  {name: 'Levy Williams', age: 20, feet: '5\'', inches: '5"', colour: 'Yellow'},
  {name: 'Christopher Yates', age: 28, feet: '5\'', inches: '7 1/2"', colour: 'Black'},
  {name: 'William Wilson', age: 17, feet: '5\'', inches: '1 1/2"', colour: 'Black'},
  {name: 'Gabriel Singleton', age: 17, feet: '5\'', inches: '6 1/4"', colour: 'Black'},
  {name: 'Martin ..', age: 16, feet: '5\'', inches: '.."', colour: 'Black'},
  {name: 'George Miller', age: 18, feet: '5\'', inches: '2 1/2"', colour: 'Black'},
  {name: 'Charles Brierly', age: 17, feet: '5\'', inches: '7"', colour: 'Yellow'},
  {name: 'Lee ...', age: 12, feet: '4\'', inches: '4"', colour: 'Black'},
  {name: 'Elijah Butler', age: 20, feet: '5\'', inches: '9"', colour: 'Black'},
  {name: 'Mathew Hopewell', age: 16, feet: '5\'', inches: '.."', colour: 'Black'},
  {name: 'Samuel Burges', age: 23, feet: '5\'', inches: '4 1/2"', colour: 'Black'},
  {name: 'James Bauery', age: 22, feet: '5\'', inches: '8 3/4"', colour: 'Black'},
];

// type CA = {
//   one: number,
//   two: number,
//   three: number,
//   four: number,
//   five: number,
//   six: number,
//   seven: number,
//   eight: number
// }
// const countAges = ():CA =>{
//   const ca: CA = {
//     one: 0,
//   two: 0,
//   three: 0,
//   four: 0,
//   five: 0,
//   six: 0,
//   seven: 0,
//   eight: 0
//   };

//   transportedHumans.map((person)=>{
//     if(typeof person.age !== 'number' || person.age <= 5) ca.one++;
//     if(typeof person.age === 'number' && (person.age >= 6 && person.age <= 10)) ca.two++;
//     if(typeof person.age === 'number' && (person.age >= 11 && person.age <= 15)) ca.three++;
//     if(typeof person.age === 'number' && (person.age >= 16 && person.age <= 20)) ca.four++;
//     if(typeof person.age === 'number' && (person.age >= 21 && person.age <= 25)) ca.five++;
//     if(typeof person.age === 'number' && (person.age >= 26 && person.age <= 30)) ca.six++;
//     if(typeof person.age === 'number' && (person.age >= 31 && person.age <= 35)) ca.seven++;
//     if(typeof person.age === 'number' && (person.age >= 36 && person.age <= 40)) ca.eight++;
//   });
//   return ca;
// };
// console.log(countAges())


export const links = [
  {
    name: "Human Cargo",
    path: '/human-cargo'
  },
  {
    name: "Manifest Front-Left",
    path: '/manifest-front-L'
  },
  {
    name: "Manifest Front-Right",
    path: '/manifest-front-R'
  },
  {
    name: "Manifest Back-Left",
    path: '/manifest-back-L'
  },
  {
    name: "Manifest Back-Right",
    path: '/manifest-back-R'
  },
  {
    name: "Ages",
    path: '/ages'
  }
];

export const backpageText = [
  "Shipped by Franklin & Armfield Alex to Isaac Franklin New Orleans",
  "District of Alexandria Port of Alexandria the 30th day of October 1833. I John Armfield owner of the persons named and particularly described in the within Manifest, and Joseph C Moore Master of the Brig Uncas do solemnly, sincerely, and truly swear, each of us, to the best of our knowledge and belief, that the Negroes within named, have not been imported into the United States, since the first day of January one thousand, eight hundred and eight; and that under the Laws of the United States are held to service or labor as slaves, and are not entitled to freedom under these Laws, at a certain time, and after a known prior of service —Sworn to this thirtieth day of October 1833. before C T. Chapman Collector So help us God. John Armfield Joseph C Moore "
];