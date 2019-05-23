

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
				document.getElementById("female").checked = false;

			}
			var malestoredValue = localStorage.getItem('male');
			if(malestoredValue){
				document.getElementById("male").checked = true;
				document.getElementById("female").checked = false;

			}
			var femalestoredValue = localStorage.getItem('female');
			if(femalestoredValue){
				document.getElementById("female").checked = true;
				document.getElementById("male").checked = false;

			}

		}

function remove(){
			document.getElementById('textfield').value = "";
			localStorage.removeItem('text');
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
	}
 }
 
    var arrHead = new Array();
    arrHead = ['Food Name', 'carbs(in g)', 'protiens(in g)', 'fats(in g)', ''];

var created = 0;
function createTable() {

        created = created + 1;

        if(created == 1)
        {
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
        
    }

function addRow() {
        var foodTable = document.getElementById('foodList');

        var rowCnt = foodTable.rows.length;        
        var tr = foodTable.insertRow(rowCnt);              

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td');      
            td = tr.insertCell(c);

            if (c == 4) {           

                var button = document.createElement('input');

                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Not gonna eat? Delete!');
                button.setAttribute('id','removeButton');
                button.setAttribute('onclick', 'removeRow(this)');

                td.appendChild(button);
            }
            else if(c == 0) {
                
                var element = document.createElement('input');
                element.setAttribute('type', 'text');
                element.setAttribute('value', '');

                td.appendChild(element);
            }

            else{

                var element = document.createElement('input');
                element.setAttribute('type', 'number');
                element.setAttribute('value', '');

                td.appendChild(element);	
            }
        }
    }

    function removeRow(elembutton) {
        var foodTable = document.getElementById('foodList');
        foodTable.deleteRow(elembutton.parentNode.parentNode.rowIndex);     
    }

    function checkCalorie(){
          
       var waterValue = document.getElementById('glasses_num').value;
	     localStorage.setItem('glassesWater',waterValue);

       var carbs = 0;
       var protiens = 0;
       var fats = 0;
       
       for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
       	 
       	 add = parseInt(document.getElementById("foodList").rows[r].cells[1].childNodes[0].value);
       	 carbs = carbs + add;
        }

        for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
       	 
       	 add = parseInt(document.getElementById("foodList").rows[r].cells[2].childNodes[0].value);
       	 protiens = protiens + add;
        }

        for (r = 1; r < document.getElementById("foodList").rows.length; r++) {
       	 
       	 add = parseInt(document.getElementById("foodList").rows[r].cells[3].childNodes[0].value);
       	 fats = fats + add;
        }
      
      var totalCalories_eaten = ((carbs*4) + (protiens*4) + (fats*9)).toFixed(2);
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
          document.getElementById('closeLine').style.display="none";
         }        
      }

      if((water_glass<6)||(water_glass>8))
      {
      	alert("Water intake needs to be corrected!");
        document.getElementById('closeLine').style.display="none";
      }

      if((water_glass>=6)&&(water_glass<=8)&&(remaining>0)&&(remaining<(calorie/2)))
      {
      	document.getElementById('closeLine').style.display="block";
      	document.getElementById('closeLine').innerHTML = "Chill! Peace! Relax and Enjoy your food here @ SIP & TASTE";
      }

    }



