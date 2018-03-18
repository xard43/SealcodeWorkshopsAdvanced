function Figura(nazwa){
  this.nazwa = nazwa;
}

function Czworokat(nazwa,typ_czworokata,a,b,c,d) {
        Figura.call(this, nazwa);
        this.typ_czworokata = typ_czworokata;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }
      Czworokat.prototype = Object.create(Figura.prototype);
      Czworokat.prototype.constructor = Czworokat;


function Prostokat(nazwa,typ_czworokata,a,b,c,d) {
        Czworokat.call(this,nazwa, typ_czworokata, a,b,c,d);
        this.podajpole = function(){
        return (this.a*this.b);
        };
        this.podajobwod = function(){
          return (this.a+this.b+this.c+this.d);
        };
      }
	  
      Prostokat.prototype = Object.create(Czworokat.prototype);
      Prostokat.prototype.constructor = Prostokat;
var prostokat = new Prostokat("figura","prostokat",2,5,2,5);
console.log(prostokat);
console.log(prostokat.podaj_pole());
console.log(prostokat.podaj_obwod());
