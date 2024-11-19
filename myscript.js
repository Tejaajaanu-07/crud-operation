var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["email"] = document.getElementById("email").value;
    formData["password"] = document.getElementById("password").value;
    formData["dob"] = document.getElementById("dob").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.username;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.password;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.dob;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("password").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.password;
    selectedRow.cells[3].innerHTML = formData.dob;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    document.getElementById("dob").value = '';
    selectedRow = null;
}
