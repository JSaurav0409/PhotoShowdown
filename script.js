document.addEventListener('DOMContentLoaded', () => {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const scoreboard = document.getElementById('scoreboard');
    const showRankingButton = document.getElementById('show-ranking');
    const hideRankingButton = document.getElementById('hide-ranking');
    const rankingSection = document.getElementById('ranking');
    const reloadButton = document.getElementById('reload-button');
    const hollywoodButton = document.getElementById('hollywood-button');
    const bollywoodButton = document.getElementById('bollywood-button');
    const randomButton = document.getElementById('random-button');
    const remainingClicksDisplay = document.getElementById('remaining-clicks');
    const maxClicks = 20;
    let userClickCount = 0;
    let currentCategory = 'random';

     // Hollywood images
    const hollywoodImages = [
        'Actress_Images/Scarlett Johansson.jpg',
        'Actress_Images/Angelina Jolie.jpg',
        'Actress_Images/Emma Watson.jpg',
        'Actress_Images/Jennifer Lawrence.jpg',
        'Actress_Images/Natalie Portman.jpg',
        'Actress_Images/Margot Robbie.jpg',
        'Actress_Images/Gal Gadot.jpg',
        'Actress_Images/Charlize Theron.jpg',
        'Actress_Images/Zendaya.jpg',
        'Actress_Images/Mila Kunis.jpg',
        'Actress_Images/Kylie Minogue.jpg',
        'Actress_Images/Jessica Alba.jpg',
        'Actress_Images/Gina Rodriguez.jpg',
        'Actress_Images/Eiza González.jpg',
        'Actress_Images/Alicia Vikander.jpg',
        'Actress_Images/Sofia Vergara.jpg',
        'Actress_Images/Halle Berry.jpg',
        'Actress_Images/Rosie Huntington-Whiteley.jpg',
        'Actress_Images/Elizabeth Olsen.jpg',
        'Actress_Images/Anne Hathaway.jpg',
        'Actress_Images/Emma Stone.jpg',
        'Actress_Images/Cobie Smulder.jpg',
        'Actress_Images/Megan Fox.jpg',
        'Actress_Images/Sophie Turner.jpg',
    ];

    // Bollywood images
    const bollywoodImages = [
        'Bollywood_Images/Alia Bhatt.jpg',
        'Bollywood_Images/Disha Patani.jpg',
        'Bollywood_Images/Jacqueline Fernandez.jpg',
        'Bollywood_Images/Jhanvi Kapoor.jpg',
        'Bollywood_Images/Katrina Kaif.jpg',
        'Bollywood_Images/Kiara Advani.jpg',
        'Bollywood_Images/Kriti Sanon.jpg',
        'Bollywood_Images/Mrunal Thakur.jpg',
        'Bollywood_Images/Priyanka Chopra.jpg',
        'Bollywood_Images/Sara ali khan.jpg',
        'Bollywood_Images/Shraddha Kapoor.jpg',
        'Bollywood_Images/Tamanah Bhatia.jpg',
        'Bollywood_Images/Tapsee Pannu.jpg',
        'Bollywood_Images/Bhumi Pednekar.jpg',
        'Bollywood_Images/Nargis Fakhri.jpg',
    ];

    let imagesData = {};
    const initialRating = 1000;
    const K = 32;

    const fetchNewImage = () => {
        let imageArray;
        if (currentCategory === 'hollywood') {
            imageArray = hollywoodImages;
        } else if (currentCategory === 'bollywood') {
            imageArray = bollywoodImages;
        } else {
            imageArray = hollywoodImages.concat(bollywoodImages);
        }
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        return imageArray[randomIndex];
    };

    const calculateExpectedScore = (ratingA, ratingB) => {
        return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
    };

    const updateEloRatings = (winnerUrl, loserUrl) => {
        if (!imagesData[winnerUrl] || !imagesData[loserUrl]) {
            console.error('One or both URLs are not present in imagesData:', winnerUrl, loserUrl);
            return;
        }

        const winnerRating = imagesData[winnerUrl].rating;
        const loserRating = imagesData[loserUrl].rating;

        const expectedWinner = calculateExpectedScore(winnerRating, loserRating);
        const expectedLoser = calculateExpectedScore(loserRating, winnerRating);

        imagesData[winnerUrl].rating += K * (1 - expectedWinner);
        imagesData[loserUrl].rating += K * (0 - expectedLoser);

        imagesData[winnerUrl].clicks++;
        imagesData[loserUrl].clicks++;

        console.log(`Updated ratings - Winner: ${winnerUrl}, Loser: ${loserUrl}`);
    };

    const updateScoreboard = () => {
        const sortedImages = Object.entries(imagesData)
            .sort((a, b) => b[1].clicks - a[1].clicks)
            .slice(0, 5);

        scoreboard.innerHTML = sortedImages.map(([url], index) => `
    <div class="ranking-item">
        <img src="${url}" alt="Ranked Image" class="ranking-image">
        <p>Rank: ${index + 1}</p>
    </div>
`).join('');

    };

    const initializeImages = () => {
        let url1, url2;

        do {
            url1 = fetchNewImage();
            url2 = fetchNewImage();
        } while (url1 === url2);

        image1.src = url1;
        image2.src = url2;

        if (!imagesData[url1]) {
            imagesData[url1] = { rating: initialRating, clicks: 0 };
        }
        if (!imagesData[url2]) {
            imagesData[url2] = { rating: initialRating, clicks: 0 };
        }

        updateRemainingClicks(); // Update display on initialization
    };

const handleImageClick = (clickedImage, otherImage) => {
    if (userClickCount >= maxClicks) {
        alert(`You have reached the maximum number of clicks. No remaining clicks left!`);
        showPopup(); // Show the popup after alert
        return;
    }

    userClickCount++;

    const clickedImageUrl = clickedImage.src;
    const otherImageUrl = otherImage.src;

    if (!imagesData[clickedImageUrl]) {
        imagesData[clickedImageUrl] = { rating: initialRating, clicks: 1 };
    } else {
        imagesData[clickedImageUrl].clicks++;
    }

    updateEloRatings(clickedImageUrl, otherImageUrl);

    let newImageUrl;
    do {
        newImageUrl = fetchNewImage();
    } while (newImageUrl === clickedImageUrl || newImageUrl === otherImageUrl);

    otherImage.src = newImageUrl;

    if (!imagesData[newImageUrl]) {
        imagesData[newImageUrl] = { rating: initialRating, clicks: 0 };
    }

    if (userClickCount >= maxClicks) {
        reloadButton.style.display = 'block';
        alert(`You have reached the maximum number of clicks. No remaining clicks left!`);
    }

    updateRemainingClicks(); // Update display after each click
};


    const updateRemainingClicks = () => {
        const remainingClicks = maxClicks - userClickCount;
        remainingClicksDisplay.textContent = `Remaining Clicks: ${remainingClicks}`;
        console.log(`Remaining clicks updated: ${remainingClicks}`);
    };

    const reloadGame = () => {
        userClickCount = 0;
        imagesData = {};
        reloadButton.style.display = 'none';
        rankingSection.style.display = 'none';
        scoreboard.innerHTML = '';
        initializeImages();
    };

    const showPopup = () => {
    // Alert the user that they've hit the maximum clicks
    alert("You have reached the maximum number of clicks.");

    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupReloadButton = document.getElementById('popup-reload-button');

    popupMessage.innerHTML = `
        <p>You have reached the maximum number of clicks.</p>
        <div id="popup-scoreboard">
            ${Object.entries(imagesData)
                .sort((a, b) => b[1].clicks - a[1].clicks)
                .slice(0, 5)
                .map(([url, data]) => `
                    <div class="popup-item">
                        <img src="${url}" alt="Popup Image" class="popup-image">
                        <p>Clicks: ${data.clicks}</p>
                    </div>
                `).join('')}
        </div>
    `;

    popup.style.display = 'flex';

    const closeButton = document.querySelector('.popup-close');
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popupReloadButton.addEventListener('click', () => {
        popup.style.display = 'none';
        reloadGame();
    });
};


    image1.addEventListener('click', () => handleImageClick(image1, image2));
    image2.addEventListener('click', () => handleImageClick(image2, image1));

    showRankingButton.addEventListener('click', () => {
        rankingSection.style.display = 'block';
        updateScoreboard();
    });

    hideRankingButton.addEventListener('click', () => {
        rankingSection.style.display = 'none';
    });

    reloadButton.addEventListener('click', () => {
        reloadGame();
    });

    hollywoodButton.addEventListener('click', () => {
        currentCategory = 'hollywood';
        reloadGame();
    });

    bollywoodButton.addEventListener('click', () => {
        currentCategory = 'bollywood';
        reloadGame();
    });

    randomButton.addEventListener('click', () => {
        currentCategory = 'random';
        reloadGame();
    });

    initializeImages();
});
