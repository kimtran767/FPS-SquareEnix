
require 'open-uri'

User.destroy_all
Game.destroy_all
Newspaper.destroy_all
Pulp.destroy_all


# demo = User.create(username: 'demo', email: 'demo@aa.io', password: 'password', birthday: '09/09/2019')

# ff7 = Game.create(
#     title: 'FINAL FANTASY VII REMAKE', 
#     description: "The world has fallen under the control of the Shinra Electric Power Company, 	
#                     a shadowy corporation controlling the planet’s very life force as mako energy.
                    
#                     In the sprawling city of Midgar, an anti-Shinra organization calling themselves 
#                     Avalanche have stepped up their resistance. Cloud Strife, a former member of 
#                     Shinra’s elite SOLDIER unit now turned mercenary, lends his aid to the group, 
#                     unaware of the epic consequences that await him.	
                    
#                     The story of this first, standalone game in the FINAL FANTASY VII REMAKE 
#                     project covers up to the party’s escape from Midgar, and goes deeper into t
#                     he events occurring in Midgar than the original FINAL FANTASY VII."
# );

# ff7_logo = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff7logo.jpg');
# ff7.photos.attach(io: ff7_logo, filename: 'ff7_logo')

# ff7_main = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff7-main.jpg');
# ff7.photos.attach(io: ff7_main, filename: 'ff7_main')

# ff7_last = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff7_last.png');
# ff7.photos.attach(io: ff7_last, filename: 'ff7_last')

# ff8_media1 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media1.jpeg');
# ff7.photos.attach(io: ff8_media1, filename: 'ff8_media1')

# ff8_media2 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media2.jpg');
# ff7.photos.attach(io: ff8_media2, filename: 'ff8_media2')

# ff8_media3 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media3.png');
# ff7.photos.attach(io: ff8_media3, filename: 'ff8_media3')

# ff8_media4 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media4.png');
# ff7.photos.attach(io: ff8_media4, filename: 'ff8_media4')

# ff8_media5 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media5.jpg');
# ff7.photos.attach(io: ff8_media5, filename: 'ff8_media5')

# ff8_media6 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media6.jpg');
# ff7.photos.attach(io: ff8_media6, filename: 'ff8_media6')

# ff8_media7 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media7.jpg');
# ff7.photos.attach(io: ff8_media7, filename: 'ff8_media7')

# ff8_media8 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media8.jpg');
# ff7.photos.attach(io: ff8_media8, filename: 'ff8_media8')

# ff8_media9 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media9.png');
# ff7.photos.attach(io: ff8_media9, filename: 'ff8_media9')





# ff14 = Game.create(
#     title: 'FINAL FANTASY XIV ONLINE',
#     description: 'Hero becomes villain as the Warrior of Light embraces the dark, and embarks 
#                     upon an adventure that transcends worlds.

#                     Forge a new fate, and play as two new jobs - Gunbreaker and Dancer - as well as 
#                     two new races - Viera and Hrothgar.

#                     With over sixteen million adventurers worldwide, there is no better time to join the 
#                     fight for freedom than now!

#                     New to FINAL FANTASY XIV Online? Join others from around the world and start your own FINAL FANTASY 
#                     adventure today! Buy the Starter or Complete Edition to begin your adventure!'
# );

# ff14_logo = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14logo.jpg');
# ff14.photos.attach(io: ff14_logo, filename: 'ff14_logo');


# ff14_main = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14-main.jpg');
# ff14.photos.attach(io: ff14_main, filename: 'ff14_main');


# ff14_last = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14-last.jpeg');
# ff14.photos.attach(io: ff14_last, filename: 'ff14_last');

# ff14_media1 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14_media1.jpg');
# ff14.photos.attach(io: ff14_media1, filename: 'ff14_media1');

# ff14_media2 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14_media2.jpg');
# ff14.photos.attach(io: ff14_media2, filename: 'ff14_media2');

# ff14_media3 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14_media3.jpg');
# ff14.photos.attach(io: ff14_media3, filename: 'ff14_media3');

# ff14_media4 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14_media4.jpg');
# ff14.photos.attach(io: ff14_media4, filename: 'ff14_media4');

