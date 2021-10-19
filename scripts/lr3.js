var myValue;
function create_table() {
    var table = document.createElement('table'), tr, td, i;

    table.border = "1";
    for (i = 0; i < 12 * 12; i++) {
        if (i % 12 == 0) {
            tr = table.appendChild(document.createElement('tr')); // add a new row
        }
        td = tr.appendChild(document.createElement('td'));
        // td.innerHTML = i + 1;
        td.height = "32";
        td.width = "32";

    }
    document.getElementById('container').appendChild(table);
    function allowDrop(event) {
        event.preventDefault();
    }
}
function changecolor() {
    myValue = document.getElementById('favcolor').value;
    console.log(myValue);
}
function resettd() {
    var table = document.getElementsByTagName('td');
    for (i = 0; i < table.length; i++) {
        table[i].style.backgroundColor = "";
    }

}
function changetd() {
    var cell = document.getElementsByTagName("td");
    for (var i = 0; i < cell.length; i++) {
        cell[i].onclick = function (evt) {
            evt.target.style.background = myValue;
        }
    }
}
window.onload = changetd;


