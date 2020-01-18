import d1 from './images/double/d1.jpg';
import d2 from './images/double/d2.jpg';
import d3 from './images/double/d3.jpg';
import d4 from './images/double/d4.jpg';
import d5 from './images/double/d5.jpg';
import d6 from './images/double/d6.jpg';
import d7 from './images/double/d7.jpg';
import d8 from './images/double/d8.jpg';
import d9 from './images/double/d9.jpg';
import d10 from './images/double/d10.jpg';

import f1 from './images/familiale/f1.jpg';
import f2 from './images/familiale/f2.jpg';
import f3 from './images/familiale/f3.jpg';
import f4 from './images/familiale/f4.jpg';
import f5 from './images/familiale/f5.jpg';
import f6 from './images/familiale/f6.jpg';
import f7 from './images/familiale/f7.jpg';
import f8 from './images/familiale/f8.jpg';
import f9 from './images/familiale/f9.jpg';
import f10 from './images/familiale/f10.jpg';

import p1 from './images/presidentielle/p1.jpg';
import p2 from './images/presidentielle/p2.jpg';
import p3 from './images/presidentielle/p3.jpg';
import p4 from './images/presidentielle/p4.jpg';
import p5 from './images/presidentielle/p5.jpg';
import p6 from './images/presidentielle/p6.jpg';
import p7 from './images/presidentielle/p7.jpg';
import p8 from './images/presidentielle/p8.jpg';
import p9 from './images/presidentielle/p9.jpg';
import p10 from './images/presidentielle/p10.jpg';

import s1 from './images/simple/s1.jpg';
import s2 from './images/simple/s2.jpg';
import s3 from './images/simple/s3.jpg';
import s4 from './images/simple/s4.jpg';
import s5 from './images/simple/s5.jpg';
import s6 from './images/simple/s6.jpg';
import s7 from './images/simple/s7.jpg';
import s8 from './images/simple/s8.jpg';
import s9 from './images/simple/s9.jpg';
import s10 from './images/simple/s10.jpg';



