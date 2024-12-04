const today = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = daysOfWeek[today.getDay()];
const tomorrow = daysOfWeek[today.getDay() + 1];

console.log(`${dayOfWeek} and ${tomorrow}`);

const members = [
    {
        "name": "Cascada" ,
        "address": "Av. Héroes del Chaco Zona Morros Blancos",
        "phone": "46631111",
        "website": "https://lacascada.com.bo/",
        "image": "https://lacascada.com.bo/wp-content/uploads/2024/03/logo-cascada-bolivia.png",
        "membershipLevel": "Gold",
        "city": "Tarija"
    },
    {
        "name": "Pil Tarija" ,
        "address": "Carretera a Bermejo, Km 2, Zona Aeropuerto",
        "phone": "46638736",
        "website": "https://piltarija.com/",
        "image": "https://piltarija.com/wp-content/uploads/2016/09/logopil2.png",
        "membershipLevel": "Silver",
        "city": "Tarija"
    },
    {
        "name": "MonteCristo" ,
        "address": "Carretera al Chaco, Km 12, El portillo",
        "phone": "46677400",
        "website": "https://montecristobolivia.com/",
        "image": "https://montecristobolivia.com/wp-content/uploads/2019/04/brand.png",
        "membershipLevel": "Gold",
        "city": "Tarija"
    },
    {
        "name": "IADV" ,
        "address": "Calle Pantaleón Dalence Sud entre Av. Blanco Galindo y Victor Ustariz",
        "phone": "44268001",
        "website": "https://iadv.com.bo/",
        "image": "https://iadv.com.bo/wp-content/uploads/2023/08/Logo-IADV-300x67.png",
        "membershipLevel": "Silver",
        "city": "Cochabamba"
    },
    {
        "name": "Droguería INTI" ,
        "address": "Calle Lucas Jaimes # 1959 Miraflores La Paz",
        "phone": "22176600",
        "website": "https://www.inti.com.bo/",
        "image": "https://www.inti.com.bo/wp-content/uploads/2023/05/Logo-INTI-completo.png",
        "membershipLevel": "Gold",
        "city": "La Paz"
    },
    {
        "name": "La estrella" ,
        "address": "Carretera a Oruro Km 7, Zona Rosas Pampa #50",
        "phone": "22850851",
        "website": "https://www.fabricalaestrella.com/",
        "image": "https://www.fabricalaestrella.com/img/logos/logo_rojo_laestrella.webp",
        "membershipLevel": "Gold",
        "city": "La Paz"
    },
    {
        "name": "Ferrari Ghezzi",
        "address": "Av. 6 de Octubre #5049 entre Aroma y Rodríguez",
        "phone": "25288006",
        "website": "https://sfida.com.bo/",
        "image": "https://sfida.com.bo/wp-content/uploads/2018/04/InspectorPie-300x236.png",
        "membershipLevel": "Silver",
        "city": "Oruro"
    }
];


function ramdomMembers(list) {
    console.log(Math.floor(Math.random() * list.length));

    let cards = 0;    
    while (cards != 3) {
        let randomNumber = Math.floor(Math.random() * list.length);
        list.forEach(member => {
            if (randomNumber == list.indexOf(member)){
                if (member.membershipLevel == "Gold" || member.membershipLevel == "{Silver") {
                    console.log(`${member.name}`);
                    cards += 1;
                }
            }            
        });
    }
    
}

ramdomMembers(members);