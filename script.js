//  a simple script to alert user when clicking a movie title
document.addEventListener("DOMContentLoaded", () => {
    const movieCards = document.querySelectorAll(".movie-card h2");

    movieCards.forEach(card => {
        card.addEventListener("click", () => {
            alert(`You clicked on the movie: ${card.textContent}`);
        });
    });
});
