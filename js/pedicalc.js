window.onload = function () {
    /* event listener */
    document.getElementById("childAge").addEventListener('change', doThing);

    /* function */
    function doThing(){
        //wiek
        let age = this.value;
        //zmiana ze string na number
        const ageParseInt = parseInt(age);
        
        //waga
        let weightScore;
        age < 2 ? (weightScore = ` 
        noworodek – 3-4 kg
        6 miesięcy – 7 kg
        1 rok – 10`) : (weightScore = (ageParseInt + 4) * 2);

        document.getElementById('weight-score').innerHTML = weightScore  + " kg";
        
        //głębokość wprowadzenia rurki
        const tubeDepthMouth = ageParseInt / 2 + 12;

        document.getElementById('tube-depth-mouth').innerHTML = tubeDepthMouth  + " cm";
        
        const tubeDepthNose = ageParseInt / 2 + 15;

        document.getElementById('tube-depth-nose').innerHTML = tubeDepthNose  + " cm";
        

        //rozmiar rurki intubacyjnej
        let tubeSizeWithCuff;
        
        age < 2 ? (tubeSizeWithCuff = ` 
                                Noworodek - 3 - 3.5 cm
                                Niemowlęta - 3 - 3.5 cm
                                Dzieci 1-2 r.ż - 3.5 - 4 cm`) : (tubeSizeWithCuff = ageParseInt / 4 + 3.5);
        
        document.getElementById('tube-size-cuff').innerHTML = tubeSizeWithCuff;

                                
        let tubeSizeNoCuff;
        
        age < 2 ? (tubeSizeNoCuff = `
                                Noworodek - 3 - 3.5 cm
                                Niemowlęta - 3,5 - 4.0 cm
                                Dzieci 1-2 r.ż - 4,0 - 4,5 cm`) : (tubeSizeNoCuff = ageParseInt / 4 + 4);
        
        document.getElementById('tube-size-nocuff').innerHTML = tubeSizeNoCuff;
                      
        //energia defibrylacji
        let defEnergy = weightScore * 4;
        age >= 2 ? (defEnergy) : (defEnergy = "");
        document.getElementById('def-energy').innerHTML = defEnergy + (age >= 2 ? (" J") : (""));
        

        //Medicaments

        let epinephrine = weightScore * 0.01;
        age >= 2 ? (epinephrine) : (epinephrine = "");
        document.getElementById('td-epinephrine').innerHTML = epinephrine + (age >= 2 ? (" mg") : (""));
        
        let amiodarone = weightScore * 5;
        age >= 2 ? (amiodarone) : (amiodarone = "");
        document.getElementById('td-amiodarone').innerHTML = amiodarone + (age >= 2 ? (" mg") : (""));
        
        let atropine = [0.02, 0.03].map(
            dose => Math.round((dose * weightScore)*100) /100
        );
        age >= 2 ? (atropine) : (atropine = "");
        document.getElementById('td-atropine').innerHTML = (age >= 2 ? (atropine[0] + " - " + atropine[1] + " mg") : (""));

        let clemastinum = [0.025 , 0.05].map(
            dose => Math.round((dose * weightScore)*1000) /1000
        );
        age >= 3 ? (clemastinum) : (clemastinum = "");
        document.getElementById('td-clemastinum').innerHTML = (age >= 3 ? (clemastinum[0] + " - " + clemastinum[1] + " mg") : ("Lek stosuje się powyżej 3go roku życia"));
        
        const clonazepam = 0.5;
        document.getElementById('td-clonazepam').innerHTML = clonazepam + " mg";

        let furosemidum = [0.5 , 1].map(
            dose => dose * weightScore
        );
        age >= 2 ? (furosemidum) : (furosemidum = "");
        document.getElementById('td-furosemidum').innerHTML = (age >= 2 ? (furosemidum[0] + " - " + furosemidum[1] + " mg") : (""));
        
        let glucagon;
        weightScore < 25 ? (glucagon = 0.5) : (glucagon = 1);
        document.getElementById('td-glucagon').innerHTML = (age >= 2 ? (glucagon + " mg") : ("0.5 mg"));        

        let hydrocortisonum = 0.5 * weightScore;
        age >= 2 ? (hydrocortisonum) : (hydrocortisonum = "");
        document.getElementById('td-hydrocoritosonum').innerHTML = hydrocortisonum + (age >= 2 ? (" mg") : (""));
        
        let morphine = [0.1 , 0.2].map(
            dose => Math.round((dose * weightScore)*10) /10
        );
        age >= 2 ? (morphine) : (morphine = "");
        document.getElementById('td-morphine').innerHTML = (age >= 2 ? (morphine[0] + " - " + morphine[1] + " mg") : (""));

        let diazepam = [0.2, 0.3].map(
            dose => Math.round((dose * weightScore)*10) /10 
        );
        age >= 2 ? (diazepam) : (diazepam = "");
        document.getElementById('td-diazepam').innerHTML = (age >= 2 ? (diazepam[0] + " - " + diazepam[1] + " mg") : (""));

    }
};


