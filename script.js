/* =========================================================
   NAMMA KARNATAKA
   Main JavaScript
   Features:
   1. English / Kannada language toggle
   2. Destination cards
   3. Search destinations
   4. Category filters
   5. AI-style trip planner
   6. Kannada phrase guide
   7. Mobile navigation
========================================================= */


/* =========================================================
   1. LANGUAGE SETTINGS
========================================================= */

let currentLanguage = "en";

const translations = {
    "Home": "ಮುಖಪುಟ",
    "Explore": "ಅನ್ವೇಷಿಸಿ",
    "Hidden Gems": "ಗುಪ್ತ ರತ್ನಗಳು",
    "AI Trip Planner": "AI ಪ್ರವಾಸ ಯೋಜಕ",
    "Kannada Guide": "ಕನ್ನಡ ಮಾರ್ಗದರ್ಶಿ",

    "Discover Karnataka": "ಕರ್ನಾಟಕವನ್ನು ಅನ್ವೇಷಿಸಿ",
    "Your next adventure starts here.": "ನಿಮ್ಮ ಮುಂದಿನ ಸಾಹಸ ಇಲ್ಲಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.",
    "Explore the beauty of Karnataka": "ಕರ್ನಾಟಕದ ಸೌಂದರ್ಯವನ್ನು ಅನ್ವೇಷಿಸಿ",
    "Explore Karnataka": "ಕರ್ನಾಟಕವನ್ನು ಅನ್ವೇಷಿಸಿ",
    "Plan Your Trip": "ನಿಮ್ಮ ಪ್ರವಾಸವನ್ನು ಯೋಜಿಸಿ",

    "Explore Destinations": "ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    "Find your next favourite place in Karnataka.": "ಕರ್ನಾಟಕದಲ್ಲಿ ನಿಮ್ಮ ಮುಂದಿನ ನೆಚ್ಚಿನ ಸ್ಥಳವನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",
    "All": "ಎಲ್ಲಾ",
    "Nature": "ಪ್ರಕೃತಿ",
    "Heritage": "ಪರಂಪರೆ",
    "Beach": "ಕಡಲತೀರ",
    "Spiritual": "ಆಧ್ಯಾತ್ಮಿಕ",
    "Search destinations...": "ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಹುಡುಕಿ...",
    "Search": "ಹುಡುಕಿ",
    "View Details": "ವಿವರಗಳನ್ನು ನೋಡಿ",

    "Hidden Gems of Karnataka": "ಕರ್ನಾಟಕದ ಗುಪ್ತ ರತ್ನಗಳು",
    "Discover places beyond the usual tourist spots.": "ಸಾಮಾನ್ಯ ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಮೀರಿ ಹೊಸ ಸ್ಥಳಗಳನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",

    "AI Trip Planner": "AI ಪ್ರವಾಸ ಯೋಜಕ",
    "Create your personalised Karnataka itinerary.": "ನಿಮಗಾಗಿ ವಿಶೇಷ ಕರ್ನಾಟಕ ಪ್ರವಾಸ ಯೋಜನೆಯನ್ನು ರಚಿಸಿ.",
    "Where are you starting from?": "ನೀವು ಎಲ್ಲಿಂದ ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸುತ್ತೀರಿ?",
    "Enter starting location": "ಪ್ರಾರಂಭದ ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ",
    "Trip Duration": "ಪ್ರವಾಸದ ಅವಧಿ",
    "Select duration": "ಅವಧಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    "1 Day": "1 ದಿನ",
    "2 Days": "2 ದಿನಗಳು",
    "3 Days": "3 ದಿನಗಳು",
    "5 Days": "5 ದಿನಗಳು",
    "7 Days": "7 ದಿನಗಳು",

    "Budget": "ಬಜೆಟ್",
    "Select budget": "ಬಜೆಟ್ ಆಯ್ಕೆಮಾಡಿ",
    "Budget Friendly": "ಕಡಿಮೆ ವೆಚ್ಚ",
    "Moderate": "ಮಧ್ಯಮ ವೆಚ್ಚ",
    "Luxury": "ಐಷಾರಾಮಿ",

    "Travel Preference": "ಪ್ರವಾಸದ ಆದ್ಯತೆ",
    "Choose your experience": "ನಿಮ್ಮ ಅನುಭವವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    "Nature & Adventure": "ಪ್ರಕೃತಿ ಮತ್ತು ಸಾಹಸ",
    "History & Culture": "ಇತಿಹಾಸ ಮತ್ತು ಸಂಸ್ಕೃತಿ",
    "Beaches": "ಕಡಲತೀರಗಳು",
    "Spiritual Places": "ಆಧ್ಯಾತ್ಮಿಕ ಸ್ಥಳಗಳು",
    "Mixed Experience": "ಮಿಶ್ರ ಅನುಭವ",

    "Generate My Trip": "ನನ್ನ ಪ್ರವಾಸವನ್ನು ರೂಪಿಸಿ",
    "Your Personalised Itinerary": "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಪ್ರವಾಸ ಯೋಜನೆ",
    "Recommended Destinations": "ಶಿಫಾರಸು ಮಾಡಿದ ಪ್ರವಾಸಿ ತಾಣಗಳು",
    "Estimated Budget": "ಅಂದಾಜು ಬಜೆಟ್",
    "Travel Tips": "ಪ್ರಯಾಣ ಸಲಹೆಗಳು",

    "Learn Basic Kannada": "ಮೂಲ ಕನ್ನಡವನ್ನು ಕಲಿಯಿರಿ",
    "Useful Kannada phrases for your journey.": "ನಿಮ್ಮ ಪ್ರಯಾಣಕ್ಕೆ ಉಪಯುಕ್ತವಾದ ಕನ್ನಡ ಪದಗುಚ್ಛಗಳು.",
    "Next Phrase": "ಮುಂದಿನ ಪದಗುಚ್ಛ",
    "Meaning": "ಅರ್ಥ",
    "Pronunciation": "ಉಚ್ಚಾರಣೆ",

    "Ready to explore Karnataka?": "ಕರ್ನಾಟಕವನ್ನು ಅನ್ವೇಷಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    "Start planning your journey today.": "ಇಂದೇ ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಯೋಜಿಸಲು ಪ್ರಾರಂಭಿಸಿ.",
    "Plan Your Adventure": "ನಿಮ್ಮ ಸಾಹಸವನ್ನು ಯೋಜಿಸಿ",

    "Loading destinations...": "ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    "No destinations found.": "ಯಾವುದೇ ಪ್ರವಾಸಿ ತಾಣಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
    "Please enter your starting location.": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪ್ರಾರಂಭದ ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ.",
    "Your trip plan is ready!": "ನಿಮ್ಮ ಪ್ರವಾಸ ಯೋಜನೆ ಸಿದ್ಧವಾಗಿದೆ!",
    "Day": "ದಿನ",
    "Morning": "ಬೆಳಗ್ಗೆ",
    "Afternoon": "ಮಧ್ಯಾಹ್ನ",
    "Evening": "ಸಂಜೆ",
    "Suggested trip": "ಶಿಫಾರಸು ಮಾಡಿದ ಪ್ರವಾಸ",
    "Estimated cost per person": "ಪ್ರತಿ ವ್ಯಕ್ತಿಗೆ ಅಂದಾಜು ವೆಚ್ಚ",
    "This is a sample itinerary. Actual costs and travel times may vary.": "ಇದು ಮಾದರಿ ಪ್ರವಾಸ ಯೋಜನೆ. ನಿಜವಾದ ವೆಚ್ಚ ಮತ್ತು ಪ್ರಯಾಣದ ಸಮಯ ಬದಲಾಗಬಹುದು.",

    "Location": "ಸ್ಥಳ",
    "Category": "ವರ್ಗ",
    "Best For": "ಯಾರಿಗೆ ಸೂಕ್ತ",
    "Best time to visit": "ಭೇಟಿ ನೀಡಲು ಉತ್ತಮ ಸಮಯ",
    "Close": "ಮುಚ್ಚಿ"
};


