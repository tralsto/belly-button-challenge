// Use the D3 library to read in data from the URL
const jsonURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it
d3.json(jsonURL).then(function(data) {
    console.log(data);
});


// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
function hbarChart(dataSelection) {
    var data = [{
        type: 'bar',
        x: ,
        y: ,
        orientation: 'h'
      }];
      
      Plotly.newPlot('myDiv', data);
};


// Create a bubble chart that displays each sample.
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
      
      Plotly.newPlot('myDiv', data, layout);
};

// Display the sample metadata, i.e., an individual's demographic information.


// Display each key-value pair from the metadata JSON object somewhere on the page.


// Update all the plots when a new sample is selected.
