function drawpie() {



    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "pie chart"
        },
        legend: {
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "pie",
            showInLegend: true,


            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [{
                    y: (pass / testcases) * 100,
                    name: "Pass",
                    // exploded: true,

                    label: "Pass",
                    color: "green"
                }, {
                    y: (fail / testcases) * 100,
                    name: "Fail",

                    label: "Fail",
                    color: "red"
                },
                {
                    y: (Inconclusive / testcases) * 100,
                    name: "Inconclusive",

                    label: "Inconclusive",
                    color: "yellow"
                }
            ]
        }]
    });
    chart.render();



}

function explodePie(e) {
    if (typeof(e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();

}

function Column() {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Column"
        },
        axisY: {
            title: "Nbre"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            legendText: "Type",
            dataPoints: [{
                    y: (pass / testcases) * 100,
                    name: "Pass",
                    // exploded: true,

                    label: "Pass",
                    color: "green"
                }, {
                    y: (fail / testcases) * 100,
                    name: "Fail",

                    label: "Fail",
                    color: "red"
                },
                {
                    y: (Inconclusive / testcases) * 100,
                    name: "Inconclusive",

                    label: "Inconclusive",
                    color: "yellow"
                }
            ]
        }]
    });
    chart.render();

}

function Pyramid() {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1",
        title: {
            text: "Pyramid"
        },
        data: [{
            type: "pyramid",
            yValueFormatString: "#\"%\"",
            indexLabelFontColor: "black",
            indexLabelFontSize: 14,
            indexLabel: "{label} - {y}",
            //reversed: true, // Reverses the pyramid
            dataPoints: [{
                    y: (pass / testcases) * 100,
                    name: "Pass",
                    // exploded: true,

                    label: "Pass",
                    color: "green"
                }, {
                    y: (fail / testcases) * 100,
                    name: "Fail",

                    label: "Fail",
                    color: "red"
                },
                {
                    y: (Inconclusive / testcases) * 100,
                    name: "Inconclusive",

                    label: "Inconclusive",
                    color: "yellow"
                }
            ]

        }]
    });
    chart.render();

}