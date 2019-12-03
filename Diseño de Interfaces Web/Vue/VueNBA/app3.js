new Vue({
    el: "#app2",
    data: {
        textSearch: "",
        games: []
    },
    created() {
        axios({
                "method": "GET",
                "url": "https://free-nba.p.rapidapi.com/games",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com",
                    "x-rapidapi-key": "6e442364dcmshb440a2786cdbddap15aa49jsn2271087dd077"
                },
                "params": {
                    "page": "0",
                    "per_page": "25"
                }
            })
            .then((response) => {
                this.games = response.data.data;
            })
            .catch((error) => {
                console.log(error)
            })

    },
    computed: {
        gamesFilter() {
            var textSearch = this.textSearch;
            return this.games.filter(function(el) {
                return el.home_team.full_name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    }

});