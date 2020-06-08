let inputPhysical;
let inputChemistry;
let inputBiological;

inputPhysical= prompt('Nhập điểm Vật Lý');
inputChemistry = prompt('Nhập điểm Hóa Học');
inputBiological = prompt('Nhập điểm Sinh Học');

let VL = parseInt(inputPhysical);
let HH = parseInt(inputChemistry);
let SH = parseInt(inputBiological);

let total = VL+HH+SH;
let medium = total/3;


document.write('Trung bình 3 môn : '+ medium+'<br/>');
document.write('Tổng 3 môn : '+ total);
