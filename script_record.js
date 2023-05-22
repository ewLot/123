
                        // Массивы значений из таблицы
let idRecord = document.getElementsByClassName("idRecord");
let nameStudent = document.getElementsByClassName("NameStudents");
let numWashCar = document.getElementsByClassName("NumMach");
let timeRecord = document.getElementsByClassName("TimeRecord");


let inputNameStudent = document.getElementById("inputNameStudent");
let inputNumWashCar = document.getElementById("inputNumWashCar");
let inputTimeRecord =document.getElementById("inputTimeRecord");

let button = document.getElementById("myButton");

function print(){
    

            // 
    if((inputNumWashCar.value == "- - -") || (inputTimeRecord.value == "- - -") || (inputNameStudent.value == "")){
        alert("Дозаполните форму"); 
    }else{
        for(let i=0; i < timeRecord.length; i++){
            // Локальные переменные - нужжны для того, чтобы достать значение из i-го элемента массива
        let localTime = timeRecord[i];
        let localCar = numWashCar[i];
        let localNameStudent = nameStudent[i];
            // Два if-а 1)Для нахождения свободного места и записи туда данных 
        if ((localCar.textContent == inputNumWashCar.value) && (localTime.textContent == inputTimeRecord.value 
            && (localNameStudent.textContent == "Фио"))){
                localNameStudent.innerHTML = inputNameStudent.value;
            // 2)Для предупреждения о том что место занято
        }else if((localCar.textContent == inputNumWashCar.value) && (localTime.textContent == inputTimeRecord.value 
            && (localNameStudent.textContent != "Фио"))){
            alert("Стиральная машина и время уже заняты!")
        }
        }
    }    
}
    

    


button.addEventListener("click", print)