# ff14_media5 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14_media5.jpg');
# ff14.photos.attach(io: ff14_media5, filename: 'ff14_media5');

# ff14_media6 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14_media6.jpg');
# ff14.photos.attach(io: ff14_media6, filename: 'ff14_media6');

# ff14_media7 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14_media7.jpg');
# ff14.photos.attach(io: ff14_media7, filename: 'ff14_media7');

# ff14_media8 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14_media8.jpg');
# ff14.photos.attach(io: ff14_media8, filename: 'ff14_media8');

# ff14_media9 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff14_media9.jpg');
# ff14.photos.attach(io: ff14_media9, filename: 'ff14_media9');




# dragonQuest = Game.create(
#     title: 'DRAGON QUEST',
#     description: 'The peace of fair Alefgard has been shattered by the appearance of the nefarious master of the night 
#                     known as the Dragonlord, and the Sphere of Light, which for so long kept the forces of darkness in 
#                     check, has been stolen! It is time for you, a young warrior through whose veins flows the blood of 
#                     the legendary hero Erdrick, to set out on a quest to vanquish the Dragonlord, and save the land from 
#                     darkness!'
# );

# dragon1_logo = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_logo.jpg');
# dragonQuest.photos.attach(io: dragon1_logo, filename: 'dragon1_logo');

# dragon1_main = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_main.jpg');
# dragonQuest.photos.attach(io: dragon1_main, filename: 'dragon1_main');

# dragon1_last = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_lats.jpg');
# dragonQuest.photos.attach(io: dragon1_last, filename: 'dragon1_last');

# dragon1_media1 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_media1.jpg');
# dragonQuest.photos.attach(io: dragon1_media1, filename: 'dragon1_media1');

# dragon1_media2 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_media2.png');
# dragonQuest.photos.attach(io: dragon1_media2, filename: 'dragon1_media2');

# dragon1_media3 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_media3.jpg');
# dragonQuest.photos.attach(io: dragon1_media3, filename: 'dragon1_media3');

# dragon1_media4 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_media4.jpg');
# dragonQuest.photos.attach(io: dragon1_media4, filename: 'dragon1_media4');

# dragon1_media5 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_media5.jpeg');
# dragonQuest.photos.attach(io: dragon1_media5, filename: 'dragon1_media5');

# dragon1_media6 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_media6.png');
# dragonQuest.photos.attach(io: dragon1_media6, filename: 'dragon1_media6');

# dragon1_media7 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_media7.png');
# dragonQuest.photos.attach(io: dragon1_media7, filename: 'dragon1_media7');

# dragon1_media8 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_media8.png');
# dragonQuest.photos.attach(io: dragon1_media8, filename: 'dragon1_media8');

# dragon1_media9 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon1_media9.png');
# dragonQuest.photos.attach(io: dragon1_media9, filename: 'dragon1_media9');



# dragonQuest2 = Game.create(
#     title: 'DRAGON QUEST II: Luminaries of the Legendary Line',
#     description: 'A century has passed since the events of the first DRAGON QUEST, during which time the descendants of the hero of 
#                     Alefgard have forged three new nations. But the peace they have known is no more. Demon hosts summoned forth from the 
#                     darkness by High Priest Hargon have brought the land to the brink of ruin once again. Now, the young prince of Midenhall 
#                     must set out to find the other two descendants of Erdrick so that together they might defeat the nefarious Hargon and restore 
#                     peace to their world.'
# );

# dragon2_logo = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2logo.jpg');
# dragonQuest2.photos.attach(io: dragon2_logo, filename: 'dragon2_logo');

# dragon2_main = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2_main.jpg');
# dragonQuest2.photos.attach(io: dragon2_main, filename: 'dragon2_main');

# dragon2_last = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2_last.jpeg');
# dragonQuest2.photos.attach(io: dragon2_last, filename: 'dragon2_last');

# dragon2_media1 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2_media1.jpg');
# dragonQuest2.photos.attach(io: dragon2_media1, filename: 'dragon2_media1');

# dragon2_media2 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2_media2.png');
# dragonQuest2.photos.attach(io: dragon2_media2, filename: 'dragon2_media2');

# dragon2_media3 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2_media3.jpg');
# dragonQuest2.photos.attach(io: dragon2_media3, filename: 'dragon2_media3');

