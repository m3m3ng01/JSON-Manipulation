<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Parse Nested JSON Data in JavaScript</title>
</head>
<body>
    <script>
  
    var json = `{
        "electronicdevice":   {
     "inventory_id": 2932,
    "name": "LG Monitor 50 inch",
    "type": "electronic",
    "tags": [
      "monitor"
    ],
    "purchased_at": 1579017842,
    "placement": {
      "room_id": 3,
      "name": "Lavender"
    }
  },
 "inventory_id": 232,
    "name": "Sharp Pendingin Ruangan 2PK",
    "type": "electronic",
    "tags": [
      "ac"
    ],
    "purchased_at": 1578931442,
    "placement": {
      "room_id": 5,
      "name": "Dhanapala"
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
    
    document.write(obj["electronicdevice"]["name"] + "<br>"); 
      document.write(obj["name"] + "<br>");

    </script>
</body>
</html>
