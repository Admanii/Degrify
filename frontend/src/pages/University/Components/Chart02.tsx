import React from 'react';
import ApexCharts from "apexcharts";

interface Props {
  id: string;
}

const Chart02: React.FC<Props> = ({ id }) => {
  React.useEffect(() => {
    const chartTwoOptions = {
      series: [
        {
          name: "Students",
          data: [44, 55, 41, 67, 22, 43, 65],
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

    const chartSelector = document.querySelectorAll(`#${id}`);

    if (chartSelector.length) {
      const chartTwo = new ApexCharts(
        document.querySelector(`#${id}`),
        chartTwoOptions
      );
      chartTwo.render();
    }
  }, [id]);

  return <div id={id}></div>;
};

export default Chart02;