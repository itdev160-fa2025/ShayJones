
const factors = [
    "NIL (Name, Image, Likeness) deals in college",
    "Increased visibility through social media and streaming services.",
    "Greater support for women's sports at the grassroots level.",
    "The success of WNBA players in international competitions.",
    "Increased marketing efforts by the WNBA.",
    "Growing interest in women's sports overall.",
    "Ability to leave college early to go to the WNBA.",
    "Las Vegas Aces -- first WNBA team to sell out last 3 years in a row.",
    "Longer WNBA seasons than before -- exposure to play in the States instead of overseas.",
    "Three team expansion in 2025 -- Golden State Valkyries, Portland TBD and Toronto TBD."
];

function injectDynamicContent() {
    const factorsList = document.getElementById('factorsList');
    
    factors.forEach(factor => {
        const listItem = document.createElement('li');
        listItem.textContent = factor;
        factorsList.appendChild(listItem);
    });
}

window.onload = injectDynamicContent;