/* Translate a text string when a Kannada equivalent exists. */
function translateText(text) {
    const trimmedText = text.trim();

    if (currentLanguage === "en") {
        return text;
    }

    if (translations[trimmedText]) {
        return text.replace(trimmedText, translations[trimmedText]);
    }

    return text;
}


/* =========================================================
   2. KARNATAKA DESTINATIONS
========================================================= */

const destinations = [
    {
        name: "Mysuru Palace",
        kn: "ಮೈಸೂರು ಅರಮನೆ",
        location: "Mysuru",
        locationKn: "ಮೈಸೂರು",
        category: "heritage",
        description: "Explore the magnificent royal palace of Mysuru.",
        descriptionKn: "ಮೈಸೂರಿನ ಭವ್ಯ ರಾಜಮನೆತನದ ಅರಮನೆಯನ್ನು ಅನ್ವೇಷಿಸಿ.",
        image: "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?auto=format&fit=crop&w=900&q=80",
        bestFor: "History and architecture",
        bestForKn: "ಇತಿಹಾಸ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪ",
        season: "October to March"
    },
    {
        name: "Coorg",
        kn: "ಕೊಡಗು",
        location: "Kodagu",
        locationKn: "ಕೊಡಗು",
        category: "nature",
        description: "Enjoy green hills, coffee plantations and waterfalls.",
        descriptionKn: "ಹಸಿರು ಬೆಟ್ಟಗಳು, ಕಾಫಿ ತೋಟಗಳು ಮತ್ತು ಜಲಪಾತಗಳನ್ನು ಆನಂದಿಸಿ.",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80",
        bestFor: "Nature and relaxation",
        bestForKn: "ಪ್ರಕೃತಿ ಮತ್ತು ವಿಶ್ರಾಂತಿ",
        season: "October to March"
    },
    {
        name: "Hampi",
        kn: "ಹಂಪಿ",
        location: "Vijayanagara",
        locationKn: "ವಿಜಯನಗರ",
        category: "heritage",
        description: "Discover ancient ruins and remarkable stone architecture.",
        descriptionKn: "ಪ್ರಾಚೀನ ಅವಶೇಷಗಳು ಮತ್ತು ಅದ್ಭುತ ಶಿಲಾ ವಾಸ್ತುಶಿಲ್ಪವನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",
        image: "https://images.unsplash.com/photo-1600100397608-f010f4c6a6f1?auto=format&fit=crop&w=900&q=80",
        bestFor: "History and photography",
        bestForKn: "ಇತಿಹಾಸ ಮತ್ತು ಛಾಯಾಗ್ರಹಣ",
        season: "October to February"
    },
    {
        name: "Gokarna",
        kn: "ಗೋಕರ್ಣ",
        location: "Uttara Kannada",
        locationKn: "ಉತ್ತರ ಕನ್ನಡ",
        category: "beach",
        description: "Relax on beautiful beaches and enjoy coastal views.",
        descriptionKn: "ಸುಂದರ ಕಡಲತೀರಗಳಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆದು ಕರಾವಳಿ ದೃಶ್ಯಗಳನ್ನು ಆನಂದಿಸಿ.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
        bestFor: "Beaches and relaxation",
        bestForKn: "ಕಡಲತೀರ ಮತ್ತು ವಿಶ್ರಾಂತಿ",
        season: "October to March"
    },
    {
        name: "Jog Falls",
        kn: "ಜೋಗ ಜಲಪಾತ",
        location: "Shivamogga",
        locationKn: "ಶಿವಮೊಗ್ಗ",
        category: "nature",
        description: "Witness one of India's spectacular waterfalls.",
        descriptionKn: "ಭಾರತದ ಅದ್ಭುತ ಜಲಪಾತಗಳಲ್ಲಿ ಒಂದನ್ನು ವೀಕ್ಷಿಸಿ.",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=80",
        bestFor: "Nature and sightseeing",
        bestForKn: "ಪ್ರಕೃತಿ ಮತ್ತು ವೀಕ್ಷಣೆ",
        season: "July to January"
    },
    {
        name: "Badami",
        kn: "ಬಾದಾಮಿ",
        location: "Bagalkot",
        locationKn: "ಬಾಗಲಕೋಟೆ",
        category: "heritage",
        description: "Explore famous cave temples carved into red sandstone.",
        descriptionKn: "ಕೆಂಪು ಮರಳುಗಲ್ಲಿನಲ್ಲಿ ಕೆತ್ತಲಾದ ಪ್ರಸಿದ್ಧ ಗುಹಾ ದೇವಾಲಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
        bestFor: "History and architecture",
        bestForKn: "ಇತಿಹಾಸ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪ",
        season: "October to March"
    },
    {
        name: "Murudeshwar",
        kn: "ಮುರುಡೇಶ್ವರ",
        location: "Uttara Kannada",
        locationKn: "ಉತ್ತರ ಕನ್ನಡ",
        category: "spiritual",
        description: "Visit the famous Shiva statue beside the Arabian Sea.",
        descriptionKn: "ಅರಬ್ಬೀ ಸಮುದ್ರದ ಪಕ್ಕದಲ್ಲಿರುವ ಪ್ರಸಿದ್ಧ ಶಿವನ ಪ್ರತಿಮೆಯನ್ನು ವೀಕ್ಷಿಸಿ.",
        image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=80",
        bestFor: "Spiritual visits and coastal views",
        bestForKn: "ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರವಾಸ ಮತ್ತು ಕರಾವಳಿ ದೃಶ್ಯಗಳು",
        season: "October to March"
    },
    {
        name: "Chikmagalur",
        kn: "ಚಿಕ್ಕಮಗಳೂರು",
        location: "Chikkamagaluru",
        locationKn: "ಚಿಕ್ಕಮಗಳೂರು",
        category: "nature",
        description: "Experience misty mountains and scenic coffee estates.",
        descriptionKn: "ಮಂಜಿನಿಂದ ಆವೃತವಾದ ಬೆಟ್ಟಗಳು ಮತ್ತು ಸುಂದರ ಕಾಫಿ ತೋಟಗಳನ್ನು ಅನುಭವಿಸಿ.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
        bestFor: "Nature and trekking",
        bestForKn: "ಪ್ರಕೃತಿ ಮತ್ತು ಚಾರಣ",
        season: "September to March"
    },
    {
        name: "Belur",
        kn: "ಬೇಲೂರು",
        location: "Hassan",
        locationKn: "ಹಾಸನ",
        category: "heritage",
        description: "Admire intricate Hoysala temple carvings.",
        descriptionKn: "ಹೊಯ್ಸಳ ದೇವಾಲಯಗಳ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗಳನ್ನು ಮೆಚ್ಚಿಕೊಳ್ಳಿ.",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=80",
        bestFor: "Architecture and heritage",
        bestForKn: "ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಪರಂಪರೆ",
        season: "October to March"
    },
    {
        name: "Udupi",
        kn: "ಉಡುಪಿ",
        location: "Udupi",
        locationKn: "ಉಡುಪಿ",
        category: "spiritual",
        description: "Explore the famous Krishna Temple and coastal town.",
        descriptionKn: "ಪ್ರಸಿದ್ಧ ಕೃಷ್ಣ ದೇವಾಲಯ ಮತ್ತು ಕರಾವಳಿ ಪಟ್ಟಣವನ್ನು ಅನ್ವೇಷಿಸಿ.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
        bestFor: "Spiritual visits and culture",
        bestForKn: "ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರವಾಸ ಮತ್ತು ಸಂಸ್ಕೃತಿ",
        season: "October to March"
    },
    {
        name: "Nandi Hills",
        kn: "ನಂದಿ ಬೆಟ್ಟಗಳು",
        location: "Chikkaballapur",
        locationKn: "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
        category: "nature",
        description: "Enjoy scenic viewpoints and beautiful sunrise views.",
        descriptionKn: "ಸುಂದರ ದೃಶ್ಯಾವಳಿಗಳು ಮತ್ತು ಸೂರ್ಯೋದಯವನ್ನು ಆನಂದಿಸಿ.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
        bestFor: "Sunrise and nature",
        bestForKn: "ಸೂರ್ಯೋದಯ ಮತ್ತು ಪ್ರಕೃತಿ",
        season: "September to February"
    },
    {
        name: "Pattadakal",
        kn: "ಪಟ್ಟದಕಲ್ಲು",
        location: "Bagalkot",
        locationKn: "ಬಾಗಲಕೋಟೆ",
        category: "heritage",
        description: "Discover a UNESCO World Heritage temple complex.",
        descriptionKn: "ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆಯ ದೇವಾಲಯಗಳ ಸಮೂಹವನ್ನು ಅನ್ವೇಷಿಸಿ.",
        image: "https://images.unsplash.com/photo-1600100397608-f010f4c6a6f1?auto=format&fit=crop&w=900&q=80",
        bestFor: "History and architecture",
        bestForKn: "ಇತಿಹಾಸ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪ",
        season: "October to March"
    }
];


