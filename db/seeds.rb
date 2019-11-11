# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Game.destroy_all

demo = User.create(username: 'demo', email: 'demo@aa.io', password: 'password', birthday: '09/09/2019')

ff7 = Game.create(
    title: 'FINAL FANTASY VII REMAKE', 
    description: 'The world has fallen under the control of the Shinra Electric Power Company, 	
                    a shadowy corporation controlling the planet’s very life force as mako energy.	
                    In the sprawling city of Midgar, an anti-Shinra organization calling themselves 
                    Avalanche have stepped up their resistance. Cloud Strife, a former member of 
                    Shinra’s elite SOLDIER unit now turned mercenary, lends his aid to the group, 
                    unaware of the epic consequences that await him.	
                    The story of this first, standalone game in the FINAL FANTASY VII REMAKE 
                    project covers up to the party’s escape from Midgar, and goes deeper into t
                    he events occurring in Midgar than the original FINAL FANTASY VII.'
);

ff14 = Game.create(
    title: 'FINAL FANTASY XIV ONLINE',
    description: 'Hero becomes villain as the Warrior of Light embraces the dark, and embarks 
                    upon an adventure that transcends worlds.

                    Forge a new fate, and play as two new jobs - Gunbreaker and Dancer - as well as 
                    two new races - Viera and Hrothgar.

                    With over sixteen million adventurers worldwide, there is no better time to join the 
                    fight for freedom than now!

                    New to FINAL FANTASY XIV Online? Join others from around the world and start your own FINAL FANTASY 
                    adventure today! Buy the Starter or Complete Edition to begin your adventure!'
);

dragonQuest = Game.create(
    title: 'DRAGON QUEST',
    description: 'The peace of fair Alefgard has been shattered by the appearance of the nefarious master of the night 
                    known as the Dragonlord, and the Sphere of Light, which for so long kept the forces of darkness in 
                    check, has been stolen! It is time for you, a young warrior through whose veins flows the blood of 
                    the legendary hero Erdrick, to set out on a quest to vanquish the Dragonlord, and save the land from 
                    darkness!'
);

dragonQuest2 = Game.create(
    title: 'DRAGON QUEST II: Luminaries of the Legendary Line',
    description: 'A century has passed since the events of the first DRAGON QUEST, during which time the descendants of the hero of 
                    Alefgard have forged three new nations. But the peace they have known is no more. Demon hosts summoned forth from the 
                    darkness by High Priest Hargon have brought the land to the brink of ruin once again. Now, the young prince of Midenhall 
                    must set out to find the other two descendants of Erdrick so that together they might defeat the nefarious Hargon and restore 
                    peace to their world.'
);

dragonQuest3 = Game.create(
    title: 'DRAGON QUEST III: The Seeds of Salvation',
    description: 'On the morning of your sixteenth birthday, you are charged with a seemingly impossible task by the King himself: to assume the 
                    mantle of your father Ortega, hero of the land of Aliahan, and slay the Archfiend Baramos, master of darkness! What trials await 
                    you, intrepid hero, as you set out on a quest not even your legendary father was strong enough to complete?'
);

ff3 = Game.create(
    title: 'FINAL FANTASY VIII Remastered',
    description: 'In a world where an ancient energy known as the Sorceress Power is passed down through generations, the peace of the realm is threatened 
                    when the evil Sorceress Edea takes power as ruler of the Galbadia Republic. Squall, a member of Balamb Garden Military Academy`s elite 
                    mercenary force SeeD, other allies from the Garden, and Rinoa, a member of the resistance, join together on a journey to fight against 
                    Sorceress Edea, who shows hostility toward the Garden.'
);

ominaki = Game.create(
    title: 'OMINAKI',
    description: 'Reincarnation is the foundation of our way of life. We celebrate the lives we’ve been given, and offer up prayers for the next.

                    It is grief of death which shackles the living, and causes the dead to stray. Indeed, there is no greater affront to reincarnation.

                    So do we turn our grief to joy as we send off the dead.

                    But the souls of those who held back their tears in life still need salvation in death. A duty that falls to the Watchers.

                    Their task is to guide the wandering souls known as the Lost, and serve as keepers of the Living World and the Beyond.

                    The Watchers sever the bonds that tie the Lost to this world, and send them on to the next. They navigate the emotions of the living 
                    and the dead. They prize life above all else.'
);

lifeIsStrange2 = Game.create(
    title: 'Life is Strange 2',
    description: 'After a tragic incident, brothers Sean and Daniel Diaz run away from home. Fearing the police, and dealing with Daniel`s new telekinetic 
                    power, the boys flee to Mexico for safety.

                    Suddenly, sixteen year-old Sean is responsible for Daniel’s safety, shelter, and teaching him right from wrong. As Sean, your choices 
                    shape the fates of the Diaz brothers, and the lives of everyone they meet.

                    The road to Mexico is long and filled with danger. This is the trip that could bond Sean and Daniel forever… or tear their brotherhood apart.'
);

battalion = Game.create(
    title: 'Battalion 1944',
    description: 'Battalion 1944 recaptures the core of classic competitive shooters and refines the ‘classic’ FPS feel for the next generation. Focusing on 5v5 
                    infantry combat, where precise flick shots with your Kar98, covering fire with your Thompson and fluid movement are key to clutching every round for your team.'
);



