let garage = [];

let idAssigner = 0;

$(document).ready(readyNow);



function readyNow() {
  console.log("DOM is loaded!");

  $('#submitBtn').on('click', addNewCar);
  $('#carsInGarage').on('click','.removeBtn' ,removeCar);
  // add click event handler that calls the addNewCar function

}

function addNewCar() {
  idAssigner++;
  
  car = {
    year: $('#yearInput').val(),
    make: $('#makeInput').val(),
    model: $('#modelInput').val(),
    make: $('#makeInput').val(),
    model: $('#modelInput').val(),
    id: idAssigner,
   } 
   
   $('#yearInput').val('')
   $('#makeInput').val('')
   $('#modelInput').val('')
   $('#makeInput').val('')
   $('#modelInput').val('')

  // get input values
  garage.push(car);
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
  for(let car of garage)  {
      $('#carsInGarage').append(`
      <li>
       ${car.year}
       ${car.make} 
       ${car.model}
       ${car.make} 
       ${car.model} 
       <button class="removeBtn"id="${car.id}">remove car</button></li>
      `)
      //append to each post to DOM
      
  }
      
}

function removeCar(){
  console.log('in removeCar')
  //remove car from garage
  for(let car of garage){
    if (car.id == $(this).attr("id")){
      console.log("found it",car)
      garage.splice(garage.indexOf(car),1);
      console.log(garage);
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