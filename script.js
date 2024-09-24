document.addEventListener('DOMContentLoaded', () => {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const scoreboard = document.getElementById('scoreboard');
    const rankingSection = document.getElementById('ranking');
    const remainingClicksDisplay = document.getElementById('remaining-clicks');
    const reloadButton = document.getElementById('reload-button');
    const genderModal = document.getElementById('gender-modal');
    const maxClicks = 20;
    let userClickCount = 0;
    let currentCategory = 'random';
     let currentGender = 'female'; // Default gender

    let imagesData = {};

    // Hide the modal initially
    genderModal.style.display = 'block';

    // Image arrays based on gender
    const maleImages = [
        'Bollywood_actors/Hrithik.jpg',
        'Bollywood_actors/Ranveer.jpg',
        'Bollywood_actors/Saheed.jpg',
        'Bollywood_actors/Salman Khan.jpg',
        'Bollywood_actors/SRK.jpg',
        'Bollywood_actors/SSR.jpg',
        'Bollywood_actors/Vicky.jpg',
        'Bollywood_actors/Varun Dhawan.jpg',
        'Bollywood_actors/Aamir Khan.jpg',
        'Bollywood_actors/Akshay Kumar.jpg',
        'Hollywood_actors/Brad Pitt.jpg',
        'Hollywood_actors/Chris Hemsworth.jpg',
        'Hollywood_actors/Josh Radnor.jpg',
        'Hollywood_actors/Leonardo DiCaprio.jpg',
        'Hollywood_actors/Neil Patrick Harris.jpg',
        'Hollywood_actors/Robert Downey Jr..jpg',
        'Hollywood_actors/Ryan Gosling.jpg',
        'Hollywood_actors/Tom Hardy.jpg',
        'Hollywood_actors/Tom Hiddleston.jpg',
        'Hollywood_actors/Tom Holland.jpg',
        'Hollywood_actors/Andrew Garfield.jpg'
        
    ]

    const femaleImages = [
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
        'Hollywood_actors/Brad Pitt.jpg',
        'Hollywood_actors/Chris Hemsworth.jpg',
        'Hollywood_actors/Josh Radnor.jpg',
        'Hollywood_actors/Leonardo DiCaprio.jpg',
        'Hollywood_actors/Neil Patrick Harris.jpg',
        'Hollywood_actors/Robert Downey Jr..jpg',
        'Hollywood_actors/Ryan Gosling.jpg',
        'Hollywood_actors/Tom Hardy.jpg',
        'Hollywood_actors/Tom Hiddleston.jpg',
        'Hollywood_actors/Tom Holland.jpg',
        'Hollywood_actors/Andrew Garfield.jpg'
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
        'Bollywood_actors/Hrithik.jpg',
        'Bollywood_actors/Ranveer.jpg',
        'Bollywood_actors/Saheed.jpg',
        'Bollywood_actors/Salman Khan.jpg',
        'Bollywood_actors/SRK.jpg',
        'Bollywood_actors/SSR.jpg',
        'Bollywood_actors/Vicky.jpg',
        'Bollywood_actors/Varun Dhawan.jpg',
        'Bollywood_actors/Aamir Khan.jpg',
        'Bollywood_actors/Akshay Kumar.jpg',
        
    ];

    const fetchNewImage = (excludeImage = null) => {
    let imageArray;
    if (currentGender === 'male') {
        if (currentCategory === 'hollywood') {
            imageArray = hollywoodImages.filter(url => femaleImages.includes(url));
        } else if (currentCategory === 'bollywood') {
            imageArray = bollywoodImages.filter(url => femaleImages.includes(url));
        } else {
            imageArray = femaleImages; // Random category for male
        }
    } else { // female
        if (currentCategory === 'hollywood') {
            imageArray = hollywoodImages.filter(url => maleImages.includes(url));
        } else if (currentCategory === 'bollywood') {
            imageArray = bollywoodImages.filter(url => maleImages.includes(url));
        } else {
            imageArray = maleImages; // Random category for female
        }
    }

    let randomImage;
    do {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        randomImage = imageArray[randomIndex];
    } while (randomImage === excludeImage); // Ensure new image is different from the excluded one

    return randomImage;
};

    const updateVoteCount = (winnerUrl) => {
        if (!imagesData[winnerUrl]) {
            imagesData[winnerUrl] = 0;
        }
        imagesData[winnerUrl]++;
    };

    const updateScoreboard = () => {
        const sortedImages = Object.entries(imagesData)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        scoreboard.innerHTML = sortedImages.map(([url], index) => `
            <div class="score-item">
                <p>${index + 1}. <img src="${url}" alt="Image ${index + 1}" width="50"></p>
            </div>
        `).join('');
    };

    const handleImageClick = (winnerUrl, loserElement) => {
    userClickCount++;
    remainingClicksDisplay.textContent = `Remaining Clicks: ${maxClicks - userClickCount}`;

    updateVoteCount(winnerUrl);

    if (userClickCount >= maxClicks) {
        rankingSection.style.display = 'block';
        document.getElementById('comparison').style.display = 'none';
        updateScoreboard();
        reloadButton.style.display = 'block';
    } else {
        const newImage = fetchNewImage(winnerUrl); // Fetch new image different from the winner image
        loserElement.src = newImage;
    }
};

const reloadGame = () => {
    userClickCount = 0;
    remainingClicksDisplay.textContent = `Remaining Clicks: ${maxClicks}`;
    rankingSection.style.display = 'none';
    document.getElementById('comparison').style.display = 'block';
    reloadButton.style.display = 'none';

    // Ensure different images are fetched for image1 and image2
    const newImage1 = fetchNewImage();
    const newImage2 = fetchNewImage(newImage1); // Pass image1 as excluded image for image2

    image1.src = newImage1;
    image2.src = newImage2;
};

    image1.addEventListener('click', () => handleImageClick(image1.src, image2));
    image2.addEventListener('click', () => handleImageClick(image2.src, image1));
    
    reloadButton.addEventListener('click', reloadGame);

    document.getElementById('hollywood-button').addEventListener('click', () => {
        currentCategory = 'hollywood';
        reloadGame();
    });

    document.getElementById('bollywood-button').addEventListener('click', () => {
        currentCategory = 'bollywood';
        reloadGame();
    });

    document.getElementById('random-button').addEventListener('click', () => {
        currentCategory = 'random';
        reloadGame();
    });

    document.getElementById('hide-ranking').addEventListener('click', () => {
        rankingSection.style.display = 'none';
        document.getElementById('comparison').style.display = 'block';
        reloadButton.style.display = 'none';
    });

    document.getElementById('show-ranking').addEventListener('click', () => {
        rankingSection.style.display = 'block';
        document.getElementById('comparison').style.display = 'none';
        updateScoreboard();
    });

    // Add event listeners for gender buttons
    document.getElementById('select-male').addEventListener('click', () => {
        currentGender = 'male';
        document.getElementById('gender-modal').style.display = 'none'; // Hide the gender selection popup
        reloadGame();
    });

    document.getElementById('select-female').addEventListener('click', () => {
        currentGender = 'female';
        document.getElementById('gender-modal').style.display = 'none'; // Hide the gender selection popup
        reloadGame();
    });
});