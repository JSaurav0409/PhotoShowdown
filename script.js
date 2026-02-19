document.addEventListener("DOMContentLoaded", () => {
  // 1. Data Structure
  const masterList = [
    // FEMALE - BOLLYWOOD
    // FEMALE BOLLYWOOD
    {
      url: "Bollywood_Images/Alia Bhatt.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Disha Patani.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Jacqueline Fernandez.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Jhanvi Kapoor.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Katrina Kaif.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Kiara Advani.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Kriti Sanon.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Mrunal Thakur.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Priyanka Chopra.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Sara ali khan.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Shraddha Kapoor.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Tamanah Bhatia.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Tapsee Pannu.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Bhumi Pednekar.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      url: "Bollywood_Images/Nargis Fakhri.jpg",
      gender: "female",
      cat: "bollywood",
    },

    // FEMALE HOLLYWOOD
    {
      url: "Actress_Images/Scarlett Johansson.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Angelina Jolie.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Emma Watson.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Jennifer Lawrence.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Natalie Portman.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Margot Robbie.jpg",
      gender: "female",
      cat: "hollywood",
    },
    { url: "Actress_Images/Gal Gadot.jpg", gender: "female", cat: "hollywood" },
    {
      url: "Actress_Images/Charlize Theron.jpg",
      gender: "female",
      cat: "hollywood",
    },
    { url: "Actress_Images/Zendaya.jpg", gender: "female", cat: "hollywood" },
    {
      url: "Actress_Images/Mila Kunis.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Kylie Minogue.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Jessica Alba.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Gina Rodriguez.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Eiza González.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Alicia Vikander.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Sofia Vergara.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Halle Berry.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Rosie Huntington-Whiteley.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Elizabeth Olsen.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Anne Hathaway.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Emma Stone.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      url: "Actress_Images/Cobie Smulder.jpg",
      gender: "female",
      cat: "hollywood",
    },
    { url: "Actress_Images/Megan Fox.jpg", gender: "female", cat: "hollywood" },
    {
      url: "Actress_Images/Sophie Turner.jpg",
      gender: "female",
      cat: "hollywood",
    },

    // MALE BOLLYWOOD
    { url: "Bollywood_actors/Hrithik.jpg", gender: "male", cat: "bollywood" },
    { url: "Bollywood_actors/Ranveer.jpg", gender: "male", cat: "bollywood" },
    { url: "Bollywood_actors/Saheed.jpg", gender: "male", cat: "bollywood" },
    {
      url: "Bollywood_actors/Salman Khan.jpg",
      gender: "male",
      cat: "bollywood",
    },
    { url: "Bollywood_actors/SRK.jpg", gender: "male", cat: "bollywood" },
    { url: "Bollywood_actors/SSR.jpg", gender: "male", cat: "bollywood" },
    { url: "Bollywood_actors/Vicky.jpg", gender: "male", cat: "bollywood" },
    {
      url: "Bollywood_actors/Varun Dhawan.jpg",
      gender: "male",
      cat: "bollywood",
    },
    {
      url: "Bollywood_actors/Aamir Khan.jpg",
      gender: "male",
      cat: "bollywood",
    },
    {
      url: "Bollywood_actors/Akshay Kumar.jpg",
      gender: "male",
      cat: "bollywood",
    },

    // MALE HOLLYWOOD
    { url: "Hollywood_actors/Brad Pitt.jpg", gender: "male", cat: "hollywood" },
    {
      url: "Hollywood_actors/Chris Hemsworth.jpg",
      gender: "male",
      cat: "hollywood",
    },
    {
      url: "Hollywood_actors/Josh Radnor.jpg",
      gender: "male",
      cat: "hollywood",
    },
    {
      url: "Hollywood_actors/Leonardo DiCaprio.jpg",
      gender: "male",
      cat: "hollywood",
    },
    {
      url: "Hollywood_actors/Neil Patrick Harris.jpg",
      gender: "male",
      cat: "hollywood",
    },
    {
      url: "Hollywood_actors/Robert Downey Jr..jpg",
      gender: "male",
      cat: "hollywood",
    },
    {
      url: "Hollywood_actors/Ryan Gosling.jpg",
      gender: "male",
      cat: "hollywood",
    },
    { url: "Hollywood_actors/Tom Hardy.jpg", gender: "male", cat: "hollywood" },
    {
      url: "Hollywood_actors/Tom Hiddleston.jpg",
      gender: "male",
      cat: "hollywood",
    },
    {
      url: "Hollywood_actors/Tom Holland.jpg",
      gender: "male",
      cat: "hollywood",
    },
    {
      url: "Hollywood_actors/Andrew Garfield.jpg",
      gender: "male",
      cat: "hollywood",
    },
  ];

  // 2. State Management
  let userClickCount = 0;
  const maxClicks = 20;
  let currentGender = "female";
  let currentCategory = "random";
  let votes = JSON.parse(localStorage.getItem("ps_votes")) || {};

  const img1 = document.getElementById("image1");
  const img2 = document.getElementById("image2");
  const clicksDisplay = document.getElementById("remaining-clicks");

  // 3. Selection Logic
  const getFilteredList = () => {
    return masterList.filter(
      (item) =>
        item.gender === currentGender &&
        (currentCategory === "random" || item.cat === currentCategory),
    );
  };

  const getRandomItem = (excludeUrl) => {
    const list = getFilteredList();
    let item;
    do {
      item = list[Math.floor(Math.random() * list.length)];
    } while (item.url === excludeUrl);
    return item;
  };

  const loadNewBattle = () => {
    const item1 = getRandomItem();
    const item2 = getRandomItem(item1.url);
    img1.src = item1.url;
    img2.src = item2.url;
    img1.parentElement.dataset.url = item1.url;
    img2.parentElement.dataset.url = item2.url;
  };

  // 4. Interaction Logic
  const handleVote = (winnerUrl, loserBox) => {
    userClickCount++;
    clicksDisplay.textContent = maxClicks - userClickCount;

    // Record Vote
    votes[winnerUrl] = (votes[winnerUrl] || 0) + 1;
    localStorage.setItem("ps_votes", JSON.stringify(votes));

    if (userClickCount >= maxClicks) {
      endGame();
    } else {
      // Smoothly replace the loser
      const nextItem = getRandomItem(winnerUrl);
      loserBox.querySelector("img").style.opacity = 0;
      setTimeout(() => {
        loserBox.querySelector("img").src = nextItem.url;
        loserBox.dataset.url = nextItem.url;
        loserBox.querySelector("img").style.opacity = 1;
      }, 200);
    }
  };

  const endGame = () => {
    document.getElementById("comparison").style.display = "none";
    document.getElementById("ranking").style.display = "block";
    document.getElementById("reload-button").style.display = "inline-block";
    renderScoreboard();
  };

  const renderScoreboard = () => {
    const sorted = Object.entries(votes)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    document.getElementById("scoreboard").innerHTML = sorted
      .map(
        ([url, count], i) => `
            <div class="score-item">
                <span class="rank">#${i + 1}</span>
                <img src="${url}">
                <div class="details">
                    <p>Votes: ${count}</p>
                </div>
            </div>
        `,
      )
      .join("");
  };

  // 5. Event Listeners
  document.getElementById("select-male").addEventListener("click", () => {
    currentGender = "male";
    startGame();
  });

  document.getElementById("select-female").addEventListener("click", () => {
    currentGender = "female";
    startGame();
  });

  const startGame = () => {
    document.getElementById("gender-modal").style.display = "none";
    document.getElementById("main-game").style.display = "block";
    loadNewBattle();
  };

  document
    .getElementById("box1")
    .addEventListener("click", () =>
      handleVote(img1.src, document.getElementById("box2")),
    );
  document
    .getElementById("box2")
    .addEventListener("click", () =>
      handleVote(img2.src, document.getElementById("box1")),
    );

  document.querySelectorAll(".pill").forEach((pill) => {
    pill.addEventListener("click", (e) => {
      document.querySelector(".pill.active").classList.remove("active");
      e.target.classList.add("active");
      currentCategory = e.target.dataset.cat;
      loadNewBattle();
    });
  });

  document.getElementById("show-ranking").addEventListener("click", () => {
    document.getElementById("comparison").style.display = "none";
    document.getElementById("ranking").style.display = "block";
    renderScoreboard();
  });

  document.getElementById("hide-ranking").addEventListener("click", () => {
    document.getElementById("comparison").style.display = "flex";
    document.getElementById("ranking").style.display = "none";
  });

  document
    .getElementById("reload-button")
    .addEventListener("click", () => location.reload());
});
