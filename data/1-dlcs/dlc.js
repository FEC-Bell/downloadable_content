const faker = require('faker');
//  initialize gameId's 1-100
const userTagsStr = "Indie,Action,Adventure,Casual,Simulation,Strategy,RPG,Early Access,Free to Play,Singleplayer,Violent,Sports,Massively Multiplayer,Gore,Racing,2D,Atmospheric,Nudity,Great Soundtrack,Puzzle,Sexual Content,Multiplayer,Story Rich,Anime,Fantasy,Difficult,VR,Funny,Horror,Pixel Graphics,Sci-fi,First-Person,Shooter,Retro,Female Protagonist,Platformer,Family Friendly,Open World,Arcade,Co-op,Cute,Survival,Utilities,FPS,Visual Novel,Comedy,Turn-Based,Exploration,Design & Illustration,Online Co-Op,Relaxing,Sandbox,Colorful,Replay Value,Third Person,Psychological Horror,Classic,Point & Click,Masterpiece,Controller,Movie,Space,Physics,Local Multiplayer,Mystery,Dark,Tactical,Realistic,Fast-Paced,Education,Mature,Action-Adventure,Building,Choices Matter,Zombies,Management,Memes,Short,Animation & Modeling,Survival Horror,PvP,Beautiful,Software,Top-Down,3D,Local Co-Op,Shoot 'Em Up,Roguelike,Web Publishing,War,Action RPG,Stylized,Party-Based RPG,Audio Production,Side Scroller,Crafting,Puzzle Platformer,Character Customization,Minimalist,Turn-Based Strategy,RPGMaker,Roguelite,Cartoony,Walking Simulator,Old School,Historical,Multiple Endings,Music,RTS,Competitive,Procedural Generation,JRPG,Dark Fantasy,Bullet Hell,Post-apocalyptic,Romance,Dating Sim,Hack and Slash,Futuristic,Stealth,Video Production,Medieval,Fighting,Resource Management,Hidden Object,Turn-Based Combat,Third-Person Shooter,Dungeon Crawler,Base Building,Magic,Drama,Addictive,Surreal,Hand-drawn,4 Player Local,Tower Defense,Military,Top-Down Shooter,Moddable,Card Game,Cyberpunk,Isometric,Robots,Dark Humor,Cartoon,Team-Based,Driving,PvE,Choose Your Own Adventure,Turn-Based Tactics,Economy,3D Platformer,World War II,Interactive Fiction,Soundtrack,Experimental,City Builder,Thriller,Metroidvania,2D Platformer,Beat 'em up,Aliens,Software Training,LGBTQ+,Blood,Perma Death,Text-Based,Game Development,Logic,MMORPG,Detective,Episodic,Board Game,Hentai,Flight,Action Roguelike,Combat,Destruction,Psychological,Narration,Epic,Twin Stick Shooter,Arena Shooter,Illuminati,Abstract,Crime,1990's,Loot,Score Attack,2.5D,Real-Time,Level Editor,Cult Classic,Parkour,Mouse only,NSFW,1980s,Dark Comedy,Demons,Dystopian,Emotional,Grand Strategy,Alternate History,Automobile Sim,Real Time Tactics,Lovecraftian,Wargame,Strategy RPG,Split Screen,Clicker,Tactical RPG,Linear,Rhythm,Time Management,Psychedelic,Photo Editing,Inventory Management,2D Fighter,Match 3,Real-Time with Pause,Science,Space Sim,Steampunk,Souls-like,Tutorial,Character Action Game,Supernatural,Nature,Kickstarter,Cinematic,MOBA,Co-op Campaign,Political,Battle Royale,Mechs,Lore-Rich,GameMaker,Tanks,Modern,Runner,Experience,Dragons,Comic Book,Swordplay,Remake,Trains,Open World Survival Craft,Voxel,CRPG,eSports,Touch-Friendly,3D Vision,Documentary,Parody,4X,Satire,Pirates,Ninja,Mod,Philosophical,Politics,Cold War,Immersive Sim,Superhero,Mythology,Gun Customization,Noir,Conversation,Otome,Investigation,Dinosaurs,Nonlinear,Hacking,Hex Grid,Naval,Deckbuilding,Dungeons & Dragons,Precision Platformer,Trading Card Game,Cats,Bullet Time,Class-Based,Artificial Intelligence,Minigames,Time Travel,God Game,Games Workshop,Western,Hunting,Card Battler,Agriculture,Tabletop,America,Grid-Based Movement,Assassin,Gothic,Crowdfunded,Life Sim,Silent Protagonist,Trading,Dog,Underwater,Time Attack,Time Manipulation,Mining,Gaming,Martial Arts,TrackIR,FMV,Programming,Heist,Fishing,Villain Protagonist,Quick-Time Events,Conspiracy,Word Game,Spectacle fighter,Colony Sim,Football,Vampire,Soccer,Farming Sim,Dynamic Narration,6DOF,Sequel,Capitalism,Mystery Dungeon,World War I,Asynchronous Multiplayer,Vehicular Combat,Faith,Underground,Naval Combat,Sniper,Music-Based Procedural Generation,Chess,Based On A Novel,Sailing,Automation,Offroad,Unforgiving,Political Sim,Horses,Diplomacy,360 Video,Pinball,Warhammer 40K,Mars,Gambling,Sokoban,LEGO,Star Wars,Combat Racing,On-Rails Shooter,Typing,Idler,Trivia,Hero Shooter,3D Fighter,Solitaire,Snow,Transportation,Rome,Collectathon,Werewolves,Golf,Transhumanism,Intentionally Awkward Controls,Archery,Looter Shooter,Motorbike,Traditional Roguelike,Steam Machine,Benchmark,Batman,Foreign,Boxing,Basketball,Mini Golf,Medical Sim,Bikes,Hardware,Wrestling,Submarine,Asymmetric VR,Electronic Music,Pool,Outbreak Sim,Feature Film,Baseball,Auto Battler,Ambient,Cycling,Jet,Roguevania,Tennis,Bowling,Voice Control,Lemmings,Hockey,Spelling,Skateboarding,Motocross,Lara Croft,Skating,Instrumental Music,Social Deduction,Rock Music,Skiing,Snowboarding,BMX,Electronic,ATV";

