const userId = new URL(location.href).searchParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(value => {
        const ul = document.createElement('ul');

        const name = document.createElement('li');
        const username = document.createElement('li');
        const email = document.createElement('li');
        const street = document.createElement('li');
        const suite = document.createElement('li');
        const city = document.createElement('li');
        const zipcode = document.createElement('li');
        const lat = document.createElement('li');
        const lng = document.createElement('li');
        const phone = document.createElement('li');
        const website = document.createElement('li');
        const compName = document.createElement('li');
        const compCatchPhrase = document.createElement('li');
        const compBs = document.createElement('li');

        name.innerText = `${value.name}`
        username.innerText = `${value.username}`
        email.innerText = `${value.email}`
        street.innerText = `${value.address.street}`
        suite.innerText = `${value.address.suite}`
        city.innerText = `${value.address.city}`
        zipcode.innerText = `${value.address.zipcode}`
        lat.innerText = `${value.address.geo.lat}`
        lng.innerText = `${value.address.geo.lng}`
        phone.innerText = `${value.phone}`
        website.innerText = `${value.website}`
        compName.innerText = `${value.company.name}`
        compCatchPhrase.innerText = `${value.company.catchPhrase}`
        compBs.innerText = `${value.company.bs}`

        ul.append(name, username, email, street, suite, city, zipcode, lat, lng, phone, website, compName, compCatchPhrase, compBs);
        document.body.appendChild(ul);
    })