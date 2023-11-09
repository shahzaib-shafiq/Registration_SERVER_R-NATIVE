const expres=require('express') ;
const post=3000;


const app=expres();
const bodyParser=require('body-parser');

app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send('fa')
})