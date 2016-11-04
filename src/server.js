const express = require('express'),
      app     = express();


app.get("/", (req,res) => {
    res.render(index.html);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});
