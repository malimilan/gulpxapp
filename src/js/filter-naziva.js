
    //Filtriranje imena
    let filterInput = document.getElementById('filter_naziv');
    filterInput.addEventListener('keyup', filtrirajImena);
    //lista ustanova
    let lista = document.getElementById('ustanove');
    // ustanove
    let ustanova = lista.querySelectorAll('.tr');
    
    //dodati svima data atribute
    for (let i = 0; i < ustanova.length; i++) {
        ustanova[i].dataset.namefilter = "match";
    }

    // console.log(ustanova[15].getElementsByTagName('div')[1]);
    
    function filtrirajImena(){
        let filterValue = document.getElementById('filter_naziv').value.toUpperCase();
    
        //Loop za ustanove
        for (let i = 0; i < ustanova.length; i++) {
            
            let ustanova_ime = ustanova[i].getElementsByTagName('div')[1];
            if (typeof ustanova_ime !== 'undefined') {
                // console.log(ustanova_ime.textContent.toUpperCase().indexOf(filterValue));
                console.log(typeof ustanova_ime.textContent);
                //ako se poklapaju
                if (ustanova_ime.textContent.toUpperCase().indexOf(filterValue) > -1) {
                    ustanova[i].dataset.namefilter = 'match';
                } else {
                    ustanova[i].dataset.namefilter = 'nomatch';
                }
        
                //prikazi ili sakrij
                if (ustanova[i].dataset.namefilter == 'match') {
                    ustanova[i].style.display = 'block';
                } else {
                    ustanova[i].style.display = 'none';
                } 
            } else {
                ustanova[i].dataset.namefilter = 'nomatch';
                ustanova[i].style.display = 'none';
                continue;
            }

        }
        // lista.className = 'refresh'; //treba da se napravi sa timeoutom uklanjanje klase
        // setInterval(function(){lista.className = '';}, 1000);
    }
    
    
    
    //Obrisi text input filter
    clearTxtFilterBtn = document.getElementById('clear_text_input');
    clearTxtFilterBtn.addEventListener('click', clearTxtFilter);
    function clearTxtFilter(){
        filterInput.value = '';
        filtrirajImena();
    }
    
    
    // aktiviranje dugmeta "Ukloni text filter"
    function prikaziClearTxtFilterBtn() {
        if (filterInput.value != '') {
            clearTxtFilterBtn.style.display = '';
        } else {
            clearTxtFilterBtn.style.display = 'none';
        }
    }
    
    ['DOMContentLoaded','click','keyup'].forEach( function(e) {
        document.addEventListener(e, prikaziClearTxtFilterBtn);
    });