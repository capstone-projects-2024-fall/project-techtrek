import { Loop, Stage, World, Body } from 'react-game-kit';
import { useState, useEffect, useRef } from 'react';

const Game = () => {
    const [x, setX] = useState(0)
    const bodyRef = useRef(null)

    // move a body across the screen
    useEffect(() => {
        const interval = setInterval(() => {
            setX(prevX => prevX + 5); // From the previous X position, move 5 units to the right
        }, 100) // Move per (number supplied) seconds

        return () => clearInterval(interval) // Completed
    }, [])

  return (
    <Loop>
        <Stage width={800} height={600}>
            <World>
                <Body 
                    args={[x,100,75,75]} 
                    ref={ (b) => {
                        if (b) {
                            bodyRef.current = b.body; 
                        }
                    }
                 }>
                    {/* Sprites will go here */}
                    <div style={{
                            width: '75px',
                            height: '75px',
                            backgroundColor: 'blue',
                        }}>
                    </div>
                </Body>
            </World>
        </Stage>
    </Loop>
  )
}

export default Game