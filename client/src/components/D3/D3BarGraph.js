import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3BarGraph = ({ data, statCategory }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      d3.selectAll('svg > *').remove();

      const widthTween = (d) => {
        let i = d3.interpolate(0, xBandScale.bandwidth());

        return function(t) {
          return i(t);
        };
      };
      const margin = {
        top: 20,
        right: 20,
        bottom: 100,
        left: 100
      };
      const graphWidth = 1000 - margin.left - margin.right;
      const graphHeight = 600 - margin.top - margin.bottom;

      const svg = d3
        .select(d3Container.current)
        .attr('width', 800)
        .attr('height', 600);

      const graph = svg
        .append('g')
        .attr('width', graphWidth)
        .attr('height', graphHeight)
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

      const xAxisGroup = graph
        .append('g')
        .attr('transform', `translate(0, ${graphHeight})`);

      const yAxisGroup = graph.append('g');

      const yLinearScale = d3.scaleLinear().range([graphHeight, 0]);

      const xBandScale = d3
        .scaleBand()
        .range([0, 500])
        .paddingInner(0.2)
        .paddingOuter(0.2);

      // create the axes
      const xAxis = d3.axisBottom(xBandScale);
      const yAxis = d3
        .axisLeft(yLinearScale)
        .ticks(5)
        .tickFormat((d) => d + ` ${statCategory}`);

      const t = d3.transition().duration(750);

      // Update functions
      yLinearScale.domain([0, d3.max(data, (d) => d.stat)]);
      xBandScale.domain(data.map((dataItem) => dataItem.season));

      // join data to rects
      const rects = graph.selectAll('rect').data(data);

      // remove exit selection
      rects.exit().remove();

      // update current shapes in DOM
      rects
        .attr('width', xBandScale.bandwidth)
        .attr('fill', '#CE1141')
        .attr('x', (d) => xBandScale(d.season))
        .transition(t)
        .attr('y', (d) => yLinearScale(d.stat))
        .attr('height', (d) => graphHeight - yLinearScale(d.stat));

      // append enter selection to the DOM
      rects
        .enter()
        .append('rect')
        // .attr('width', 0)
        .attr('height', 0)
        .attr('fill', '#CE1141')
        .attr('x', (d) => xBandScale(d.season))
        .attr('y', graphHeight)
        .merge(rects)
        .transition(t)
        .attrTween('width', widthTween)
        .attr('y', (d) => yLinearScale(d.stat))
        .attr('height', (d) => graphHeight - yLinearScale(d.stat));

      // call axes
      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);

      rects.exit().remove();
    }
  }, [data, statCategory]);

  return (
    <svg className="d3-component" width={400} height={200} ref={d3Container} />
  );
};

export default D3BarGraph;
