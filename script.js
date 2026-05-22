const DateTime = luxon.DateTime;

function calculateAge(e) {

    console.log('fuction called');
    
    e.preventDefault(); // Prevent form submission

    const birthdateInput = document.querySelector('#birthdate');
    const birthdate = DateTime.fromISO(birthdateInput.value);
    const now = DateTime.now();
    const age = now.diff(birthdate, ['years', 'months', 'days']).toObject();

    document.querySelector('#result').textContent = `You are ${Math.floor(age.years)} years, ${Math.floor(age.months)} months, and ${Math.floor(age.days)} days old.`;  
    console.log(age);

};