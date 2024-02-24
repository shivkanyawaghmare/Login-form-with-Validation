// function validateform()
// {
//     var username = document.getElementById('username').value;
//     var mailid = document.getElementById('mailid').value;
//     var password = document.getElementById('password').value;
//     var cpassword = document.getElementById('cpassword').value;

//     // Perform validation
//     if (username === '') {
//         alert('Username cannot be empty');
//            return false;
//     }
//     if (mailid === '') {
//         alert('Mail ID cannot be empty');
//         return false;
//     }
//     if (password === '') {
//         alert('Password cannot be empty');
//         return false;
//     }
//     if (cpassword === '') {
//         alert('Confirm password cannot be empty');
//         return false;
//     }
//     else
//     {
//          alert('Login successful!');
//         return true;

//     }

     // If validation passes, you can proceed with form submission or other actions
    // alert('Login successful!');
//}

function fun1()
{
    var pattern = '(^[A-Z]{1,1})+([A-Za-z$@]{1,10})$';
    var uname = f1.uname.value;
    if(uname.match(pattern))
    {
        f1.uname.style.border="2px solid green";
    }
    else
    {
        f1.uname.style.border="2px solid red";
        f1.uname.value="";
        f1.uname.focus();
    }
}

function fun2()
{
    var mailID = '(^[a-z]{1,1})+([a-z0-9]{0,9})+([._]{0,1})([a-z0-9]{1,19})+([@]{1,1})([a-z]{2,19})+([.]{1,1})(com|co.in|usa|fr)$';
    var mail = f1.mail.value;
    if(mail.match(mailID))
    {
        f1.mail.style.border="2px solid green";
    }
    else
    {

        f1.mail.style.border="2px solid red";
        f1.mail.value="";
        f1.mail.focus();
    }
}

function fun3()
{
    // var password= '(^[A-Z]{1,1})+([a-z0-9]{1,8})$';
    var pattern = '(^[a-zA-Z0-9@#$%&*]{2,9})+([@#$%*]{1,1})+([a-zA-z0-9@#$%&*]{3,10})$';
    var password = f1.password.value;
    if(password.match(pattern))
    {
        f1.password.style.border="2px solid green";
    }
    else
    {
        f1.password.style.border="2px solid red";
        f1.password.value="";
        f1.password.focus();
    }
}

function fun4()
{
    // var password= '(^[A-Z]{1,1})+([a-z0-9]{1,8})$';
    var cpassword = f1.cpassword.value;
    var password = f1.password.value;
    if(cpassword.match(password))
    {
        f1.cpassword.style.border="2px solid green";
    }
    else
    {
        f1.cpassword.style.border="2px solid red";
        f1.cpassword.value="";
        f1.cpassword.focus();
    }
}