let manPower = [];

let idAssigner = 0;

let totalMonthly = 0;

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  $('#submitBtn').on('click', addEmployee);
  $('#peopleEmployed').on('click','.removeBtn' ,removeEmployee);
  // add click event handler that calls the addNewCar function

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
    
   // add new employee salary to total monthly:
   totalMonthly += parseInt(employee.salary);

  // get input values
  manPower.push(employee);
  // add to array
render();
changeBackground();
  // anything else?

}

function render() {
  //update html
  //target posts table
  $('.total').empty();
  $('#peopleEmployed').empty();
  //$('#carsInGarage').append('<ul>Year Make Model</ul>')
  //add new content
      //loop through array
  for(let employee of manPower)  {
      $('#peopleEmployed').append(`
      <table>
       <td>${employee.first}</td>
       <td>${employee.last}</td> 
       <td>${employee.id}</td>
       <td>${employee.title}</td>
       <td>${employee.salary}</td> 
       <td><button class="removeBtn"id="${employee.id2}">Delete</button></td>
       </table>
      `)
      //append to each post to DOM
      
  }
      console.log(totalMonthly);  // .append makes a list, i want to just update total monthly. .data()
      
     // $( ".total" ).data( { totalMonthly } ).data()
      
      $('.total').append(`  
    ${totalMonthly}
    `)    
}

function removeEmployee(){
  //remove emplyee and salary from totalmonthluy
  for(let employee of manPower){
    if (employee.id2 == $(this).attr("id")){
      console.log("found it",employee)
      manPower.splice(manPower.indexOf(employee),1);
      console.log(manPower);
      totalMonthly -= parseInt(employee.salary); 
    }
  }
  render();
}
//change background color to red over 20000

function changeBackground(){
  if(totalMonthly > 20000){
    $('footer').addClass('overbudget');
  }
}
