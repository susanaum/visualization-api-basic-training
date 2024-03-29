import * as d3 from 'd3';
import cloud from 'd3-cloud';
import { adjustProperties } from "./properties/adjustProperties";
import { getDefaultProperties } from "./properties/getDefaultProperties";
import { enhanceHost } from "./utils/enhanceHost";

mstrmojo.requiresDescsWPrefix("SampleBarChart.", 10, 11, 12, 13);

// mojo module
mstrmojo.requiresCls("mstrmojo.CustomVisBase");

const { GraphicModel } = mstrmojo.customviz;
const { ENUM_RAW_DATA_FORMAT } = mstrmojo.models.template.DataInterface;

mstrmojo.plugins.SampleBarChart.SampleBarChart = mstrmojo.declare(
  mstrmojo.CustomVisBase,
  null,
  {
    scriptClass: "mstrmojo.plugins.SampleBarChart.SampleBarChart",
    cssClass: "samplebarchart",
    data:[],
    errorMessage:
      "Either there is not enough data to display the visualization or the visualization configuration is incomplete.",
    errorDetails:
      "This visualization requires one or more attributes and one metric.",
    useRichTooltip: false,
    reuseDOMNode: false,
    draggable: false,
    supportNEE: true,
    init(props) {
      this._super(props);
      enhanceHost(this);
      const defaultPropertyValues = getDefaultProperties();
      this.setDefaultPropertyValues(defaultPropertyValues);
    },
    clearDomNode() {
      const host = this;
      const { domNode } = host;
      domNode.innerHTML = "";
    },
    plot(appliedProperties = null) {
      const visualizationContainer = this;
      try{
        // if(this.data.length==0)
          this.data = this.retrieveData(visualizationContainer);
        this.renderBarChart(this.data, visualizationContainer);
      }catch(e){
        console.log(e)
      }
    },

    retrieveData(visualizationContainer){
      //this.dataInterface.getRawData
      let data = [];
      let rawData = visualizationContainer.dataInterface.getRawData(ENUM_RAW_DATA_FORMAT.ROWS_ADV, {hasThreshold:true});
      for(let att =0; att<rawData.length; att++){
				let row = rawData[att];
					data.push({
						attribute : row.headers[0].name,
						metric_value : (row.values[0].rv !== "") ? Number(row.values[0].rv) : 0,
						color: (row.values[0].threshold) ? row.values[0].threshold.fillColor : "#5BA1C1",  
						tooltipValue: (row.values[0].v !== "") ? Number(row.values[0].v) : 0
					});
			}	
			return data;
    }, 
    renderBarChart(data, visualizationContainer){

      let position = this.setPositionParameters(visualizationContainer, data);

      var chart = d3.select(visualizationContainer.domNode).append("svg")
      .attr("class", "BasicVisualization")
      .attr("width", visualizationContainer.width)
      .attr("height", visualizationContainer.height)
      .append("g").attr("transform", "translate(" + position.margin.left + "," + position.margin.top + ")");

      this.drawBars(chart, data, position, visualizationContainer);
			this.drawAxis(chart, data, position, visualizationContainer);
    },
    drawAxis(chart, data, position, me){
      debugger;
      var x = position.x, y = position.y;
      
      var xAxis = d3.axisBottom(x)
        .tickSize(0)
        .tickFormat(function(d){return d;});
      var yAxis = d3.axisLeft(y)
        .tickSize(0)
        .tickFormat(function(i){return i;});


      // draw x axis
      chart.append("g")
        .attr("class", "xAxis")
        .attr("stroke", "#000")
        // set the x axis at the zero vertical value
        .attr("transform", function() {
          return "translate(0," + y(0) + ")";
        })
        .call(xAxis)
        .selectAll("text")  
        .style("text-anchor", "middle")
        .attr("font-family","Segoe")
        .attr("font-size", "11px")
        .attr("dy", function (d) {
          return ".8em";
        })
        .attr("dx", function (d) {
          return "-0.5em";
        })
        .attr("fill", function(d) {
          return "#000";
        })
        .attr("stroke", "none");
      
    
      
      
    // draw x axis
      chart.append("g")
        .attr("class", "yAxis")
        .attr("stroke", "#000")
        // set the x axis at the zero vertical value
        .attr("transform", function() {
          return "translate( "+ x(0) + ",0)";
        })
        .call(yAxis)
        .selectAll("text")  
        .style("text-anchor", "middle")
        .attr("font-family","Segoe")
        .attr("font-size", "10px")
        .attr("dx", function (i) {
          return "-2.5em";
        })
        .attr("dy", function (i) {
          return "0.2em";
        })
        .attr("fill", function(i) {
          return "#000";
        })
        .attr("stroke", "none");
    
    
      this.drawTicks(data, y, chart, x);
    
    },
    drawBars(chart, data, parameters, me){
      var x = parameters.x, y = parameters.y;
      var barWidth = x.bandwidth()/4;
      
      chart.selectAll(".rect")
        .data(data)
        .enter()
        .append("rect")
        // bar width
        .attr("width", function (d){
          return barWidth;
        })
        .attr("height", function(d) { 
          return Math.abs(y(0) - y(d.metric_value));
        })
        // bar starting point on x axis
        .attr("x", function(d) {
          return x(d.attribute) + (x.bandwidth() - barWidth)/2;
        })
        // bar starting point of the y axis
        .attr("y", function(d) { 
          return Math.min(y(0), y(d.metric_value));
        })
        // bar color
        .style("fill", function(d) { 
          return d.color;
        });			
  },
    drawTicks(data, y, chart, x) {

      var ticks = [0];
      var highestValue = this.findMaximum(data);
      for (var index = 0; index < highestValue; index += 500000) {
        ticks.push(y(index));
      }
    
      chart.selectAll(".customTicks")
        .data(ticks)
        .enter()
        .append("line")
        .attr("stroke", "#000")
        .attr("y1", function (d) { return d; })
        .attr("y2", function (d) { return d; })
        .attr("x1", function () { return x(0); })
        .attr("x2", function () { return -5; });
    },
    findMaximum(data) {
      var highestValue = 0;
      data.forEach(function(item){
        if(item.metric_value>highestValue){
          highestValue = item.metric_value;
        }
      });
      return highestValue;
    },
    setPositionParameters(visualizationContainer, data){
      let highestValue = visualizationContainer.findMaximum(data);
      var margin = {top : 10, right : 10, bottom : 30, left : 50},
      width = parseInt(visualizationContainer.width, 10) - margin.left - margin.right,
      height = parseInt(visualizationContainer.height, 10) - margin.top - margin.bottom;
      let x = d3.scaleBand().rangeRound([0,width]).padding(0.05, 0.5)
              .domain(data.map(function(d){
                return d.attribute;
              }));
      
      let y = d3.scaleLinear().range([height, 0])
              .domain([0, highestValue]);

      return {
        margin,
        x,
        y
      };
    }
  }
);
