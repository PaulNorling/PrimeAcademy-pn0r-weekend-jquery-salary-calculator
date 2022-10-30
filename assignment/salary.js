let manPower = [];

let idAssigner = 0;

let totalMonthly = 0;

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  $('#submitBtn').on('click', addEmployee);  //event handlers
  $('#peopleEmployed').on('click','.removeBtn' ,removeEmployee);
  
}
function addEmployee() {
  
  idAssigner++;
  
  employee = {
    first: $('#firstNameInput').val(),
    last: $('#lastNameInput').val(),
    id: $('#IdInput').val(),
    title: $('#TitleInput').val(),
    salary: $('#annualSalaryInput').val(),
    id2: idAssigner,
   }
   $('#firstNameInput').val('')
   $('#lastNameInput').val('')
   $('#IdInput').val('')
   $('#TitleInput').val('')
   $('#annualSalaryInput').val('')
    
   if(employee.salary>0){
   totalMonthly += parseInt(employee.salary);
  }else employee.salary=0;

  manPower.push(employee);
  render();
  }


function render() {
  changeBackground();
  $('.total').empty();
  $('#peopleEmployed').empty();
  for(let employee of manPower)  {
    $('#peopleEmployed').append(`
      <table>
         <td style="width:15%">${employee.first}</td>
         <td style="width:15%">${employee.last}</td> 
         <td style="width:10%">${employee.id}</td>
         <td style="width:20%">${employee.title}</td>
         <td style="width:15%">$${parseInt(employee.salary).toLocaleString()}</td> 
         <td style="width:15%"><button class="removeBtn"id="${employee.id2}">Delete</button></td>
       </table>
    `)
  }
  $('.total').append(`${totalMonthly.toLocaleString()}`)    
}

function removeEmployee(){
  for(let employee of manPower){
    if (employee.id2 == $(this).attr("id")){
      console.log("found it",employee)
      manPower.splice(manPower.indexOf(employee),1);
      console.log(manPower);
      if(employee.salary>0){
      totalMonthly -= parseInt(employee.salary); 
      }
    }
  }
  render();
}

function changeBackground(){
  if(totalMonthly >= 20000){
    $('footer').addClass('overbudget');
  }else
    $('footer').removeClass('overbudget');
}