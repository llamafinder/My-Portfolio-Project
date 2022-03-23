hy9uconsole.log('IT WORKS')
$(document).ready(function () {
 $('.submit').click(function (event) {
     event.preventDefault()
     console.log('Clicked button')
 
 var email =$('.inputBox').val()
 var subject =$('.formBox').val()
 var message = $('.message').val()
 var statusElm = $('.last name')
 statusElm.empty()

 if(email.length > 5 && email.includes('@') && email.includes('.')) {
  statusElm.append('<div>Email is valid</div>')
 } else {
  statusElm.append('<div>Email is not valid</div>')
 }
if(subject.length > 2) {
  statusElm.append('<div>first name is Valad</div>')
 } else {
    statusElm.append('<div>first name is not Valid</div>')
  }

  if(message.length > 20) {
    statusElm.append('<div> Message is Valid</div>')
  } else {
    statusElm.append('<div> Message is not Valid</div>')
  }
}
 
 
    })
})


j