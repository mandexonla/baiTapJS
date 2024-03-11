var arr = [];
function Save() {
    var a = {
        fullname_customer: document.getElementById('fullname').value,
        id_pro: document.getElementById('id_pro').value,
        name_pro : document.getElementById('name_pro').value,
        quantity_pro : document.getElementById('quantity_pro').value,
        price_pro : document.getElementById('price_pro').value
    }
    console.log(a);
    arr.push(a);
}

function Show() {
   var html = '';
   for (var i in arr) {
        var n = i;
        n++;
        html += "<tr>";
        html += "<td>"+n+"</td>";
        html += "<td>"+arr[i].fullname_customer+"</td>";
        html += "<td>"+arr[i].id_pro+"</td>";
        html += "<td>"+arr[i].name_pro+"</td>";
        html += "<td>"+arr[i].quantity_pro+"</td>";
        html += "<td>"+arr[i].price_pro+"</td>";
        html += "<td>"+parseFloat(arr[i].quantity_pro) * parseFloat(arr[i].price_pro)+"</td>";
        html += "</tr>";
   }
   document.getElementById('tbl').innerHTML = html;
}

function Reset() {
    document.getElementById('fullname').value = '';
    document.getElementById('id_pro').value = '';
    document.getElementById('name_pro').value = '';
    document.getElementById('quantity_pro').value = '';
    document.getElementById('price_pro').value = '';
}