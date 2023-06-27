var candidateVotes = {
  "Head Boy": {
    "Candidate 1": 0,
    "Candidate 2": 0,
    "Candidate 3": 0,
    "Candidate 4": 0
  },
  "Head Girl": {
    "Candidate 1": 0,
    "Candidate 2": 0,
    "Candidate 3": 0,
    "Candidate 4": 0
  },
  "Sports Captain": {
    "Candidate 1": 0,
    "Candidate 2": 0,
    "Candidate 3": 0,
    "Candidate 4": 0
  },
  "Knights Captain": {
    "Candidate 1": 0,
    "Candidate 2": 0,
    "Candidate 3": 0,
    "Candidate 4": 0
  },
  "Spartans Captain": {
    "Candidate 1": 0,
    "Candidate 2": 0,
    "Candidate 3": 0,
    "Candidate 4": 0
  },
  "Vikings Captain": {
    "Candidate 1": 0,
    "Candidate 2": 0,
    "Candidate 3": 0,
    "Candidate 4": 0
  },
  "Samurais Captain": {
    "Candidate 1": 0,
    "Candidate 2": 0,
    "Candidate 3": 0,
    "Candidate 4": 0
  },
  "CCA Captain": {
    "Candidate 1": 0,
    "Candidate 2": 0,
    "Candidate 3": 0,
    "Candidate 4": 0
  }
};

function selectTab(field) {
  var tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  event.target.classList.add("active");

  var candidateSections = document.getElementsByClassName("candidate-section");
  for (var i = 0; i < candidateSections.length; i++) {
    candidateSections[i].style.display = "none";
  }
  document.getElementById("candidate-section-" + field.replace(" ", "-")).style.display = "block";
}

function vote(field, candidate) {
  var selectedCandidate = document.querySelector(".candidate-button.active");
  if (selectedCandidate && selectedCandidate.textContent === candidate) {
    selectedCandidate.classList.remove("active");
    candidateVotes[field][candidate]--;
  } else {
    var buttons = document.getElementsByClassName("candidate-button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
    event.target.classList.add("active");
    candidateVotes[field][candidate]++;
  }
}

function submitVote(field) {
  var selectedCandidate = document.querySelector(".candidate-button.active");
  if (selectedCandidate) {
    var candidate = selectedCandidate.textContent;
    selectedCandidate.classList.remove("active");
    document.getElementById("success-message").textContent = "";
    document.getElementById("error-message").textContent = "";

    document.getElementById("success-message").textContent =
      "Vote submitted successfully for " + candidate + " as " + field;

   
  } else {
    document.getElementById("error-message").textContent = "Please select a candidate";
  }
}

// Initial setup
document.getElementById("tab-button-Head-Boy").click();
