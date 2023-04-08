import React, { Component } from 'react';
import ApexCharts from "apexcharts";

interface Props {
  id: string;
}

class Chart02 extends Component<Props> {
  private chartRef: any;

  componentDidMount() {
    const chartTwoOptions = {
      series: [
        {
          name: "Students",
          data: [44, 55, 41, 67, 22, 43],
        },
        // {
        //   name: "Revenue",
        //   data: [13, 23, 20, 8, 13, 27, 15],
        // },
      ],
      colors: ["#3056D3", "#80CAEE"],
      chart: {
        type: "bar",
        height: 335,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },

      responsive: [
        {
          breakpoint: 1536,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 0,
                columnWidth: "25%",
              },
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 0,
          columnWidth: "25%",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
        },
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: ["BBA", "BSCS", "ACF", "BSSS", "BECO", "BSEM"],
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "14px",

        markers: {
          radius: 99,
        },
      },
      fill: {
        opacity: 1,
      },
    };

    const chartSelector = document.querySelectorAll(`#${this.props.id}`);

    if (chartSelector.length) {
      const chartTwo = new ApexCharts(
        document.querySelector(`#${this.props.id}`),
        chartTwoOptions
      );
      chartTwo.render();
      this.chartRef = chartTwo;
    }
  }

  componentWillUnmount() {
    this.chartRef && this.chartRef.destroy();
  }

  render() {
    return <div id={this.props.id}></div>;
  }
}

export default Chart02;