var mongoose = require( 'mongoose' );
var dbURI = 'mongodb+srv://pinar:qwas12@mekanbul.bdrevwg.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true}); 
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlanıldı!\n");
});
mongoose.connection.on("error",function(){
    console.log(dbURI+"Bağlantı hatası!\n");
});
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+"Bağlantı kesildi!\n");
});

function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback;
    });
}

process.on("SIGNINT", function(){
    kapat("Uygulama kapatıldı!",function(){
        process.exit(0);
    });
});

require("./mekansema"); 