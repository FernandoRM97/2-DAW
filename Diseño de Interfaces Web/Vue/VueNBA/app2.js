new Vue({
    el: "#app2",
    data: {
        textSearch: "",
        players: []
    },
    created() {
        axios({
                "method": "GET",
                "url": "https://free-nba.p.rapidapi.com/players",
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
                this.players = response.data.data;
            })
            .catch((error) => {
                console.log(error)
            })

    },
    computed: {
        playersFilter() {
            var textSearch = this.textSearch;
            return this.players.filter(function(el) {
                return el.first_name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    }

});