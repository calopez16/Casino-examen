
var cont=0;
var contAdivine=0;
var RecordAdivina=0;
var ListaAdivina=[];
var ListaAdivinaPuntos=[];

var ListaRuleta=[];
var ListaRuletaPuntos=[];


function randoms(){
    $("#Estado").slideUp( 0 );
    $("#Cargando").fadeIn( 400 );
    $("#GifNumeros").show();  
    $("#numero1").slideUp( 0 );
    $("#numero2").slideUp( 0 );
    $("#Lista").slideUp( 0 );
    $(".boton").css("display","none");
    document.getElementById('audioruleta').play();
    var n=Math.floor(Math.random() * (4 - 1)) + 1;
    
    if($("#txt_NumIngresado").val()==n){

        $("#Estado").text("Haz acertado");
        $("#Estado").css("background","green");
        $("#Estado").delay( 4000 ).fadeIn( 400 );

        $("#Cargando").delay( 2600 ).slideUp( 10 );  
        $("#GifNumeros").delay( 3000 ).slideUp( 10 ); 
        cont+=1;
        

    }else{
       
        if(cont>RecordAdivina){
            $("#Lista").css("background","green");
            $("#Lista").delay( 5000 ).fadeIn( 200 );
            $("#RecordAdivina").text(cont);
            RecordAdivina=cont;
        }else{
            cont=0;
        }
        
        $("#Estado").text("Perdiste");
        $("#Estado").css("background","#af0000");
        $("#Estado").delay( 4000 ).fadeIn( 400 );
        $("#Cargando").delay( 2600 ).slideUp( 10 ); 
        $("#GifNumeros").delay( 3000 ).slideUp( 10 ); 
        

        
    }
    $("#Estado").delay( 1000 ).slideUp( 400,function(){
        $("#PuntosAdivinar").text(cont);
    });
    $("#numero1").delay( 3000 ).fadeIn( 100 );
    $("#numero1").text(">> "+n+" <<");
    $(".boton").delay( 6000 ).fadeIn( 100 );
    $(".boton").css("margin-top","-100px");
    
    
      
}

function cerrarCuadro(){
    if(cont>RecordAdivina){
        $("#Lista").css("background","green");
        $("#Lista").delay( 500 ).fadeIn( 200 );
        $("#RecordAdivina").text(cont);
        RecordAdivina=cont;

    }else{
        Limpiar();
    }
    
    
}

function abrirCuadro(ban){
    $(".cuadro").css("display","block");
    $(".adivinar").slideUp( 0 );
    $(".tragamonedas").slideUp( 0 );

    if(ban==1){
        $(".adivinar").css("display","block");

    }else{
        $(".tragamonedas").css("display","block");

    }
}


function recordAdivina(){
    if($("#nombreadivinar").val().trim()==""){
        $("#ingresaAdivina").css("display","block");
        
    }else{
        $("#ingresaAdivina").css("display","none");
   
        ListaAdivina.push($("#nombreadivinar").val());
        ListaAdivinaPuntos.push(cont);

        for(i=0;i<(ListaAdivinaPuntos.length);i++){
            for(j=0;j<(ListaAdivinaPuntos.length);j++){

                if(ListaAdivinaPuntos[j]<ListaAdivinaPuntos[j+1]){
                    aux=ListaAdivinaPuntos[j];
                    ListaAdivinaPuntos[j]=ListaAdivinaPuntos[j+1];
                    ListaAdivinaPuntos[j+1]=aux;

                    aux2=ListaAdivina[j];
                    ListaAdivina[j]=ListaAdivina[j+1];
                    ListaAdivina[j+1]=aux2;

                }
    
            }
        }
        $("#Lista").delay( 1000 ).slideUp( 400,function(){
            $("#PuntosAdivinar").text(cont);
        });
        cont=0;
    }

}

function Limpiar(){
    $(".cuadro").slideUp( 200 );
    $(".adivinar").slideUp( 0 );
    $(".tragamonedas").slideUp( 0 );
    $("#Lista").slideUp( 0 );
    $("#nombreadivinar").val("");
    $("#txt_NumIngresado").val("0");
    $("#PuntosAdivinar").text("0");
    $("#numero1").text("");
    $(".ListasTop").slideUp(0);
    $("#RuletaGanaste").slideUp(0);
    $("#RuletaPop").slideUp(0);
    $("#RuletaProfe").slideUp(0);
    $("#nombreruleta").val("");
    cont=0;

}

