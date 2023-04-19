var img = window.document.getElementById("imagem");
var clip = window.document.getElementById("clip");
var res = window.document.getElementById("res");
var media = window.document.getElementById("mediadeconvidados");
var data = window.document.getElementById("data");
var local = window.document.getElementById("local");
var hora = window.document.getElementById("horario");
var rad = window.document.getElementsByName("radsistema");
var des = window.document.getElementById("des");
var rep = window.document.getElementById("rep");
var curriculum = window.document.getElementById("curriculum");
var fotodj = window.document.getElementById("fotodj");
var fotomontagem = window.document.getElementById("fotomontagem");
      var datainvalida = window.document.getElementById(`datainvalida`);
      var localinvalido = window.document.getElementById(`localinvalido`);
      var horarioinvalido = window.document.getElementById(`horarioinvalido`)
      var mediainvalida = window.document.getElementById(`mediainvalida`)




function calcular(){
     data.style.boxShadow=`8px -5px 6px black` ;
     data.style.borderColor=`black`;
     local.style.boxShadow=`8px -5px 6px black` ;
     local.style.borderColor=`black`;
     hora.style.boxShadow=`8px -5px 6px black` ;
     hora.style.borderColor=`black`;
     media.style.boxShadow=`8px -5px 6px black` ;
     media.style.borderColor=`black`;
     datainvalida.innerHTML=``
     localinvalido.innerHTML=``
     horarioinvalido.innerHTML=``
     mediainvalida.innerHTML=``

     VerificarDados()
    
        
};

function VerificarDados(){
     var data = window.document.getElementById("data");
      var datainvalida = window.document.getElementById(`datainvalida`);
     if (data.value == 0 || data.length > 10){
     datainvalida.innerHTML=`!!! data inválida`     
     data.style.boxShadow=`8px -5px 6px red` ;
     data.style.borderColor=`red`;
     data.value = '';
     data.focus();
     
     
     }else {VerifiicarLocal()
     }
}

     function VerifiicarLocal(){
          var local = window.document.getElementById("local");
          var localinvalido = window.document.getElementById(`localinvalido`);
     if (local.value == 0){
          localinvalido.innerHTML=`!!! local inválido`
          local.style.boxShadow=`8px -5px 6px red` ;
          local.style.borderColor=`red`;
          local.value = '';
          local.focus();
          
  
     }else {VerificarHora();}
}


     function VerificarHora(){
          var hora = window.document.getElementById("horario");
          var horarioinvalido = window.document.getElementById(`horarioinvalido`)
     if (hora.value == 0 || hora.value > 24){
          horarioinvalido.innerHTML=`!!! Horário inválido`
          hora.style.boxShadow=`8px -5px 6px red` ;
          hora.style.borderColor=`red`;
          hora.value = '';
          hora.focus();
  
     }else {VerificarMedia()
     };

}
     function VerificarMedia(){
          var media = window.document.getElementById("mediadeconvidados");
          var mediainvalida = window.document.getElementById(`mediainvalida`)
     if (media.value<=0 || media.value>500){
          mediainvalida.innerHTML=`!!! número inválido ou a cima do limite de 500 convidados`
          media.style.boxShadow=`8px -5px 6px red` ;
          media.style.borderColor=`red`;
          media.value = '';
          media.focus();     
     
     }else {
          VerificarRadio()
     }
};

function VerificarRadio(){
 if (rad[0].checked){
  Som()
  }
  if (rad[1].checked){
  DjSom(); 

  }
  else if (rad[2].checked){
  DjSomLuz();
      
  };
} ;


function Som (){

     var media = window.document.getElementById("mediadeconvidados");

          if ( media.value<=50){ 
            som1()
          }else if (  media.value <=150) {
             som2()
          }else{
             som3()
          };

};
function som1(){
     data.value=``
     local.value=``
     hora.value=``
     media.value=``
     
     window.location.href='http://127.0.0.1:5500/CursoJS/sssite/som1.html'
}

function som2(){
     data.value=``
     local.value=``
     hora.value=``
     media.value=``
     window.location.href='http://127.0.0.1:5500/CursoJS/sssite/som2.html'
}
    

function som3(){
     data.value=``
     local.value=``
     hora.value=``
     media.value=``
     window.location.href='http://127.0.0.1:5500/CursoJS/sssite/som3.html'
}

