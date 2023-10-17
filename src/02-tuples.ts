const prices: (number | string)[] = [1, 2, 3, 'a'];
prices.push('4');

let user: [string, number]
user = ['nico', 15];
const [username, age] = user;
console.log(username);
