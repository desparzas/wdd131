const albums = [
    {
        title: "Please Please Me",
        releaseDate: "1963",
        genre: "Rock, Pop",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/Please%20Please%20Me.jpg?itok=cSEo8yFr"
    },
    {
        title: "With the Beatles",
        releaseDate: "1963",
        genre: "Rock, Pop",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/With%20the%20Beatles.jpg?itok=vnpl3Rdz"
    },
    {
        title: "A Hard Day's Night",
        releaseDate: "1964",
        genre: "Rock, Pop",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/A%20Hard%20Days%20Night.jpg?itok=jqrfLhPN"
    },
    {
        title: "Beatles for Sale",
        releaseDate: "1964",
        genre: "Rock, Folk Rock",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/The%20Beatles%20for%20Sale.jpg?itok=-SUU1PyN"
    },
    {
        title: "Help!",
        releaseDate: "1965",
        genre: "Rock, Pop Rock",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/Help.jpg?itok=Iqlgwo0A"
    },
    {
        title: "Rubber Soul",
        releaseDate: "1965",
        genre: "Folk Rock, Rock",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/Rubber%20Soul.jpg?itok=P8DYZM6d"
    },
    {
        title: "Revolver",
        releaseDate: "1966",
        genre: "Rock, Psychedelic Rock",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/Revolver.jpg?itok=l8yRxXJi"
    },
    {
        title: "Sgt. Pepper's Lonely Hearts Club Band",
        releaseDate: "1967",
        genre: "Psychedelic Rock, Rock",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-05/Sgt%20Pepper.jpg?itok=6QmISX3j"
    },
    {
        title: "Magical Mystery Tour",
        releaseDate: "1967",
        genre: "Psychedelic Rock, Pop",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/Magical-Mystery-Tour.jpg?itok=Cxny3nsp"
    },
    {
        title: "The Beatles (The White Album)",
        releaseDate: "1968",
        genre: "Rock, Experimental",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/WA_Press_26.jpg?itok=fsl9IIvg"
    },
    {
        title: "Yellow Submarine",
        releaseDate: "1969",
        genre: "Rock, Soundtrack",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/Yellow%20Sub.jpg?itok=BSvICntS"
    },
    {
        title: "Abbey Road",
        releaseDate: "1969",
        genre: "Rock",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/Abbey%20Road.jpg?itok=_AGlITc8"
    },
    {
        title: "Let It Be",
        releaseDate: "1970",
        genre: "Rock",
        coverUrl: "https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/CoverLetItBe.jpg?itok=OZOY-RDK"
    }
];


function populateAlbums() {
    const albumGrid = document.querySelector('.album-grid');
    albumGrid.innerHTML = ''; // Clear existing content

    albums.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'album-card';
        albumCard.innerHTML = `
            <span class="album-genre">${album.genre}</span>
            <div class="album-cover" style="background-image: url('${album.coverUrl}')"></div>
            <h3>${album.title}</h3>
            <p>Release date: ${album.releaseDate}</p>
        `;
        albumGrid.appendChild(albumCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    populateAlbums();

    // Add hover effect to album covers
    const albumCovers = document.querySelectorAll('.album-cover');
    albumCovers.forEach(cover => {
        cover.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        cover.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add a simple animation to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(10deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    });
});