function DjSom() {

          if (media.value<=50){
             djsom1()
    
          }else if ( media.value <=150) {
             djsom2()

          }else {
             djsom3()
        }
    
        
};
function djsom1(){
     data.value=``
     local.value=``
     hora.value=``
     media.value=``
     window.location.href='http://127.0.0.1:5500/CursoJS/sssite/djsom1.html'

}
function djsom2(){
     data.value=``
     local.value=``
     hora.value=``
     media.value=``
     window.location.href='http://127.0.0.1:5500/CursoJS/sssite/djsom2.html'

}
function djsom3(){
     data.value=``
     local.value=``
     hora.value=``
     media.value=``
     window.location.href='http://127.0.0.1:5500/CursoJS/sssite/djsom3.html'

}
function DjSomLuz(){ 
        
          if ( media.value<=50){
             djsomluz1() 

          } if  (media.value >50 &&  media.value <= 150) {
             djsomluz2()

          }if (media.value >150 && media.value <=500 ){
             djsomluz3() 
        };
        
};

function djsomluz1(){
     data.value=``
     local.value=``
     hora.value=``
     media.value=``
     window.location.href='http://127.0.0.1:5500/CursoJS/sssite/djsomluz1.html'

};

function djsomluz2(){
     data.value=``
     local.value=``
     hora.value=``
     media.value=``
     window.location.href='http://127.0.0.1:5500/CursoJS/sssite/djsomluz2.html'

};

function djsomluz3(){
     data.value=``
     local.value=``
     hora.value=``
     media.value=``
     window.location.href='http://127.0.0.1:5500/CursoJS/sssite/djsomluz3.html'

};

    

function dj(){
     window.document.location.href='https://www.youtube.com/watch?v=K0ZpBHW9wCQ'
};

function voltar(){
     window.location.href='http://127.0.0.1:5500/CursoJS/sssite/sitess.html'

};

function mudafoto(foto){
     document.getElementById('logo2').src = foto;
}


function mudaCor1() {
     logo= window.document.getElementById("p1");
    // var cor='#'+ Math.round(Math.random()*1000);
     logo.style.textShadow="2px 3px 1px black,0 0 2vw white,0 0 2vw white, 0 0 2vw white,0 0 2vw white";



     
}
var interval1 = setInterval(mudaCor1,150);
function mudaCor() {
     logo= window.document.getElementById("p1");
    // var cor='#'+ Math.round(Math.random()*1000);
     logo.style.textShadow="2px 3px 1px black,0 0 1vw silver,0 0 1vw silver, 0 0 1vw silver,0 0 1vw silver";



     
}
var interval = setInterval(mudaCor,300);
var dx;
var dy;
var px;
var py;
var vel;

function inicia(){
     dx=1;
     dy=0;
     py=0;
     px=0;
     vel=2;
     logoss=document.getElementById("logo2");
     move();
}

function move(){
    
     px+= (dx*vel);
     logoss.style.left=px+"px";
    
     if(px>=1230){

          dx=0;
          dy=1;
          py+=dy*vel;
          logoss.style.top=py+"px";

     if(py>=200){
          
          dy=0;
          dx=-1;
          px+=dx*vel;
          logoss.style.left=px+"px";

     }

     }if (px<=1){
          dx=0;
          dy=-1;
          py+=dy*vel;
          logoss.style.top=py+"px";
     }
     if (py<=0){
          
          dy=0;
          dx=1;
          px+=dx*vel;
          logoss.style.left=px+"px"

     }
     
    anima= requestAnimationFrame(move);


}
function relogio(){
     var datas=new Date();
     var horarel=datas.getHours();
     var minrel=datas.getMinutes();
     var segrel=datas.getSeconds();

     if(horarel<10){
          horarel="0"+horarel
     };
     if (minrel<10){
          minrel="0"+minrel
     };
     if(segrel<10){
          segrel="0"+segrel;
     }
     var hhoras=horarel+":"+minrel+":"+segrel;
     var hr= document.getElementById("relogio").value=hhoras;


     requestAnimationFrame(relogio);
}


var logoss=document.getElementById("logo2");
var logoss3=document.getElementById("logo3");
var logoss4=document.getElementById("logo4");

var angulo=0;
var request;
function girar(){
     logoss3.style.transform="rotate("+angulo+"deg)";
     logoss4.style.transform="rotate("+angulo+"deg)";

     angulo++;
     request=requestAnimationFrame(girar);
}

window.addEventListener("load",girar);
window.addEventListener("load",relogio);
window.addEventListener("load",inicia);