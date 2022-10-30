var row = null;
function Submit() {
    var dataEntered = retrivedData();
    var readData = readingDataFromLocalStorage(dataEntered)
    if (dataEntered == false) {
        msg.innerHTML = 'please enter data'
    } else {
        if (row == null) {
            insert(readData)
            msg.innerHTML = 'data inserted'
        } else {
            update()
            msg.innerHTML = 'data updated'
        }
    }
    clearForm()
}
function retrivedData() {
    var name = document.getElementById('name').value;
    var designation = document.getElementById('designation').value;
    // if (!name || !designation) {
    //     alert('please enter all feilds')
    //     return
    // }
    var data = [name, designation]
    if (data.includes('')) {
        return false;
    } else {
        return data
    }
}
function clearForm() {
    document.getElementById('name').value = ''
    document.getElementById('designation').value = ''
}
function readingDataFromLocalStorage(dataEntered) {
    //storing data in locavar ans= l-storage
    var name = localStorage.setItem('name', dataEntered[0])
    var designation = localStorage.setItem('designation', dataEntered[1])
    //get items from local-storage to table
    var Name = localStorage.getItem('name', name)
    var Designation = localStorage.getItem('designation', designation)
    var Data = [Name, Designation]
    return Data;
}
function insert(readData) {
    row = table.insertRow()
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    cell1.innerHTML = readData[0]
    cell2.innerHTML = readData[1]
    cell3.innerHTML = `<button onclick = edit(this)>Edit</button>
    <button onclick = remove(this)>Delete</button>`
}
function edit(data) {
    row = data.parentElement.parentElement;
    document.getElementById('name').value = row.cells[0].innerHTML;
    document.getElementById('designation').value = row.cells[1].innerHTML;
}
function update() {
    row.cells[0].innerHTML = document.getElementById('name').value;
    row.cells[1].innerHTML = document.getElementById('designation').value;
    row = null
}
function remove(i) {
    var ans = confirm('are you sure you want delete??')
    if (ans == true) {
        row = i.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex)
    }
}