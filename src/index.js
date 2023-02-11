import app from './app'

app.listen(app.get('port'))

console.log("Working on port "+ app.get('port')) 