# dragon2_media4 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2_media4.jpg');
# dragonQuest2.photos.attach(io: dragon2_media4, filename: 'dragon2_media4');

# dragon2_media5 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2_media5.png');
# dragonQuest2.photos.attach(io: dragon2_media5, filename: 'dragon2_media5');

# dragon2_media6 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2_media6.jpg');
# dragonQuest2.photos.attach(io: dragon2_media6, filename: 'dragon2_media6');

# dragon2_media7 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2_media7.jpg');
# dragonQuest2.photos.attach(io: dragon2_media7, filename: 'dragon2_media7');

# dragon2_media8 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2_media8.jpg');
# dragonQuest2.photos.attach(io: dragon2_media8, filename: 'dragon2_media8');

# dragon2_media9 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon2_media9.jpg');
# dragonQuest2.photos.attach(io: dragon2_media9, filename: 'dragon2_media9');



# dragonQuest3 = Game.create(
#     title: 'DRAGON QUEST III: The Seeds of Salvation',
#     description: 'On the morning of your sixteenth birthday, you are charged with a seemingly impossible task by the King himself: to assume the 
#                     mantle of your father Ortega, hero of the land of Aliahan, and slay the Archfiend Baramos, master of darkness! What trials await 
#                     you, intrepid hero, as you set out on a quest not even your legendary father was strong enough to complete?'
# );

# dragon3_logo = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3logo.jpg');
# dragonQuest3.photos.attach(io: dragon3_logo, filename: 'dragon3_logo');

# dragon3_main = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3_main.jpg');
# dragonQuest3.photos.attach(io: dragon3_main, filename: 'dragon3_main');

# dragon3_last = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3_last.png');
# dragonQuest3.photos.attach(io: dragon3_last, filename: 'dragon3_last');

# dragon3_media1 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3_media1.jpg');
# dragonQuest3.photos.attach(io: dragon3_media1, filename: 'dragon3_media1');

# dragon3_media2 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3_media2.png');
# dragonQuest3.photos.attach(io: dragon3_media2, filename: 'dragon3_media2');

# dragon3_media3 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3_media3.png');
# dragonQuest3.photos.attach(io: dragon3_media3, filename: 'dragon3_media3');

# dragon3_media4 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3_media4.jpg');
# dragonQuest3.photos.attach(io: dragon3_media4, filename: 'dragon3_media4');

# dragon3_media5 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3_media5.jpg');
# dragonQuest3.photos.attach(io: dragon3_media5, filename: 'dragon3_media5');

# dragon3_media6 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3_media6.png');
# dragonQuest3.photos.attach(io: dragon3_media6, filename: 'dragon3_media6');

# dragon3_media7 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3_media7.png');
# dragonQuest3.photos.attach(io: dragon3_media7, filename: 'dragon3_media7');

# dragon3_media8 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3_media8.png');
# dragonQuest3.photos.attach(io: dragon3_media8, filename: 'dragon3_media8');

# dragon3_media9 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/dragon3_media9.jpg');
# dragonQuest3.photos.attach(io: dragon3_media9, filename: 'dragon3_media9');



# ff8 = Game.create(
#     title: 'FINAL FANTASY VIII Remastered',
#     description: 'In a world where an ancient energy known as the Sorceress Power is passed down through generations, the peace of the realm is threatened 
#                     when the evil Sorceress Edea takes power as ruler of the Galbadia Republic. Squall, a member of Balamb Garden Military Academy`s elite 
#                     mercenary force SeeD, other allies from the Garden, and Rinoa, a member of the resistance, join together on a journey to fight against 
#                     Sorceress Edea, who shows hostility toward the Garden.'
# );

# ff8_logo = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_main.jpg');
# ff8.photos.attach(io: ff8_logo, filename: 'ff8_logo');

# ff8_main = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_last.jpg');
# ff8.photos.attach(io: ff8_main, filename: 'ff8_main');

# ff8_last = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8logo.jpg');
# ff8.photos.attach(io: ff8_last, filename: 'ff8_last');

# ff8_media1 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media1.jpg');
# ff8.photos.attach(io: ff8_media1, filename: 'ff8_media1');

# ff8_media2 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media2.jpg');
# ff8.photos.attach(io: ff8_media2, filename: 'ff8_media2');

