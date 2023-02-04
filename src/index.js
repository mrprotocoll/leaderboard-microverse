import './style.css';
import Leaderboard from './module/Leaderboard';

window.addEventListener('load', () => {
    const leaderboard = new Leaderboard()

    // add score
    const form = document.getElementById("score-form");
    const scoresContainer = document.getElementById("user-scores");

    const refresh = () => {
        let content = '';
        leaderboard.getScore().then(data => {
            data.result.map((data) => {
                content += `<li>${data.user}:  ${data.score}</li>`
            })
            scoresContainer.innerHTML = content
        })
    }

    // refresh leaderboard on load
    refresh()

    // Add new score
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        const user = document.getElementById("user").value;
        const score = document.getElementById("score").value;
        if(!user || !score){
            return
        }

        leaderboard.saveScore(user,score).then((response) => {
            if(response.result === 'Leaderboard score created correctly.') {
                // append new score if successful
                const scoreElement = document.createElement('li');
                scoreElement.textContent = `${user}: ${score}`;
                scoresContainer.appendChild(scoreElement)
            }
        })
    })

    // refresh recent scores
    document.getElementById("refresh").addEventListener("click", refresh)
})