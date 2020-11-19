//sign in script, will bring you to home page if answered correctly.
Name = window.prompt("Enter your username: ");
Password = window.prompt("Enter your password: ");
if(Password == 'password123' && Name == 'user1') alert('logged in!');
   window.location.href = "https://gull.winsposure.com/Html-testing/users/user1/userpage.html";

if(Password == 'password1234' && Name == 'user2') alert('Logged in!');
   window.location.href = "http://gull.winsposure.com/Html-testing/users/user2/userpage.html";

   

//Needs: read list of "Names" and "Passwords" form either an array or .json file.