/* =========================================================
   3. HIDDEN GEMS
========================================================= */

const hiddenGems = [
    {
        name: "Yana Caves",
        kn: "ಯಾಣ ಗುಹೆಗಳು",
        description: "Unique black limestone rock formations surrounded by forest.",
        descriptionKn: "ಕಾಡಿನಿಂದ ಸುತ್ತುವರಿದ ವಿಶಿಷ್ಟ ಕಪ್ಪು ಸುಣ್ಣದ ಕಲ್ಲಿನ ರಚನೆಗಳು.",
        category: "Nature",
        categoryKn: "ಪ್ರಕೃತಿ"
    },
    {
        name: "Apsarakonda Falls",
        kn: "ಅಪ್ಸರಕೊಂಡ ಜಲಪಾತ",
        description: "A peaceful waterfall near the coast.",
        descriptionKn: "ಕರಾವಳಿಯ ಸಮೀಪವಿರುವ ಶಾಂತವಾದ ಜಲಪಾತ.",
        category: "Nature",
        categoryKn: "ಪ್ರಕೃತಿ"
    },
    {
        name: "Banavasi",
        kn: "ಬನವಾಸಿ",
        description: "An ancient town known for its cultural heritage.",
        descriptionKn: "ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಗೆ ಹೆಸರಾದ ಪ್ರಾಚೀನ ಪಟ್ಟಣ.",
        category: "Heritage",
        categoryKn: "ಪರಂಪರೆ"
    }
];


