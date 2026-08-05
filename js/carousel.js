const carouselContainer = document.getElementById('carousel');
const carouselTitle = document.getElementById('carousel-title');

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    constructor (imgPath, imgTitle, imgLink) {
        this.arr = [];
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

    //Goes to the previous carousel item in the array
    static Prev() {
        if (this.arr === []) return;

        this.Update();

        if (Carousel._sequence <= 0) {
            Carousel._sequence = this.arr.length - 1;
        } else {
            Carousel._sequence--;
        }
    }

    //Goes to the next carousel item in the array
    static Next() {
        if (this.arr === []) return;

        this.Update();

        if (Carousel._sequence >= this.arr.length - 1) {
            Carousel._sequence = 0;
        } else {
            Carousel._sequence++;
        }
    }

    //Updates the carousel in the front end
    static Update() {
        const currentCarousel = this.arr[Carousel._sequence];
        carouselContainer.innerHTML = `<a href="${currentCarousel.imgLink}"><img class="carousel-img" src="./img/${currentCarousel.imgPath}" alt=""></a>`;
        carouselTitle.innerHTML = `${currentCarousel.imgTitle}`
    }
};

//carousel
//insert each image on carousel
carouselArr.push(new Carousel("imagem_1.jpg","Esta é a nova Ranger Ford 2022. Verifique novidades.","lancamento.html"));
carouselArr.push(new Carousel("imagem_2.jpg","Ford a nossa história","#"));
carouselArr.push(new Carousel("imagem_3.jpg","Nova Ford Bronco Sport 2022","lancamento.html"));
Carousel.Start(carouselArr);