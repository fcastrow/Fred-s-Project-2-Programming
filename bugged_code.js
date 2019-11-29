e Chart

var data;
var houston_mexican_count = 0;
var foodData;


d3.csv("df_yelp_all.csv").then(function(foodData) {
  foodData.forEach(function(data) {
if(data['Category'] == 'Mexican'){
  houston_mexican_count +=1;
  console.log(houston_mexican_count)};

})});

console.log(houston_mexican_count);
