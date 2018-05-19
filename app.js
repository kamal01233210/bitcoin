//var http = require('http');
var express = require('express');
app= express();
var request = require('request');
var bodyparser = require('body-parser');
var bitcore = require('bitcore-lib');

app.use(bodyparser.urlencoded({
	extended:true
}));

app.use(bodyparser.json());

app.set("view engine","ejs");

function brainWallet(input,callback){
	var inputnew = new Buffer(input);
	var hash = bitcore.crypto.Hash.sha256(inputnew);
	var bn = bitcore.crypto.BN.fromBuffer(hash);
	pk = "asdftrgyhdtuyryujdsyae55yets";
	addy = "asdfgyukdhertukyksywerryjswtRetj";
	/*var pk = bitcore.Privatekey.toWIF(bn);
	var addy = bitcore.Privatekey.toAddress(bn);*/
	callback(pk,addy);
};

/*request({
	url:"https://blockchain.info/stats?format=json",
	json:true
},function(error,response,body){
	btnPrice = body.market_price_usd;
	btnBlock = body.n_blocks_total;
});*/

request({
	url:"https://btc-e.com/api/3/ticker/btc_usd",
	json:true
},function(error,response,body){
	btnPrice = 100;
	
});

app.get('/',function(req,res){
	//res.sendFile(__dirname + "/index.html");
	res.render("index",{
		lastPrice:btnPrice
	});
});

app.get('/brain',function(req,res){
	//res.sendFile(__dirname + "/index.html");
	res.render("brain",{
		lastPrice:btnPrice
	});
});

app.get('/convertor',function(req,res){
	//res.sendFile(__dirname + "/index.html");
	res.render("convertor",{
		lastPrice:btnPrice
	});
});

/*app.post("/wallet",function(req,res){
	var brainsrc = req.body.brainsrc;
	console.log(brainsrc);
	brainWallet(brainsrc,function(priv,addr){
		res.send("The Brain wallet of: "+brainsrc +"<br> Addy: " +addy+ "<br> Private Key: "+priv);
	});
	
});*/

/*app.get('/',function(req,res){
	res.send("bitoin to the moon: " +btnPrice);
});
*/
/*app.get("/block",function(req,res){
	res.sendFile(__dirname + "/index.html");
});*/

app.listen(8084,function(){
	console.log("server is running");
});



/*http.createServer(function(req,res){

	request({
		url:"http://blockchain.info/stats?format=json",
		json:true
	},function(error,response,body){
		console.log(body);
	});
	console.log('bitcoin'+req.url);
	res.end('bitcoin to the moon');
}).listen(8084);*/