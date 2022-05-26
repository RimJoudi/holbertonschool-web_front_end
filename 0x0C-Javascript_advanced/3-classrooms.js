function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        }
    }
    let array = [];
    for(let i = 0; i < numbersOfStudents; i++) {
        array.push(studentSeat(i+1));
    }
    return array;
    
}

let classRoom = createClassRoom(10);