/* =========================================================
   4. KANNADA PHRASE GUIDE
========================================================= */

const kannadaPhrases = [
    {
        phrase: "ನಮಸ್ಕಾರ",
        pronunciation: "Namaskara",
        meaning: "Hello",
        meaningKn: "ನಮಸ್ಕಾರ"
    },
    {
        phrase: "ಧನ್ಯವಾದಗಳು",
        pronunciation: "Dhanyavaadagalu",
        meaning: "Thank you",
        meaningKn: "ಧನ್ಯವಾದಗಳು"
    },
    {
        phrase: "ಇದು ಎಲ್ಲಿದೆ?",
        pronunciation: "Idu ellide?",
        meaning: "Where is this?",
        meaningKn: "ಇದು ಎಲ್ಲಿದೆ?"
    },
    {
        phrase: "ನನಗೆ ಸಹಾಯ ಮಾಡಿ",
        pronunciation: "Nanage sahaaya maadi",
        meaning: "Please help me",
        meaningKn: "ದಯವಿಟ್ಟು ನನಗೆ ಸಹಾಯ ಮಾಡಿ"
    },
    {
        phrase: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
        pronunciation: "Bus nildhaana ellide?",
        meaning: "Where is the bus station?",
        meaningKn: "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?"
    },
    {
        phrase: "ಎಷ್ಟು ಹಣ?",
        pronunciation: "Eshtu hana?",
        meaning: "How much does it cost?",
        meaningKn: "ಎಷ್ಟು ಹಣ?"
    }
];

let currentPhraseIndex = 0;


/* =========================================================
   5. RENDER DESTINATION CARDS
========================================================= */

const destinationGrid = document.getElementById("destinationGrid");

function renderDestinations(destinationList) {
    if (!destinationGrid) return;

    destinationGrid.innerHTML = "";

    if (destinationList.length === 0) {
        const message = document.createElement("p");
        message.className = "no-results";
        message.textContent =
            currentLanguage === "kn"
                ? "ಯಾವುದೇ ಪ್ರವಾಸಿ ತಾಣಗಳು ಕಂಡುಬಂದಿಲ್ಲ."
                : "No destinations found.";

        destinationGrid.appendChild(message);
        return;
    }

    destinationList.forEach((destination) => {
        const card = document.createElement("article");
        card.className = "destination-card";

        const image = document.createElement("img");
        image.className = "destination-image";
        image.src = destination.image;
        image.alt =
            currentLanguage === "kn"
                ? destination.kn
                : destination.name;
        image.loading = "lazy";

        const content = document.createElement("div");
        content.className = "destination-content";

        const title = document.createElement("h3");
        title.textContent =
            currentLanguage === "kn"
                ? destination.kn
                : destination.name;

        const location = document.createElement("p");
        location.className = "destination-location";
        location.textContent =
            "📍 " +
            (currentLanguage === "kn"
                ? destination.locationKn
                : destination.location);

        const description = document.createElement("p");
        description.className = "destination-description";
        description.textContent =
            currentLanguage === "kn"
                ? destination.descriptionKn
                : destination.description;

        const category = document.createElement("span");
        category.className = "destination-category";

        const categoryNames = {
            nature: currentLanguage === "kn" ? "ಪ್ರಕೃತಿ" : "Nature",
            heritage: currentLanguage === "kn" ? "ಪರಂಪರೆ" : "Heritage",
            beach: currentLanguage === "kn" ? "ಕಡಲತೀರ" : "Beach",
            spiritual: currentLanguage === "kn" ? "ಆಧ್ಯಾತ್ಮಿಕ" : "Spiritual"
        };

        category.textContent = categoryNames[destination.category];

        const details = document.createElement("p");
        details.className = "destination-best-for";
        details.textContent =
            (currentLanguage === "kn" ? "ಸೂಕ್ತ: " : "Best for: ") +
            (currentLanguage === "kn"
                ? destination.bestForKn
                : destination.bestFor);

        content.append(title, location, description, category, details);
        card.append(image, content);
        destinationGrid.appendChild(card);
    });
}


