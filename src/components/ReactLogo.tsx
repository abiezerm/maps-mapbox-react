import logo from '../assets/react.svg';

export const ReactLogo = () => {
    return (
        <>
            <img 
                src={logo} 
                alt="React logo" 
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '130px',
                }}
            />
        </>
    )
}