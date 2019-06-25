import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3LineGraph = ({ data, statCategory }) => {
  const d3Container = useRef(null);

  useEffect(
    () => {
      d3.selectAll('svg > *').remove();

      if (data && d3Container.current) {
        const margin = { top: 40, right: 20, bottom: 50, left: 100 };
        const graphWidth = 560 - margin.left - margin.right;
        const graphHeight = 400 - margin.top - margin.bottom;
        const circRadius = 6;
        const circRadiusMouseover = 10;

        const svg = d3
          .select(d3Container.current)
          .append('svg')
          .attr('width', graphWidth + margin.left + margin.right)
          .attr('height', graphHeight + margin.top + margin.bottom);

        const graph = svg
          .append('g')
          .attr('width', graphWidth)
          .attr('height', graphHeight)
          .attr('transform', `translate(${margin.left}, ${margin.top})`);

        // Scales
        const x = d3.scaleLinear().range([0, graphWidth]);
        const y = d3.scaleLinear().range([graphHeight, 0]);

        // Axes groups
        const xAxisGroup = graph
          .append('g')
          .attr('class', 'x-axis')
          .attr('transform', `translate(0, ${graphHeight})`);

        const yAxisGroup = graph.append('g').attr('class', 'y-axis');

        // D3 line path generator
        const line = d3
          .line()
          .x(function(d) {
            return x(d.season);
          })
          .y(function(d) {
            return y(d.stat);
          });

        // const tip = d3
        //   .tip()
        //   .attr('class', 'tip card')
        //   .html((d) => {
        //     const content = `
        //     <div class="date">${d.season}</div>
        //     <div class="distance">${d.stat}m</div>
        //   `;
        //     return content;
        //   });

        // graph.call(tip);

        // Line path element
        const path = graph.append('path');

        // create dotted line group and append to graph
        const dottedLineGroup = graph
          .append('g')
          .attr('class', 'dotted-line')
          .style('opacity', 0);

        // create x dotted line and append to dotted line group
        const xDottedLine = dottedLineGroup
          .append('line')
          .attr('stroke', '#f7f7f7')
          .attr('stroke-width', 1)
          .attr('stroke-dasharray', 4);

        // create y dotted line and append to dotted line group
        const yDottedLine = dottedLineGroup
          .append('line')
          .attr('stroke', '#f7f7f7')
          .attr('stroke-width', 1)
          .attr('stroke-dasharray', 4);

        // Set scale domains
        x.domain(d3.extent(data, (d) => d.season));
        y.domain([0, d3.max(data, (d) => d.stat)]);

        // Update path data
        path
          .data([data])
          .attr('fill', 'none')
          .attr('stroke', '#CE1141')
          .attr('stroke-width', 2)
          .attr('d', line);

        // Create circle data points
        const circles = graph.selectAll('circle').data(data);

        // Update current data points
        circles.attr('cx', (d) => x(d.season)).attr('cy', (d) => y(d.stat));

        // Remove deleted points
        circles.exit().remove();

        // Add new data points
        circles
          .enter()
          .append('circle')
          .attr('r', circRadius)
          .attr('cx', (d) => x(d.season))
          .attr('cy', (d) => y(d.stat))
          .attr('fill', '#FFC72C');

        graph
          .selectAll('circle')
          .on('mouseover', (d, i, n) => {
            // tip.show(d, n[i]);
            d3.select(n[i])
              .transition()
              .duration(100)
              .attr('r', circRadiusMouseover)
              .attr('fill', '#fff');
            // set x dotted line coords (x1,x2,y1,y2)
            xDottedLine
              .attr('x1', x(d.season))
              .attr('y1', graphHeight)
              .attr('x2', x(d.season))
              .attr('y2', y(d.stat));

            // set y dotted line coords (x1,x2,y1,y2)
            yDottedLine
              .attr('x1', 0)
              .attr('y1', y(d.stat))
              .attr('x2', x(d.season))
              .attr('y2', y(d.stat));
            // show the dotted line group (opacity)
            dottedLineGroup.style('opacity', 1);
          })
          .on('mouseleave', (d, i, n) => {
            // tip.hide(d, n[i]);
            d3.select(n[i])
              .transition()
              .duration(100)
              .attr('r', circRadius)
              .attr('fill', '#FFC72C');
            // hide the dotted line group (opacity)
            dottedLineGroup.style('opacity', 0);
          });

        // Create axes
        const xAxis = d3.axisBottom(x).tickFormat((d) => d);
        const yAxis = d3
          .axisLeft(y)
          .ticks(4)
          .tickFormat((d) => d + statCategory);

        // Call axes
        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);

        // Rotate axes text
        xAxisGroup
          .selectAll('text')
          .attr('transform', 'rotate(-40)')
          .attr('text-anchor', 'end');
      }
    },

    /*
        useEffect has a dependency array (below). It's a list of dependency
        variables for this useEffect block. The block will run after mount
        and whenever any of these variables change. We still have to check
        if the variables are valid, but we do not have to compare old props
        to next props to decide whether to rerender.
    */
    [data, statCategory]
  );

  return (
    <svg className="d3-component" width={600} height={600} ref={d3Container} />
  );
};

export default D3LineGraph;
