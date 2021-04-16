// const person = {
//   name: 'Pablo',
//   age: 28,
//   location: {
//     city: 'BSK',
//     temp: 5,
//   },
// };

// const { name: username = 'User', age } = person;

// console.log(`${username} is ${age} y.o.`);

// const { temp, city } = person.location;

// console.log(`Its ${temp} in ${city}`);

// const book = {
//   title: 'Ego is the enemy',
//   author: 'No Name Guy',
//   publisher: {
//     name: 'Company X',
//   },
// };

// const { name: PublisherName = 'Self-Published' } = book.publisher;

// console.log(PublisherName);

///////////////////////////////////////

// const address = ['28 Kresowa', 'BSK', 'Podlasem', '16-100'];

// const [, city, state, zip] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ['coffee hot', '$2.22', '$3.33', '$4.44'];

const [coffee, , mediumCoffee] = item;

console.log(`A meddium ${coffee} costs ${mediumCoffee}`);
