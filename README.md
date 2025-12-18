# 🌦️ RainCheckr – Weather Web Application

RainCheckr is a lightweight, responsive weather web application built entirely from scratch using HTML5, CSS3, and vanilla JavaScript.  
The goal of this project was to develop a complete web application without frameworks in order to deeply understand core front-end concepts, API integration, and browser-based user interactions.

---

## 🚀 Features

- 🌍 City-Based Weather Search  
  Search weather by city, with optional state/province and country code to disambiguate locations with identical names.

- 📍 Local Area Weather Detection  
  Uses the browser’s Geolocation API to fetch and display weather data for the user’s current location.

- 🌡️ Temperature Unit Toggle  
  Toggle between Celsius and Fahrenheit without making additional API requests.

- 🎨 Custom UI & Styling
  - Dark navy gradient background with subtle purple accents
  - Glassmorphism-inspired card layout with blur and transparency
  - Consistently styled input fields and buttons for a cohesive user experience


- 🖼️ Dynamic Weather Icons  
  Weather icons are fetched directly from the OpenWeatherMap API and are hidden until valid weather data is displayed.

- ⚠️ Error Handling  
  Gracefully handles invalid locations and denied geolocation permissions.

---

## 🧠 What I Learned

This project was intentionally built without frameworks to strengthen fundamentals, including:

- DOM manipulation with vanilla JavaScript
- Asynchronous programming using async/await
- Working with REST APIs and JSON responses
- Dynamically updating UI elements
- CSS gradients, layout, and styling best practices
- Handling browser APIs (Geolocation)
- Debugging UI and logic edge cases

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API
- Browser Geolocation API

---

## 📦 Project Structure

```text
/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🔑 API Setup

This project uses the OpenWeatherMap API.

1. Create an account at:  
   https://openweathermap.org/

2. Generate an API key from your dashboard.

3. Replace the API key in script.js:

```js
const apiKey = "YOUR_API_KEY_HERE";
```

---

## ▶️ Running the Project

No build tools or dependencies are required.

1. Clone the repository:

```bash
git clone https://github.com/adicaluga/raincheckr.git
```

2. Open index.html in your browser.

For best results, use a local development server such as Live Server.

---

## 📜 License

This project is open source and available under the MIT License.
