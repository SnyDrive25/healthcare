# Healthcare & Telemedicine platform

we're dedicated to revolutionizing healthcare through technology. Our mission is to make healthcare accessible, efficient, and patient-centered through our innovative telemedicine solutions.

## **How ​​do you run the project?**

```bash
  npm install
```

Start the server and client app

```bash
  npm start
```

## About the changes made

### **Frontend**

#### /public/index.html

- Added the link to font-awesome for icons

#### /src/HomeComponent/BnbValue.jsx

- Created the component to display and update the value of the BnB token every 10 seconds, using the server's endpoint /bnbvalue/get_value

#### /src/HomeComponent/Sliding.jsx

- Modified the background image, as asked

#### /src/Pages/Home.jsx

- Added the BnbValue component to the Home page, at the second position

### **Backend**

#### /server/app.js

- created the link to the route bnbvalue located in /server/routes/bnbvalue.js

#### /server/routes/bnbvalue.js

- created the endpoint /bnbvalue/get_value to get the value of the BnB token from the CoinMarketCap API (every 10 seconds)
