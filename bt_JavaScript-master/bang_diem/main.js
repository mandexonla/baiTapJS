function tongDiemTrungBinh(ten, diemHk1, diemHk2) {
  var diem_hk1 = parseFloat(diemHk1);
  var diem_hk2 = parseFloat(diemHk2);
  //   year();
  var diemTB = (diem_hk1 + diem_hk2) / 2;
  var xep_loai = "";
  switch (true) {
    case diemTB >= 8:
      xep_loai = "A";
      break;
    case diemTB >= 7:
      xep_loai = "B";
      break;
    case diemTB >= 6:
      xep_loai = "C";
      break;
    case diemTB >= 5:
      xep_loai = "D";
      break;
    default:
      xep_loai = "F";
      break;
  }
  document.getElementById("tongKet").value = diemTB.toFixed(2);
  document.getElementById("xepLoai").value = xep_loai;
}
