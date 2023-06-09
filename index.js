const port = 600;

app.set('port', process.env.port || 600);


app.listen(app.get('port'),(req,res) => {
    console.log('servidor en el puerto: ',app.get('port'));
})