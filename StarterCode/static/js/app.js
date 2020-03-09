// from data.js
var tableData = data;
var datetime = data.datetime;
var city = data.city;
var state = data.state;
var country = data.country;
var shape = data.shape;
var durationMinutes = data.durationMinutes;
var comments = data.comments;
    
var tbl = document.getElementById("ufo-table")
var column_names = ['datetime','city','state','country','shape','durationMinutes','comments']
// creates a <table> element and a <tbody> element
var tblBody = document.createElement("tbody");
var body = document.getElementsByTagName("body")[0]

console.log(tableData[0]['datetime'])

for (var i = 0; i < tableData.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode(tableData[i][column_names[j]]);

        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");

  function myFunction(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }