// const events = [
//     {
//         name: "Concert Cysoul",
//         date: "16/08/2024",
//         time: "A partir de 20h",
//         location: "Stade Japoma",
//         ticketsLeft: 10,
//         image: "img/rose.png"
//     },

//     {
//         name: "Concert Cysoul",
//         date: "16/08/2024",
//         time: "A partir de 20h",
//         location: "Stade Japoma",
//         ticketsLeft: 10,
//         image: "img/basketball.gif"
//     },

//     {
//         name: "Concert Cysoul",
//         date: "16/08/2024",
//         time: "A partir de 20h",
//         location: "Stade Japoma",
//         ticketsLeft: 10,
//         image: "img/R.gif"
//     },

//     {
//         name: "Concert Cysoul",
//         date: "16/08/2024",
//         time: "A partir de 20h",
//         location: "Stade Japoma",
//         ticketsLeft: 10,
//         image: "img/football.jpeg"
//     },

//     {
//         name: "Concert Cysoul",
//         date: "16/08/2024",
//         time: "A partir de 20h",
//         location: "Stade Japoma",
//         ticketsLeft: 10,
//         image: "img/party.gif"
//     },

//     {
//         name: "Concert Cysoul",
//         date: "16/08/2024",
//         time: "A partir de 20h",
//         location: "Stade Japoma",
//         ticketsLeft: 10,
//         image: "img/OIP.jpeg"
//     },
//     // Add more events here
// ];

// const eventContainer = document.getElementById('event-container');

// events.forEach(event => {
//     const eventCard = `
//         <div class="event-card">
//             <div class="img_container">
//                 <img src="${event.image}" alt="event image">
//             </div>
//             <h3>${event.name}</h3>
//             <div class="align">
//                 <div class="second">
//                     <ol>
//                         <li><img src="img/calendar.png" alt="icon">&nbsp;&nbsp;&nbsp;${event.date}</li>
//                         <li><img src="img/clock.png" alt="icon">&nbsp;&nbsp;&nbsp;${event.time}</li>
//                         <li><img src="img/pin.jpeg" alt="icon2">${event.location}</li>
//                     </ol>
//                 </div>
//                 <div class="rectangle">
//                     <p class="third">${event.ticketsLeft} tickets restant</p>
//                 </div>
//             </div>
//         </div>
//     `;
//     eventContainer.innerHTML += eventCard;
// });