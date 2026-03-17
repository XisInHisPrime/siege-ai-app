function analyzePlayer() {

let gamertag = document.getElementById("gamertag").value;

let kd = (Math.random() * 0.8 + 0.8).toFixed(2);
let winRate = Math.floor(Math.random() * 20 + 45);
let survival = Math.floor(Math.random() * 40 + 40);

let operators = ["Smoke","Jäger","Mute","Ash","Thermite"];
let operatorStats = [
{ name: "Ash", win: Math.floor(Math.random()*30+40) },
{ name: "Jäger", win: Math.floor(Math.random()*30+40) },
{ name: "Mute", win: Math.floor(Math.random()*30+40) },
{ name: "Smoke", win: Math.floor(Math.random()*30+40) },
{ name: "Thermite", win: Math.floor(Math.random()*30+40) }
];
let maps = ["Clubhouse","Consulate","Oregon","Bank","Kafe"];

let bestOperator = operators[Math.floor(Math.random() * operators.length)];
let weakMap = maps[Math.floor(Math.random() * maps.length)];

let operatorImage = "images/" + bestOperator.toLowerCase() + ".png";
let mapImage = "images/" + weakMap.toLowerCase() + ".png";

let identity = "";
let coach = "";

let recommendedOperator = "";
let recommendationReason = "";

if (survival > 70) {
recommendedOperator = "Smoke";
recommendationReason = "Your survival rate suggests strong anchor play.";
}
else if (kd > 1.2) {
recommendedOperator = "Ash";
recommendationReason = "Your KD suggests strong entry fragging ability.";
}
else {
recommendedOperator = "Mute";
recommendationReason = "Balanced stats indicate support utility play.";
}

if (bestOperator === "Smoke") {
identity = "Anchor Specialist";
coach = "You perform best holding site and denying late pushes.";
}
else if (bestOperator === "Ash") {
identity = "Aggressive Entry";
coach = "You excel in early pressure but risk overextending.";
}
else if (bestOperator === "Jäger") {
identity = "Balanced Flex";
coach = "You adapt well and provide strong utility support.";
}
else {
identity = "Support Flex";
coach = "You contribute consistently but can improve aggression timing.";
}

let player2 = document.getElementById("gamertag2").value;
let kd2 = (Math.random() * 0.8 + 0.8).toFixed(2);
let winRate2 = Math.floor(Math.random() * 20 + 45);

let winner = "";

if (kd > kd2) {
winner = gamertag + " has the statistical advantage";
}
else if (kd2 > kd) {
winner = player2 + " has the statistical advantage";
}
else {
winner = "Both players are evenly matched";
}

let total = Number(kd) + Number(kd2);

let player1Chance = Math.round((Number(kd) / total) * 100);
let player2Chance = 100 - player1Chance;

let rankTier = "";

if (kd >= 1.4) {
rankTier = "Diamond";
}
else if (kd >= 1.25) {
rankTier = "Platinum";
}
else if (kd >= 1.1) {
rankTier = "Gold";
}
else if (kd >= 0.95) {
rankTier = "Silver";
}
else {
rankTier = "Bronze";
}

document.getElementById("results").innerHTML = `
<div class="player-header">

<h2>🎮 ${gamertag}</h2>

<div class="player-meta">
<span>Platform: ${document.getElementById("platform").value}</span>
<span>Rank: ${rankTier}</span>
<span>Playstyle: ${identity}</span>
</div>

</div>

<p>Siege Identity: <b>${identity}</b></p>

<div class="stats-grid">

<div class="stat-card">
<h3>KD</h3>
<div class="bar">
<div class="fill" style="width:${kd*50}%"></div>
</div>
<p>${kd}</p>
</div>

<div class="stat-card">
<h3>Win Rate</h3>
<div class="bar">
<div class="fill" style="width:${winRate}%"></div>
</div>
<p>${winRate}%</p>
</div>

<div class="stat-card">
<h3>Match Prediction</h3>

<p>${winner}</p>

<div class="prediction-row">
<span>${gamertag}</span>
<div class="bar">
<div class="fill" style="width:${player1Chance}%"></div>
</div>
<span>${player1Chance}%</span>
</div>

<div class="prediction-row">
<span>${player2}</span>
<div class="bar">
<div class="fill" style="width:${player2Chance}%"></div>
</div>
<span>${player2Chance}%</span>
</div>

<div class="stat-card">
<h3>Survival</h3>
<div class="bar">
<div class="fill" style="width:${survival}%"></div>
</div>
<p>${survival}%</p>
</div>

<div class="stat-card">
<h3>Best Operator</h3>
<img src="${operatorImage}" class="operator-img">
<p>${bestOperator}</p>
</div>

<div class="stat-card">
<h3>Weakest Map</h3>
<img src="${mapImage}" class="map-img">
<p>${weakMap}</p>
</div>

<div class="stat-card">
<h3>Rank Tier</h3>
<p>${rankTier}</p>
</div>

<div class="stat-card">
<h3>Recommended Operator</h3>
<p>${recommendedOperator}</p>
<p>${recommendationReason}</p>
</div>

</div>

<h2>Operator Performance</h2>

<div class="operator-chart">

${operatorStats.map(op => `
<div class="operator-row">

<span>${op.name}</span>

<div class="bar">
<div class="fill" style="width:${op.win}%"></div>
</div>

<span>${op.win}%</span>

</div>
`).join("")}

</div>

<p><b>AI Coach:</b> ${coach}</p>
`;
}