/* =========================================================
   6. DESTINATION SEARCH AND FILTERS
========================================================= */

let activeCategory = "all";

function filterDestinations() {
    const searchInput =
        document.getElementById("searchInput") ||
        document.getElementById("destinationSearch") ||
        document.querySelector('input[type="search"]');

    const searchTerm = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const filtered = destinations.filter((destination) => {
        const matchesCategory =
            activeCategory === "all" ||
            destination.category === activeCategory;

        const searchableText = [
            destination.name,
            destination.kn,
            destination.location,
            destination.locationKn,
            destination.description,
            destination.descriptionKn,
            destination.category
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    renderDestinations(filtered);
}

document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.category || "all";

        document.querySelectorAll("[data-category]").forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        filterDestinations();
    });
});


const searchForm = document.getElementById("searchForm");

if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        filterDestinations();
    });
}

const searchInput =
    document.getElementById("searchInput") ||
    document.getElementById("destinationSearch") ||
    document.querySelector('input[type="search"]');

if (searchInput) {
    searchInput.addEventListener("input", filterDestinations);
}


/* =========================================================
   7. TRANSLATE STATIC WEBSITE CONTENT
========================================================= */

function translateStaticContent() {
    /*
      Translate elements that already have data-en and data-kn.
      This is the recommended way to translate headings,
      paragraphs, links and buttons in your HTML.
    */

    document.querySelectorAll("[data-en][data-kn]").forEach((element) => {
        const translatedText =
            currentLanguage === "kn"
                ? element.dataset.kn
                : element.dataset.en;

        element.textContent = translatedText;
    });

    /*
      Translate elements by their IDs.
      These translations cover the main page sections and form labels.
    */

    const idTranslations = {
        searchHeading: ["Explore Destinations", "ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಅನ್ವೇಷಿಸಿ"],
        searchDescription: [
            "Find your next favourite place in Karnataka.",
            "ಕರ್ನಾಟಕದಲ್ಲಿ ನಿಮ್ಮ ಮುಂದಿನ ನೆಚ್ಚಿನ ಸ್ಥಳವನ್ನು ಕಂಡುಕೊಳ್ಳಿ."
        ],
        hiddenGemsHeading: [
            "Hidden Gems of Karnataka",
            "ಕರ್ನಾಟಕದ ಗುಪ್ತ ರತ್ನಗಳು"
        ],
        hiddenGemsDescription: [
            "Discover places beyond the usual tourist spots.",
            "ಸಾಮಾನ್ಯ ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಮೀರಿ ಹೊಸ ಸ್ಥಳಗಳನ್ನು ಕಂಡುಕೊಳ್ಳಿ."
        ],
        plannerHeading: ["AI Trip Planner", "AI ಪ್ರವಾಸ ಯೋಜಕ"],
        plannerDescription: [
            "Create your personalised Karnataka itinerary.",
            "ನಿಮಗಾಗಿ ವಿಶೇಷ ಕರ್ನಾಟಕ ಪ್ರವಾಸ ಯೋಜನೆಯನ್ನು ರಚಿಸಿ."
        ],
        phraseHeading: ["Learn Basic Kannada", "ಮೂಲ ಕನ್ನಡವನ್ನು ಕಲಿಯಿರಿ"],
        phraseDescription: [
            "Useful Kannada phrases for your journey.",
            "ನಿಮ್ಮ ಪ್ರಯಾಣಕ್ಕೆ ಉಪಯುಕ್ತವಾದ ಕನ್ನಡ ಪದಗುಚ್ಛಗಳು."
        ]
    };

    Object.entries(idTranslations).forEach(([id, values]) => {
        const element = document.getElementById(id);

        if (element) {
            element.textContent =
                currentLanguage === "kn" ? values[1] : values[0];
        }
    });

    /*
      Translate form placeholders.
    */

    const placeholderTranslations = [
        {
            selector: "#searchInput, #destinationSearch, input[type='search']",
            en: "Search destinations...",
            kn: "ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಹುಡುಕಿ..."
        },
        {
            selector: "#startingLocation",
            en: "Enter starting location",
            kn: "ಪ್ರಾರಂಭದ ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ"
        }
    ];

    placeholderTranslations.forEach((item) => {
        document.querySelectorAll(item.selector).forEach((element) => {
            element.placeholder =
                currentLanguage === "kn" ? item.kn : item.en;
        });
    });

    /*
      Translate text inside buttons and labels using their original text.
      Skip buttons that have already been translated using data attributes.
    */

    document.querySelectorAll(
        "button, label, .section-tag, .cta-section h2, .cta-section p"
    ).forEach((element) => {
        if (element.hasAttribute("data-en") &&
            element.hasAttribute("data-kn")) {
            return;
        }

        if (element.children.length > 0) {
            return;
        }

        if (!element.dataset.originalEnglish) {
            element.dataset.originalEnglish = element.textContent.trim();
        }

        const originalText = element.dataset.originalEnglish;

        if (currentLanguage === "kn" && translations[originalText]) {
            element.textContent = translations[originalText];
        } else {
            element.textContent = originalText;
        }
    });
}


/* =========================================================
   8. HIDDEN GEMS RENDERING
========================================================= */

