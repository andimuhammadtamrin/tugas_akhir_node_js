//mahasiswaControler.js

//import mahsiswa model
Mahasiswa = require('./mahasiswaModel');

//handle index action
exports.index = function(req,res){
  Mahasiswa.get(function(err,mahasiswas){
    if(err){
      res.json({
        status:"error",
        message: err,
      });
    }
    res.json({
      status:"success",
      message:"Data Mahasiswa berhasi di Ambil",
      data:mahasiswas
    });
  });
};

//handle create contact actions
exports.new = function(req,res){
  var mahasiswa = new Mahasiswa();
  mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
  mahasiswa.nama = req.body.nama;
  mahasiswa.jurusan = req.body.jurusan;
  mahasiswa.semester = req.body.semester;

  //save the contact and check for error
  mahasiswa.save(function(err){
    //if(err)
    //res.json(err);

    res.json({
      message:'Data Mahasiswa telah di Buat',
      data:mahasiswa
    });
  });
};

//handle view info
exports.view = function(req,res){
  Mahasiswa.findById(req.params.mahasiswa1_id,function(err,mahasiswa)
{
  if(err)
  res.send(err);
  res.json({
    message:"Mahasiswa details loading..",
    data : mahasiswa
  });
});
};

//handle update siswa info
exports.update = function(req,res){
  Mahasiswa.findById(req.params.mahasiswa1_id,function(err,mahasiswa){
    if(err)
      res.send(err);
  mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
        mahasiswa.nama = req.body.nama;
        mahasiswa.jurusan = req.body.jurusan;
        mahasiswa.semester = req.body.semester;
  //save the siswa and check and chek for error
        mahasiswa.save(function(err){
          if(err)
              res.json(err);
          res.json({
            message:'Info Mahasiswa Telah di Perbaharui',
            data : mahasiswa
          });
        });
    });
}

//handle delete siswa
exports.delete = function(req,res){
  Mahasiswa.remove({
    _id:req.params.mahasiswa1_id
  },function(err,mahasiswa){
    if(err)
        res.send(err);
res.json({
          status:"success",
          message:"Data Mahasiswa Telah Di Hapus"
        });
  });
};
