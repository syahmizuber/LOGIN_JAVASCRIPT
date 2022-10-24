function Login() {

    let pass = document.getElementById('pass').value;
    let user = document.getElementById('user').value;
    // declaration Requirement for Password input//
    let UppercaseReq = /(?=.*[A-Z])/;
    let LowercaseReq = /(?=.*[a-z])/;
    let NumberReq = /(?=.*[0-9])/;
    let SymbolReq = /(?=.*[#,_^!@*&])/;


    if (pass.length < 12) {
        alert('Sorry, your password less than 8. Atleas more than or equal 8');
    }

    else if (user == '') {
		alert("Please enter a username.");
	}
    else if (user.length<6) {
		alert("Username atleat 6 or more character");
	}

    else if (!UppercaseReq.test(pass)) {
        alert("The password need to include atleast ONE uppercase.");
    }
    else if (!LowercaseReq.test(pass)) {
        alert("The password need to include atleast ONE lowercase.");
    }
 
    else if (!NumberReq.test(pass)) {
        alert("The password need to include atleast ONE number.");
    }
    else if (!SymbolReq.test(pass)) {
        alert("The password need to include atleast ONE symbol.");
    }

    else {
        alert('Login Succesfully!');
    }
}
