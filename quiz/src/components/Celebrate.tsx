import { FC, useEffect } from "react";
import "./Celebrate.scss";

interface ICelebrate {
    animation: string | undefined;
    setAnimation(value: string | undefined): void;
}

const Celebrate: FC<ICelebrate> = (props) => {
    const {animation, setAnimation} = props;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if(animation)
                setAnimation(undefined);
        }, 1000);
    
        return () => clearTimeout(timeoutId);
    }, [animation, setAnimation]);

    if(animation === "WRONG") {
        return (
            <div className="celebration-animation">
                <svg viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="20" stroke-width="5" stroke="#d9534f" fill="none" className="ring"></circle>
                    <line x1="16" y1="16" x2="34" y2="34" stroke="#d9534f" stroke-width="5" className="line"></line>
                    <line x1="16" y1="34" x2="34" y2="16" stroke="#d9534f" stroke-width="5" className="line"></line>
                </svg>
            </div>
        )
    }

    if(animation === "RIGHT") {
        return (
            <div className="celebration-animation">
                <svg viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="20" stroke-width="5" stroke="#5CB85C" fill="none" className="ring"></circle>
                    <circle cx="25" cy="25" r="10" stroke-width="5" stroke="#5CB85C" fill="#5CB85C" className="dot"></circle>
                    <polyline points="16,25 22,31 34,19" stroke="#fff" stroke-width="5" fill="none" className="check"></polyline>
                </svg>
            </div>
        )
    }

    if(animation === "CELEBRATE") {
        return (
            <div className="celebration-animation">
              <svg viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20" stroke-width="5" stroke="#FDB813" fill="none" className="ring"></circle>
                <path d="M27.6,28.6c0,0-4.4,3.4-4.4,7.4c0,4.7,3.9,8.5,8.5,8.5c4.7,0,8.5-3.8,8.5-8.5c0-4-4.4-7.4-4.4-7.4" stroke="#FDB813" stroke-width="5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="clap"></path>
                <path d="M22.3,33.9c0,0-2.8,1.2-2.8,3.3s2.8,3.3,2.8,3.3" stroke="#fff" stroke-width="5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="clap"></path>
                <path d="M33.5,33.9c0,0,2.8,1.2,2.8,3.3s-2.8,3.3-2.8,3.3" stroke="#fff" stroke-width="5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="clap"></path>
              </svg>
            </div>
        )
    }

    if(animation === "FINISH") {
        return (
            <div className="celebrate-container">
                <div className="message-container">
                    <h2>GREAT JOB!</h2>
                </div>
                <div className="heart-container">
                    <div className="heart"></div>
                </div>
            </div>
        )
    }

    return null;
}

export default Celebrate;