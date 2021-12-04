import React from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';

const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Race', 'Simulator', 'Open world'],
        price: 11,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "The endless kaleidoscope of Horizon adventures awaits! Take exciting journeys through the incredibly beautiful and distinctive world of Mexico behind the wheel of the greatest cars in history. Start your Horizon adventure today by adding the game to your wishlist!",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Action', 'Shooter', 'War'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 24,
        id: 2,
        description: 'Battlefield ™ 2042 is a first-person shooter that returns the series to legendary epic action. In a chaotic future, adapt and thrive on ever-changing battlefields with your squad and arsenal of the latest technology.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Big plot', 'Protagonis'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 14,
        id: 3,
        description: 'Alex Chen hides his "curse" from everyone - the supernatural ability to read the strong emotions of others and influence them. But when her brother dies - ostensibly in an accident - Alex uses her to find out the truth.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Open World', 'Action'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 17,
        id: 4,
        description: 'Grand Theft Auto V for PC lets players explore the famous world of Los Santos and Blaine County in up to 4k and 60fps resolution.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Tactics', 'Shooter'],
        price: 19,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Siege is the sequel to the acclaimed first-person shooter developed by Ubisoft Montreal.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Parkour', 'RPG', 'Open World'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 28,
        id: 6,
        description: 'Assassin\'s Creed Valhalla is a multi-platform action / RPG computer game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth game in the Assassin\'s Creed series.'
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}