# ff8_media3 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media3.jpg');
# ff8.photos.attach(io: ff8_media3, filename: 'ff8_media3');

# ff8_media4 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media4.png');
# ff8.photos.attach(io: ff8_media4, filename: 'ff8_media4');

# ff8_media5 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media5.jpg');
# ff8.photos.attach(io: ff8_media5, filename: 'ff8_media5');

# ff8_media6 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media6.jpg');
# ff8.photos.attach(io: ff8_media6, filename: 'ff8_media6');

# ff8_media7 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media7.jpg');
# ff8.photos.attach(io: ff8_media7, filename: 'ff8_media7');

# ff8_media8 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media8.jpg');
# ff8.photos.attach(io: ff8_media8, filename: 'ff8_media8');

# ff8_media9 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ff8_media9.png');
# ff8.photos.attach(io: ff8_media9, filename: 'ff8_media9');








# ominaki = Game.create(
#     title: 'OMINAKI',
#     description: 'Reincarnation is the foundation of our way of life. We celebrate the lives we’ve been given, and offer up prayers for the next.

#                     It is grief of death which shackles the living, and causes the dead to stray. Indeed, there is no greater affront to reincarnation.

#                     So do we turn our grief to joy as we send off the dead.

#                     But the souls of those who held back their tears in life still need salvation in death. A duty that falls to the Watchers.

#                     Their task is to guide the wandering souls known as the Lost, and serve as keepers of the Living World and the Beyond.

#                     The Watchers sever the bonds that tie the Lost to this world, and send them on to the next. They navigate the emotions of the living 
#                     and the dead. They prize life above all else.'
# );

# ominaki_logo = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominakilogo.jpg');
# ominaki.photos.attach(io: ominaki_logo, filename: 'ominaki_logo');

# ominaki_main = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominaki_main.jpg');
# ominaki.photos.attach(io: ominaki_main, filename: 'ominaki_main');

# ominaki_last = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominaki_last.jpg');
# ominaki.photos.attach(io: ominaki_last, filename: 'ominaki_last');

# ominaki_media1 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominaki_media1.png');
# ominaki.photos.attach(io: ominaki_media1, filename: 'ominaki_media1');

# ominaki_media2 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominaki_media2.png');
# ominaki.photos.attach(io: ominaki_media2, filename: 'ominaki_media2');

# ominaki_media3 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominaki_media3.png');
# ominaki.photos.attach(io: ominaki_media3, filename: 'ominaki_media3');

# ominaki_media4 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominaki_media4.png');
# ominaki.photos.attach(io: ominaki_media4, filename: 'ominaki_media4');

# ominaki_media5 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominaki_media5.png');
# ominaki.photos.attach(io: ominaki_media5, filename: 'ominaki_media5');

# ominaki_media6 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominaki_media6.png');
# ominaki.photos.attach(io: ominaki_media6, filename: 'ominaki_media6');

# ominaki_media7 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominaki_media7.png');
# ominaki.photos.attach(io: ominaki_media7, filename: 'ominaki_media7');

# ominaki_media8 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominaki_media8.png');
# ominaki.photos.attach(io: ominaki_media8, filename: 'ominaki_media8');

# ominaki_media9 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/ominaki_media9.png');
# ominaki.photos.attach(io: ominaki_media9, filename: 'ominaki_media9');





# lifeIsStrange2 = Game.create(
#     title: 'Life is Strange 2',
#     description: 'After a tragic incident, brothers Sean and Daniel Diaz run away from home. Fearing the police, and dealing with Daniel`s new telekinetic 
#                     power, the boys flee to Mexico for safety.

#                     Suddenly, sixteen year-old Sean is responsible for Daniel’s safety, shelter, and teaching him right from wrong. As Sean, your choices 
#                     shape the fates of the Diaz brothers, and the lives of everyone they meet.

#                     The road to Mexico is long and filled with danger. This is the trip that could bond Sean and Daniel forever… or tear their brotherhood apart.'
# );

# lifeIsStrange2_logo = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2logo.jpg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_logo, filename: 'lifeIsStrange2_logo');

# lifeIsStrange2_main = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2_main.jpeg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_main, filename: 'lifeIsStrange2_main');

# lifeIsStrange2_last = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2_last.jpg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_last, filename: 'lifeIsStrange2_last');

# lifeIsStrange2_media1 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2_media1.jpg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_media1, filename: 'lifeIsStrange2_media1');

# lifeIsStrange2_media2 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2_media2.jpg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_media2, filename: 'lifeIsStrange2_media2');

# lifeIsStrange2_media3 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2_media3.jpg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_media3, filename: 'lifeIsStrange2_media3');

# lifeIsStrange2_media4 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2_media4.jpg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_media4, filename: 'lifeIsStrange2_media4');

# lifeIsStrange2_media5 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2_media5.jpg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_media5, filename: 'lifeIsStrange2_media5');

# lifeIsStrange2_media6 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2_media6.jpg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_media6, filename: 'lifeIsStrange2_media6');

# lifeIsStrange2_media7 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2_media7.jpg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_media7, filename: 'lifeIsStrange2_media7');

# lifeIsStrange2_media8 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2_media8.jpg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_media8, filename: 'lifeIsStrange2_media8');

# lifeIsStrange2_media9 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/life2_media9.jpg');
# lifeIsStrange2.photos.attach(io: lifeIsStrange2_media9, filename: 'lifeIsStrange2_media9');



# battalion = Game.create(
#     title: 'Battalion 1944',
#     description: 'Battalion 1944 recaptures the core of classic competitive shooters and refines the ‘classic’ FPS feel for the next generation. Focusing on 5v5 
#                     infantry combat, where precise flick shots with your Kar98, covering fire with your Thompson and fluid movement are key to clutching every round for your team.'
# );

# battalion_logo = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat2logo.jpg');
# battalion.photos.attach(io: battalion_logo, filename: 'battalion_logo');

# battalion_main = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat2_main.jpg');
# battalion.photos.attach(io: battalion_main, filename: 'battalion_main');

# battalion_last = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat2_last.jpg');
# battalion.photos.attach(io: battalion_last, filename: 'battalion_last');

# battalion_media1 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat_media1.jpg');
# battalion.photos.attach(io: battalion_media1, filename: 'battalion_media1');

# battalion_media2 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat_media2.jpg');
# battalion.photos.attach(io: battalion_media2, filename: 'battalion_media2');

# battalion_media3 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat_media3.jpg');
# battalion.photos.attach(io: battalion_media3, filename: 'battalion_media3');

# battalion_media4 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat_media4.jpg');
# battalion.photos.attach(io: battalion_media4, filename: 'battalion_media4');

# battalion_media5 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat_media5.jpg');
# battalion.photos.attach(io: battalion_media5, filename: 'battalion_media5');

# battalion_media6 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat_media6.jpg');
# battalion.photos.attach(io: battalion_media6, filename: 'battalion_media6');

# battalion_media7 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat_media7.png');
# battalion.photos.attach(io: battalion_media7, filename: 'battalion_media7');

# battalion_media8 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat_media8.jpg');
# battalion.photos.attach(io: battalion_media8, filename: 'battalion_media8');

# battalion_media9 = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/bat_media9.jpg');
# battalion.photos.attach(io: battalion_media9, filename: 'battalion_media9');



# news2 = Newspaper.create(
#     title: '',
#     date: '',
#     body: '',
#     author: ''
# );

# pulp_news2 = Pulp.create(
#     title: '',
#     body: '',
#     newspapers_id: news1.id
# );


news1 = Newspaper.create(
    title: 'Best Bits: The Trial - CHRONO TRIGGER',
    date: '11/08/2019',
    body: 'It’s funny - while most RPGs cast you in the role of the noble hero, we seem to spend a lot of our time being… less than virtuous.

            For example, how many times have you wandered into some poor NPC’s home and just helped yourself to the items in their chests and cabinets? 
            Heck - in OCTOPATH TRAVELER, I don’t think there’s a single character I didn’t try to pickpocket at least once.

            We do these things because… well, it’s fun - but also because there usually aren’t any repercussions to our actions.

            So it’s a wonderful surprise when CHRONO TRIGGER upends those expectations… this section suddenly reveals that actually your actions really do have consequences.',
    author: 'Ducan Heaney'
);

