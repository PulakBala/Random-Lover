const randomUser = () => {
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
}

const displayUser = user => {
    console.log(user)
    const randomUser = document.getElementById('random-user');
    randomUser.innerHTML = ` `;
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <img src = "${user.picture.large}" >
        <h3>Name : ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <h3>City : ${user.location.city} </h3>
        <h3>Street : ${user.location.street.number} ${user.location.street.name}</h3>

    `;
    randomUser.appendChild(newDiv);
}
