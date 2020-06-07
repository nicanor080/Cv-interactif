var TelevisionOn = false; //Note Bastien Jean-Nicanor pour mes repères
    
$(function() {
    
    powerOn();
    
        
    $(".chaine").click(function() {  // dans Jquery , $() est un sélecteurs d'éléments il peut sélectioner 1 ou plusieurs objets. nous cherons a selectionner tous les elements qui ont la classse "Chaine" alors c'est $('.chaine')
      
      var chaineCourante = $(this).attr("id"); // On met en variable la chaine courante afin de savoir laquelle a été cliqué plus tard.
      var chaineAfficher = chaineCourante.substr(4); // Effacer le mot btn. afin de récupérer le bon id pour afficher la bonne chaine
      
        $(".content-holder").hide(); // Cachons tous les canaux
        //Réaffichons uniquement la chaine qui match avec le id du bouton clické
        //chaineAfficher = chaineCourante.

       
       $("#"+chaineAfficher).show();

       $(".chaine").removeClass("chaine-on");
       $(this).addClass("chaine-on"); //Afin de viser le boutton j'utilise le mot clés "this"

       
        console.log(chaineCourante.substr(4)); // La fonction "substr" efface des charactère dans une chaine de caractère (String) en mettant le chiffre 4 comme paramètre la fonction élimine les 4 premier caractère dans notre cas c'est : btn.

    });
    
    
    $("#power").click(function(){
        
       powerOn();
    })

});

function powerOn(){
    
    if(TelevisionOn == true) {
         
        $(".content-holder").slideUp(0).hide(100); // Fermons toutes les chaines
        TelevisionOn = false; // Enlevons la classe Power-on afin que le bouton devienne rouge
        $("#power").removeClass("power-on");
        $(".chaine").removeClass("chaine-on");
    
         
    }else{
        $("#power").addClass("power-on");
        $("#chaine-1").slideDown(200).fadeIn(200)
        TelevisionOn = true
       // $("#btn.chaine-1").addClass("chaine-on");
       $(".chaine")[0].classList.add("chaine-on");
        console.log( $(".chaine"))
    }
    
}