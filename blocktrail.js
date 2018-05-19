var api_key = 'f1614a92e8b49cc98343c67751e61da6cab84af6';

var secret_api_key = '812a2c8f2e2e983c66634ad1a0b18f9719bd7af5';

blocktrail = require('blocktrail-sdk');
client = blocktrail.BlocktrailSDK({apiKey: api_key, 
		apiSecret: secret_api_key,
		network: "BTC", 
		testnet: false
	});

client.initWallet("wallet","password",function(err,wallet){
console.log(wallet);
});
/*client.createNewWallet("mywallet","mypass",function(err,wallet,backupInfo){
	console.log(wallet);
	console.log("-----------");
	console.log(backupInfo);
});*/