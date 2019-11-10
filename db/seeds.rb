# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Game.destroy_all

demo = User.create(username: 'demo', email: 'demo@aa.io', password: 'password', birthday: '09/09/2019')

ffvii = Game.create(
    title: 'FFVII Remake', 
    store_id: 12,
    description: 'Mako─the lifeblood of the planet and the fuel that powers the city of Midgar... 
                By exploiting this resource through their Mako Reactors, the Shinra Electric Power Company 
                has all but seized control of the entire world. A ragtag group of idealists, known as Avalanche, 
                are one of the last bastions of resistance. Cloud, an elite SOLDIER operative turned mercenary, 
                takes part in an Avalanche operation to destroy Mako Reactor 1 in the city of Midgar. The bombing plunges 
                the city into fiery chaos, and amidst the raging inferno, Cloud is tormented by visions of a bitter enemy 
                long thought dead. After this hallucination fades, he meets a young woman selling flowers, who offers him a 
                single yellow blossom. In that instant, a host of swirling shadows surround them. Once more begins a story that 
                will shape the destiny of an entire world.',
    logo: 'https://ibb.co/0m9ZQMf',
    background_img: 'https://ibb.co/b3ZBrY2',
    img_url: ['https://ibb.co/b3ZBrY2', "https://ibb.co/YttkgS1"]
            
            )