let dlcId = 1;
const allUserTags = userTagsStr.split(',');
const reviewRatings = ['Overwhelmingly Positive', 'Very Positive', 'Positive', 'Mostly Positive', 'Mixed', 'Mostly Negative', 'Negative', 'Very Negative', 'Overwhelmingly Negative'];
let dlcs = [];
const discounts = [0, 0, 0, 0, 0.10, 0.15, 0.20, 0.25, 0.5, 0.67, 0.75, 0.90];
const maxDlc = 10;
const maxDlcPrice = 50;
const minDlcPrice = 1;
const maxTags = 15;
const minTags = 1;
const maxPreviews = 4;
const minPreviews = 1;
const maxReviews = 100000;
const minYear = 98;
//  year of first game sold on steam





/**
 * In place shuffle for arrays
 *
 * @param {Array} arr Array to be shuffled
 * @returns {Array} Array that has been shuffled
 */
const randomizeArr = function (arr) {
  //  fisher-yates shuffle
  let n = arr.length;
  while (n) {
    n -= 1;
    const idx = Math.floor(Math.random() * n);
    const temp = arr[idx];
    arr[idx] = arr[n];
    arr[n] = temp;
  }
  return arr;
};

/**
 * Generates n number of dlcs for a particular game id
 *
 * @param {Int} associatedGameId
 * @param {Int} n number of dlcs
 * @returns {Array} Array with n dlcs
 */
const generateDlc = function (associatedGameId, n) {
  let generatedDlcs = [];
  for (let i = 0; i < n; i++) {
    const dlc = {};
    let numTags = Math.floor(Math.random() * (maxTags - minTags)) + minTags;
    let numPreviews = Math.floor(Math.random() * (maxPreviews - minPreviews)) + minPreviews;

    dlc.associatedGameId = associatedGameId;
    dlc.dlcId = dlcId;
    dlc.title = faker.fake('{{commerce.productName}}');
    dlc.dlcPrice = Math.floor(Math.random() * (maxDlcPrice - minDlcPrice)) + minDlcPrice;
    dlc.discountRate = discounts[Math.floor(Math.random() * discounts.length)];
    dlc.releaseDate = faker.date.between(new Date(minYear, 0), Date()).toString();
    dlc.totalReviews = Math.floor(Math.random() * maxReviews);
    dlc.review_summary = reviewRatings[Math.floor(Math.random() * reviewRatings.length)];
    dlc.userTags = [];
    dlc.previews = [];

    while (numTags) {
      const idx = Math.floor(Math.random() * allUserTags.length);
      const tag = allUserTags[idx];
      if (!dlc.userTags.includes(tag)) {
        dlc.userTags.push(tag);
        numTags -= 1;
      }
    }
    while (numPreviews) {
      //get 600x338 image of random food from lorempixel
      const url = faker.image.imageUrl(600, 338, 'food', true);
      dlc.previews.push(url);
      numPreviews -= 1;
    }



    dlcId += 1;
    generatedDlcs.push(dlc);
  }
  return generatedDlcs;
};



const init = function () {
  randomizeArr(discounts);
  randomizeArr(reviewRatings);
  randomizeArr(allUserTags);
  for (let i = 0; i < 100; i++) {
    const numDlc = Math.floor(maxDlc * Math.random());
    dlcs = dlcs.concat(generateDlc(i, numDlc));
  }

  console.log(Array.isArray(dlcs));
};

init();

module.exports = dlcs;