export default [
  //Chambre simple
  {
      sys:{
        id: "1",
      },
      fields:{
               name: "Chambre simple",
               slug: "Chambre-simple",
               type: "simple",
               price: 180,
               size: "Entre 25 et 30 m² ",
               capacity: "Une personne",
               breakfast: "Non inclu",
               description:"Vous êtes à la recherche d’une chambre pour loger à Paris et ses environs? Venez séjourner au sein de Yakhouya Hôtel. Nos chambres simples proposent une norme standard agréable Conçue pour offrir un maximum de confort à un prix avantageux. Elles comprennent un équipement complet intégrant le wifi offert, la TV satellite, le coffre-fort, un service de blanchisserie et de pressing, une salle de bain avec douche et sèche-cheveux, un mini bar et la climatisation Vous apprécierez notre petit déjeuner continental servi en terrasse parfait pour commencer votre journée en faisant le plein d’énergie ! Un micro-onde est également mis à votre disposition dans la salle de petits déjeuners.",
               services: [
                 "WIFI",
                 "TV satellite",
                 "Sèche-cheveux",
                 "Réfrigérateur",
                 "Coffre-fort à la réception"
                 
               ],
               images: [

               {
                image: {
                           url: s1
                          },
               },

               {
                image: {
                         url: s2
                        },
               },

               {
                image: {
                         url: s3
                        },
               },

               {
                image: {
                         url: s4
                        },
               },

               {
                image: {
                         url: s5
                        },
               },

               {
                image: {
                         url: s6
                        },
               },

               {
                image: {
                         url: s7
                        },
               },

               {
                image: {
                         url: s8
                        },
               },

               {
                image: {
                         url: s9
                        },
               },

               

               
              ],
            }
  },



  //Chambre double
  {
    sys:{
      id: "2",
    },
    fields:{

    
    name: "Chambre double",
    slug: "Chambre-double",
    type: "Double",
    price: 230,
    size: "Entre 30 et 35 m² ",
    capacity: "Deux personne",
    breakfast: "Non inclu",
    description:"Pour un séjour de détente à Paris pour deux personnes, Yakhouya Hôtel vous invite à découvrir ses chambres doubles à deux pas des plus belles plages de Juan les Pins. Nos chambres doubles sont équipées d’un lit double, d’une salle de bain avec baignoire et WC, ainsi que de la climatisation ou d’un ventilateur au plafond. Vous trouverez également tous les équipements indispensables pour un séjour 100% confort : WIFI gratuit, télévision par satellite, sèche-cheveux, mini-bar ou encore coffre- fort. Tous les matins, un petit déjeuner continental vous sera servi dans notre salle de petit déjeuner ou en terrasse, si le temps le permet. L’Hôtel Trianon jouit d’une situation géographique exceptionnelle, à proximité des plages, du Centre des Congrès, de la gare des trains et des boutiques.",
    services: [
               "WIFI",
               "TV satellite",
               "Sèche-cheveux",
               "Réfrigérateur",
               "Coffre-fort à la réception",
               
             ],
    images: [

              {
               image: {
                          url: d1
                         },
              },

              {
               image: {
                        url: d2
                       },
              },

              {
               image: {
                        url: d3
                       },
              },

              {
               image: {
                        url: d4
                       },
              },

              {
               image: {
                        url: d5
                       },
              },

              {
               image: {
                        url: d6
                       },
              },

              {
               image: {
                        url: d7
                       },
              },

              {
               image: {
                        url: d8
                       },
              },

              {
               image: {
                        url: d9
                       },
              },

              

              
        ],
      }
},


  //Chambre familiale
  {
    sys:{
      id: "3",
    },
    fields:{

    
    name: "Chambre familiale",
    slug: "Chambre-familiale",
    type: "Familiale",
    price: 320,
    size: "Entre 40 et 45 m² ",
    capacity: "Quatre personne",
    breakfast: "Non inclu",
    description:"Dans un cadre chaleureux et une atmosphère raffinée, YakhouyaHôtel vous propose des chambres familiale pouvant accueillir 4 personnes. Leur décoration contemporaine allie charme, confort et élégance. Le chauffage et la climatisation individuels vous permettront d’ajuster à votre convenance la température de la chambre. Toutes les chambres familiales sont équipées  d’un lit double (140×190) et de un à deux lits simples (90×190), d’une penderie et d’un bureau, du double-vitrage, d’un téléviseur à écran plat avec CanalSat et d’un accès WIFI gratuit. Elles disposent d’une grande salle de bain avec baignoire, lavabo et WC. Un petit déjeuner continental peut être servi, sur demande et avec supplément, en chambre. De par leur configuration, elles sont particulièrement appréciées par les familles avec des enfants. 2",
    services: [
      "Wifi en chambre gratuit",
      "Coffre-fort",
      "Téléphone à lignes multiples",
      "Lit bébé (sur demande)",
      "Service de garde d&#39;enfants (en supplement)",
      "Mini bar",
      "Peignoirs et chaussons",
      "Radio/réveil",
             ],
    images: [

              {
               image: {
                          url: f1
                         },
              },

              {
               image: {
                        url: f2
                       },
              },

              {
               image: {
                        url: f3
                       },
              },

              {
               image: {
                        url: f4
                       },
              },

              {
               image: {
                        url: f5
                       },
              },

              {
               image: {
                        url: f6
                       },
              },

              {
               image: {
                        url: f7
                       },
              },

              {
               image: {
                        url: f8
                       },
              },

              {
               image: {
                        url: f9
                       },
              },

              

              
    ],
  }
},


//Suite présidentielle

{
  sys:{
    id: "4",
  },
  fields:{

  
  name: "Suite présidentielle",
  slug: "Suite-presidentielle",
  type: "Presidentielle",
  price: 600,
  size: "Entre 50 et 60 m² ",
  capacity: "Deux personne",
  breakfast: "Inclu",
  description:"Chaque chambre est une scène merveilleuse où se joue la vie parisienne dans toute son élégance. Ainsi, le velours qui habille les intérieurs rappelle le décor classique des grandes salles de la capitale. Des derniers étages, vous êtes aux premières loges pour apprécier le répertoire des plus beaux monuments de Paris : la Tour Eiffel, les verrières du Grand Palais, les flèches de Notre-Dame au loin… Une vue mythique à admirer sous tous les angles, depuis les différentes fenêtres et balcons qui courent tout le long de la façade. Paris dans son plus beau rôle et dans sa plus belle interprétation… Teintes pastel ou plus soutenues, pièces d’antiquité chinées, bar privé, cave à vins dotée de Grands Crus, parquet en point de Hongrie, étoffes précieuses, dressing généreux... L’atmosphère de ces chambres de 60 ou 80 m² est magique et se module au gré des envies grâce à la tablette interactive. Tout en marbre de Carrare, la salle de bains dispose d’une baignoire, d’une douche à l’italienne ainsi que d’une double vasque.",
  services: [
             "Wifi en chambre gratuit",
             "Coffre-fort",
             "Téléphone à lignes multiples",
             "Lit bébé (sur demande)",
             "Service de garde d&#39;enfants (en supplement)",
             "Mini bar",
             "Peignoirs et chaussons",
             "Radio/réveil",

           ],
  images: [

            {
             image: {
                        url: p1
                       },
            },

            {
             image: {
                      url: p2
                     },
            },

            {
             image: {
                      url: p3
                     },
            },

            {
             image: {
                      url: p4
                     },
            },

            {
             image: {
                      url: p5
                     },
            },

            {
             image: {
                      url: p6
                     },
            },

            {
             image: {
                      url: p7
                     },
            },

            {
             image: {
                      url: p8
                     },
            },

            {
             image: {
                      url: p9
                     },
            },

            

            
    ],
  }
},
  
];