function renderHiddenGems() {
    const possibleContainers = [
        document.getElementById("hiddenGemsGrid"),
        document.querySelector(".hidden-gems-grid"),
        document.getElementById("hiddenGemsContainer")
    ];

    const container = possibleContainers.find(Boolean);

    if (!container) return;

    container.innerHTML = "";

    hiddenGems.forEach((gem) => {
        const card = document.createElement("article");
        card.className = "hidden-gem-card";

        const title = document.createElement("h3");
        title.textContent =
            currentLanguage === "kn" ? gem.kn : gem.name;

        const description = document.createElement("p");
        description.textContent =
            currentLanguage === "kn"
                ? gem.descriptionKn
                : gem.description;

        const category = document.createElement("span");
        category.textContent =
            currentLanguage === "kn"
                ? gem.categoryKn
                : gem.category;

        card.append(title, description, category);
        container.appendChild(card);
    });
}


/* =========================================================
   9. KANNADA PHRASE GUIDE
========================================================= */

function displayPhrase() {
    const phraseElement = document.getElementById("kannadaPhrase");
    const pronunciationElement =
        document.getElementById("phrasePronunciation");
    const meaningElement = document.getElementById("phraseMeaning");

    if (!phraseElement || !pronunciationElement || !meaningElement) {
        return;
    }

    const phrase = kannadaPhrases[currentPhraseIndex];

    phraseElement.textContent = phrase.phrase;
    pronunciationElement.textContent = phrase.pronunciation;

    meaningElement.textContent =
        currentLanguage === "kn"
            ? phrase.meaningKn
            : phrase.meaning;
}

const nextPhraseButton = document.getElementById("nextPhrase");

if (nextPhraseButton) {
    nextPhraseButton.addEventListener("click", () => {
        currentPhraseIndex =
            (currentPhraseIndex + 1) % kannadaPhrases.length;

        displayPhrase();
    });
}


/* =========================================================
   10. LANGUAGE TOGGLE
========================================================= */

const languageToggle = document.getElementById("languageToggle");

function setLanguage(language) {
    currentLanguage = language;

    document.documentElement.lang =
        currentLanguage === "kn" ? "kn" : "en";

    document.body.classList.toggle(
        "kannada-mode",
        currentLanguage === "kn"
    );

    if (languageToggle) {
        languageToggle.textContent =
            currentLanguage === "kn" ? "English" : "ಕನ್ನಡ";

        languageToggle.setAttribute(
            "aria-label",
            currentLanguage === "kn"
                ? "Switch to English"
                : "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ"
        );
    }

    translateStaticContent();
    filterDestinations();
    renderHiddenGems();
    displayPhrase();

    /*
      If a trip plan is already visible, update it in the selected language.
    */
    const itineraryResult = document.getElementById("itineraryResult");

    if (itineraryResult && itineraryResult.dataset.hasPlan === "true") {
        generateTripPlan(null, true);
    }
}

if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        setLanguage(currentLanguage === "en" ? "kn" : "en");
    });
}


/* =========================================================
   11. TRIP PLANNER
========================================================= */

