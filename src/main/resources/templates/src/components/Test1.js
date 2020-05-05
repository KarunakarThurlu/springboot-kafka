var JsonObj = { one: 1, two: 2, three: 3, four: 4, five: 5 };

//read key
for (var key in JsonObj) {
  console.log(key);
  console.log(JsonObj[key]);
}
