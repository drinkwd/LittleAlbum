/**
 * Created by Emperor on 2017/5/14 0014.
 */
var express=require('express');
var app=express();
var router=require('./controller');
//设置模板引擎
app.set('view engine','ejs');
//设置中间件
app.use(express.static('./public'));
app.use(express.static('./uploads'));
app.get('/',router.showindex);
app.get('/:albumName',router.showAlbum);
app.use(function (req,res) {
        res.render('err');

})
app.listen('3000');
