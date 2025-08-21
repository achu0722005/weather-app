# weather-app

A simple JavaScript weather app that fetches live data using Axios and RapidAPI.

---

# 🌦️ Weather App

A simple weather application built with **JavaScript**, **Axios**, and **Bootstrap** that fetches real-time weather data from the [Weather by API Ninjas](https://rapidapi.com/marketplace) API.

Users can enter a city name and get the current weather conditions instantly in the browser.

---

## ✨ Features

* 🌍 Search weather by **city name**
* 📡 Fetches live data from **Weather by API Ninjas**
* ⚡ Built with **Axios** for HTTP requests
* 🎨 Styled with **Bootstrap** for responsive design
* 🖥️ Runs directly in the browser with clean UI
* 🔑 Secure API call setup using RapidAPI

---

## 📂 Project Structure

```
📦 weather-app
 ┣ 📜 index.html       # Main HTML file (Bootstrap included)
 ┣ 📜 weather.js       # JavaScript with Axios API call
 ┣ 📜 style.css        # (Optional) Custom styling
 ┗ 📜 README.md        # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/achu0722005/weather-app.git
cd weather-app
```

### 2️⃣ Open in Browser

Just open `index.html` in your browser.
Make sure you’ve added your **API key** in `weather.js`:

```js
headers: {
  'x-rapidapi-key': 'YOUR_API_KEY_HERE',
  'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
}
```

---

## ⚙️ Configuration

* Sign up at [RapidAPI](https://rapidapi.com/)
* Subscribe to the **Weather by API Ninjas** API
* Copy your API key into `weather.js`

---

## 📸 Screenshot
```
![Weather App Screenshot]()
```

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **Bootstrap**
* **JavaScript (ES6)**
* **Axios**
* **Weather by API Ninjas (RapidAPI)**

---

## 📌 Future Improvements

* Add temperature in Celsius/Fahrenheit toggle 🌡️
* Support location-based weather using latitude/longitude 📍
* Improve UI with dark/light mode 🎨
* Deploy online with GitHub Pages or Vercel 🚀

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License**.

---

👉 Do you want me to also add a **GitHub Pages deployment guide** to this README so you can host your weather app online easily?
