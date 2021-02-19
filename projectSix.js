const reviews = [
    {
        id: 1,
        name: 'Rose',
        type: 'Flower',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text: 'A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears.[1] There are over three hundred species and tens of thousands of cultivars.[1] They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.[1] Flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds.[1] Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa.[1] Species, cultivars and hybrids are all widely grown for their beauty and often are fragrant. Roses have acquired cultural significance in many societies.[1] Rose plants range in size from compact, miniature roses, to climbers that can reach seven meters in height.[1] Different species hybridize easily, and this has been used in the development of the wide range of garden roses.[1]',

    },

    {
        id: 2,
        name: 'Sister of Rose',
        type: 'Flower',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text: 'Sister of Rose A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears.[1] There are over three hundred species and tens of thousands of cultivars.[1] They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.[1] Flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds.[1] Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa.[1] Species, cultivars and hybrids are all widely grown for their beauty and often are fragrant. Roses have acquired cultural significance in many societies.[1] Rose plants range in size from compact, miniature roses, to climbers that can reach seven meters in height.[1] Different species hybridize easily, and this has been used in the development of the wide range of garden roses.',

        
    },
    {
        id: 3,
        name: 'Brother of Rose',
        type: 'flower',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text: "I am a brother of Rose The rose is a type of flowering shrub. Its name comes from the Latin word Rosa.[1] The flowers of the rose grow in many different colors, from the well-known red rose or yellow roses and sometimes white or purple roses. Roses belong to the family of plants called Rosaceae. All roses were originally wild and they come from several parts of the world, North America, Europe, northwest Africa and many parts of Asia and Oceania. There are over 100 different species of roses. The wild rose species can be grown in gardens, but most garden roses are cultivars, which have been chosen by people.",
    },
    {
        id: 4,
        name: 'March',
        type: 'Alien',
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon. Based on a story by O'Bannon and Ronald Shusett, it follows the crew of the commercial space tug Nostromo, who encounter the eponymous Alien, an aggressive and deadly extraterrestrial set loose on the ship. The film stars Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton, John Hurt, Ian Holm, and Yaphet Kotto. It was produced by Gordon Carroll, David Giler, and Walter Hill through their company Brandywine Productions, and was distributed by 20th Century Fox. Giler and Hill revised and made additions to the script; Shusett was executive producer. The Alien and its accompanying artifacts were designed by the Swiss artist H. R. Giger, while concept artists Ron Cobb and Chris Foss designed the more human settings.",

    },
    {
        id: 5,
        name: 'Earth',
        type: "Mercury",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon. Based on a story by O'Bannon and Ronald Shusett, it follows the crew of the commercial space tug Nostromo, who encounter the eponymous Alien, an aggressive and deadly extraterrestrial set loose on the ship. The film stars Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton, John Hurt, Ian Holm, and Yaphet Kotto. It was produced by Gordon Carroll, David Giler, and Walter Hill through their company Brandywine Productions, and was distributed by 20th Century Fox. Giler and Hill revised and made additions to the script; Shusett was executive producer. The Alien and its accompanying artifacts were designed by the Swiss artist H. R. Giger, while concept artists Ron Cobb and Chris Foss designed the more human settings.",

    },

    {
        id: 5,
        name: 'Earth',
        type: "Mercury",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon. Based on a story by O'Bannon and Ronald Shusett, it follows the crew of the commercial space tug Nostromo, who encounter the eponymous Alien, an aggressive and deadly extraterrestrial set loose on the ship. The film stars Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton, John Hurt, Ian Holm, and Yaphet Kotto. It was produced by Gordon Carroll, David Giler, and Walter Hill through their company Brandywine Productions, and was distributed by 20th Century Fox. Giler and Hill revised and made additions to the script; Shusett was executive producer. The Alien and its accompanying artifacts were designed by the Swiss artist H. R. Giger, while concept artists Ron Cobb and Chris Foss designed the more human settings.",

    },
];

const image = document.getElementById('person-img');
const Name = document.getElementById('author');
const Type = document.getElementById('job');
const Article = document.getElementById('info');
const previousBtn = document.querySelector('.previous-button');
const nextBtn = document.querySelector('.next-button');
const randomBtn = document.querySelector('.random-button');


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){

    showPerson(currentItem);
});


function showPerson(person){
    // const item = reviews[currentItem];
    const item = reviews[person];
    Name.textContent = item.name;
    Type.textContent = item.type;
    image.src = item.img;
    Article.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

previousBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }

    showPerson(currentItem);
});

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
});