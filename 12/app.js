const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.static('public'));

const albumsPath = "albums.json";
const galleryPath = "gallery.json";

app.get("/api/albums", function(req, res){
    const content = fs.readFileSync(albumsPath, "utf8");
    const albums = JSON.parse(content);
    res.send(albums);
});

app.get("/api/gallery", function(req, res){
    const content = fs.readFileSync(galleryPath, "utf8");
    const gallery = JSON.parse(content);
    res.send(gallery);
});

app.get("/api/albums/:id", function(req, res){
       
    const albumId = req.params.id;
    console.log(albumId)
    const contentAlbums = fs.readFileSync(albumsPath, "utf8");
    const contentGallery = fs.readFileSync(galleryPath, "utf8");

    const Albums = JSON.parse(contentAlbums);
    const Gallery = JSON.parse(contentGallery);
    let name = "";
    let imgs = [];

    for(var i=0; i<Albums.length; i++){
        if(Albums[i].id==albumId){
            name = Albums[i].albumName;
            break;
        }
    }

    for(var i=0; i<Gallery.length; i++){
        if(Gallery[i].album==name){
            imgs.push(Gallery[i]);
        }
    }

    if(imgs){
        let data = JSON.stringify(imgs);
        res.send(data);
    }
    else{
        res.status(404).send();
    }
});

app.listen(80);