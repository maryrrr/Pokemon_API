const btn=document.getElementById('btnRand')
const card=document.getElementById('card')
const name_pok=document.getElementById('name_pok')

let randomPOk =Math.floor(Math.random()*100)
function getPosts(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) =>{
    const {data}=res
    console.log(data)
    console.log(data.name);
    card.innerHTML=`<img src= ${data.sprites.front_default} />`
    name_pok.innerHTML=`<h2>${data.name}</h2>`
    console.log(data.sprites.front_default);
    })
    .catch((err) => console.error(err));
    }



btn.addEventListener('click',getPosts(randomPOk))

