<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Parse Nested JSON Data in JavaScript</title>
</head>
<body>
    <script>
  
    var json = `{
        "meetingroom":   {
   "inventory_id": 9382,
    "name": "Brown Chair",
    "type": "furniture",
    "tags": [
      "chair",
      "furniture",
      "brown"
    ],
    "purchased_at": 1579190471,
    "placement": {
      "room_id": 3,
      "name": "Meeting Room"
    }
  },
    "inventory_id": 9380,
    "name": "Big Desk",
    "type": "furniture",
    "tags": [
      "desk",
      "furniture",
      "brown"
    ],
    "purchased_at": 1579190642,
    "placement": {
      "room_id": 3,
      "name": "Meeting Room"
}
  



    }`;
    
    // Mengubah JSON ke JS 
    var obj = JSON.parse(json);
    
    function printValues(obj) {
        for(var k in obj) {
            if(obj[k] instanceof Object) {
                printValues(obj[k]);
            } else {
                document.write(obj[k] + "<br>");
            };
        }
    };
    
    printValues(obj);
    
    document.write("<hr>");
    
    document.write(obj["meetingroom"]["name"] + "<br>");  
    document.write(obj["name"] + "<br>");  

    </script>
</body>
</html>
