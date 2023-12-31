import React, { Component, useEffect, useRef } from 'react';
import ApexCharts from "apexcharts";
import { useSelector } from 'react-redux';
import { DegreesByProgramAndUni } from '../../../store/slice/degreeSlice';

// console.log("DegreesByProgram" + DegreesByProgram)

interface Props {
  id: string;
}

// class Chart02 extends Component<Props> {
//   // degreesByProgram = useSelector(DegreesByProgram);
  
//   private chartRef: any;

//   componentDidMount() {
//     const chartTwoOptions = {
//       series: [
//         {
//           name: "Students",
//           data: [44, 55, 41, 67, 22, 43],
//         },
//         // {
//         //   name: "Revenue",
//         //   data: [13, 23, 20, 8, 13, 27, 15],
//         // },
//       ],
//       colors: ["#3056D3", "#80CAEE"],
//       chart: {
//         type: "bar",
//         height: 335,
//         stacked: true,
//         toolbar: {
//           show: false,
//         },
//         zoom: {
//           enabled: false,
//         },
//       },

//       responsive: [
//         {
//           breakpoint: 1536,
//           options: {
//             plotOptions: {
//               bar: {
//                 borderRadius: 0,
//                 columnWidth: "25%",
//               },
//             },
//           },
//         },
//       ],
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           borderRadius: 0,
//           columnWidth: "25%",
//           borderRadiusApplication: "end",
//           borderRadiusWhenStacked: "last",
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },

//       xaxis: {
//         categories: ["BBA", "BSCS", "ACF", "BSSS", "BECO", "BSEM"],
//       },
//       legend: {
//         position: "top",
//         horizontalAlign: "left",
//         fontFamily: "Satoshi",
//         fontWeight: 500,
//         fontSize: "14px",

//         markers: {
//           radius: 99,
//         },
//       },
//       fill: {
//         opacity: 1,
//       },
//     };

//     const chartSelector = document.querySelectorAll(`#${this.props.id}`);

//     if (chartSelector.length) {
//       const chartTwo = new ApexCharts(
//         document.querySelector(`#${this.props.id}`),
//         chartTwoOptions
//       );
//       chartTwo.render();
//       this.chartRef = chartTwo;
//     }
//   }

//   componentWillUnmount() {
//     this.chartRef && this.chartRef.destroy();
//   }

//   render() {
//     return <div id={this.props.id}>
//     </div>;
//   }
// }
const Chart02: React.FC<Props> = ({ id }) => {
  const chartRef = useRef<any>(null);
  const degreesByProgramAndUni = useSelector(DegreesByProgramAndUni);
  
  function searchProgramCount(program: { toString: () => string; }) {
    for (let i = 0; i < degreesByProgramAndUni?.length; i++) {
      if (degreesByProgramAndUni[i]._id === program.toString()) {
        return degreesByProgramAndUni[i].count;
      }
    }
    return 0;
  }

  const chartTwoOptions = {
    series: [
      {
        name: "Students",
        data: [searchProgramCount("BBA"), searchProgramCount("BSCS"), searchProgramCount("ACF"), searchProgramCount("BSSS"), searchProgramCount("BECO"), searchProgramCount("BSEM")],
      },
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

  useEffect(() => {
    if (chartRef.current) {
      const chartTwo = new ApexCharts(chartRef.current, chartTwoOptions);
      chartTwo.render();
      return () => {
        chartTwo.destroy();
      };
    }
  }, [chartRef, chartTwoOptions]);

  return <div id={id} ref={chartRef} />;
};

export default Chart02;

// import React, { Component } from 'react';
// import ApexCharts from "apexcharts";

// interface Props {
// id: string;
// }

// interface State {
// selectedYear: string;
// }

// class Chart02 extends Component<Props, State> {
// private chartRef: any;

// state: State = {
// selectedYear: "2021",
// };

// componentDidMount() {
// this.renderChart();
// }

// componentDidUpdate(prevProps: Props, prevState: State) {
// if (this.state.selectedYear !== prevState.selectedYear) {
// this.renderChart();
// }
// }

// componentWillUnmount() {
// this.chartRef && this.chartRef.destroy();
// }

// handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
// this.setState({ selectedYear: event.target.value });
// };

// renderChart = () => {
// const { selectedYear } = this.state;
// const chartTwoOptions = {
//   series: [
//     {
//       name: "Students",
//       data: this.filterDataByYear([44, 55, 41, 67, 22, 43], selectedYear),
//     },
//     // {
//     //   name: "Revenue",
//     //   data: [13, 23, 20, 8, 13, 27, 15],
//     // },
//   ],
//   colors: ["#3056D3", "#80CAEE"],
//   chart: {
//     type: "bar",
//     height: 335,
//     stacked: true,
//     toolbar: {
//       show: false,
//     },
//     zoom: {
//       enabled: false,
//     },
//   },

//   responsive: [
//     {
//       breakpoint: 1536,
//       options: {
//         plotOptions: {
//           bar: {
//             borderRadius: 0,
//             columnWidth: "25%",
//           },
//         },
//       },
//     },
//   ],
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       borderRadius: 0,
//       columnWidth: "25%",
//       borderRadiusApplication: "end",
//       borderRadiusWhenStacked: "last",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },

//   xaxis: {
//     categories: ["BBA", "BSCS", "ACF", "BSSS", "BECO", "BSEM"],
//   },
//   legend: {
//     position: "top",
//     horizontalAlign: "left",
//     fontFamily: "Satoshi",
//     fontWeight: 500,
//     fontSize: "14px",

//     markers: {
//       radius: 99,
//     },
//   },
//   fill: {
//     opacity: 1,
//   },
// };

// const chartSelector = document.querySelectorAll(`#${this.props.id}`);

// if (chartSelector.length) {
//   const chartTwo = new ApexCharts(
//     document.querySelector(`#${this.props.id}`),
//     chartTwoOptions
//   );
//   chartTwo.render();
//   this.chartRef = chartTwo;
// }
// };

// filterDataByYear = (data: number[], year: string) => {
// // Dummy implementation - replace with your own data filtering logic
// switch (year) {
// case "2020":
// return [24, 33, 19, 56, 18, 34];
// case "2021":
// default:
// return [44, 55, 41, 67, 22, 43];
// }
// };

// render() {
// const { selectedYear } = this.state;
// return (
//   <div>
//     <div className="flex items-center justify-center mb-4">
//       <label htmlFor="year-filter" className="mr-2 font-medium text-gray-500"></label>
//       </div>
//       </div>
// )
// }}
// export default Chart02