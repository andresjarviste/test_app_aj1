const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test</title>
</head>
<body>
    <h1>Render deployment test</h1>
</body>
</html>
`
));


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });