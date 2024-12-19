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
    if (!albumGrid) {
        console.error('Album grid element not found');
        return;
    }
    albumGrid.innerHTML = ''; // Clear existing content

    const favoriteAlbum = localStorage.getItem('favoriteAlbum');

    albums.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'album-card';
        if (album.title === favoriteAlbum) {
            albumCard.classList.add('favorite');
        }
        albumCard.innerHTML = `
            <span class="album-genre">${album.genre}</span>
            <div class="album-cover" style="background-image: url('${album.coverUrl}');" loading="lazy"></div>
            <h3>${album.title}</h3>
            <p>Release date: ${album.releaseDate}</p>
            <button class="favorite-btn">Favorite</button>
        `;
        albumCard.querySelector('.favorite-btn').addEventListener('click', () => {
            localStorage.setItem('favoriteAlbum', album.title);
            highlightFavoriteAlbum(album.title);
        });
        albumGrid.appendChild(albumCard);
    });
}

function highlightFavoriteAlbum(favoriteTitle) {
    document.querySelectorAll('.album-card').forEach(card => {
        if (card.querySelector('h3').textContent === favoriteTitle) {
            card.classList.add('favorite');
        } else {
            card.classList.remove('favorite');
        }
    });
}

function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.navbar-links a');
    links.forEach(link => {
        if (link.pathname === currentPath) {
            link.classList.add('active');
        }
    });
}

function addHoverEffects(selector, transformStyle) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = transformStyle;
            this.style.transition = 'transform 0.3s ease';
        });
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    addSmoothScrolling();
    setActiveNavLink();

    if (window.location.pathname.endsWith('index.html')) {
        populateAlbums();
    }

    addHoverEffects('.album-cover', 'scale(1.05)');
    addHoverEffects('.gallery-item', 'scale(1.05)');
    addHoverEffects('.social-icon', 'rotate(10deg)');
});