// #1. Use the D3 library to read in data from the URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Console log promise pending to check for bugs
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log("data", data);
});

// Create dropdown menu
let dropdownMenu = d3.select("#selDataset");

// Function to initialize page
function init() {

  d3.json(url).then(function(data) {

  })


}
// #2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
function {
  var data = [{
    type: 'bar',
    x: [20, 14, 23],
    y: ['giraffes', 'orangutans', 'monkeys'],
    orientation: 'h'
  }];

  Plotly.newPlot('bar', data);
}

// #3. Create a bubble chart that displays each sample.
function bubbleChart(dataSelection) {
  var trace1 = {
    x: ,
    y: ,
    mode: 'markers',
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      opacity: [1, 0.8, 0.6, 0.4],
      size: [40, 60, 80, 100]
    }
  };
          
  var data = [trace1];
    var layout = {
      title: 'Marker Size and Color',
      showlegend: false,
      height: 600,
      width: 600
    };
      
    Plotly.newPlot('bubble', data, layout);
};

init(); 