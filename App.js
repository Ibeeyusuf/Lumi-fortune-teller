const { useState, useRef } = React;

const fortunes = [
    "You will finish at #27 on the leaderboard… until someone grinds harder.",
    "Fate says: $Lumi TGE soon™… but not today.",
    "Your Lemon stash will double… but only in your dreams.",
    "You’ll finally win a rare skin… and immediately flex it on X.",
    "The faucet will bless you today… or maybe tomorrow.",
    "Someone will overtake your rank while you’re asleep.",
    "GM tweets will boost your energy… but not your MON.",
    "You will claim MON, but gas fees will claim you.",
    "You’re destined to pull a cosmetic you’ll never use.",
    "A mysterious Nad will DM you 'gm'… and it will change nothing.",
    "You’ll be top 100… for exactly 3 minutes.",
    "Your lemons will get juiced… literally.",
    "The faucet says no… but the market says $$$.",
    "You will summon 3 Lemons today, but lose 5 friends bragging about it.",
    "Fate whispers: 'Leaderboard reset soon™.'",
    "You’ll finally learn what gLumi does… and instantly forget.",
    "Someone will tag you in a GM post, and you’ll miss it.",
    "Your MON balance will rise… then crash like your sleep schedule.",
    "You will be chosen for a secret collab… but only in another timeline.",
    "Fate says: claim faster, or cry later.",
    "Your Lemon empire will thrive… in the metaverse only.",
    "You’ll hit rank 50… then refresh and see 51.",
    "Today, your Nads will glow with unfiltered chaos.",
    "The faucet will give you MON… but only enough for one cosmetic.",
    "Someone will steal your spot while you’re tweeting this.",
    "$Lumi TGE soon™… but which year? 🤔",
    "Your Lemons will rot unless you claim them daily.",
    "A rare skin awaits you… in your imagination.",
    "The leaderboard is watching you… 👀",
    "You’ll buy MON… and instantly regret not buying more.",
    "GM will bless you with energy… but not wins.",
    "Fate says: 'Your Lemon farm will get rugged.' 🍋",
    "You’ll grind for hours… and still lose to bots.",
    "A Nad will wink at you today… virtually.",
    "The faucet is generous… in another universe.",
    "You will hold the most MON… for 0.5 seconds.",
    "Someone will ask you about Lumiterra IRL… and you’ll fumble.",
    "Your leaderboard dream is rank 1… but fate says rank 420.",
    "TGE soon™… but not for you.",
    "You will rock all the skins… but still wear default."
];

function App() {
    const [fortune, setFortune] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = useRef(null);

    const revealFortune = () => {
        setIsLoading(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            setFortune(fortunes[randomIndex]);
            audioRef.current.play();
            setIsLoading(false);
        }, 1000); // Simulate loading time
    };

    return (
        <div className="app-container">
            <header className="header">
                <h1 className="main-title">🔮 Lumiterra Fortune Teller</h1>
                <p className="subtext">Click below to reveal your fate… 🍋</p>
            </header>
            <main className="text-center">
                <button className="fortune-button" onClick={revealFortune}>
                    Reveal My Fortune ✨
                </button>
                {isLoading && <div className="loading-dots">Loading...</div>}
                {fortune && (
                    <div className="fortune-card">
                        <p className="fortune-text">{fortune}</p>
                    </div>
                )}
                <audio ref={audioRef} src="assets/chime.mp3" />
            </main>
            <footer className="footer">
                <p className="footer-text">Built by 0xIbee 🚀</p>
            </footer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
