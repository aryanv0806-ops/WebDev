document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('Generate')
    const username = document.getElementById('username');
    const password = document.getElementById('pass');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const name = document.getElementById('fullname');
    const job = document.getElementById('job');
    const age = document.getElementById('age');
    const gender = document.getElementById('gender');

    const API_KEY = "dEI0sQnSfveS0o3OXKL92EQqhJQ57zVJgUfuYDTJ"
    btn.addEventListener('click', async () => {
        const url = `https://api.api-ninjas.com/v2/randomuser/?count=1`
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-Api-Key': API_KEY, // Ye sabse zaruri line hai
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            username.textContent = `Username: ${data[0].username}`;
            password.textContent = `Password : ${data[0].password}`
            email.textContent = ` Email : ${data[0].email}`
            phone.textContent = `Phone : ${data[0].phone}`
            name.textContent = `Full Name: ${data[0].full_name}`
            job.textContent = `Job : ${data[0].job}`
            age.textContent = `Age : ${data[0].age}`
            gender.textContent = `Gender : ${data[0].gender}`
        } catch (error) {
            console.log("Error", error);
        }
    })
})