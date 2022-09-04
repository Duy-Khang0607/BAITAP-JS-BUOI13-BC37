function btn1() {
    var soNgayLam = +document.getElementById('soNgay').value;
    var thanhTien = 0;
    const luong1Ngay = 100000;
    thanhTien = luong1Ngay * soNgayLam;
    document.getElementById('thanhTien').innerHTML = thanhTien.toLocaleString() + ' VND';
    document.getElementById('thanhTien').style.display = 'block';
}
function btn2() {
    var nhapSo1 = +document.getElementById('nhapSo1').value;
    var nhapSo2 = +document.getElementById('nhapSo2').value;
    var nhapSo3 = +document.getElementById('nhapSo3').value;
    var nhapSo4 = +document.getElementById('nhapSo4').value;
    var nhapSo5 = +document.getElementById('nhapSo5').value;
    var sumMedium = 0;
    sumMedium = (nhapSo1 + nhapSo2 + nhapSo3 + nhapSo4 + nhapSo5) / 5;
    document.getElementById('thanhTien2').innerHTML = sumMedium.toLocaleString();
    document.getElementById('thanhTien2').style.display = 'block';
}
function btn3() {
    var nhapUSD = +document.getElementById('nhapUSD').value;
    var tienVND = 0;
    tienVND = nhapUSD * 23500;
    document.getElementById('thanhTien3').innerHTML = tienVND.toLocaleString() + ' VND';
    document.getElementById('thanhTien3').style.display = 'block';
}
function btn4() {
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
    var area = 0;
    area = chieuDai * chieuRong;
    document.getElementById('thanhTien4').innerHTML = area.toLocaleString() + ' mét vuông';
    document.getElementById('thanhTien4').style.display = 'block';
}
function btn5() {
    var so1 = +document.getElementById('so1').value;
    var so2 = +document.getElementById('so2').value;
    var sum = so1 + so2;
    var donVi = sum % 10;
    var chuc = Math.floor(sum / 10);
    sum2KySo = donVi + chuc;
    document.getElementById('thanhTien5').innerHTML = 'Tổng 2 ký số là: ' + sum2KySo;
    document.getElementById('thanhTien5').style.display = 'block';
}