const tripRecommendations = {
    nature: [
        {
            name: "Coorg",
            kn: "ಕೊಡಗು",
            morning: "Visit a coffee plantation.",
            morningKn: "ಕಾಫಿ ತೋಟಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.",
            afternoon: "Explore a waterfall or scenic viewpoint.",
            afternoonKn: "ಜಲಪಾತ ಅಥವಾ ಸುಂದರ ವೀಕ್ಷಣಾ ಸ್ಥಳವನ್ನು ಅನ್ವೇಷಿಸಿ.",
            evening: "Relax and enjoy the hill views.",
            eveningKn: "ವಿಶ್ರಾಂತಿ ಪಡೆದು ಬೆಟ್ಟಗಳ ದೃಶ್ಯವನ್ನು ಆನಂದಿಸಿ."
        },
        {
            name: "Chikmagalur",
            kn: "ಚಿಕ್ಕಮಗಳೂರು",
            morning: "Explore the mountain viewpoints.",
            morningKn: "ಬೆಟ್ಟಗಳ ವೀಕ್ಷಣಾ ಸ್ಥಳಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
            afternoon: "Visit coffee estates and nearby attractions.",
            afternoonKn: "ಕಾಫಿ ತೋಟಗಳು ಮತ್ತು ಹತ್ತಿರದ ಆಕರ್ಷಣೆಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ.",
            evening: "Enjoy the peaceful surroundings.",
            eveningKn: "ಶಾಂತವಾದ ಪರಿಸರವನ್ನು ಆನಂದಿಸಿ."
        },
        {
            name: "Jog Falls",
            kn: "ಜೋಗ ಜಲಪಾತ",
            morning: "Travel to the waterfall viewpoint.",
            morningKn: "ಜಲಪಾತದ ವೀಕ್ಷಣಾ ಸ್ಥಳಕ್ಕೆ ಪ್ರಯಾಣಿಸಿ.",
            afternoon: "Explore nearby scenic locations.",
            afternoonKn: "ಹತ್ತಿರದ ಸುಂದರ ಸ್ಥಳಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
            evening: "Relax and plan the next stop.",
            eveningKn: "ವಿಶ್ರಾಂತಿ ಪಡೆದು ಮುಂದಿನ ಸ್ಥಳವನ್ನು ಯೋಜಿಸಿ."
        }
    ],

    heritage: [
        {
            name: "Mysuru Palace",
            kn: "ಮೈಸೂರು ಅರಮನೆ",
            morning: "Explore Mysuru Palace.",
            morningKn: "ಮೈಸೂರು ಅರಮನೆಯನ್ನು ಅನ್ವೇಷಿಸಿ.",
            afternoon: "Visit nearby heritage attractions.",
            afternoonKn: "ಹತ್ತಿರದ ಐತಿಹಾಸಿಕ ಸ್ಥಳಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ.",
            evening: "Explore the city centre.",
            eveningKn: "ನಗರದ ಕೇಂದ್ರ ಭಾಗವನ್ನು ಅನ್ವೇಷಿಸಿ."
        },
        {
            name: "Hampi",
            kn: "ಹಂಪಿ",
            morning: "Explore the ancient temple complex.",
            morningKn: "ಪ್ರಾಚೀನ ದೇವಾಲಯಗಳ ಸಮೂಹವನ್ನು ಅನ್ವೇಷಿಸಿ.",
            afternoon: "Visit historic monuments and stone structures.",
            afternoonKn: "ಐತಿಹಾಸಿಕ ಸ್ಮಾರಕಗಳು ಮತ್ತು ಶಿಲಾ ರಚನೆಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ.",
            evening: "Enjoy the historic landscape.",
            eveningKn: "ಐತಿಹಾಸಿಕ ಭೂದೃಶ್ಯವನ್ನು ಆನಂದಿಸಿ."
        },
        {
            name: "Badami",
            kn: "ಬಾದಾಮಿ",
            morning: "Visit the famous cave temples.",
            morningKn: "ಪ್ರಸಿದ್ಧ ಗುಹಾ ದೇವಾಲಯಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ.",
            afternoon: "Explore nearby historical monuments.",
            afternoonKn: "ಹತ್ತಿರದ ಐತಿಹಾಸಿಕ ಸ್ಮಾರಕಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
            evening: "Relax after sightseeing.",
            eveningKn: "ಪ್ರವಾಸದ ನಂತರ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ."
        }
    ],

    beach: [
        {
            name: "Gokarna",
            kn: "ಗೋಕರ್ಣ",
            morning: "Explore the local beaches.",
            morningKn: "ಸ್ಥಳೀಯ ಕಡಲತೀರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
            afternoon: "Enjoy the coastal scenery.",
            afternoonKn: "ಕರಾವಳಿಯ ದೃಶ್ಯಗಳನ್ನು ಆನಂದಿಸಿ.",
            evening: "Relax near the beach.",
            eveningKn: "ಕಡಲತೀರದ ಬಳಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ."
        },
        {
            name: "Murudeshwar",
            kn: "ಮುರುಡೇಶ್ವರ",
            morning: "Visit the Shiva statue and temple area.",
            morningKn: "ಶಿವನ ಪ್ರತಿಮೆ ಮತ್ತು ದೇವಾಲಯದ ಪ್ರದೇಶಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.",
            afternoon: "Explore nearby coastal attractions.",
            afternoonKn: "ಹತ್ತಿರದ ಕರಾವಳಿ ಆಕರ್ಷಣೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
            evening: "Enjoy the sea views.",
            eveningKn: "ಸಮುದ್ರದ ದೃಶ್ಯಗಳನ್ನು ಆನಂದಿಸಿ."
        }
    ],

    spiritual: [
        {
            name: "Udupi",
            kn: "ಉಡುಪಿ",
            morning: "Visit the Krishna Temple area.",
            morningKn: "ಕೃಷ್ಣ ದೇವಾಲಯದ ಪ್ರದೇಶಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.",
            afternoon: "Explore local cultural attractions.",
            afternoonKn: "ಸ್ಥಳೀಯ ಸಾಂಸ್ಕೃತಿಕ ಆಕರ್ಷಣೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
            evening: "Explore the town at a relaxed pace.",
            eveningKn: "ನಿಧಾನವಾಗಿ ಪಟ್ಟಣವನ್ನು ಅನ್ವೇಷಿಸಿ."
        },
        {
            name: "Murudeshwar",
            kn: "ಮುರುಡೇಶ್ವರ",
            morning: "Visit the temple area.",
            morningKn: "ದೇವಾಲಯದ ಪ್ರದೇಶಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.",
            afternoon: "Explore the coastal surroundings.",
            afternoonKn: "ಕರಾವಳಿ ಪರಿಸರವನ್ನು ಅನ್ವೇಷಿಸಿ.",
            evening: "Enjoy the peaceful sea views.",
            eveningKn: "ಶಾಂತವಾದ ಸಮುದ್ರದ ದೃಶ್ಯಗಳನ್ನು ಆನಂದಿಸಿ."
        }
    ],

    mixed: [
        {
            name: "Mysuru Palace",
            kn: "ಮೈಸೂರು ಅರಮನೆ",
            morning: "Explore the palace and its surroundings.",
            morningKn: "ಅರಮನೆ ಮತ್ತು ಅದರ ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶವನ್ನು ಅನ್ವೇಷಿಸಿ.",
            afternoon: "Visit nearby cultural attractions.",
            afternoonKn: "ಹತ್ತಿರದ ಸಾಂಸ್ಕೃತಿಕ ಆಕರ್ಷಣೆಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ.",
            evening: "Explore the city.",
            eveningKn: "ನಗರವನ್ನು ಅನ್ವೇಷಿಸಿ."
        },
        {
            name: "Coorg",
            kn: "ಕೊಡಗು",
            morning: "Enjoy the green hills.",
            morningKn: "ಹಸಿರು ಬೆಟ್ಟಗಳನ್ನು ಆನಂದಿಸಿ.",
            afternoon: "Explore the local sights.",
            afternoonKn: "ಸ್ಥಳೀಯ ದೃಶ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
            evening: "Relax in the natural surroundings.",
            eveningKn: "ನೈಸರ್ಗಿಕ ಪರಿಸರದಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ."
        },
        {
            name: "Hampi",
            kn: "ಹಂಪಿ",
            morning: "Visit historical monuments.",
            morningKn: "ಐತಿಹಾಸಿಕ ಸ್ಮಾರಕಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ.",
            afternoon: "Explore the surrounding heritage sites.",
            afternoonKn: "ಸುತ್ತಮುತ್ತಲಿನ ಪರಂಪರೆಯ ಸ್ಥಳಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
            evening: "Enjoy the landscape.",
            eveningKn: "ಭೂದೃಶ್ಯವನ್ನು ಆನಂದಿಸಿ."
        }
    ]
};


