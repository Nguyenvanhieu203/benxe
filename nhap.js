var arrQuanly = [];
var selcetedIndex = -1;


function nhap() {
    //Lấy các giá trị trong form
    var id = document.getElementById("id").value;
    var name = document.getElementById("fname").value;
    var diemDi = document.getElementById("diemdi").value;
    var quangDuong = document.getElementById("quangduong").value;
    var startTime = document.getElementById("start").value;
    var price = document.getElementById("price").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("em").value;
    var phoneNumber = document.getElementById("phone").value;

    var objCar = {
        bienkiemsoat: id,
        name: name,
        hanhtrinh: diemDi,
        quangduong: quangDuong,
        giokhoihanh: startTime,
        gia: price,
        diachi: address,
        email: email,
        sodienthoai: phoneNumber
    }
    // Đưa vào danh sách 
    arrQuanly.push(objCar);
    // console.log("DS: ",arrQuanly);
    resetForm();
    // In danh sách 
    in_danhsachXe();
}

function in_danhsachXe() {
    var table = document.getElementById("myTable");
    // Xóa dữ liệu trong table
    for(var i = table.rows.length -1; i>0; i--) {
        table.deleteRow(i);
    }
    // Duyệt qua danh sách xe trong arrQuanly
    for( var i=0; i<arrQuanly.length;i++){
        // console.log(arrQuanly[i]);
        var obj = arrQuanly[i];
        // Tạo ra 1 row mới
        var row = table.insertRow();
        // tạo các cell mới cho row
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11= row.insertCell(10);
        // Đưa dữ liệu vào các cell
        cell1.innerHTML = i+1;
        cell2.innerHTML = obj.bienkiemsoat;
        cell3.innerHTML = obj.name;
        cell4.innerHTML = obj.hanhtrinh;
        cell5.innerHTML = obj.quangduong;
        cell6.innerHTML = obj.giokhoihanh;
        cell7.innerHTML = obj.gia;
        cell8.innerHTML = obj.diachi;
        cell9.innerHTML = obj.email;
        cell10.innerHTML = obj.sodienthoai;
        cell11.innerHTML = "<a href='#' onclick='onEdit(this)'><button>Sửa</button></a> <a href='#' onclick='onDel(this)'><button>Xóa</button></a>";
    }
}

function onEdit(el) {
    // console.log(el);
    // Lấy giá trị trong selected row và đưa lên form
    var selectedRow = el.parentElement.parentElement;
    var bienkiemsoat = selectedRow.cells[1].innerText;
    var name = selectedRow.cells[2].innerText;
    var hanhtrinh = selectedRow.cells[3].innerText;
    var quangduong = selectedRow.cells[4].innerText;
    var giokhoihanh = selectedRow.cells[5].innerText;
    var gia = selectedRow.cells[6].innerText;
    var diachi = selectedRow.cells[7].innerText;
    var email = selectedRow.cells[8].innerText;
    var sodienthoai = selectedRow.cells[9].innerText;

    // gắn giá trị lên form
    document.getElementById("id").value = bienkiemsoat;
    document.getElementById("fname").value = name;
    document.getElementById("diemdi").value = hanhtrinh;
    document.getElementById("quangduong").value = quangduong;
    document.getElementById("start").value = giokhoihanh;
    document.getElementById("price").value = gia;
    document.getElementById("address").value = diachi;
    document.getElementById("em").value = email;
    document.getElementById("phone").value = sodienthoai;

    // cập nhật selcetedIndex
    selcetedIndex = parseInt(selectedRow.cells[0].innerText) - 1;

    // hiện thị nút cập nhật
    document.getElementById("up").style.display = "block";
    document.getElementById("ad").style.display = "none";
}

function update() {
    arrQuanly[selcetedIndex].bienkiemsoat = document.getElementById("id").value ;
    arrQuanly[selcetedIndex].name = document.getElementById("fname").value ;
    arrQuanly[selcetedIndex].hanhtrinh = document.getElementById("diemdi").value ;
    arrQuanly[selcetedIndex].quangduong = document.getElementById("quangduong").value ;
    arrQuanly[selcetedIndex].giokhoihanh = document.getElementById("start").value ;
    arrQuanly[selcetedIndex].gia = document.getElementById("price").value ;
    arrQuanly[selcetedIndex].diachi = document.getElementById("address").value ;
    arrQuanly[selcetedIndex].email = document.getElementById("em").value ;
    arrQuanly[selcetedIndex].sodienthoai = document.getElementById("phone").value ;

    in_danhsachXe();
    resetForm();
    // ẩn nút cập nhật
    document.getElementById("up").style.display = "none";
    document.getElementById("ad").style.display = "block";
}

function Del(el) {
    var selectedRow = el.parentElement.parentElement;
    selectedIndex = parseInt(selectedRow.cells[0].innerText) - 1;
    if(confirm("Bạn có chắc chắn muốn xóa không ?")){
        arrQuanly.splice(selectedIndex,1);
        in_danhsachXe();
    }
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("diemdi").value = "";
    document.getElementById("quangduong").value = "";
    document.getElementById("start").value = "";
    document.getElementById("price").value = "";
    document.getElementById("address").value = "";
    document.getElementById("em").value = "";
    document.getElementById("phone").value = "";
}
