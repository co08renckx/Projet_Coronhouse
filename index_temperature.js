const http = require("https");
const fs = require("fs");

const options = {
	"method": "GET",
	"hostname": "api.ambeedata.com",
	"port": null,
	"path": "/weather/latest/by-lat-lng?lat=50.95129&lng=1.858686",
	"headers": {
		"x-api-key": "53qrGbcNk134we0a3hx8y3SRMzrh7erW9ztbdJt6",
		"Content-type": "application/json"
	}
};
 
const req = http.request(options, function (res) {
	const chunks = [];
 
	res.on("data", function (chunk) {
		chunks.push(chunk);
	});
 
	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
		data = body.toString();
		fs.writeFileSync("weather.json", data);
	});
});
 
req.end();