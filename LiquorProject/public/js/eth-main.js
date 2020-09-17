if (typeof Web3 !== 'undefined') {
    Web3 = new Web3(Web3.currentProvider);

} else {
    Web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}



window.ethereum.enable().then(function (accounts) {
    web3.eth.defaultAccount = accounts[0];

    var contract = web3.eth.contract([
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_bottleid",
                    "type": "bytes32"
                },
                {
                    "internalType": "string",
                    "name": "_distilleryCode",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_manufacturedDate",
                    "type": "uint256"
                }
            ],
            "name": "addBottleDetails",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_crateID",
                    "type": "bytes32"
                },
                {
                    "internalType": "string",
                    "name": "_distilleryCode",
                    "type": "string"
                },
                {
                    "internalType": "bytes32[]",
                    "name": "_bottleids",
                    "type": "bytes32[]"
                }
            ],
            "name": "addCrateDetails",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_distilleryCode",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_streetaddress",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_state",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_permitid",
                    "type": "string"
                }
            ],
            "name": "addDistillerydetails",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_distilleryCode",
                    "type": "string"
                },
                {
                    "internalType": "bytes32",
                    "name": "_shipmentID",
                    "type": "bytes32"
                },
                {
                    "internalType": "string",
                    "name": "_vehiclenumber",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_Drivername",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_estimatedTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32[]",
                    "name": "_crateid",
                    "type": "bytes32[]"
                }
            ],
            "name": "addShipmentDetails",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_shipmentID",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_latitude",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_longitude",
                    "type": "string"
                }
            ],
            "name": "addShipmentGPS",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_crateID",
                    "type": "bytes32"
                },
                {
                    "internalType": "bool",
                    "name": "_isApproved",
                    "type": "bool"
                },
                {
                    "internalType": "string",
                    "name": "_approverID",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "approvecrate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_bottleid",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "_crateid",
                    "type": "bytes32"
                }
            ],
            "name": "updateBottleDetails",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_crateID",
                    "type": "bytes32"
                },
                {
                    "internalType": "string",
                    "name": "_buyerName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_buyerPermitId",
                    "type": "string"
                }
            ],
            "name": "updateCrateDetailsBuyer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_crateID",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "_shipmentID",
                    "type": "bytes32"
                }
            ],
            "name": "updateCrateDetailsShipment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_shipmentID",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_dtimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isDelivered",
                    "type": "bool"
                }
            ],
            "name": "updateDeliveryStatus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_bottleid",
                    "type": "bytes32"
                }
            ],
            "name": "getBottledetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_crateID",
                    "type": "bytes32"
                }
            ],
            "name": "getCrateDetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "bytes32[]",
                    "name": "",
                    "type": "bytes32[]"
                },
                {
                    "internalType": "enum Distillery.Status",
                    "name": "",
                    "type": "uint8"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_distilleryCode",
                    "type": "string"
                }
            ],
            "name": "getDistilleryDetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_shipmentID",
                    "type": "bytes32"
                }
            ],
            "name": "getShipmentDeliveryDetails",
            "outputs": [
                {
                    "internalType": "enum Distillery.Status",
                    "name": "",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_shipmentID",
                    "type": "bytes32"
                }
            ],
            "name": "getShipmentDetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32[]",
                    "name": "",
                    "type": "bytes32[]"
                },
                {
                    "internalType": "enum Distillery.Status",
                    "name": "",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]);
    var liquorsc = contract.at("0x4A00a8C16E0361aD1718c88F793af5762Df57fb8");

    $("#ambutton").click(function () {
        liquorsc.addDistillerydetails($("#mdiscode").val(), $("#mname").val(), $("#maddr").val(), $("#mstate").val(), $("#mperid").val(), (req, res) => {
            console.log(res);
        });
    });

    $("#gmbutton").click(function () {
        console.log("clicked button");
        liquorsc.getDistilleryDetails($("#getdiscode").val(), (req, res) => {
            console.log(res);
            document.getElementById('gmdispres').style.display = 'block';
            $("#mspanmanname").html(res[0]);
            $("#mspanaddr").html(res[1]);
            $("#mspanstate").html(res[2]);
            $("#mspanmanid").html(res[3]);
        });
    });

    $("#abbutton").click(function () {
        console.log("Add button clicked");
        var date = new Date();
        var timestampval = date.getTime();
        console.log("timestamp: " + timestampval);
        var bottleid = CryptoJS.SHA256($("#cemail").val() + timestampval);
        console.log("bottleid: " + bottleid);
        liquorsc.addBottleDetails("0x" + bottleid, $("#cemail").val(), timestampval, (req, res) => {
            console.log(res);
        });
        document.getElementById('abbid').style.display = 'block';
        $("#bspanbottleid").html("0x" + bottleid);
    });

    $("#gbbutton").click(function () {
        console.log("clicked button");
        liquorsc.getBottledetails($("#botid").val(), (req, res) => {
            console.log(res);
            document.getElementById('gbdispres').style.display = 'block';
            $("#bspanmanname").html(res[0]);
            $("#bspanstateman").html(res[1]);
            var d = new Date(res[2].c[0]);
            $("#bspandateman").html(d);
            if (res[3] !== "0x0000000000000000000000000000000000000000000000000000000000000000") {
                $("#bspancid").html(res[3]);
            } else {
                $("#bspancid").html("NA");
            }
        });
    });

    $("#acbutton").click(function () {
        var str = $("#acbids").val();
        var bid = str.split(",");
        //bid.push($("#acbids").val());
        var code = "";
        for (var i = 0; i < bid.length; i++) {
            code += bid[i];
        }
        var crateid = "0x" + CryptoJS.SHA256(code);
        console.log("Bids: " + bid);
        console.log("Crate Id: " + crateid);
        liquorsc.addCrateDetails(crateid, $("#acdscd").val(), bid, (req, res) => {
            console.log(res);
        });
        document.getElementById('accid').style.display = 'block';
        $("#cspancrateid").html(crateid);
    });

    $("#gcbutton").click(function () {
        console.log("clicked button");
        liquorsc.getCrateDetails($("#getcrateid").val(), (req, res) => {
            console.log(res);
            document.getElementById('gcdispres').style.display = 'block';
            $("#cspanmanname").html(res[0]);
            if (res[1] !== "") {
                $("#cspanbuyername").html(res[1]);
            } else {
                $("#cspanbuyername").html("NA");
            }
            if (res[2] !== "") {
                $("#cspanbuyerpermit").html(res[2]);
            } else {
                $("#cspanbuyerpermit").html("NA");
            }
            for (var i = 0; i < res[3].length; i++) {
                $('#cdivbid').append('<span>' + res[3][i] + '</span><br>');
            }
            //$("#cspanbottleids").html(res[3]);         
            $("#cspansts").html(getStatus(res[4].c[0]));
            if (res[5] !== "") {
                $("#cspanapprvrid").html(res[5]);
            } else {
                $("#cspanapprvrid").html("NA");
            }
            //$("#cspanapprvrid").html(res[5]);
            if (res[6].c[0] !== 0) {
                var d = new Date(res[6].c[0]);
                $("#cspanapprvrts").html(d);
            } else {
                $("#cspanapprvrts").html("NA");
            }
            if (res[7] !== "0x0000000000000000000000000000000000000000000000000000000000000000") {
                $("#cspansid").html(res[7]);
            } else {
                $("#cspansid").html("NA");
            }
            //$("#cspansid").html(res[7]);

        });
    });

    $("#aprvbutton").click(function () {
        console.log("inside approve");
        var date = new Date();
        var timestampval = date.getTime();
        liquorsc.approvecrate($("#acrateid").val(), true, $("#aapproveid").val(), timestampval, (req, res) => {
            console.log(res);
        });
    });

    $("#bybutton").click(function () {
        console.log("inside buyerdetails");

        liquorsc.updateCrateDetailsBuyer($("#bycrateid").val(), $("#byrname").val(), $("#byrprmt").val(), (req, res) => {
            console.log(res);
        });
    });

    $("#asbutton").click(function () {
        var str = $("#scrateid").val();
        var crateid = str.split(",");
        var code = "";
        for (var i = 0; i < crateid.length; i++) {
            code += crateid[i];
        }
        var date = new Date();
        var timestampval = date.getTime();
        var shipmentid = "0x" + CryptoJS.SHA256(code);
        console.log("Crateids: " + crateid);
        console.log("Shipment Id: " + shipmentid);
        liquorsc.addShipmentDetails($("#sdiscode").val(), shipmentid, $("#svclnum").val(), $("#sdrvname").val(),timestampval,$("#sesttme").val(), crateid, (req, res) => {
            console.log(res);
        });
        document.getElementById('assid').style.display = 'block';
        $("#sspanshpmntid").html(shipmentid);
    });

    $("#gsbutton").click(function () {
        console.log("clicked button");
        liquorsc.getShipmentDetails($("#shpmentid").val(), (req, res) => {
            console.log(res);
            document.getElementById('gsdispres').style.display = 'block';
            $("#sspanmanname").html(res[0]);
            $("#sbspanvehno").html(res[1]);
            $("#sspandrvrnm").html(res[2]);
            if(res[6].c[0]==1){
                var date1 = new Date(res[3].c[0])
                var date2 = new Date(res[7].c[0])
                var hours = Math.abs(date1 - date2) / 36e5;
                console.log("hours"+hours);
                if(hours<=res[4].c[0]){
                    console.log("1");
                    $("#sspandd").html("Delivered on Time");
                    document.getElementById('sspandd').style.color = "green";
                } else{
                    if(hours<1){
                        hours = Math.ceil((hours *60)/1);
                        $("#sspandd").html("Delivery late by " + hours + " mins");
                    }else{
                        $("#sspandd").html("Delivery late by " + hours + " hours");
                    }
                    document.getElementById('sspandd').style.color = "red";
                    console.log("2");
                }
            } else{
                console.log("33");
                $("#sspandd").html("NA");
                document.getElementById('sspandd').style.color = "orange";
            }
            for (var i = 0; i < res[5].length; i++) {
                $('#sdivcid').append('<span>' + res[5][i] + '</span><br>');
            }
            //$("#sspancrateids").html(res[3]);
            $("#sspandelsts").html(getDelStatus(res[6].c[0]));
            if (res[7].c[0] !== null) {
                var d = new Date(res[7].c[0]);
                $("#sspandeltimesp").html(d);
            } else {
                $("#sspandeltimesp").html("NA");
            }
            if (res[8] !== null) {
                var table = document.createElement('table');
                table.style.width = '100px';
                table.style.border = '1px solid black';
                let thead = table.createTHead();
                let row = thead.insertRow();
                var data = ["Timestamp", "Latitude", "Longitude"];
                for (var i = 0; i < data.length; i++) {
                    let th = document.createElement("th");
                    th.style.border = '1px solid black'
                    let text = document.createTextNode(data[i]);
                    th.appendChild(text);
                    row.appendChild(th);
                }
                var long = res[10].split(",");
                var lat = res[9].split(",");
                for (var i = 0; i < res[8].length; i++) {
                    let row = table.insertRow();
                    let tscell = row.insertCell();
                    tscell.style.border = '1px solid black';
                    var ts = new Date(res[8][i].c[0]);
                    console.log("ts: "+ts);
                    let tstext = document.createTextNode(ts);
                    tscell.appendChild(tstext);
                    let lacell = row.insertCell();
                    lacell.style.border = '1px solid black';
                    let latext = document.createTextNode(lat[i]);
                    console.log("lat: "+latext);
                    lacell.appendChild(latext);
                    let locell = row.insertCell();
                    locell.style.border = '1px solid black';
                    let lotext = document.createTextNode(long[i]);
                    console.log("long: "+lotext);
                    locell.appendChild(lotext);
                }

                document.getElementById("sdivgps").appendChild(table);
            } else {
                document.getElementById("sdivgps").appendChild("NA");
            }
        });
    });

    $("#ulbutton").click(function () {
        console.log("inside update gps");
        var date = new Date();
        var timestampval = date.getTime();
        liquorsc.addShipmentGPS($("#upshpmntid").val(), timestampval, $("#ullat").val(), $("#ullong").val(), (req, res) => {
            console.log(res);
        });
    });

    $("#udbutton").click(function () {
        console.log("inside update gps");
        var date = new Date();
        var timestampval = date.getTime();
        liquorsc.updateDeliveryStatus($("#udshpmentid").val(), timestampval, true, (req, res) => {
            console.log(res);
        });
    });
});

function getStatus(val) {
    if (val == 0) {
        return "Pending";
    } else if (val == 1) {
        return "Approved";
    } else {
        return "Rejected";
    }
}

function getDelStatus(val) {
    if (val == 0) {
        return "Pending";
    } else if (val == 1) {
        return "Delivered";
    } else {
        return "Rejected";
    }
}