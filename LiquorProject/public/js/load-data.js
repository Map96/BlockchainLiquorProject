function loadData() {
    document.getElementById("profilename").innerHTML = localStorage.getItem("username");

    if (localStorage.getItem("role") === "manufacturer") {
        document.getElementById('approve').style.display = 'none';
        document.getElementById('newmanufacturer').style.display = 'none';
        document.getElementById('updatestatus').style.display = 'none';
    }
    else if (localStorage.getItem("role") === "approver"){
        document.getElementById('buyerdetails').style.display = 'none';
        document.getElementById('newmanufacturer').style.display = 'none';
        document.getElementById('newbottle').style.display = 'none';
        document.getElementById('addcrate').style.display = 'none';
        document.getElementById('addshipment').style.display = 'none';
        document.getElementById('updatelocation').style.display = 'none';
        document.getElementById('updatestatus').style.display = 'none';

    } else if (localStorage.getItem("role") === "lsprovider"){
        document.getElementById('approve').style.display = 'none';
        document.getElementById('buyerdetails').style.display = 'none';
        document.getElementById('newmanufacturer').style.display = 'none';
        document.getElementById('newbottle').style.display = 'none';
        document.getElementById('addcrate').style.display = 'none';
        document.getElementById('addshipment').style.display = 'none';
        document.getElementById('updatelocation').style.display = 'none';

    } else if (localStorage.getItem("role") === "wholesaler"){
        document.getElementById('approve').style.display = 'none';
        document.getElementById('buyerdetails').style.display = 'none';
        document.getElementById('newmanufacturer').style.display = 'none';
        document.getElementById('newbottle').style.display = 'none';
        document.getElementById('addcrate').style.display = 'none';
        document.getElementById('addshipment').style.display = 'none';
        document.getElementById('updatelocation').style.display = 'none';
        document.getElementById('updatestatus').style.display = 'none';

    }
}