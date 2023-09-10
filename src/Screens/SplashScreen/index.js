import './index.css';

export const SplashScreen = () => {
    return (
        <div className='splash-screen-container'>
            <div className='home-screen-content-container'>
                <img 
                    className='shopping-bag-image' 
                    src='/images/shopping-bag.svg' 
                    alt='shopping-bag' 
                />
                <h1 className='home-screen-title'>
                    Sua lista de supermercado mais fácil do que nunca!
                </h1>
            </div>
        </div>
    )
}