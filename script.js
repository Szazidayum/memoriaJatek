
window.addEventListener('load',init);

function $(elem){
    return document.querySelectorAll(elem);
}
/*
function ID(elem) {
    return document.getElementById(elem);
}
*/
function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

const kepTomb=["kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg","kepek/kep4.jpg","kepek/kep5.jpg","kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg","kepek/kep4.jpg","kepek/kep5.jpg"];

/*
console.log(kepek);
function init(){
    megjelenit();
}

function megjelenit(){
    for (let index = 1; index < kepek.length; index++) {
        console.log(kepek[index]);
        $('.kartyak div')[index].innerHTML=`<img src='kepek/kep${index}.jpg'/>`;
    }
}
*/

function init(){
    const galeria=document.getElementById("galeria");
    let txt="";
    const hatter="kepek/hatter.jpg";
    kepTomb.forEach(function (elem,index){
        txt+=`<div><img id="${index}" src="${hatter}" alt="szorny"></div>`
    });
    galeria.innerHTML=txt;

    /*------MINDEN ELEMHEZ ADJUNK kattintás ESEMÉNYKEZELŐT!---------*/

    const kepElemTomb=document.querySelectorAll("#galeria div img");
    console.log(kepElemTomb);
    kepElemTomb.forEach(function(elem){
        elem.addEventListener("click", megfordit);
    });
}

const kivalasztottTomb=[];
function megfordit(){
    const hatter="kepek/hatter.jpg";
    /*betölti a megfelelő képet a kijelölt elem src attributumába*/
    console.log(event.target.id);
    let aktualisElem=event.target.id;
    event.target.src=kepTomb[aktualisElem];
//ha felfordítottam egy képet, akkor tegyük bele egy tömbbe az elem id-ját
    kivalasztottTomb.push(aktualisElem);
    console.log(kivalasztottTomb);
//ne lehessen tobbször rákattintani
event.target.removeEventListener("click",megfordit);

//ha már két elem van kiválasztva, akkor fordítsuk vissza mindkettőt
    if (kivalasztottTomb.length===2){
        //visszafordítás-> háttér visszaállítása
        //két képnek kell visszafordítani a hátterét
        const kepElemTomb=document.querySelectorAll("#galeria div img");
        kepElemTomb.forEach(function(elem){
            elem.removeEventListener("click", megfordit);
        });

        //CSAK AKKOR, HA A KÉT KÉP NEM AZONOS!!
        let feltetel=kepTomb[kivalasztottTomb[0]]===kepTomb[kivalasztottTomb[1]];/*ez egy elérési út! az src*/
        console.log(feltetel);
        if(!feltetel){
            setTimeout(function(){
                /*let elsoKep=document.getElementById(kivalasztottTomb[0]);
                let masodikKep = document.getElementById(kivalasztottTomb[1]);
                elsoKep.src=hatter;
                masodikKep.src=hatter; */
                kivalasztottTomb.forEach(function(elem){
                    document.getElementById(elem).src=hatter;
                })
                kivalasztottTomb.splice(0);/*kiüríti a tömböt*/
                },1000);
                kepElemTomb.forEach(function(elem){
                    elem.addEventListener("click", megfordit);
                });
        }else{
            //HA A KÉT KÉP AZONOS
            kivalasztottTomb.forEach(function(elem){
                document.getElementById(elem)./*style.*/dispay="none";/*azzal lehetne eltüntetni a képeket az asztalról*/
            })
            kivalasztottTomb.splice(0);/*kiüríti a tömböt*/
            kepElemTomb.forEach(function(elem){
                elem.addEventListener("click", megfordit);
            });
        }
            
       
        
        
    }
}
