
 let num = prompt("Enter A Number:")

 let hrs = parseInt(num / 3600) 
 let mins = parseInt((num % 3600) / 60) 
 let secs = parseInt(num % 60)

 alert(num + " Is Equal To " + hrs + "Hrs: " + mins + "Mins: " + secs + "Secs."   )
 