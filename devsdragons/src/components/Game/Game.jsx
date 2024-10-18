import { Loop, Stage, World, Body } from 'react-game-kit';
import { useState, useEffect } from 'react';

const Game = () => {
    const [x, setX] = useState(0)
    
  return (
    <Loop>
        <Stage width={800} height={600}>
            <World>
                <Body args={[0,0,75,75]} ref={ (b) => this.body = b.body }>
                    {/* Sprites will go here */}
                    <div>
                        style={{
                            width: '75px',
                            height: '75px',
                            backgroundColor: 'blue',
                        }}
                    </div>
                </Body>
            </World>
        </Stage>
    </Loop>
  )
}

export default Game