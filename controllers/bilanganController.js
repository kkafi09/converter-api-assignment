async function bilanganController(req, res) {
    let nilai = Number(req.body.nilai)
    let status = ''
    if (nilai%2==0) {
        status= "genap"
    } else if(nilai%2==1){
        status= "ganjil"
    } 
    let response = {
        nilai:nilai,
        status:status 
    }
    res.json(response)
}

async function kalkulatorCotntroller(req, res) {
  const first = Number(req.body.first);
  const second = Number(req.body.second);

  let sum = first + second;
  let min = first - second;
  let multi = first * second;
  let divided = first / second;

  let response = {
    sum,
    min,
    multi,
    divided,
  };

  res.json(response);
}

async function multipleController(req, res) {
  const first = Number(req.body.first);
  const second = Number(req.body.second);
  const kelipatan = Number(req.body.kelipatan);

  let tampung = new Array();
  let total = 0;

  for (let i = first; i <= second; i += kelipatan) {
    tampung.push(i);
    total += 1;
  }

  let response = {
    tampung,
    total,
  };

  res.json(response);
}

async function sumArrayController(req, res) {
  let MatrixA = [
    [1, 2],
    [3, 4],
  ];
  let MatrixB = [
    [1, 2],
    [4, 6],
  ];
  let hasil = new Array();
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      hasil.push(MatrixA[i][j] + MatrixB[i][j]);
    }
  }
  let response = {
    MatrixA,
    MatrixB,
    Penjumlahan: hasil,
  };

  res.json(response);
}

module.exports = {
  bilanganController,
  kalkulatorCotntroller,
  multipleController,
  sumArrayController,
};