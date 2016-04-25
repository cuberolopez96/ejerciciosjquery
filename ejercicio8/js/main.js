(function(){
    $(document).ready(function(){
        $('#enlaceajax').click(function(event){
            event.preventDefault();
            $('#destino').load("index2.php",{nombre:'juan',apellidos:'cubero'});
        })
    })
})()