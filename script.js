// Map days of the week to meal categories (can be extended as needed)
const dayToMealMap = {
    Monday: "Breakfast",
    Tuesday: "Lunch",
    Wednesday: "Dinner",
    Thursday: "Chicken",
    Friday: "fries",
    Saturday: "Pasta",
    Sunday: "Soup"
};

// Fetch Meal Data from API for the selected category
async function fetchMeals(category) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meals:", error);
        return [];
    }
}

// Display Meals in the DOM
function displayMeals(meals, category) {
    const resultsContainer = document.getElementById("meal-results");
    resultsContainer.innerHTML = `<h2>Meals for ${category}</h2>`;

    if (meals.length === 0) {
        resultsContainer.innerHTML += "<p>No meals found. Try another day!</p>";
        return;
    }

    meals.forEach((meal) => {
        const mealCard = document.createElement("div");
        mealCard.className = "meal-card";

        mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">View Recipe</a>
        `;

        resultsContainer.appendChild(mealCard);
    });
}

// Event Listener for Day Selection
document.getElementById("day-selector").addEventListener("change", async (event) => {
    const selectedDay = event.target.value;
    if (selectedDay && dayToMealMap[selectedDay]) {
        const category = dayToMealMap[selectedDay];
        const meals = await fetchMeals(category);
        displayMeals(meals, category);
    }
});
