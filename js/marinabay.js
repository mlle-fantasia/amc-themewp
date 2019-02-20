jQuery(document).ready(function($){

    //================================================
    //========  slider Galerie dans single page
    //================================================

    let nbPosts = $('#nbPosts').val();
    let nbPageMax = (Math.trunc(nbPosts/4))+1;
    console.log(nbPageMax);
    let currentPage = (window.location.href).trim();
    let tab = currentPage.split('/');
    let lastLettre = tab[(tab.length)-2];
    console.log(lastLettre);
    if(lastLettre.length>1){
        $('.prec').css('color', '#3A3A3A');
    }
    if(lastLettre === String(nbPageMax)){
        $('.suiv').css('color', '#3A3A3A');
    }

    $('#suivant').click(function(){
        let currentPage = window.location.href;
        let tab = currentPage.split('/');

        let lastLettre = tab[(tab.length)-1];
        console.log(lastLettre);
        if(lastLettre === '#slideGalerie'){
            let avLastLettre = tab[(tab.length)-2];
            if(avLastLettre.length > 1){
                let url = currentPage.substr(0,(currentPage.length-13));
                console.log(url+'2/#slideGalerie');
                 document.location.href = url+'2/#slideGalerie';
            }
            else if(avLastLettre.length = 1){
                if(avLastLettre === String(nbPageMax) ){
                    document.location.href = document.location.href;
                }else{
                    let pages = {'2':3, '3':4, '4':5, '5':6, '6':7,};
                    let lastLettre = tab[(tab.length)-2];
                    let pageSuivante = pages[lastLettre];
                    let url = currentPage.substr(0,(currentPage.length-15));
                    console.log(lastLettre);
                    document.location.href = url+ pageSuivante +'#slideGalerie';
                }
            }
        }
        else{
            document.location.href = document.location.href+'2/#slideGalerie';
        }

    });

    $('#precedent').click(function(){
        let currentPage = window.location.href;
        let tab = currentPage.split('/');
        let lastLettre = tab[(tab.length)-2];

        if(lastLettre.length === 1){
            let pages = {'2':1, '3':2, '4':3, '5':4, '6':5,};
            let pageSuivante = pages[lastLettre];
            let url = currentPage.substr(0,(currentPage.length-15));
            console.log(pageSuivante);
            document.location.href = url+ pageSuivante +'#slideGalerie';
        }

    });





});
