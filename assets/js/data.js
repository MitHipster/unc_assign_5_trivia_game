/*jslint esversion: 6, browser: true*/
/*global window, console, $, jQuery, alert*/

// Answer - a - is the index value of the array.
let questions = {
  geography: [
    {
      q: "This state's motto is Liberty and Independence?",
      choices: ["Rhode Island", "Delaware", "Georgia", "Ohio"],
      a: 1,
      fact: "The capital of Delaware is Dover."
    },
    {
      q: "What is the capital city of Wales?",
      choices: ["Cardiff", "Bangor", "St. Asaph", "Newport"],
      a: 0,
      fact: "Cardiff is the tenth largest city in the United Kingdom."
    },
    {
      q: "Approximately how many islands make up the Philippines?",
      choices: ["3,000", "5,050", "10,000", "7,100"],
      a: 3,
      fact: "The Philippines consists of 7,107 islands.",
      category: "Geography"
    },
    {
      q: "Which of these continents is the largest?",
      choices: ["Asia", "Africa", "South America", "Europe"],
      a: 0,
      fact: "Asia includes China and Russia, holding around 30 percent of the Earth's land area."
    },
    {
      q: "Which of these rivers is the longest?",
      choices: ["Yangtze", "Mississippi", "Yellow", "Amazon"],
      a: 3,
      fact: "The Amazon is the second longest river in the world; the Nile is the longest."
    },
    {
      q: "How long is the Great Barrier Reef?",
      choices: ["500 mi", "900 mi", "2,000 mi", "1,600 mi"],
      a: 3,
      fact: "The reef consists of over 900 islands."
    },
    {
      q: "After Vatican City, which is the smallest nation in Europe?",
      choices: ["Luxemburg", "Malta", "Liechtenstein", "Monaco"],
      a: 3,
      fact: "Monaco's coastline is 4,100 mi long."
    },
    {
      q: "Originally planned for Boulder Canyon, what dam in the Black Canyon created Lake Mead?",
      choices: ["Hoover Dam", "Three Gorges Dam", "Grand Coolee Dam", "Aswan High Dam"],
      a: 0,
      fact: "It was originally called Boulder Dam."
    },
    {
      q: "Which state would you have to visit if you wanted to see Clingmans Dome?",
      choices: ["Nevada", "Tennessee", "Georgia", "Kentucky"],
      a: 1,
      fact: "From this vantage point, a person can overlook seven states."
    },
    {
      q: "How many neighboring countries does China have share a border with?",
      choices: ["10", "12", "8", "14"],
      a: 3,
      fact: "China is the world's most populous country."
    },
    {
      q: "The Fair City is the nickname for which of the following?",
      choices: ["Paris", "Rome", "Dublin", "Venice"],
      a: 2,
      fact: "10 million pints of Guinness are produced in Dublin every day!"
    },
    {
      q: "All of these cities are on the Rhine River, but which one is not located in Germany?",
      choices: ["Dusseldorf", "Strasbourg", "Bonn", "Cologne"],
      a: 1,
      fact: "Strasbourg, France is the official seat of the European Parliament."
    }
  ],
  entertain: [
    {
      q: "What 1963 animated musical comedy Disney film is based on a 1938 novel by T.H. White?",
      choices: ["The Incredible Journey", "Son of Flubber", "Miracle of the White Stallions", "The Sword in the Stone"],
      a: 3,
      fact: "The Sword in the Stone was the final Disney animated film to be released before Walt Disney's death."
    },
    {
      q: "Who plays the role of Vernon Pinkley in the 1967 war film 'The Dirty Dozen'?",
      choices: ["Charles Bronson", "Al Mancini", "Donald Sutherland", "Telly Savalas"],
      a: 2,
      fact: "The film was inspired by a real-life US army group called the 'Filthy Thirteen'."
    },
    {
      q: "In The Simpsons, how many days is Marge sentenced to prison in the episode 'Marge in Chains'?",
      choices: ["15", "30", "60", "10"],
      a: 1,
      fact: "Marge was arrested for shoplifting."
    },
    {
      q: "Who played the Saturday Night Live Character 'The Samurai'?",
      choices: ["Jim Belushi", "Jim Breuer", "Peter Aykroyd", "John Belushi"],
      a: 3,
      fact: "Belushi once accidentally slashed host Buck Henry's forehead with his sword."
    },
    {
      q: "Which actor co-starred with Eva Gabor in the 1960s TV sitcom 'Green Acres'?",
      choices: ["Frank Cady", "William Wyler", "Gregory Peck", "Eddie Albert"],
      a: 3,
      fact: "The popular series told the story of a couple who move from New York City to a country farm."
    },
    {
      q: "Pete Townshend, Roger Daltrey, Keith Moon and John Entwistle?",
      choices: ["The Guess Who", "The Who", "The Band", "Cream"],
      a: 1,
      fact: "The Who that formed in 1964 and have sold over 100 million records worldwide."
    },
    {
      q: "Which of these Beatles' albums was the first to be released?",
      choices: ["With The Beatles", "Hard Day's Night", "Please Please Me", "Beatles for Sale"],
      a: 2,
      fact: "Released in 1963, Please Please Me was the Beatles' debut studio album."
    },
    {
      q: "Complete the title of this comedy movie from 2010 - 'Scott Pilgrim vs. ...'?",
      choices: ["The World", "The Universe", "Kick Ass", "Superman"],
      a: 0,
      fact: "The film is based on the graphic novel series Scott Pilgrim by Bryan Lee O'Malley."
    },
    {
      q: "Produced and directed by Angelina Jolie, which 2014 movie tells the story of Olympian Louis Hampering?",
      choices: ["Unbroken", "Foxcatcher", "Need for Speed", "The Equalizer"],
      a: 0,
      fact: "Unbroken is based on a 2010 book by Laura Hillenbrand."
    },
    {
      q: "In the original 1968 film 'Planet of the Apes,' who plays the role of the chimpanzee archaeologist and historian Cornelius?",
      choices: ["James Daly", "Roddy McDowall", "Charlton Heston", "David Watson"],
      a: 1,
      fact: "Planet of the Apes was remade by Tim Burton and released in 2001."
    },
    {
      q: "It's the terror of knowing what the world is about. Watching some good friends - screaming... is from which David Bowie song",
      choices: ["Hang On to Yourself", "Rock 'n' Roll Suicide", "Star", "Under Pressure"],
      a: 3,
      fact: "Under Pressure was recorded with the band Queen in 1981."
    },
    {
      q: "What make of car did Tom Selleck drive in the TV series 'Magnum P.I.'?",
      choices: ["Ferrari Daytona", "Porsche 356 Speedster", "Ferrari 308 GTS", "Porsche 911 Carrera"],
      a: 2,
      fact: "Magnum, P.I. was one of the highest-rated TV shows on television during the 1980's."
    }
  ],
  history: [
    {
      q: "Charlemagne was proclaimed Holy Roman Emperor by which Pope?",
      choices: ["Adrian I", "Pope Martin IV", "Leo III", "Paschal I"],
      a: 2,
      fact: "Charlemagne sought to unite all Germanic peoples into one kingdom and convert his subjects to Christianity."
    },
    {
      q: "In what U.S. city were the first electric traffic lights installed on August 5, 1914?",
      choices: ["Boston", "New York City", "Cleveland", "Chicago"],
      a: 2,
      fact: "The first traffic lights ever to be used were in London."
    },
    {
      q: "Ruler of the Huns from 434 until his demise in March of 453, Attila battled which empire?",
      choices: ["Chinese", "Egyptians", "Greeks", "Romans"],
      a: 3,
      fact: "Attila the Hun was one of the most feared enemies of the Roman Empire."
    },
    {
      q: "Known as the founder of modern nursing, Florence Nightingale became prominent while serving during which conflict?",
      choices: ["World War II", "Crimean War", "World War I", "Falkland's War"],
      a: 1,
      fact: "During the war, Florence acquired the nickname 'The Lady with the Lamp'."
    },
    {
      q: "Considered a heroine of France, Joan of Arc was also known as?",
      choices: ["The Maid of Orleans", "The Servant of Orleans", "The Savior of Orleans", "The Mother of Orleans"],
      a: 0,
      fact: "Joan was burned at the stake on May 30, 1431 for heresy."
    },
    {
      q: "How many stones make up the prehistoric monument Stonehenge?",
      choices: ["80", "120", "60", "100"],
      a: 0,
      fact: "Constructed sometime between 3000 BC and 2000 BC, Stonehenge is located in Wiltshire, England."
    },
    {
      q: "Who was the first US President to win the Nobel Peace Prize?",
      choices: ["John F. Kennedy", "Theodore Roosevelt", "Barack Obama", "Harry Truman"],
      a: 1,
      fact: "For his efforts to end the Russo-Japanese War, Roosevelt won the Nobel Peace Prize in 1906."
    },
    {
      q: "The ivory-white marble mausoleum Taj Mahal was constructed in which century?",
      choices: ["18th", "19th", "16th", "17th"],
      a: 3,
      fact: "Construction of the Taj Mahal took around 20 years, beginning around 1632 and finishing in 1653."
    },
    {
      q: "Henry McCarty was the real name of which American Old West gunfighter?",
      choices: ["Billy the Kid", "Kid Curry", "Wild Bill Hickok", "Butch Cassidy"],
      a: 0,
      fact: "Billy the Kid was also known as William H. Bonney."
    },
    {
      q: "Henry VII belonged to which royal house?",
      choices: ["Stuart", "Windsor", "Tudor", "Hanover"],
      a: 2,
      fact: "Henry VII was the first monarch of the House of Tudor."
    },
    {
      q: "Besides Belgium, which country did Germany invade on August 4th, 1914?",
      choices: ["Netherlands", "Switzerland", "Luxembourg", "Russia"],
      a: 2,
      fact: "Luxembourg was under full occupation by the German Empire until the last day of the war."
    },
    {
      q: "Who was President of the United States during the war of 1812?",
      choices: ["James K. Polk", "William Howard Taft", "Thomas Jefferson", "James Madison"],
      a: 3,
      fact: "James Madison was the fourth President of the United States."
    }
  ],
  science: [
    {
      q: "What element did British scientist Henry Cavendish discover in 1766?",
      choices: ["Carbon", "Boron", "Radon", "Hydrogen"],
      a: 3,
      fact: "Cavendish called hydrogen 'inflammable air'."
    },
    {
      q: "Eleven on the Beaufort Wind Force Scale indicates what?",
      choices: ["Light Breeze", "Calm", "Hurricane", "Violent Storm"],
      a: 3,
      fact: "The scale was first devised in 1805 by Irish hydrographer Francis Beaufort."
    },
    {
      q: "Consisting of countless small particles, the 'Encke Gap' is a feature of which planet?",
      choices: ["Neptune", "Uranus", "Saturn", "Jupiter"],
      a: 2,
      fact: "Encke Gap is better known as the Rings of Saturn."
    },
    {
      q: "Varieties of this bird include the grasshopper, reed and marsh.",
      choices: ["Warbler", "Falcon", "Wren", "Duck"],
      a: 0,
      fact: "The sedge is another variety of the warbler."
    },
    {
      q: "Known as the father of nuclear physics, which of these men is credited with splitting the atom?",
      choices: ["Sir John Percy", "Sir Henry Adams", "Sir William King", "Sir Ernest Rutherford"],
      a: 3,
      fact: "Sir Ernest Rutherford was born in New Zealand in 1871."
    },
    {
      q: "Which of these organs filters foreign substances out of the blood?",
      choices: ["Pancreas", "Liver", "Heart", "Spleen"],
      a: 3,
      fact: "The spleen is about the size of your fist."
    },
    {
      q: "What is the boiling point for grain or ethanol alcohol?",
      choices: ["455\xB0F", "173\xB0F", "231\xB0F", "100\xB0F"],
      a: 1,
      fact: "173\xB0F is about 78\xB0C. Methanol alcohol boils at 151\xB0F."
    },
    {
      q: "Who is credited with inventing the aqualung in 1943?",
      choices: ["Leonardo di Vinci", "William Sturgeon", "Jacques Cousteau", "Nikola Tesla"],
      a: 2,
      fact: "Cousteau developed the aqualung with Emile Gagman."
    },
    {
      q: "Which small mammal has varieties named Armored, Mouse and Masked?",
      choices: ["Pika", "Shrew", "Squirrel", "Weasel"],
      a: 1,
      fact: "Although a shew looks somewhat like a long-nosed mouse, it is not a rodent, it's a mole."
    },
    {
      q: "How many hearts does an octopus have?",
      choices: ["Two", "Three", "Four", "One"],
      a: 1,
      fact: "An octopus has no internal or external skeleton."
    },
    {
      q: "Linseed Oil is harvested from what pale blue flowered plant?",
      choices: ["Eucalyptus", "River Ash", "Flax", "Coneflower"],
      a: 2,
      fact: "The textile linen also comes from the flax plant."
    },
    {
      q: "When the first glue patent was issued, what was the main component?",
      choices: ["Flour", "Rubber", "Fish", "Tree sap"],
      a: 2,
      fact: "The patent was issued in 1750."
    }
  ],
  leisure: [
    {
      q: "Often served at Christmas, 'Stollen' is a German type of what?",
      choices: ["Fruit Bread", "Wine", "Sausage", "Cake"],
      a: 0,
      fact: "Stollen is usually made with chopped candied fruit, nuts and spices."
    },
    {
      q: "Popular in the 1950s and 1960s in Australia, a carpetbag steak is stuffed with what inside the meat?",
      choices: ["Oysters", "Prawns", "Cod", "Salmon"],
      a: 0,
      fact: "The earliest known reference to carpetbag steak is in an 1891 US newspaper."
    },
    {
      q: "Which of the following is not a type of grape?",
      choices: ["Nebbiolo", "Chardonnay", "Balaton", "Shiraz"],
      a: 2,
      fact: "Balaton is a sweet-tart cherry."
    },
    {
      q: "Consumed mostly in France, Creme de Cassis is made from which fruit?",
      choices: ["Pear", "Cherry", "Raspberry", "Blackcurrant"],
      a: 3,
      fact: "Burgundy, France is well known for its production of Creme de Cassis."
    },
    {
      q: "Which of the following painters was buried in an unmarked grave in Westerkerk?",
      choices: ["Picasso", "Rembrandt", "Raphael", "Warhol"],
      a: 1,
      fact: "Rembrandt died in 1669. He died a very poor man and was buried without a marker."
    },
    {
      q: "In which 1929 novel would you read about Frederick Henry and Catherine Barkley?",
      choices: ["The Wings of a Dove", "City of Glass", "The Stranger", "A Farewell to Arms"],
      a: 3,
      fact: "This book was written by Ernest Hemmingway."
    },
    {
      q: "Originally titled Peter and Wendy, who authored the 1911 novel 'Peter Pan'?",
      choices: ["C. S. Lewis", "E. B. White", "J. M. Barrie", "A. A. Milne"],
      a: 2,
      fact: "Disney’s cartoon adaptation of Peter Pan was released in 1953."
    },
    {
      q: "Terpsichore was one of the Muses, and today something terpsichorean refers to what artistic act?",
      choices: ["Dancing", "Sculpting", "Writing poetry", "Playing music"],
      a: 0,
      fact: "Terpsichore ruled over dance and the dramatic chorus."
    },
    {
      q: "Aside from being the very last entry in many dictionaries, what is a zyzzyva?",
      choices: ["A protein found in enzymes", "A process used to ferment beverages", "A tropical weevil", "A thick-walled spore"],
      a: 2,
      fact: "It was first discovered in 1922 in Brazil."
    },
    {
      q: "Which family of plants does the strawberry belong to?",
      choices: ["Mallow", "Nightshade", "Grass", "Rose"],
      a: 3,
      fact: "The first strawberries were grown in France."
    },
    {
      q: "One of the best-known toys ever, which company released 'Etch a Sketch' in 1960?",
      choices: ["Art Asylum", "Hasbro", "Ohio Art Company", "Mattel"],
      a: 2,
      fact: "Etch a Sketch was invented by Andr\xE9 Cassagnes sometime in the late 1950s."
    },
    {
      q: "How many witches are brewing a potion at the beginning of Shakespeare's Macbeth?",
      choices: ["13", "3", "2", "5"],
      a: 1,
      fact: "The three witches chant the legendary words 'Double, double toil and trouble. Fire burn, and caldron bubble.'"
    }
  ],
  sports: [
    {
      q: "Which color of ball would you not find on a snooker table?",
      choices: ["Orange", "Yellow", "Red", "Pink"],
      a: 0,
      fact: "The World Snooker Championship first took place since 1927."
    },
    {
      q: "Help by the Montreal Canadiens, what is the record for most goals scored by one team in an NHL game?",
      choices: ["10", "12", "18", "16"],
      a: 3,
      fact: "The Montreal Canadiens defeated the Quebec Bulldogs 16 to 3 in March of 1920."
    },
    {
      q: "When did Pete Rose play his final Major League Baseball game?",
      choices: ["1991", "1986", "1983", "1989"],
      a: 1,
      fact: "Rose played in the MLB from 1963 to 1986"
    },
    {
      q: "How many players are there on an Olympic handball team?",
      choices: ["7", "8", "9", "3"],
      a: 0,
      fact: "Handball was first played in the late-19th century."
    },
    {
      q: "Which American Football player had the nickname 'Sweetness'?",
      choices: ["Tony Dorsett", "Eric Dickerson", "Walter Payton", "Earl Campbell"],
      a: 2,
      fact: "Walter Payton died in 1999 of a rare liver cancer."
    },
    {
      q: "Which of these horses holds the record for career earnings?",
      choices: ["Curlin", "Lava Man", "John Henry", "Silver Charm"],
      a: 0,
      fact: "Curlin last raced in 2008. He won over $10.5 million."
    },
    {
      q: "The Belfry is a golf course on the outskirts of which major city?",
      choices: ["Newcastle", "Manchester", "Sheffield", "Birmingham"],
      a: 3,
      fact: "The Belfry consists of three complete courses."
    },
    {
      q: "Playing 17 seasons in the MLB, which former baseball center fielder celebrated his 100th home run by running the bases backwards?",
      choices: ["Mickey Mantle", "Al Kaline", "Jimmy Piersall", "Harvey Kuenn"],
      a: 2,
      fact: "Jimmy was the subject of the 1957 film 'Fear Strikes Out'."
    },
    {
      q: "Known as 'The Black Cyclone', who was the first black professional football player?",
      choices: ["Fritz Pollard", "Ray Kemp", "Charles Follis", "Kenny Washington"],
      a: 2,
      fact: "Charles played for the Shelby Blues from 1902 to 1906."
    },
    {
      q: "Played professionally in 16 countries, a polo team consists of how many mounted players?",
      choices: ["6", "8", "3", "4"],
      a: 3,
      fact: "Polo was first played in Persia."
    },
    {
      q: "Who holds the National Hockey League record for the most assists in a single period? ",
      choices: ["Dale Hawerchuk", "Wayne Gretzky", "Mario Lemieux", "Darryl Sittler"],
      a: 0,
      fact: "Dale Hawerchuk is the only player to reach 1,000 career NHL games before age 31."
    },
    {
      q: "What is the value of the center bulls eye on a dartboard?",
      choices: ["25", "50", "100", "75"],
      a: 1,
      fact: "The standard numbering on a dartboard was created by Brian Gamlin in 1896."
    }
  ]
};