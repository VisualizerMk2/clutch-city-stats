# Clutch City Stats
### https://clutch-city-stats.herokuapp.com/
Clutch City Stats is a single-page web application for data visualization of career statistics of the 2019 Houston Rockets playoff roster. Users can select from the 10 Rockets players who saw substantial playoff minutes and view how their season stats such as points per game, total rebounds, and more have progressed over their entire NBA careers.

---

### Challenges and Solutions

My original vision for this app was to channel my love of sports (especially NBA basketball), programming, and data (especially data visualization) together with my desire to learn/flex my D3js skills into a simple web app where users could search and see stats for their favorite active NBA players. I was initially surprised to find that there weren't any many accessible APIs for NBA stats that didn't charge a premium subscription fee (in hindsight this makes perfect sense as having that kind of data would be worth a lot to sell access to for fantasy league and betting purposes). 

Fortunately, player data is available in JSON from the NBA's own official backend at data.nba.com, so to keep this project alive I decided to take the JSON data for each player of the Rockets who saw significant minutes in the 2019 playoffs and use that as a sort of faux-backend that I could pull data from and process as if my React front end had been passed data from an API. This way I was still able to improve my D3 + React skills without access to an actual external API.

CCS can display career stats in either a bar or line graph and future updates will hopefully add some more data visualizations and the ability to compare player stats. The app is responsive and switches from 

---
### Todo for future updates
- [ ] Add more data visualizations
- [ ] Add ability to compare stats between two players in one visualization
- [ ] Improve responsiveness of D3 graphs and player info cards
- [ ] Improve layout for a sleeker UI/UX
