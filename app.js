const express = require("express");
const app = express();
const port = process.env.port || 8080;

app.get("/", (req, res) => {
  console.log("req", req);
  res.send(req.body);
});
app.get("/people.json", function (request, response) {
  // We want to set the content-type header so that the browser understands
  //  the content of the response.
  response.contentType("application/json");

  // Normally, the data is fetched from a database, but we can cheat:
  var people = [
    { name: "Dave", location: "Atlanta" },
    { name: "Santa Claus", location: "North Pole" },
    { name: "Man in the Moon", location: "The Moon" },
  ];

  // Since the request is for a JSON representation of the people, we
  //  should JSON serialize them. The built-in JSON.stringify() function
  //  does that.
  var peopleJSON = JSON.stringify(people);

  // Now, we can use the response object's send method to push that string
  //  of people JSON back to the browser in response to this request:
  // response.send(peopleJSON);
  response.send(people);
});

app.listen(port, () =>
  console.log(
    `Example app listening at http://localhost:${port} It's working at the backend`
  )
);