news1_media = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/chrono-trigger-trial.jpg');
news1.photo.attach(io: news1_media, filename: 'news1_media');

pulp1_news1 = Pulp.create(
    title: 'What is the Trial?',
    body: 'At this point in the story, Crono has experienced quite the adventure. A chance meeting with Princess Marle at a local carnival somehow escalated into a dizzying 
            journey into the past. He’s prevented a kidnapping, resolved a time paradox and met gaming’s coolest frog.

            So when Crono, Lucca and Marle finally return to the present, you’d be forgiven for thinking they’re due a little R&R.

            Sadly, that’s not to be. Crono is almost immediately arrested, on charges of kidnapping the princess, and put on trial for his alleged crimes. Thanks to the corrupt  
            actions of the Chancellor, Crono’s off to prison regardless of the verdict, but whether he’s found innocent or guilty depends on his actions, and his strength of character.

            Or more accurately… yours.',
    newspapers_id: news1.id
);


pulp2_news1 = Pulp.create(
    title: 'A time for some self-examination',
    body: 'The carnival at the beginning of CHRONO TRIGGER is filled with opportunities to make decisions.

            These choices are so small and seemingly inconsequential that most players don’t even think about them on their first playthrough - they mess around with 
            the options available and move onto the main adventure.

            But the trial reveals that these interactions do actually have meaning. The prosecuting Chancellor brings out witnesses to comment on your character - 
            and if you were a jerk, you’re about to be called out. 

            For example, a large sack sits unguarded on a table. If you pick up this parcel, the owner will accuse you of stealing his lunch. Which is fair enough because… you did.

            Or, if you were impatient with Marle’s indecisiveness when buying candy, one of the townsfolk will have seen you dragging her away from the stall - further evidence to 
            support the trumped-up kidnapping charge.

            Brilliantly, the game also flashes back to those scenes, driving home that it was you who made these decisions. You have nobody else to blame.

            And it’s not just your past actions that play into the verdict - your current ones do too.

            The prosecutor will ask you questions over the course of the criminally short trial. You can lie, but if you’re caught out, that’s not going to play well with the jury. ',
    newspapers_id: news1.id
);
pulp2_news1_media = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/news1_media2.jpg');
pulp2_news1.photo.attach(io: pulp2_news1_media, filename: 'pulp2_news1_media');



pulp3_news1 = Pulp.create(
    title: 'It plays the long(ish) game',
    body: 'Another way the game compensates for gamer’s worst instincts is with pacing. If the trial took place immediately after the carnival, there could be a temptation to revert to an 
            earlier save and redo it to get the ‘best’ result.

            But there’s actually a large chunk of gameplay between the opening and this section - the first trip into the past, meeting Marle’s ancestor and Frog… a lot happens.

            It’s only around an hour or so (maybe a bit more depending on how much you like to take your time), but that’s enough to ensure that trying for a do-over would be inconvenient. 
            Yet it’s also recent enough that your actions in your hometown will still be fresh in your mind.',
    newspapers_id: news1.id
);

pulp4_news1 = Pulp.create(
    title: 'It plays on expected videogame behavior',
    body: 'There are some behaviors that are ingrained in gamers. For example, we want to pick up all the items we can, in case we need it for something later.

            Similarly, we tend to explore an area for items before taking actions that might advance the plot - we’ve learned that we can sometimes miss out on goodies 
            because the game wants to move the story on.

            So when we see that man’s lunch, our instinct is to pick it up. And when Crono and Marle bump into each other, many of us would naturally wander over to the glowing object 
            on the ground before talking to the fallen princess.

            The developers know this - both of these incidents come up during the trial. Your greed will be pointed out if you steal the sack of food, and checking on the valuable object on 
            the ground before tending to Marle is used to demonstrate that you care more about her fortune than her wellbeing.

            …well played CHRONO TRIGGER. Well played.',
    newspapers_id: news1.id
);

pulp4_news1_media = open('https://finalenix-seeds.s3-us-west-1.amazonaws.com/news1_media3.jpg');
pulp4_news1.photo.attach(io: pulp4_news1_media, filename: 'pulp4_news1_media');

