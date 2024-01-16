function diem(name, score) {
  var ket_qua;
  switch (true) {
    case score > 90:
      ket_qua = "Xuất xắc";
            break;
    case score > 80:  
      ket_qua = "giỏi";
           break;
    case score > 60:
      ket_qua = "khá ";
      
      break;
    case score > 50:
      ket_qua = "Trung bình ";
      
      break;
    case score < 50:
        ket_qua = "Yếu ";
          break;
    default:
      alert("Hãy nhập lại điểm từ 0->100 điểm ");
      break;
  }

  document.getElementById("kq").innerHTML =
    name + "" + " đạt được học sinh <b>" + ket_qua + "</b><br>";
}
