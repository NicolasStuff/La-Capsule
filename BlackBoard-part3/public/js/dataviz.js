var ctx = document.getElementById("chartBar");
var female = ctx.dataset.female;
var male = ctx.dataset.male;


new Chart(ctx, {

    type: 'bar',
    data: {
       labels: [ "male", "female"],
       datasets: [{
            label: [ "ale", " Female"],
            data:[male ,  female ,],
       }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var graph2 = document.getElementById("doughnut");
var unreadMessages = graph2.dataset.unreadmessages;
var readMessages = graph2.dataset.unreadmessages;

new Chart(graph2, {

    type: 'doughnut',
    data: {
       labels: [ "unreadMessages", "readMessages"],
       datasets: [{
           data:[unreadMessages, readMessages,],
       }]
    }
});

var graph3 = document.getElementById("thridgraph");
var Female = graph3.dataset.Female;
var Male = graph3.dataset.Male;


new Chart(graph3, {

    type: 'thridgraph',
    data: {
       labels: [ "Female", "Female"],
       datasets: [{
           data:[Female, Female,],
       }]
    }
});