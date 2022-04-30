const express = require('express');
const app = express();
const Joi =require('joi');
const cors = require('cors');

const customers = require('./customer_3fields.js');
const small = require('./customer_small.js');

require('dotenv').config();
console.log(process.env);

app.use(cors());
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

/*
app.get('/api/:type/:size',(req,res)=>{

	res.send(req.params);
})*/
app.get('/api/email/:mail',(req,res)=>{

//res.send(req.params.mail);
	const araay = [{"name":"john"},{"name":"maria"}];
	const a = small.filter((obj)=>{ return obj.email=="chelsabuis13@gmail.com";});
//const cust= customers.filter((obj)=>{ return obj.email=="chelsabuis13@gmail.com";});
res.send(a);

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

		return res.status(400).send(result.error.details[0].message);
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
	if(!clothingpiece) return res.status(400).send('clothingpiece not existing');

	const schema = Joi.object( {

		name: Joi.string().min(3).required()
	});	

	const result = schema.validate(req.body);
	if(result.error){

		return res.status(400).send(result.error.details[0].message);
		
	}

	clothingpiece.name = req.body.name;
	res.send(clothingpiece);


});

app.delete('/api/clothes/:id',(req,res)=>{

	const clothingpiece = clothes.find(c => c.id === parseInt(req.params.id));
	if(!clothingpiece) return res.status(400).send('clothingpiece not existing');

	const index = clothes.indexOf(clothingpiece);
	clothes.splice(index,1);

	res.status(200).send(clothingpiece);

});

const port = process.env.PORT || 3000;

app.listen(3000,()=>{console.log(`listneing on port ${port}`)});