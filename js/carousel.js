

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    arr = []

    constructor (imgPath, imgTitle, imgLink) {
        this.imgPath = imgPath;
        this.imgTitle = imgTitle;
        this.imgLink = imgLink;
    }
      
    static Start(arr){
        if(arr){
            this.arr = arr;

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Prev() {
        if (arr === []) return;

    }

    static Next() {
        if (arr === []) return;

    }

    static Update() {
        if (arr === []) return;

    }
};
