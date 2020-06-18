// let user = {
//   name: "Yaroslav",
//   age: 20,
//   skill: {
//     js:5,
//     html:5,
//     css:3
//   }
// }

// for (let key in user) {
//   if(typeof(user[key]) === 'object') {
//       for(let i in user[key]) {
//           console.log(i + ":" + user[key][i])
//       }
//   } else {
//       console.log(key + ":" + user[key])
//   }
  
// }

let cities = ["Kyiv","lviv","Madrid","London"]
console.log (cities);
console.log (cities[4]);

// cities[10] = "konotop";
// cities.unshift ("tokio");
// cities.shift();
// cities.push("")
cities.reverse();


for (let i = 0; i < cities.length; i++) {
  console.log (cities[i]);
}
for (let i = 0; i < cities.length; i++) {
  console.log (cities.join(" | "));
}
let cities1 =[];
arr = prompt('ddtlbnt xthtp ,');
cities1 = arr.split (',')