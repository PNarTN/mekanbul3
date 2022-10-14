const anaSayfa=function(req, res) {
    res.render('anasayfa', { 'title': 'Anasayfa' });
  }

const mekanBilgisi=function(req, res) {
    res.render('mekanBilgisi', { 'title': 'Mekan Bilgisi' });
  }
  
const yorumEkle=function(req, res) {
    res.render('yorumEkle', { 'title': 'Yorum Ekle' });
  }

  //modules.export içine yazılan dış dunyaya acılır
module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle,
};