pulp5_news1 = Pulp.create(
    title: 'What do you think?',
    body: 'It’s only a small segment in a massive, sprawling adventure, but CHRONO TRIGGER’s trial emphasizes why the game is still as beloved today as it was when it 
            originally came out. Wit and creativity oozes out of every pixel, and the game goes out of its way to subvert expectations wherever it can.

            But what did you think of it? Do you agree that this is a standout section? What are your Best Bits of CHRONO TRIGGER?

            Let us know in the comments, or on social media - and check back on the Square Enix Blog each day for more articles!',
    newspapers_id: news1.id
);




news2 = Newspaper.create(
    title: 'Shadow of the Tomb Raider: Definitive Edition out now',
    date: '11/05/2019',
    body: 'You can now experience Lara Croft’s ultimate adventure, in one complete, definitive package - Shadow of the Tomb Raider: Definitive Edition is out today on 
            PS4, Xbox One and Steam.

            The game’s available - both digitally and as a physical release. A Stadia version will also launch later in November.',
    author: 'Duncan Heaney'
);

pulp1_news2 = Pulp.create(
    title: 'What’s in Shadow of the Tomb Raider: Definitive Edition',
    body: 'The new collection contains the full Shadow of the Tomb Raider experience, including the main adventure, which sees Lara in a race to save the world from an impending Maya apocalypse.

            Along the way, she’ll have to navigate the most expansive and challenging tombs yet, navigate treacherous jungles and deadly underwater caves, and use every skill she has to fend off 
            the sinister organization Trinity.
            
            As well as the base game, Shadow of the Tomb Raider: Definitive Edition features all DLC, featuring extra missions, weapons, clothing and some of the most imaginative challenge tombs in the whole series.
            
            The Definitive Edition also includes a new outfit - but if you already own the game don’t worry. Anyone who has the original game and season pass can download the outfit for free from their respective 
            platform’s store.',
    newspapers_id: news2.id
);

news3 = Newspaper.create(
    title: 'Trials of Mana - how to play on Switch, PS4 and Steam',
    date: '11/01/2019',
    body: 'It’s fair to say that we’re pretty excited for Trials of Mana. This new game remakes the original Super Nintendo classic from the ground up, with vibrant 3D graphics, a dynamic new combat system and more.

            If you regularly visit the Square Enix Blog (and if not, why not?), you’ll have read what it’s like to play, and seen our in-depth interview with the game’s producers. But we know some of you still have questions.

            So in this article, we’ll go over all the information you need to know about the game, including when it’s out, the platforms it’s on, and the different ways you can get it.',
    author: 'Duncan Heaney'
);

pulp1_news3 = Pulp.create(
    title: 'What is Trials of Mana?',
    body: 'The new Trials of Mana is a complete reimagining of the 1995 action RPG classic Trials of Mana, which made its debut in the West earlier this year in Collection of Mana.

            Known as Seiken Densetsu 3 in Japan, the original game was famous for its incredible levels of replayability, and that carries over into this remake.

            Here’s how it works: Trials of Mana features six playable characters, each with their own unique playstyle and abilities. You choose a starting character and two others, and depending on the combination you choose, 
            you’ll get a different story with its own unique scenarios.
            
            While it’s faithful to the original game in spirit and story, the new Trials of Mana does strike out on its own. It features beautiful (and colorful) 3D graphics, full voice acting and cinematic story scenes that make 
            the world of the Mana Tree feel more alive than ever.

            It also features a brand new, ultra-satisfying battle system that requires you to use fast and fluid attacks, evasion, positioning and careful use of special abilities to prevail in fights.

            We recently went hands-on with the game and loved what we played - check our report for detailed information about what it’s actually like to play the game.',
    newspapers_id: news3.id
);

pulp2_news3 = Pulp.create(
    title: 'Will Trials of Mana have a physical release?',
    body: 'Yes - a physical version of Trials of Mana will be available for Switch and PS4 from most games retailers, including the Square Enix Store.

            Of course, if you prefer to go digital, the game’s available on Steam, the PlayStation Store and the Nintendo eShop too.',
    newspapers_id: news3.id
);

# news2 = Newspaper.create(
#     title: '',
#     date: '',
#     body: '',
#     author: ''
# );

# pulp_news2 = Pulp.create(
#     title: '',
#     body: '',
#     newspapers_id: news1.id
# );






