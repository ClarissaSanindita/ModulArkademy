const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extend: false}))

app.get('/siswa', (req, res)=>{
    res.end("Menampilkan Siswi Clarissa Sanindita R");
});

app.get('/siswa/:nama', (req, res)=>{
    let namaSiswa = req.params.nama;

    res.end("Menampilkan siswi dengan nama : " + namaSiswa);
});

app.post('/siswa',(req, res)=>{
    let namaSiswa = req.body.nama;
    let alamatSiswa = req.body.alamat;

    res.end("Siswa baru! nama : " + namaSiswa +", alamat " + alamatSiswa);
    
})

app.delete('/siswa/:nama',(req, res)=>{
    let namaSiswa = req.params.nama;

    res.end("Siswa bernama " + namaSiswa + " akan dihapus dari sistem!");
})

app.put('/siswa/:id',(req, res)=>{
    let id = req.params.id;
    let namaSiswa = req.body.nama;
    let alamatSiswa = req.body.alamat;

    res.end("Siswa dengan ID " + id + " telah diperbarui");
})

app.listen('1212',(e)=>{
    console.log(e);
});