const age = prompt("Podaj wiek dziecka");
const ageParseInt = parseInt(age);
const tubeDepthMouth = ageParseInt / 2 + 12;
const tubeDepthNose = ageParseInt / 2 + 15;
let weightScore;

age < 2 ? (weightScore = ` 
                        noworodek – 3-4 kg
                        6 miesięcy – 7 kg
                        1 rok – 10 kg`) : (weightScore = (ageParseInt + 4) * 2);

let tubeSizeWithCuff;

age < 2 ? (tubeSizeWithCuff = ` 
                        Noworodek - 3 - 3.5 cm
                        Niemowlęta - 3 - 3.5 cm
                        Dzieci 1-2 r.ż - 3.5 - 4 cm`) : (tubeSizeWithCuff = ageParseInt / 4 + 3.5);

let tubeSizeNoCuff;

age < 2 ? (tubeSizeNoCuff = `
                        Noworodek - 3 - 3.5 cm
                        Niemowlęta - 3,5 - 4.0 cm
                        Dzieci 1-2 r.ż - 4,0 - 4,5 cm`) : (tubeSizeNoCuff = ageParseInt / 4 + 4);
                        
const defEnergy = weightScore * 4;

//Medicaments
const epinefrine = weightScore * 0.01;
const amiodarone = weightScore * 5;
const atropine = [0.02, 0.03].map(
    dose => dose * weightScore
);
let clemastinum = [0.025 , 0.05];
age < 3 ? (clemastinum = `lek stosuje się powyżej 3go roku życia`) : (clemastinum = clemastinum.map(
    dose => dose * weightScore
));
const clonazepam = 0.5;
let furosemidum = [0.5 , 1].map(
    dose => dose * weightScore
);


let glucagon;
weightScore < 25 ? (glucagon = 0.5) : (glucagon = 1);
const hydrocortizon = 0.5 * weightScore;
const morphine = [0.1 , 0.2].map(
    dose => dose * weightScore
);
const diazepam = [0.2, 0.3].map(
    dose => dose * weightScore
);
//Test

console.log(`Wiek dziecka to ${age}`);
console.log(`Waga dziecka to : ${weightScore} kg`);
console.log(`Rozmiar rurki intubacyjnej z mankietem: ${tubeSizeWithCuff}`);
console.log(`Rozmiar rurki intubacyjnej bez mankietu: ${tubeSizeNoCuff}`);
console.log(`Głębokość wprowadzenia rurki intubacyjnej przez usta: ${tubeDepthMouth} cm`);
console.log(`Głębokość wprowadzenia rurki intubacyjnej przez nos: ${tubeDepthNose} cm`);
console.log(`Energia defibrylacji wynosi: ${defEnergy} J`);
console.log(`Adrenalina: ${epinefrine} mg`);
console.log(`Amiodaron: ${amiodarone} mg`);
console.log(`Atropina: ${atropine} mg (minimalna dawka to 0.1 mg`);
console.log(`Clemastinum: ${clemastinum}`);
console.log(`Clonazepam: ${clonazepam} mg`);
console.log(`Furosemid: ${furosemidum[0]} - ${furosemidum[1]} mg`);
console.log(`Glucagon: ${glucagon} mg`);
console.log(`Hydrocortizon: ${hydrocortizon} mg`);
console.log(`Morfina: ${morphine[0]} - ${morphine[1]} mg`);
console.log(`Relanium: ${diazepam[0]} - ${diazepam[1]} mg`);