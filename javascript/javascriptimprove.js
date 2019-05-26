

name = prompt("Welcome to SIP & TASTE web page! Your good name?");
document.getElementById('name').innerHTML = "Hey " + name +"!";

function load(){
			var agestoredValue = localStorage.getItem('age');
			if(agestoredValue){
				document.getElementById('age').value = agestoredValue;
			}

			var heightstoredValue = localStorage.getItem('height');
			if(heightstoredValue){
				document.getElementById('height').value = heightstoredValue;
			}

			var weightstoredValue = localStorage.getItem('weight');
			if(weightstoredValue){
				document.getElementById('weight').value = weightstoredValue;
			}

			var waterstoredValue = localStorage.getItem('glassesWater');
			if(waterstoredValue){
				document.getElementById('glasses_num').value = waterstoredValue;
			}

			var malestoredValue = localStorage.getItem('male');
			if(malestoredValue){
				document.getElementById("male").checked = true;

			}

			var femalestoredValue = localStorage.getItem('female');
			if(femalestoredValue){
				document.getElementById("female").checked = true;
				
			}
      
		
}

var calorie = 0;
function inform(){
	
	var ageValue = document.getElementById('age').value;
	localStorage.setItem('age',ageValue);
	var heightValue = document.getElementById('height').value;
	localStorage.setItem('height',heightValue);
	var weightValue = document.getElementById('weight').value;
	localStorage.setItem('weight',weightValue);
	localStorage.removeItem('glasses');


	male = document.getElementById('male');
	female = document.getElementById('female');
	age = document.getElementById('age');
	height = document.getElementById('height');
	weight = document.getElementById('weight');
	if(age.value && height.value && weight.value)
	{
    document.getElementById('initial').style.display = "none";
    document.getElementById('edit').style.display = "inline";

    if(male.checked){
    	var BMR = 66.47 + (13.75*parseInt(weight.value)) + (5.003*parseInt(height.value)) - (6.755*parseInt(age.value));

	localStorage.setItem('male','check');
	localStorage.removeItem('female');
    }
    else if(female.checked){
        var BMR = 655.1 + (9.563*parseInt(weight.value)) + (1.85*parseInt(height.value)) - (4.676*parseInt(age.value));
    localStorage.setItem('female','check');
    localStorage.removeItem('male');
    }
    
    calorie = (BMR*1.55).toFixed(2);
  document.getElementById('later').style.display = "block";
	document.getElementById('actualDisplay').innerHTML = calorie + " calories. ";
	document.getElementById('actualDisplay').style.display = "block";
	document.getElementById('display').style.display = "block";
	document.getElementById('newMessage').style.display = "block";
  document.getElementById('cont').style.display = "block";
	createTable();
	document.getElementById('button').style.display = "block";
	document.getElementById('submitLine').style.display = "block";
	document.getElementById('check').style.display = "block";
	document.getElementById('label_water').style.display = "block";
	document.getElementById('glasses_num').style.display = "inline-block";

  var a = 1;
      var foodexist = localStorage.getItem('foodName'+ a);

      while(foodexist){

        var foodTable = document.getElementById('foodList');
        var rowCnt = foodTable.rows.length;          
        var tr = foodTable.insertRow(rowCnt);
        var a = rowCnt;

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td');      
            td = tr.insertCell(c);

            if (c == 4) {           

                var button = document.createElement('input');

                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Delete!');
                button.setAttribute('id','removeButton'+ a);
                button.setAttribute('onclick', 'removeRow(this)');
              
                td.appendChild(button);
            }
            else if(c == 0) {
                
                var element = document.createElement('p');
                element.innerHTML = foodexist;


                td.appendChild(element);

            }

            else if(c == 1){

                var element = document.createElement('p');
                carbsexist = localStorage.getItem('carbs'+ a);
                element.innerHTML = carbsexist;

                td.appendChild(element);  
            }

            else if(c == 2){

                var element = document.createElement('p');
                protiensexist = localStorage.getItem('protiens'+ a);
                element.innerHTML = protiensexist;

                td.appendChild(element);  
            }

            else if(c == 3){

                var element = document.createElement('p');
                fatsexist = localStorage.getItem('fats'+ a);
                element.innerHTML = fatsexist;

                td.appendChild(element);  
            }
        }

        a = a+1;
        foodexist = localStorage.getItem('foodName'+ a);
      }
      
      a = a - 1;
      var foodLastStored = localStorage.getItem('foodName'+ a);
      if(foodLastStored){
        document.getElementById('foodName').value = foodLastStored;
      }

      var carbsLastStored = localStorage.getItem('carbs'+ a);
      if(carbsLastStored){
        document.getElementById('carbs').value = carbsLastStored;
      }

      var protiensLastStored = localStorage.getItem('protiens'+ a);
      if(protiensLastStored){
        document.getElementById('protiens').value = protiensLastStored;
      }

      var fatsLastStored = localStorage.getItem('fats'+ a);
      if(fatsLastStored){
        document.getElementById('fats').value = fatsLastStored;
      }


      carbstotal = 0;
        protienstotal = 0;
        fatstotal = 0;
        
        for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
         
         add = parseInt(document.getElementById("foodList").rows[r].cells[1].childNodes[0].innerHTML);
         carbstotal = carbstotal + add;
        }

        for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
         
         add = parseInt(document.getElementById("foodList").rows[r].cells[2].childNodes[0].innerHTML);
         protienstotal = protienstotal + add;
        }

        for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
         
         add = parseInt(document.getElementById("foodList").rows[r].cells[3].childNodes[0].innerHTML);
         fatstotal = fatstotal + add;
        }
    
      total();

      document.getElementById("remark").style.display = "block";


	}
  else{
        alert('Please fill in all the fields!');
       }
 }
 
    var arrHead = new Array();
    arrHead = ['Food Name', 'carbs(in g)', 'protiens(in g)', 'fats(in g)', ''];

function createTable() {

        var foodList = document.createElement('table');
        foodList.setAttribute('id', 'foodList');            

        var tr = foodList.insertRow(-1);

        for (var h = 0; h < arrHead.length; h++) {
            var th = document.createElement('th');          
            th.innerHTML = arrHead[h];
            tr.appendChild(th);
        }

        var div = document.getElementById('cont');
        div.appendChild(foodList);    
    }

    function openPop(){
      document.getElementById('modal').style.visibility = "visible";
    }

    var carbstotal = 0;
    var protienstotal = 0;
    var fatstotal = 0;

function addFood() {
        

        food = document.getElementById('foodName').value;
        carbs = document.getElementById('carbs').value;
        protiens = document.getElementById('protiens').value;
        fats = document.getElementById('fats').value;
        

        if(food && carbs && protiens && fats)
        {
         

        document.getElementById('modal').style.visibility = "hidden";
       
        var foodTable = document.getElementById('foodList');
        var rowCnt = foodTable.rows.length;
        
      
       if(rowCnt!=1)
       {
        rowNumdel = rowCnt - 1;
        foodTable.deleteRow(rowNumdel);
       }

             
        var rowCnt = foodTable.rows.length;        
        var tr = foodTable.insertRow(rowCnt);
        var a = rowCnt;

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td');      
            td = tr.insertCell(c);

            if (c == 4) {           

                var button = document.createElement('input');

                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Delete!');
                button.setAttribute('id','removeButton'+ a);
                button.setAttribute('onclick', 'removeRow(this)');

                td.appendChild(button);
            }
            else if(c == 0) {
                
                var element = document.createElement('p');
                element.innerHTML = food;


                td.appendChild(element);

            }

            else if(c == 1){

                var element = document.createElement('p');
                element.innerHTML = carbs;

                td.appendChild(element);	
            }

            else if(c == 2){

                var element = document.createElement('p');
                element.innerHTML = protiens;

                td.appendChild(element);  
            }

            else if(c == 3){

                var element = document.createElement('p');
                element.innerHTML = fats;

                td.appendChild(element);  
            }
        }
       
       localStorage.setItem('foodName'+ a,food);
       localStorage.setItem('carbs'+ a,carbs);
       localStorage.setItem('protiens'+ a,protiens);
       localStorage.setItem('fats'+ a,fats);



        carbstotal = 0;
        protienstotal = 0;
        fatstotal = 0;
        
        for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
         
         add = parseInt(document.getElementById("foodList").rows[r].cells[1].childNodes[0].innerHTML);
         carbstotal = carbstotal + add;
        }

        for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
         
         add = parseInt(document.getElementById("foodList").rows[r].cells[2].childNodes[0].innerHTML);
         protienstotal = protienstotal + add;
        }

        for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
         
         add = parseInt(document.getElementById("foodList").rows[r].cells[3].childNodes[0].innerHTML);
         fatstotal = fatstotal + add;
        }
    
      total();

      document.getElementById("remark").style.display = "block";

      }

        else{
        alert('Please fill in all the fields!');
       }
    }

    function removeRow(elembutton) {
        var foodTable = document.getElementById('foodList');
        foodTable.deleteRow(elembutton.parentNode.parentNode.rowIndex);
      
       var identity = elembutton.id;
       var numdis = parseInt(identity[identity.length - 1]);


        var rowCnt = foodTable.rows.length; 
        rowNumdel = rowCnt - 1;
        foodTable.deleteRow(rowNumdel);
         
        
          for(i=numdis; i<rowCnt;i++)
       {
          var foodNamenextValue = localStorage.getItem('foodName'+(i+1));
          var carbsnextValue = localStorage.getItem('carbs'+(i+1));
          var protiensnextValue = localStorage.getItem('protiens'+(i+1));
          var fatsnextValue = localStorage.getItem('fats'+(i+1));
          if(i!=(rowCnt-1))
          {
            document.getElementById('removeButton'+ (i+1)).id = ('removeButton'+i);
          }

          localStorage.setItem('foodName'+ i,foodNamenextValue);
          localStorage.setItem('carbs'+ i,carbsnextValue);
          localStorage.setItem('protiens'+ i,protiensnextValue);
          localStorage.setItem('fats'+ i,fatsnextValue);

       }

        
        localStorage.removeItem('foodName'+rowNumdel);
        localStorage.removeItem('carbs'+rowNumdel);
        localStorage.removeItem('protiens'+rowNumdel);
        localStorage.removeItem('fats'+rowNumdel);


        carbstotal = 0;
        protienstotal = 0;
        fatstotal = 0;
        
        for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
         
         add = parseInt(document.getElementById("foodList").rows[r].cells[1].childNodes[0].innerHTML);
         carbstotal = carbstotal + add;
        }

        for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
         
         add = parseInt(document.getElementById("foodList").rows[r].cells[2].childNodes[0].innerHTML);
         protienstotal = protienstotal + add;
        }

        for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
         
         add = parseInt(document.getElementById("foodList").rows[r].cells[3].childNodes[0].innerHTML);
         fatstotal = fatstotal + add;
        }
    
      total(); 
    }
    
       

    function checkCalorie(){
          
       var waterValue = document.getElementById('glasses_num').value;
	     localStorage.setItem('glassesWater',waterValue); 

        carbstotal = 0;
        protienstotal = 0;
        fatstotal = 0;     
       
       for (r = 1; r < document.getElementById("foodList").rows.length - 1; r++) {
       	 
       	 add = parseInt(document.getElementById("foodList").rows[r].cells[1].childNodes[0].innerHTML);
       	 carbstotal = carbstotal + add;
        }

        for (r = 1; r < document.getElementById("foodList").rows.length - 1; r++) {
       	 
       	 add = parseInt(document.getElementById("foodList").rows[r].cells[2].childNodes[0].innerHTML);
       	 protienstotal = protienstotal + add;
        }

        for (r = 1; r < document.getElementById("foodList").rows.length - 1; r++) {
       	 
       	 add = parseInt(document.getElementById("foodList").rows[r].cells[3].childNodes[0].innerHTML);
       	 fatstotal = fatstotal + add;
        }
      
      var totalCalories_eaten = ((carbstotal*4) + (protienstotal*4) + (fatstotal*9)).toFixed(2);
      document.getElementById('totalCalories_eaten').style.display="block";
      
      document.getElementById('totalCalories_eaten').innerHTML = "Total Calories taken: " + totalCalories_eaten;
      document.getElementById('diff').style.display="block";

      water_glass = document.getElementById('glasses_num').value;
      var remaining = calorie - totalCalories_eaten;

      if(remaining<0)
      {
      	alert("Hey, you are gonna EXCEED your calorie limit! Eat less and Healthy @ SIP & TASTE");
        document.getElementById('diff').innerHTML = "Extra Calories Eaten: " + (-remaining).toFixed(2);
        document.getElementById('closeLine').style.display="none";
      }
      else{
      	document.getElementById('diff').innerHTML = "Remaining calories you can still have is: " + (remaining).toFixed(2);
         if(remaining > (calorie/2))
         {
         	alert("You are eating less, Have more food!");
         }        
      }

      if((water_glass<6)||(water_glass>8))
      {
      	alert("Water intake needs to be corrected!");
      }

      if((water_glass>=6)&&(water_glass<=8)&&(remaining>0)&&(remaining<(calorie/2)))
      {
      	document.getElementById('closeLine').style.display="block";
      	document.getElementById('closeLine').innerHTML = "Chill! Peace! Relax and Enjoy your food here @ SIP & TASTE";
      }
      

    }
  function exit(){
    document.getElementById('modal').style.visibility = "hidden";
  }
 function getBack(){
    window.location.reload();
    document.getElementById('later').style.display = "none";
    document.getElementById('edit').style.display = "none";
    document.getElementById('initial').style.display = "inline-block";

 }
function total(){
    
  var foodTable = document.getElementById('foodList');

        var rowCnt = foodTable.rows.length;        
        var tr = foodTable.insertRow(rowCnt);
        //tr.id = 'id'+ rowCnt;              

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td');      
            td = tr.insertCell(c);

            
            if(c == 0) {
                
                var element = document.createElement('p');
                element.innerHTML = "[Total (in calories)]";


                td.appendChild(element);

            }

            else if(c == 1){

                var element = document.createElement('p');
                element.innerHTML = "[" + (carbstotal*4) +"]";

                td.appendChild(element);  
            }

            else if(c == 2){

                var element = document.createElement('p');
                element.innerHTML = "[" + (protienstotal*4) + "]";

                td.appendChild(element);  
            }

            else if(c == 3){

                var element = document.createElement('p');
                element.innerHTML = "["+ (fatstotal*9) + "]";

                td.appendChild(element);  
            }
        }
}

