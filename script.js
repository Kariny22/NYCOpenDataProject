let data;


let link = "https://data.cityofnewyork.us/resource/833y-fsy8.json?$limit=100";
  info = await fetch(link);
  data = await info.json();
  console.log(data);

   //Data Source:https://data.cityofnewyork.us/resource/833y-fsy8.json
let data;

async function init(){
  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}




function shootingsByBORO(){
  //Challenge 4: Create variables in order to keep tallies of collisions for each borough
  let q=0, bx=0, bk=0, m=0, st=0;
  for(let i=0; i<data.length; i++){
    let shootings = data[i];
    if(shootings.BORO == "QUEENS"){
      q++;
    }else if(shootings.BORO == "BRONX"){
      bx++;
    }else if(shootings.BORO == "BROOKLYN"){
      bk++;
    }else if(shootings.BORO == "MANHATTAN"){
      m++;
    }else if(shootings.BORO == "STATEN ISLAND"){
      st++;
    }
  }
  
  let chartdata = [
    ['Queens', q],
    ['Bronx', bx],
    ['Brooklyn', bk],
    ['Manhattan', m],
    ['Staten Island', st]
  ];
  
  let chartType = document.getElementById("chartType").value;
 
  displayChart( chartdata, "chart", chartType);
 
}

function accidentsByshootings(){
  //Challenge 9: Create the same functionality as for accidentsByBorough except you will be aggregating for the following vehicles, 'Sedan', 'Station Wagon/Sport Utility Vehicle', or every else.  You will need to repeat challenges 4-8
  let s=0, sw=0, m=0;
  for(let i=0; i<data.length; i++){
    let shootings = data[i];
      if(shootings.shootings_type_code1  == "Sedan"){
      s++;
    }else if(shootings.shootings_type_code1 == "Station Wagon/Sport Utility Vehicle"){
      sw++;
    }else if(shootings.shootings_type_code1  == "Moped"){
      m++;
    }


  }
  let chartdata = [
    ['Sedan', s],
    ['SW', sw],
    ['Moped', m],
  ];


  let chartType = document.getElementById("chartType").value;
  displayChart( chartdata, "chart", chartType);
}




