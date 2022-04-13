const express = require('express');
const app = express();
const Joi =require('joi');

app.use(express.json());

const clothes = [
	
{id:1,name:'shirt'},
{id:2,name:'short'},
{id:3,name:'skirt'}
];

app.get('/',(req,res)=>{

res.send('hello everyone');
});


app.get('/api/store',(req,res)=>{

res.send(['cloth1mkm','shirt4','skirt2']);
});


app.get('/api/:type/:size',(req,res)=>{

	res.send(req.params);
});


app.get('/api/clothes',(req,res)=>{
	res.send(clothes);
});

app.post('/api/clothes',(req,res)=>{

const schema = Joi.object( {

	name: Joi.string().min(3).required()
});	

const result = schema.validate(req.body);
if(result.error){

	res.status(400).send(result.error.details[0].message);
}

const clothingpiece = {
	id:clothes.length+1,
	name: req.body.name
};
clothes.push(clothingpiece);
res.send(clothingpiece);

});


app.put('/api/clothes/:id',(req,res)=>{

const clothingpiece = clothes.find(c => c.id === parseInt(req.params.id));
if(!clothingpiece) res.status(400).sent('clothingpiece not existing');

const schema = Joi.object( {

	name: Joi.string().min(3).required()
});	

const result = schema.validate(req.body);
if(result.error){

	res.status(400).send(result.error.details[0].message);
	return;
}

clothingpiece.name = req.body.name;
res.send(clothingpiece);






})

const port = process.env.PORT || 3000;

app.listen(3000,()=>{console.log(`listneing on port ${port}`)});