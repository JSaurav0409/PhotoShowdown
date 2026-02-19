document.addEventListener("DOMContentLoaded", () => {
  // 1. Data Structure
  const masterList = [
    // FEMALE - BOLLYWOOD
    {
      name: "Alia Bhatt",
      url: "Bollywood_Images/Alia Bhatt.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      name: "Deepika",
      url: "Bollywood_Images/Katrina Kaif.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      name: "Kiara Advani",
      url: "Bollywood_Images/Kiara Advani.jpg",
      gender: "female",
      cat: "bollywood",
    },
    {
      name: "Mrunal Thakur",
      url: "Bollywood_Images/Mrunal Thakur.jpg",
      gender: "female",
      cat: "bollywood",
    },

    // FEMALE - HOLLYWOOD
    {
      name: "Scarlett Johansson",
      url: "Actress_Images/Scarlett Johansson.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      name: "Margot Robbie",
      url: "Actress_Images/Margot Robbie.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      name: "Zendaya",
      url: "Actress_Images/Zendaya.jpg",
      gender: "female",
      cat: "hollywood",
    },
    {
      name: "Elizabeth Olsen",
      url: "Actress_Images/Elizabeth Olsen.jpg",
      gender: "female",
      cat: "hollywood",
    },

    // MALE - BOLLYWOOD
    {
      name: "Hrithik Roshan",
      url: "Bollywood_actors/Hrithik.jpg",
      gender: "male",
      cat: "bollywood",
    },
    {
      name: "Ranbir Kapoor",
      url: "Bollywood_actors/Ranveer.jpg",
      gender: "male",
      cat: "bollywood",
    },
    {
      name: "Shah Rukh Khan",
      url: "Bollywood_actors/SRK.jpg",
      gender: "male",
      cat: "bollywood",
    },
    {
      name: "Sushant Singh",
      url: "Bollywood_actors/SSR.jpg",
      gender: "male",
      cat: "bollywood",
    },

    // MALE - HOLLYWOOD
    {
      name: "Brad Pitt",
      url: "Hollywood_actors/Brad Pitt.jpg",
      gender: "male",
      cat: "hollywood",
    },
    {
      name: "Chris Hemsworth",
      url: "Hollywood_actors/Chris Hemsworth.jpg",
      gender: "male",
      cat: "hollywood",
    },
    {
      name: "Ryan Gosling",
      url: "Hollywood_actors/Ryan Gosling.jpg",
      gender: "male",
      cat: "hollywood",
    },
    {
      name: "Tom Holland",
      url: "Hollywood_actors/Tom Holland.jpg",
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

  // 1. Update getRandomItem to accept an exclusion
  const getRandomItem = (excludeUrl) => {
    const list = getFilteredList();

    // Safety check: if the list has only 1 item, we can't find a second unique one
    if (list.length < 2) {
      console.error("Not enough images in this category!");
      return list[0];
    }

    let item;
    do {
      item = list[Math.floor(Math.random() * list.length)];
    } while (item.url === excludeUrl); // Keep picking until it's different

    return item;
  };

  // 2. Update loadNewBattle to pass the first selection into the second
  const loadNewBattle = () => {
    const item1 = getRandomItem(); // Pick any random image
    const item2 = getRandomItem(item1.url); // Pick a random image BUT NOT item1

    img1.src = item1.url;
    img2.src = item2.url;

    // Store the current URLs in the parent boxes for the click logic
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
