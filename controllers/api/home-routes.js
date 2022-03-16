const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Just Tech News</title>
    </head>
    <body>
      <div>${some_data}</div>
    </body>
    </html>
  `);
});

module.exports = router;