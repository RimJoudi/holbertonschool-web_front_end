var roomDimension = {
    width: 50,
    length: 100,
    getArea: () =>{
        return(this.width + this.length);
    } 
}
var boundGetArea = roomDimension.getArea.bind(roomDimension);
