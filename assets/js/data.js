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
  ]
};