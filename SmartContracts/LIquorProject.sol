pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;
 
contract Distillery{
    
    enum Status{
        Pending,
        Approved,
        Rejected
    }
   
	struct distilleryDetails{
    	string distilleryCode;
    	string name;
    	string streetAddress;
    	string state;
    	string permitID;
	}
   
	struct bottleDetails{
    	string distilleryCode;
    	bytes32 crateID;
    	bytes32 bottleID;
    	uint bottleNumber;
    	uint manufacturedDate;
	}
	
	struct shipmentDetails{
    	string distilleryCode;
    	bytes32 shipmentID;
    	string vehicleNumber;
    	string driverName;
    	uint startDelTime;
    	uint estimatedTime;//in hours
    	Status status;
    	uint deliveredTimestamp;
    	bytes32 [] crateIDs;
    	gpsData[] gpsDetails;
	}
	
	struct crateDetails{
	    string distilleryCode;
        bytes32 crateID;
        uint timestamp;
        string approverID;
        uint approvedTimestamp;
        bytes32 shipmentID;
        string buyerName;
        string buyerPermitID; 
        bytes32 [] bottleIds;
        Status status;
	}
	struct gpsData{
	    uint timestamp;
	    string latitude;
	    string longitude;
	}
	
	address admin;
	mapping(string => distilleryDetails) distilleryObj;
	mapping(bytes32 => bottleDetails) bottleObj;
	mapping(bytes32 => shipmentDetails) shipmentObj;
	mapping(bytes32 => crateDetails) crateObj;
	
	constructor() public{
    	admin = msg.sender;
	}
	
	modifier ifadmin{
    	require(admin == msg.sender,"only admin access");
    	_;
	}
   
    function addDistillerydetails(string memory _distilleryCode, string memory _name, string memory _streetaddress, string memory _state, string memory _permitid) public ifadmin {
    	distilleryObj[_distilleryCode].distilleryCode = _distilleryCode;
    	distilleryObj[_distilleryCode].name = _name;
    	distilleryObj[_distilleryCode].streetAddress = _streetaddress;
    	distilleryObj[_distilleryCode].state =_state;
    	distilleryObj[_distilleryCode].permitID =_permitid;
	}
	
	function getDistilleryDetails(string memory  _distilleryCode) external view returns(string memory, string memory, string memory, string memory){
	    
	     return (distilleryObj[_distilleryCode].name,distilleryObj[_distilleryCode].streetAddress,distilleryObj[_distilleryCode].state,distilleryObj[_distilleryCode].permitID);
	}
 
    function addBottleDetails( bytes32 _bottleid, string memory _distilleryCode, uint _manufacturedDate) public ifadmin {
    	bottleObj[ _bottleid].distilleryCode = _distilleryCode;
    	bottleObj[ _bottleid].bottleID = _bottleid;
    	bottleObj[ _bottleid].manufacturedDate= _manufacturedDate;
    }
    
    function updateBottleDetails( bytes32 _bottleid, bytes32 _crateid) public ifadmin {
        bottleObj[ _bottleid].crateID = _crateid;
    }
    
    function getBottledetails(bytes32 _bottleid) external view returns(string memory,string memory,uint,bytes32){
        //bottleid, Manufacture name,state manufactured, date of manufacture of bottle
        string memory manName = distilleryObj[bottleObj[_bottleid].distilleryCode].name;
        string memory stateName =  distilleryObj[bottleObj[_bottleid].distilleryCode].state;
        return(manName, stateName,bottleObj[_bottleid].manufacturedDate,bottleObj[_bottleid].crateID);

    }
    
    function addCrateDetails(  bytes32 _crateID, string memory _distilleryCode, bytes32 []  memory _bottleids) public{
        crateObj[_crateID].crateID = _crateID;
        crateObj[_crateID].distilleryCode=_distilleryCode;
        crateObj[_crateID].bottleIds= _bottleids;
        for(uint i=0;i<_bottleids.length;i++){
            updateBottleDetails(_bottleids[i],_crateID);
        }
        crateObj[_crateID].status = Status.Pending;
    }
    
    function updateCrateDetailsBuyer(bytes32 _crateID, string memory _buyerName, string memory _buyerPermitId) external{
        crateObj[_crateID].buyerName = _buyerName;
        crateObj[_crateID].buyerPermitID= _buyerPermitId;
    }
    
    function updateCrateDetailsShipment(bytes32 _crateID, bytes32 _shipmentID) public{
        crateObj[_crateID].shipmentID = _shipmentID;
    }
    
    function approvecrate(bytes32 _crateID, bool _isApproved, string memory _approverID, uint _timestamp) external {
        if(_isApproved){
            crateObj[_crateID].status = Status.Approved;
        } else {
            crateObj[_crateID].status = Status.Rejected;
        }
        crateObj[_crateID].approverID = _approverID;
        crateObj[_crateID].approvedTimestamp = _timestamp;
    }
    
    
    function getCrateDetails( bytes32 _crateID) external view returns(string memory, string memory, string memory, bytes32 [] memory, Status, string memory, uint,bytes32){
        //crate-id, bottlesid[], buyer name, buyer permit id, manufacturer name
        string memory manName = distilleryObj[crateObj[_crateID].distilleryCode].name;
        uint count = crateObj[_crateID].bottleIds.length;
        bytes32 [] memory bids = new bytes32[](count);
        for(uint i=0;i<count;i++){
            bids[i]=crateObj[_crateID].bottleIds[i];
        }
        crateDetails memory cdetails = crateObj[_crateID];
        return(manName,cdetails.buyerName,cdetails.buyerPermitID,bids,cdetails.status,cdetails.approverID,cdetails.approvedTimestamp,cdetails.shipmentID);
    }
    
    
        
    function addShipmentDetails(string memory _distilleryCode, bytes32 _shipmentID,  string memory _vehiclenumber, string memory _Drivername,uint _startTime,uint _estimatedTime ,bytes32 [] memory _crateid ) public ifadmin {
    	shipmentObj[ _shipmentID].distilleryCode =  _distilleryCode;
    	shipmentObj[ _shipmentID].shipmentID=  _shipmentID;
    	shipmentObj[ _shipmentID].vehicleNumber =_vehiclenumber;
    	shipmentObj[ _shipmentID].driverName =_Drivername;
    	shipmentObj[ _shipmentID].startDelTime=_startTime;
    	shipmentObj[ _shipmentID].estimatedTime=_estimatedTime;
    	shipmentObj[_shipmentID].crateIDs = _crateid;
    	for(uint i=0;i<_crateid.length;i++){
    	    updateCrateDetailsShipment(_crateid[i],_shipmentID);
    	}
    	shipmentObj[_shipmentID].status= Status.Pending;
    }
    function getShipmentDetails(bytes32 _shipmentID) external view returns(string memory,string memory, string memory,uint, uint, bytes32 [] memory, Status, uint,uint[] memory,string memory, string memory){
        //Manufacturer NAme, vehicle number, Driver name Mapping[timestamp->GPSData] Crate IDs [arrays], Delivery Status, Delivered timestamp
        shipmentDetails memory sdetails = shipmentObj[_shipmentID];
       // string memory manName = distilleryObj[sdetails.distilleryCode].name;
        //uint count = sdetails.crateIDs.length;
        bytes32 [] memory cids = new bytes32[](sdetails.crateIDs.length);
        for(uint i=0;i<sdetails.crateIDs.length;i++){
            cids[i]=sdetails.crateIDs[i];
        }
        
        uint [] memory _timestamp = new uint[](sdetails.gpsDetails.length==0?1:sdetails.gpsDetails.length);
        //uint [] memory _latitude = new uint[](sdetails.gpsDetails.length==0?1:sdetails.gpsDetails.length);
        //uint [] memory _longitude = new uint[](sdetails.gpsDetails.length==0?1:sdetails.gpsDetails.length);
        string  memory _latitude ="";
        string memory _longitude = "";
        ///uint gpsCount =  sdetails.gpsDetails.length;
        if(sdetails.gpsDetails.length==0){
            _timestamp[0]=0;
        }
        for(uint i=0;i<sdetails.gpsDetails.length;i++){
            _timestamp[i] = sdetails.gpsDetails[i].timestamp;
            if(i==0){
                _latitude = sdetails.gpsDetails[i].latitude;
                _longitude = sdetails.gpsDetails[i].longitude;
            }else{
                _latitude = string(abi.encodePacked(_latitude,",",sdetails.gpsDetails[i].latitude));  //_latitude +"," +sdetails.gpsDetails[i].latitude;
                _longitude = string(abi.encodePacked(_longitude,",",sdetails.gpsDetails[i].longitude));  //sdetails.gpsDetails[i].longitude;
            }
        }
        return(distilleryObj[sdetails.distilleryCode].name,sdetails.vehicleNumber,sdetails.driverName, sdetails.startDelTime, sdetails.estimatedTime, cids,sdetails.status,sdetails.deliveredTimestamp,_timestamp,_latitude,_longitude);
    }
    
    function updateDeliveryStatus(bytes32 _shipmentID, uint _dtimestamp, bool isDelivered) external{
        if(isDelivered){
        shipmentObj[_shipmentID].status= Status.Approved;
        shipmentObj[_shipmentID].deliveredTimestamp=_dtimestamp;
        }
    }
    
    function addShipmentGPS(bytes32 _shipmentID, uint _timestamp, string memory _latitude, string memory _longitude)external{
        gpsData memory data = gpsData(_timestamp,_latitude,_longitude);
        shipmentObj[_shipmentID].gpsDetails.push(data);
    }
    
    function getShipmentDeliveryDetails(bytes32 _shipmentID) external view returns(Status,uint){
        return(shipmentObj[_shipmentID].status,shipmentObj[_shipmentID].deliveredTimestamp);
        
    }
    
    /*function getGPSDetails(bytes32 _shipmentID) external view returns(uint[] memory,uint[] memory,uint[] memory){
        uint count = shipmentObj[_shipmentID].gpsDetails.length;
        uint [] memory _timestamp = new uint[](count);
        uint [] memory _latitude = new uint[](count);
        uint [] memory _longitude = new uint[](count);
        for(uint i=0;i<count;i++){
            _timestamp[i] = shipmentObj[_shipmentID].gpsDetails[i].timestamp;
            _latitude[i] = shipmentObj[_shipmentID].gpsDetails[i].latitude;
            _longitude[i] = shipmentObj[_shipmentID].gpsDetails[i].longitude;
        }
        return (_timestamp,_latitude,_longitude);
    }*/
}



    	


