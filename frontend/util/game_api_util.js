export const fetchGames = () => (
    $.ajax({
        method: 'GET',
        url: '/api/games'
    })
);

export const fetchGame = (gameId) => (
    $.ajax({
        method: 'GET',
        url: `/api/games/${gameId}`
    })
);