function VerTopAdivina(){
    var cadenaAdivina="";
    var CadenaRuleta="";

    $(".ListasTop").fadeIn(200);

    for(i=0;i<ListaAdivina.length;i++){
        cadenaAdivina=cadenaAdivina+"<p style='float: left;margin-left: 10px;'>"+(i+1)+".- "+ListaAdivina[i]+"</p> <p style='float:right;margin-right: 20px;'>"+ListaAdivinaPuntos[i]+"</p><div style='clear:both'></div>";
    }

    $("#TopAdivinar1").html(cadenaAdivina);

    for(i=0;i<ListaRuleta.length;i++){
        CadenaRuleta=CadenaRuleta+"<p style='float: left;margin-left: 10px;width:100%;text-align:center'>"+ListaRuleta[i]+"</p><div style='clear:both'></div>";
    }

    $("#TopRuletas").html(CadenaRuleta);

    
}

function QuitarTop(){
    $(".ListasTop").slideUp(200);
}

// ######## SCRIPT DE LA RULETA ########

function GirarRuleta(){
    $("#RuletaDefault").slideUp(0);
    $("#RuletaAnimado").fadeIn(0);
    $("#GirarRulet").slideUp(0);
    $("#Rulet1").attr("src","img/ruleta/ruleta.gif");
    $("#Rulet2").attr("src","img/ruleta/ruleta.gif");
    $("#Rulet3").attr("src","img/ruleta/ruleta.gif");

    var n1=Math.floor(Math.random() * (4 - 1)) + 1;
    var n2=Math.floor(Math.random() * (4 - 1)) + 1;
    var n3=Math.floor(Math.random() * (4 - 1)) + 1;

    // $("#audioruleta").play();
    document.getElementById('audioruleta').play();

    $("#Rulet1").delay(2000).fadeIn(0,function(){
        document.getElementById('audioruletaset1').play();
        $("#Rulet1").attr("src","img/ruleta/"+n1+".png");
    });

    $("#Rulet2").delay(3000).fadeIn(0,function(){
        document.getElementById('audioruletaset2').play();
        $("#Rulet2").attr("src","img/ruleta/"+n2+".png");

    });

    $("#Rulet3").delay(4000).fadeIn(0,function(){
        document.getElementById('audioruletaset3').play();
        $("#Rulet3").attr("src","img/ruleta/"+n3+".png");
        

    });

    $("#GirarRulet").delay(6000).fadeIn(100);
    if(n1==n2 && n1==n3 && n2==n3){
        var num=n1;
        if(num==1){
            $("#RuletaGanaste").delay(5000).fadeIn(100);
            
        }
        if(num==2){
            $("#RuletaProfe").delay(5000).fadeIn(100);
        }
        if(num==3){
            $("#RuletaPop").delay(5000).fadeIn(100);
        }
    }

}



function explotar(opc){
    if(opc==1){
        $("#explosion").fadeIn(0);
        $("#explosion").delay(3500).slideUp(0);
        $("#RuletaPop").delay(3400).slideUp(100);
    }

    if(opc==2){
        $("#explosion2").fadeIn(0);
        $("#largavida").fadeIn(0);
        $("#largavida").delay(3500).slideUp(0);
        $("#largavida2").delay(1500).fadeIn(100);
        $("#explosion2").delay(3500).slideUp(0);
        $("#largavida2").delay(3500).slideUp(0);
        $("#explosion").delay(3500).fadeIn(0);
        $("#explosion").delay(5000).slideUp(0);        
        $("#RuletaPop").delay(6000).slideUp(100);
    }

    if(opc==3){
        $("#explosion3").fadeIn(0);
        $("#explosion3").delay(2000).slideUp(0);
        $("#explosion").delay(2000).fadeIn(0);
        $("#explosion").delay(3500).slideUp(0); 
        $("#RuletaPop").delay(3500).slideUp(100);
    }
}

function profe(){
    $("#fuga").fadeIn(0);
    $("#fuga").delay(4000).slideUp(100);
    $("#RuletaProfe").delay(4000).slideUp(100);
}

function guardarRuleta(){

    if($("#nombreruleta").val().trim()==""){
        $("#ingresaRuleta").css("display","block");
        
    }else{
        $("#ingresaRuleta").css("display","none");
        ListaRuleta.push($("#nombreruleta").val());
        $("#RuletaGanaste").slideUp(0);
        $("#nombreruleta").val("");
    }

}