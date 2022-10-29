let manPower = [];

let idAssigner = 0;

$(document).ready(readyNow);



function readyNow() {
  console.log("DOM is loaded!");

  $('#submitBtn').on('click', addEmployee);
  $('#carsInGarage').on('click','.removeBtn' ,removeEmployee);
  // add click event handler that calls the addNewCar function

}

function addEmployee() {
  idAssigner++;
  
  employee = {
    year: $('#firstNameInput').val(),
    make: $('#lastNameInput').val(),
    model: $('#IdInput').val(),
    make: $('#TitleInput').val(),
    model: $('#annualSalaryInput').val(),
    id: idAssigner,
   } 
   
   $('#firstNameInput').val('')
   $('#lastNameInput').val('')
   $('#IdInput').val('')
   $('#TitleInput').val('')
   $('#annualSalaryInput').val('')

  // get input values
  manPower.push(employee);
  // add to array
render();
  // anything else?

}



function render() {
  //update html
  //target posts table
  $('#carsInGarage').empty();
  //$('#carsInGarage').append('<ul>Year Make Model</ul>')
  //add new content
      //loop through array
  for(let employee of manPower)  {
      $('#carsInGarage').append(`
      <table>
       <td>${employee.year}</td>
       <td>${employee.make}</td> 
       <td>${employee.model}</td>
       <td>${employee.make}</td>
       <td>${employee.model}</td> 
       <td><button class="removeBtn"id="${employee.id}">Delete</button></td>
       </table>
      `)
      //append to each post to DOM
      
  }
      
}

function removeEmployee(){
  console.log('in removeCar')
  //remove car from garage
  for(let employee of manPower){
    if (employee.id == $(this).attr("id")){
      console.log("found it",employee)
      manPower.splice(manPower.indexOf(employee),1);
      console.log(manPower);
    }
  }
  render();
}








//  console.log($('.delete-btn').parent().siblings())

//  let posts = [];

//  $(document).ready(onReady);

//  function onReady()  {
//      console.log('jq')
//      $('#submitBtn').on('click', onSubmitPost);
//      $('#postsTable').on('click','.delete-btn' ,onDelete);
//      render();
//  }

// function onSubmitPost() {
//     // Update state....
//     // collect input values
// //    let thing = $('.containers').val();
// //    console.log(thing);
//    let post = {
//     firstName: $('#firstNameInput').val(),
//     lastName: $('#lastNameInput').val(),
//     id: $('#idInput').val(),
//     title: $('#titleInput').val(),
//     annualSalary: $('#annualSalaryInput').val(),
//     }
//     render();
//     posts.push(post);
//     console.log(posts);
// }


//   function render() {
// //     //update html
// //     //target posts table
//      $("#postsTable").empty();
     
    
// //     
// //     //add new content
// //         //loop through array
//      for(let post of posts)  {
// //         //append each post to DOM
//         $('#postsTable').append(`
//             <tr>
//               <td>${post.firstName}</td>
//               <td>${post.lastName}</td>
//               <td>${post.id}</td>
//               <td>${post.title}</td>
//               <td>${post.annualSalary}</td>
//               <td>
//                   <button class="delete-btn">
//                       Delete
//                   </button>
//               </td>
//             </tr>
//         `)
//     }
        
//  }

// // function onDelete()  {
// //     let newPosts = [];  //will hold posts we still want
// //     console.log('in onDelete()')
// //     console.log($(this));
// //     //figure out which delete button was clicked
// //     //$(this) is the specific element theat was clicked
// //     let contentToDelete = $(this) //  $(this) the delete button
// //         .parent()           // the <td> in which the button lives
// //         .siblings()         // all <td> in that row
// //         .first()            // the first of those <td>s
// //         .text();

// //     //     console.log('content to delete:', contentToDelete)

// //         for (let post of posts) {
// //             // add items that dont match contentToDelete variable into new array
// //           if (post.content !== contentToDelete) {
// //               newPosts.push(post);
// //           }
// //         }

// //         posts = newPosts;

// //         render();
// // }

// function onDelete()  {
//     let newPosts = [];  //will hold posts we still want
//     console.log('in onDelete()')

//     //figure out which delete button was clicked
//     //$(this) is the specific element theat was clicked
//     let contentToDelete = $(this) //  $(this) the delete button
//         .parent()           // the <td> in which the button lives
//         .siblings()         // all <td> in that row
//         .first()            // the first of those <td>s
//         .text();

//         console.log('content to delete:', contentToDelete)

//         for (let post of posts) {
//             // add items that dont match contentToDelete variable into new array
//           if (post.content !== contentToDelete) {
//               newPosts.push(post);
//           }
//         }

//         posts = newPosts;

//         render();
// }