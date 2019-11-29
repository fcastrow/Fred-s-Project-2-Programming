// Part 1
//var trace1 = {
//  x: ["beer", "wine", "martini", "margarita",
//    "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//  type: "bar"
//};

//var data = [trace1];

//var layout = {
//  title: "'Bar' Chart"
//};

//Plotly.newPlot("plot", data, layout);


// // Part 2 - Adding attributes
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
//   xaxis: { title: "Drinks"},
//   yaxis: { title: "% of Drinks Ordered"}
// };

// Plotly.newPlot("plot", data, layout);


// // Part 3 - Line Chart
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "line"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };

// Plotly.newPlot("plot", data, layout);

// // Part 4 - Broken Pie Chart
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "pie"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };

// Plotly.newPlot("plot", data, layout);


// // Part 5 - Working Pie Chart
 var trace1 = {
   labels: ["beer", "wine", "martini", "margarita",
       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
   values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
   type: 'pie'
 };

 var data = [trace1];

 var layout = {
 title: "'PIE' Chart",
 };

 Plotly.newPlot("plot", data, layout);

var data;
var houston_mexican_count = 0;
var BBQ_count = 0;
var Mediterranean_count = 0;
var Italian_count = 0;
var American_count = 0;
var foodData;

//d3.csv("df_yelp_houston_mexican_all_NN.csv").then(function(foodData) {
d3.csv("df_yelp_all.csv").then(function(foodData) {
    // console.log( _.size(obj.Data) );
  //console.log(foodData.length);
  foodData.forEach(function(data) {
//    console.log(data['Name']);
if(data['Category'] == 'Mexican'){
  houston_mexican_count +=1;
  console.log(houston_mexican_count)};
//if(data['Category'] == 'BBQ'){
  //BBQ_count +=1;
  //console.log(BBQ_count)};
//if(data['Category'] == 'Mediterranean'){
  //Mediterranean_count +=1;
  //console.log(Mediterranean_count)};
//if(data['Category'] == 'Italian'){
  //Italian_count +=1;
  //console.log(Italian_count)};
})});

console.log(houston_mexican_count);



    // console.log(houston_mexican_count);
  //console.log(foodData);

//Plotly.d3.csv("df_yelp_houston_mexican_all_NN.csv", function(data){ processData(data) } );
// function processData(allRows) {
//  console.log(allRows);
// };