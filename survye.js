document.getElementById('submit-button').addEventListener('click', function() {
   
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('date-of-birth').value;
    const country = document.getElementById('country').value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(e => e.value);
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

  
    const resultsHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    
    document.getElementById('results').innerHTML = resultsHTML;
    document.getElementById('popup').style.display = 'block';


    document.getElementById('survey-form').reset();
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('survey-form').reset();
});