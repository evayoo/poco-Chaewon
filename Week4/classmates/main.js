let profileData = [
    {
        id: 1,
        name:"Chaewon Yoo",
        age:"33",
        link:"https://ca.slack-edge.com/T1S5R6LJ3-U05N97PTYUT-ad87467badd0-512",
        eyeColor:"dark",
        hobby:"bicycle",
        university: "Master's degree",
        experience:"10 years",
        location: "Bern"

},
{
    id: 2,
    name:"Daniel Urribarri",
    age:"29",
    link:"https://ca.slack-edge.com/T1S5R6LJ3-U05PLMHN25C-1ff3b2830e73-512",
    eyeColor:"dark",
    hobby:"bicycle",
    university: "Bachelor's degree",
    experience:"8 years",
    location: "Bern"

},
{
    id: 3,
    name:"Olena Andriushchenko",
    age:"33",
    link:"https://ca.slack-edge.com/T1S5R6LJ3-U05N6D01C77-d0c457f3a8c2-512",
    eyeColor:"blue",
    hobby:"boardgame",
    university: "Masters's degree",
    experience:"9 years",
    location: "Lausanne"
},
{
    id: 4,
    name:"Sema İstek",
    age:"40",
    link:"https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ4SLBZ-602e37b8467b-512",
    eyeColor:"blue",
    hobby:"boardgame",
    university: "Masters's degree",
    experience:"10 years",
    location: "Bern"

},
{
    id: 5,
    name:"Anastasiia Protsenko",
    age:"19",
    link:"https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ641JT-ff1a9417160c-512",
    eyeColor:"blue",
    hobby:"boardgame",
    university: "Masters's degree",
    experience:"4 years",
    location: "Lausanne"

},
{
    id: 6,
    name:"Marc Wilhelm",
    age:"23",
    link:"https://ca.slack-edge.com/T1S5R6LJ3-U04SVJQEQG1-f56b2e7fe7d6-512",
    eyeColor:"blue",
    hobby:"PHP",
    university: "Masters's degree",
    experience:"5 years",
    location: "Zurich"

},
{
    id: 7,
    name:"Melike Ural",
    age:"28",
    link:"https://ca.slack-edge.com/T1S5R6LJ3-U05N2M2TE78-34867e000e3a-512",
    eyeColor:"blue",
    hobby:"ChatGPT",
    university: "Masters's degree",
    experience:"5 years",
    location: "Zurich"

},
{
    id: 8,
    name:"Kadir Öztürk",
    age:"33",
    link:"https://ca.slack-edge.com/T1S5R6LJ3-U05N9AJHGGJ-183e0e4e4699-512",
    eyeColor:"dark",
    hobby:"Books",
    university: "Masters's degree",
    experience:"10 years",
    location: "Zurich"

},
{
    id: 9,
    name:"Yidnekachew Mahteme",
    age:"33",
    link:"https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ3DZU7-f8a343d32017-512",
    eyeColor:"dark",
    hobby:"Books",
    university: "Masters's degree",
    experience:"10 years",
    location: "Lausanne"

},
{
    id: 10,
    name:"Vladimir Rakov",
    age:"44",
    link:"https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ5RECF-b8dc4db3cdc1-512",
    eyeColor:"green",
    hobby:"Books",
    university: "Masters's degree",
    experience:"10 years",
    location: "Zurich"

},
]

let parentElement = document.getElementById("cardList");


AppendHTML(profileData);
showMore()





// filter


let buttonsLocation = document.querySelectorAll('.filter li');

buttonsLocation.forEach( filterLocation  => {
   
    filterLocation.addEventListener("click", () => {

        // TODO: becouse of creating a new elements of appendet cards the created upper list of buttons "More info" didnt exist any more...

        let attrLocation = filterLocation.getAttribute('data-location');

        if (attrLocation){
            const filteredData = filterByLocation(attrLocation);
            AppendHTML(filteredData);
            showMore()
        } else {
            AppendHTML(profileData);
            showMore()
        }

 
       
    })

})


// functions

function filterByLocation(location) {
    const filteredData = profileData.filter(item => item.location === location);
    return filteredData;
};


function AppendHTML(data){
    let card = ""; 
    data.forEach(function(participant, index){

        
        card += `
            <li>
                <img src="${participant.link}" alt="">
                <div class="info">
                        <h2>${participant.name}</h2>
                        <div class="wrapper">
                            <ol id="personal">
                                <li>
                                    eye color: ${participant.eyeColor}
                                </li>
                                <li>
                                    age: ${participant.age}
                                </li>
                                <li>
                                    Hobby: ${participant.hobby}
                                </li>
                                <li>
                                    Location: ${participant.location}
                                </li>
                            </ol>
                            <ol id="professional">
                                <li>
                                    University: ${participant.university}
                                </li>
                                <li>
                                    Previous experience: ${participant.experience}
                                </li>
                            </ol>
                        </div>
    
                        <button> Professional info</button>
                </div>
                
            </li>
        `     
    });    
    parentElement.innerHTML = card;
 
}


function showMore(){

    
        // Show another info
        let allButtons = document.querySelectorAll(".info button");

        allButtons.forEach(function(button){

            button.addEventListener("click", showMore);

            function showMore(){
                button.parentNode.classList.toggle("show");
                button.innerHTML = "More info";
            }
        })
}