/**
 * Created by Emperor on 2017/5/14 0014.
 */
var files=require('../modules/files.js');
exports.showindex=function (req,res) {
    //因为是异步的所以不能这么写
    /*res.render("index",{
        album:files.getAlbum()
    });*/
    files.getAllAlbums(function (albums) {
        res.render("index",{
            album:albums
        });
    })
}
exports.showAlbum=function (req,res) {
    var album=req.params.albumName;
    files.getAlbums(album,function (err,imageArr) {
        if(err)
        {
            res.render('err');
            return;
        }
        res.render('album',{
            albumname:album,
            image:imageArr
        })
    })
}
