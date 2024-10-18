import { Loop, Stage, World, Body } from 'react-game-kit';

const Game = () => {
  return (
    <Loop>
        <Stage>
            <World>
                <Body args={[0,0,75,75]} ref={ (b) => this.body = b.body }>

                </Body>
            </World>
        </Stage>
    </Loop>
  )
}

export default Game