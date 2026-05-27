function konversiNilai(nilai) {
  if (nilai  > 100){
    return "Tidak Valid";
  }
  else if(nilai >= 85)
  {
    return "A";
  }
  else if(nilai >= 70){
    return "B";
  }
  else if(nilai >= 60){
    return "C";
  }
  else if(nilai >= 0){
    return "D";
  }
  else if(nilai  > 100){
    return "Tidak Valid";
  }
  else {
    return "Tidak Valid";
  }
}

module.exports = {
  konversiNilai,
};





