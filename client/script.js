function switchForm(formType) {
    if (formType === 'signup') {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('signup-form').style.display = 'flex';
    } else if (formType === 'login') {
      document.getElementById('signup-form').style.display = 'none';
      document.getElementById('login-form').style.display = 'flex';
    }
}

function switchForm2(formType) {
    document.body.style.backgroundColor = 'yellow';
}