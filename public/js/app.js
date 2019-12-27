document.querySelector('.btn-primary').addEventListener('click', (event) => {
    event.preventDefault();

    artist = document.getElementById('artist').value;
    song = document.getElementById('song-name').value;

    if (artist !== '' && song !== '') {
        fetch(`http://127.0.0.1:3000/lyrics?artist=${artist}&song=${song}`).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    document.querySelector('p').innerHTML = data.error
                } else {
                    document.querySelector('p').innerHTML = data.lyrics;
                }
            })
        })

    } else {
        document.querySelector('p').innerHTML = 'Please give the complete information'
    }

    document.querySelector('p').classList.add('lyrics')



})