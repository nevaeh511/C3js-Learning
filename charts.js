/**
 * Created by merrill511 on 1/29/2017.
 *
 * C3.js is dependant on D3js ~3.5 not the latest version of D3.js
 */

var chart = c3.generate({
    data: {
        x: 'Date',
        y: 'Usage(kwh)',
        xFormat: '%b-%y',
        columns: [
            ['Amount',70.84,65.75,46.9,50.39,66.8,105,88.87,44.26,48.21,46.43,43.01,55.71,63.71,63.6,42.98,52.72,63.64,69.61,84.72,46.4,49.21,45.02,43.78,45.29,62.18],
            ['Date', 'Jan-17', 'Dec-16', 'Nov-16', 'Oct-16', 'Sep-16', 'Aug-16', 'Jul-16', 'Jun-16', 'May-16', 'Apr-16', 'Mar-16', 'Feb-16', 'Jan-16', 'Dec-15', 'Nov-15', 'Oct-15', 'Sep-15', 'Aug-15', 'Jul-15', 'Jun-15', 'May-15', 'Apr-15', 'Mar-15', 'Feb-15', 'Jan-15'],
            ['Usage(kwh)',
                583,
                542,
                386,
                415,
                536,
                818,
                699,
                360,
                398,
                381,
                348,
                458,
                523,
                534,
                347,
                431,
                511,
                555,
                666,
                380,
                406,
                367,
                355,
                371,
                515
            ]
        ],
        type: 'line',
        // x: 'Trans Date',
        // y: 'Amount',
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%b-%Y'
            }
        }
        // y: {
        //
        // }
    },
    tooltip: {
        grouped: false,
        // position: function (data, width, height, element) {
        //     //get position of current rect point
        //     var chartOffsetX = document.querySelector("#chart").getBoundingClientRect().left;
        //     var graphOffsetX = document.querySelector("#chart g.c3-axis-y").getBoundingClientRect().right;
        //     var tooltipWidth = document.getElementById('c3-tooltip-container').parentNode.clientWidth;
        //     var x = (parseInt(element.getAttribute('cx')) ) + graphOffsetX - chartOffsetX - Math.floor(tooltipWidth/2);
        //     var y = element.getAttribute('cy');
        //     var y = y - height - 14;
        //     console.log(`x: ${x}, y: ${y}`);
        //     return {top: y, left: x};
        // },
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
            console.log(d);
            var tooltip = "<table class='c3-tooltip-container'>"
                        + "<tbody class='c3-tooltip'>";
            var value, dollarFormat, dollar, data,
                dateFormat = d3.time.format('%b-%Y');
                date = dateFormat(d[0].x);
            if (d[0].id == "Amount") {
                data = d[0];
                value = data.value;
                dollarFormat = d3.format('$');
                dollar = dollarFormat(value);
                dateFormat = d3.time.format('%b-%Y');
                date = dateFormat(data.x);
                //console.log(date);
                tooltip += "<tr><td>" + date + " | " + dollar + "</td></tr>";
            }
            // else if(d[1].id.contains('Usage')){
            //     data = d[1];
            //     date = data.x;
            //
            //     tooltip+= "<tr><td>" + date + " | " +  + "</td></tr>";
            // }
            tooltip += + "</tbody></table>";
            return tooltip;
        },
        // contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        //     var obj = d[0],
        //         currencyFormat = d3.format("$"),
        //         dollarValue = currencyFormat(obj.value),
        //         name = obj.name;
            //console.log(obj);
            // console.log(color(obj));
            // console.log(currency(obj));
            // console.log(defaultTitleFormat(obj));
            // console.log(defaultValueFormat(obj));
            // return "<table class='c3-tooltip'>"
            //         +"<th class='tooltiptext'>" + name + " | " + dollarValue + "</th>"
            //         +"</table>";
        // }
    }

});

// console.log(chart);
