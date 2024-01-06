const sessions = JSON.parse(localStorage.getItem('sessions'));
console.log(sessions);

if (sessions) {
    for (const session of sessions) {
        const block = document.createElement('h2');
        block.innerText = `${session.date}`

        document.body.appendChild(block);
    }
} else {
    const block = document.createElement('h2');
    const image = document.createElement('img');

    image.src = 'https://media.tenor.com/OGU0I55l8dMAAAAM/spongebob-cry-kapa.gif';
    image.alt = 'no ip :(';
    block.innerText = 'No Sessions Found!';

    document.body.append(block, image);
}
