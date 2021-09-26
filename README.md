
# Mood Score -- sentiment detecting App
This app is used to calculate a user's weekly mood score and provide some resources to maintain psychological health. After logging in, the user can chat with the GuidingBot for the usage of the app. Users can fill out a form. The app then uses Node.js module(Sentiment)https://www.npmjs.com/package/sentiment to analyze the sentiment of the user's answers to produce a mood score. Users can view and modify past forms. The most recent mood scores produced will be reflected on the line chart along with the weekly average mood score. Users can then chat with the guidingBot for further assistance based on the scores that they received.


## Technologies

Project is created with:

* JS
* React
* Html/Css/Fontawesome/Google fonts
* Boostrap
* UI/UX design 
* MongoDB
* Mongoose
* Express
* Bcrypt
* SCSS
* Less
* Node.js
* ChartJS
* AFINN-based sentiment analysis
* JWT/Cookies

## Dependencies 
"axios": "^0.21.4",
"bcrypt": "^5.0.1",
"bcryptjs": "^2.4.3",
"cookie-parser": "^1.4.5",
"cors": "^2.8.5",
"express": "^4.17.1",
"firebase": "^9.0.2",
"jsonwebtoken": "^8.5.1",
"mongoose": "^6.0.6",
"react-chartjs-2": "^3.0.5",
"react-firebase-hooks": "^3.0.4",
"react-router-dom": "^5.3.0"
"moment"
"sentiment"

## More detailed Features

* Built one to many relationships with nested documents using Mongoose/MongoDb
* Login/ Registration validation with React, JSON Web token, bcrypt
* After logging in, the user is able to chat with the GuidingBot for the usage of the app and helpful resources
* User can fill out a form to get their mood score(either positive, neutral or negative)
* User is able to view and modify past forms 
* User can use the calendar to keep track of their activities
* After filling out forms, the most recently mood scores produced will be reflected on the line chart 
* The weekly average mood score will also be shown on the user dashboard
* User can then chat with the guidingBot for further assistance based on the scores that they received


## Usage

```javascript
npm install express mongoose cors
npm install axios react-router-dom cookie-parser bcrypt sentiment jsonwebtoken
npm install react-chartjs-2 moment

nodemon server.js
yarn start
```

## Demo

![Screen Shot 2021-09-23 at 7 38 04 PM](https://user-images.githubusercontent.com/74885386/134616924-570a7fde-daa1-492d-a4cc-86d4e2983986.png)

![Screen Shot 2021-09-24 at 7 06 34 PM](https://user-images.githubusercontent.com/74885386/134754324-5bc8c1ad-fe76-4643-b597-d534e22e0097.png)

![Screen Shot 2021-09-23 at 8 52 04 PM](https://user-images.githubusercontent.com/74885386/134616975-31cbb7a9-3465-438e-b0f8-88ea67d5252e.png)
![Screen Shot 2021-09-25 at 7 01 02 PM](https://user-images.githubusercontent.com/74885386/134790626-b85a872a-f795-472f-b3a4-e713e7de8146.png)

![Screen Shot 2021-09-23 at 8 49 37 PM](https://user-images.githubusercontent.com/74885386/134616953-204211dc-40dd-45e4-a3f2-92f613b91485.png)
![Screen Shot 2021-09-23 at 8 49 44 PM](https://user-images.githubusercontent.com/74885386/134616960-240f60f2-edde-400b-b3bc-7055d7a7bb2d.png)
![Screen Shot 2021-09-24 at 1 19 42 PM](https://user-images.githubusercontent.com/74885386/134735084-7a5c01d6-4583-4571-b2d0-563b2b8a7336.png)
![Screen Shot 2021-09-23 at 8 46 34 PM](https://user-images.githubusercontent.com/74885386/134616934-d2be73d8-a600-4e3a-8a18-9a6ebdbb65aa.png)

![Screen Shot 2021-09-23 at 9 14 49 PM](https://user-images.githubusercontent.com/74885386/134618301-55e79d80-2071-48b6-9f1d-7e0d94e71c1b.png)
![Screen Shot 2021-09-23 at 9 17 35 PM](https://user-images.githubusercontent.com/74885386/134618319-389264c1-1078-40d8-a246-47a87a9b38e9.png)
![Screen Shot 2021-09-25 at 7 03 31 PM](https://user-images.githubusercontent.com/74885386/134790668-43225ef1-f968-4c08-8979-6c884b8f77ac.png)

![Screen Shot 2021-09-25 at 7 00 44 PM](https://user-images.githubusercontent.com/74885386/134790675-2e334314-aaa5-4e3e-89ba-5906b2d1a36e.png)


![Screen Shot 2021-09-23 at 8 52 32 PM](https://user-images.githubusercontent.com/74885386/134616988-cfefe834-8fab-46ea-a8e9-066b378b94fb.png)
![Screen Shot 2021-09-23 at 8 54 22 PM](https://user-images.githubusercontent.com/74885386/134616991-c7507f66-6ece-4c6e-86e7-af23b74da3ef.png)
![Screen Shot 2021-09-25 at 7 05 30 PM](https://user-images.githubusercontent.com/74885386/134790699-ab07d352-3a40-410f-b595-8c6bda92d64f.png)

![Screen Shot 2021-09-25 at 7 05 37 PM](https://user-images.githubusercontent.com/74885386/134790701-425091aa-217c-4429-ab04-e0b318919e30.png)


![Screen Shot 2021-09-23 at 8 55 00 PM](https://user-images.githubusercontent.com/74885386/134617007-571d0990-3f74-494e-8deb-1a3e5d07a964.png)


 # Live demo 
 check it out in https://yma-van2020.github.io/portfolio_site/
