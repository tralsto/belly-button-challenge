// #1. Use the D3 library to read in data from the URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Console log promise pending to check for bugs
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Function to initialize page
function init() {

  // Fetch the JSON data and console log it
  d3.json(url).then(function(data) {
    console.log("data", data);
  

    // Create dropdown menu with options
    let dropdownMenu = d3.select("#selDataset");
    data.names.forEach(name => {
      dropdownMenu.append("option").text(name).property("value", name);
    });

    // Initialize the default bar chart with the first data point
    optionChanged(data.names[0]);
  });
};

// #2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
function hbarChart(sample){

  // Fetch the JSON data
  d3.json(url).then(function(data) {
    
    // Gather data for hbar chart from dataset
    let selectedData = data.samples.filter(s => s.id === sample) [0];
    
    // Create data for hbar chart
    let barData = [{
      type: 'bar',
      x: selectedData.sample_values.slice(0, 10).reverse(),
      y: selectedData.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
      text: selectedData.otu_labels.slice(0, 10).reverse(),
      orientation: 'h'
    }];

    // Create layout for bar chart
    let barLayout = {
      xaxis: {title: "Sample Values"},
      yaxis: {title: "OTU ID"}
    };

    // Plot the horizontal bar chart
    Plotly.newPlot('bar', barData, barLayout);
  });
};

// #3. Create a bubble chart that displays each sample.
function bubbleChart(sample) {

  // Fetch the JSON data
  d3.json(url).then(function(data) {

    // Gather data for bubble chart from dataset
    let selectedData = data.samples.filter(s => s.id === sample) [0];

    // Create data for bubble chart
    let bubbleData = [{
      x: selectedData.otu_ids,
      y: selectedData.sample_values,
      mode: 'markers',
      marker: {
        color: selectedData.otu_ids,
        opacity: 0.8,
        size: selectedData.sample_values
      },
      text: selectedData.otu_labels
    }];
        
    // Create layout for bubble chart
    let bubbleLayout = {
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" }
    };

    // Plot the bubble chart  
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);

  });
};

// #4. Display the sample metadata, i.e., an individual's demographic information.
function optionChanged(sample) {

  // Update metadata from dataset
  updateMetadata(sample);

  // Update hbar chart with metadata
  hbarChart(sample);

  // Update bubble chart with metadata
  bubbleChart(sample);
}

// Create function to fetch updated metadata samples
function updateMetadata(sample) {
  d3.json(url).then(function(data) {
    let metaData = data.metadata.filter(m => m.id == sample)[0];
    let metadataPanel = d3.select("#sample-metadata");

    // Clear existing data if any before adding new data
    metadataPanel.html("");

    // Append new metadata to demographic info table
    Object.entries(metaData).forEach(([key, value]) => {
      metadataPanel.append("p").text(`${key}: ${value}`);
    });
});
}

// Call init function from beginning of code to intialize page load
init(); 