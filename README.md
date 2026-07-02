Portfolio Website 
This repository contains my personal portfolio website, built using clean HTML, CSS, and JavaScript. The project follows a modular design pattern, separating content from structure to ensure easy maintenance and scalability. 

Project Structure 
The project is organized to keep data and logic distinct from the display layer : 

portfolio/ 
├── assets/
│   └── images/      # Contains project visuals (e.g., ai-illustration.png, churn.png) 
├── data/ 
│   └── portfolio.js # Centralized data source for projects and personal info 
├── index.html       # Main structure of the portfolio 
├── script.js        # Logic to dynamically inject content from data/portfolio.js 
└── styles.css       # Styling for the portfolio 
Key Features 
Dynamic Rendering : The website avoids hardcoding content directly in the HTML. Instead, all project details, descriptions, and metadata are managed within data/portfolio.js. 

Visual Assets : The portfolio utilizes a custom collection of high-quality images stored in assets/images/, including visuals for projects such as sentiment analysis and fraud detection. 

Icon Integration : The UI is enhanced using Font Awesome to provide intuitive, scalable vector icons across the interface. 

JavaScript-Driven : script.js handles the fetching and rendering of data, automatically populating the portfolio sections when the page loads. 

Modular Architecture : By isolating data, adding new projects or updating existing information requires editing only one file (data/portfolio.js) without touching the core HTML structure. 

Technologies Used 
HTML5 

CSS3 

JavaScript (ES6+) 

Font Awesome (for iconography) 

How to Run 
Clone this repository to your local machine. 

Open the project folder in your editor. 

Use the "Go Live" extension (or any local server) to serve index.html in your browser. 

License 
All rights reserved. 

The content, design, and code within this repository are the intellectual property of the author. You are welcome to view and explore this portfolio for personal inspiration or professional evaluation. However, you may not copy, reproduce, distribute, or use any portion of this code or the associated assets for your own projects or commercial purposes without explicit prior written permission. 