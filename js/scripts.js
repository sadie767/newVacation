//business interface
function Country(season, cost, environment, history, crowd){
  this.season = season;
  this.cost = cost;
  this.environment = environment;
  this.history = history;
  this.crowd = crowd;
}


Country.prototype.Match = function () {
  if(this.season === "Summer" && this.cost === "Splurge" &&   this.environment === "Nature" && this.history === "Modern" && this.crowd === "Hate-them") {
    var iceland = "You're going to Iceland!";
    return iceland;
    alert(iceland);
  } else if(this.season === "Winter" && this.cost === "Budget" && this.environment === "mix" && this.history === "Historic" && this.crowd === "Like-them") {
    var india = "You're going to India!";
    return india;
  } else if(this.season === "Fall" && this.cost === "Average" && this.environment === "mix" && this.history === "Historic" && this.crowd === "Indifferent") {
    var mexico = "You're going to Mexico";
    return mexico;
  } else if(this.season === "Spring" && this.cost === "Splurge" && this.environment === "City" && this.history === "Modern" && this.crowd === "Like-them") {
    var singapore = "You're going to Singapore!";
    return singapore;
  } else if(this.season === "Winter" && this.cost === "Budget" && this.environment === "City" && this.history === "Historic" && this.crowd === "Indifferent") {
    var egypt = "You're going to Egypt!";
    return egypt;
  }
};


//user interface
$(document).ready(function(){
  $("#questions").submit(function(event) {
    event.preventDefault();

    var seasonsInput = $("#seasons").val();
    var costsInput = $("#costs").val();
    var environmentInput = $("#environment").val();
    var historyInput = $("#history").val();
    var crowdsInput = $("#crowds").val();

    var userInput = new Country(seasonsInput, costsInput, environmentInput, historyInput, crowdsInput);

    var result = userInput.Match();

    $("#userOutput").text(result);
    });
});
