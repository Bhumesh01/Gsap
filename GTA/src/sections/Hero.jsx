export default function Hero(){
    return(
        <section className="hero-section">
            <div className="size-full mask-wrapper">
                <img src="/images/hero-bg.webp" alt="background" className="scale-out"></img>
                <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out"></img>
                <img src="/images/watch-trailer.png" alt="hero-logo" className="trailer-logo fade-out"></img>
                <div className="play-img fade-out">
                    <img src="/images/play.png" alt="play" className="w-7 ml-1"></img>
                </div>
            </div>
            <div>
                <img src="/images/hero-text.svg" alt="logo" className="size-full object-cover mask-logo"></img>
            </div>
            <div className="fake-logo-wrapper">
                <img src="/images/big-hero-text.svg" className="overlay-logo"></img>
            </div>
        </section>
    )
}