/* Choose destinations based on the selected travel preference. */
function getTravelOptions(tripType) {
    return tripRecommendations[tripType] || tripRecommendations.mixed;
}


/* Estimate a simple sample budget per person. */
function getEstimatedBudget(budget, days) {
    let dailyCost;

    if (budget === "budget") {
        dailyCost = 1500;
    } else if (budget === "luxury") {
        dailyCost = 7000;
    } else {
        dailyCost = 3500;
    }

    return dailyCost * days;
}


/* Generate the itinerary safely using DOM elements. */
function generateTripPlan(event, refreshOnly = false) {
    if (event) {
        event.preventDefault();
    }

    const locationInput = document.getElementById("startingLocation");
    const durationInput = document.getElementById("duration");
    const budgetInput = document.getElementById("budget");
    const tripTypeInput = document.getElementById("tripType");
    const resultContainer = document.getElementById("itineraryResult");

    if (
        !locationInput ||
        !durationInput ||
        !budgetInput ||
        !tripTypeInput ||
        !resultContainer
    ) {
        return;
    }

    const startingLocation = locationInput.value.trim();
    const duration = Number(durationInput.value) || 1;
    const budget = budgetInput.value || "moderate";
    const tripType = tripTypeInput.value || "mixed";

    if (!startingLocation && !refreshOnly) {
        alert(
            currentLanguage === "kn"
                ? "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪ್ರಾರಂಭದ ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ."
                : "Please enter your starting location."
        );

        locationInput.focus();
        return;
    }

    if (!startingLocation && refreshOnly) {
        return;
    }

    const options = getTravelOptions(tripType);
    const estimatedBudget = getEstimatedBudget(budget, duration);

    resultContainer.innerHTML = "";
    resultContainer.dataset.hasPlan = "true";

    const heading = document.createElement("h3");
    heading.textContent =
        currentLanguage === "kn"
            ? "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಪ್ರವಾಸ ಯೋಜನೆ"
            : "Your Personalised Itinerary";

    const intro = document.createElement("p");
    intro.textContent =
        (currentLanguage === "kn" ? "ಪ್ರಾರಂಭದ ಸ್ಥಳ: " : "Starting from: ") +
        startingLocation;

    const durationText = document.createElement("p");
    durationText.textContent =
        (currentLanguage === "kn" ? "ಅವಧಿ: " : "Duration: ") +
        duration +
        (currentLanguage === "kn" ? " ದಿನಗಳು" : (duration === 1 ? " day" : " days"));

    const budgetText = document.createElement("p");
    budgetText.textContent =
        (currentLanguage === "kn"
            ? "ಪ್ರತಿ ವ್ಯಕ್ತಿಗೆ ಅಂದಾಜು ಬಜೆಟ್: ₹"
            : "Estimated budget per person: ₹") +
        estimatedBudget.toLocaleString("en-IN");

    resultContainer.append(heading, intro, durationText, budgetText);

    for (let day = 0; day < duration; day++) {
        const option = options[day % options.length];

        const dayCard = document.createElement("article");
        dayCard.className = "itinerary-day";

        const dayHeading = document.createElement("h4");
        dayHeading.textContent =
            (currentLanguage === "kn" ? "ದಿನ " : "Day ") + (day + 1);

        const destinationHeading = document.createElement("h5");
        destinationHeading.textContent =
            currentLanguage === "kn" ? option.kn : option.name;

        const morning = document.createElement("p");
        morning.textContent =
            (currentLanguage === "kn" ? "ಬೆಳಗ್ಗೆ: " : "Morning: ") +
            (currentLanguage === "kn" ? option.morningKn : option.morning);

        const afternoon = document.createElement("p");
        afternoon.textContent =
            (currentLanguage === "kn" ? "ಮಧ್ಯಾಹ್ನ: " : "Afternoon: ") +
            (currentLanguage === "kn" ? option.afternoonKn : option.afternoon);

        const evening = document.createElement("p");
        evening.textContent =
            (currentLanguage === "kn" ? "ಸಂಜೆ: " : "Evening: ") +
            (currentLanguage === "kn" ? option.eveningKn : option.evening);

        dayCard.append(
            dayHeading,
            destinationHeading,
            morning,
            afternoon,
            evening
        );

        resultContainer.appendChild(dayCard);
    }

    const note = document.createElement("p");
    note.className = "planner-note";
    note.textContent =
        currentLanguage === "kn"
            ? "ಇದು ಮಾದರಿ ಪ್ರವಾಸ ಯೋಜನೆ. ನಿಜವಾದ ವೆಚ್ಚ ಮತ್ತು ಪ್ರಯಾಣದ ಸಮಯ ಬದಲಾಗಬಹುದು."
            : "This is a sample itinerary. Actual costs and travel times may vary.";

    resultContainer.appendChild(note);
}


const plannerForm = document.getElementById("plannerForm");

if (plannerForm) {
    plannerForm.addEventListener("submit", generateTripPlan);
}


/* =========================================================
   12. MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.getElementById("menuToggle") ||
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks") ||
    document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const isExpanded = navLinks.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", String(isExpanded));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


/* =========================================================
   13. SMOOTH SCROLLING
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* =========================================================
   14. INITIALISE THE WEBSITE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    renderDestinations(destinations);
    renderHiddenGems();
    displayPhrase();
    translateStaticContent();

    console.log("Namma Karnataka website loaded successfully!");
});