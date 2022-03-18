import express from 'express'

const app = express()

const pokedex = [

    {
        id:1,
        nome:'Bulbasaur',
        imagem:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        descricao:'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
        tipo: "grass"},
    {
        id:2,
        nome:"Charmander",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        descricao:"It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        tipo:"fire"},

        {
            id:3,
            nome:"Squirtle",
            imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
            descricao:"When it retracts its long neck into its shell, it squirts out water with vigorous force.",
            tipo:"water"}

];

// app.get('/', (req, res) =>{
//   res.send('Minha porta é a 3000');
// })

app.set("view engine","ejs");

app.get("/", (req,res)=>{
    res.render("index",{pokedex});
})

// app.get("/home", (req,res)=>{
//     res.render("index.ejs")
// })

app.listen(3000,()=>
    console.log("servidor rodando em http://localhost:3000")
);