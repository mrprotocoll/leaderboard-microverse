export default class Leaderboard {
    constructor() {
        this.baseURI = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";
        this.apiKey = "OaaWEsM1fU91BBOf01Zg";
		this.endPoint = this.baseURI + `games/ ${this.apiKey} /scores/`;
    }

    saveScore = async (user, score) => {
        return await fetch(this.endPoint, {
            method: 'POST',
            body: JSON.stringify({
				user: user,
				score: score,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
		}).then((response) => response.json())
    }

	getScore = async () => await fetch(this.endPoint)
	.then((response) => response.json());
	
}