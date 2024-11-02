import QuestCanvas from "../../components/QuestCanvas/QuestCanvas"
import HUD from "../../components/HUD/HUD"

const QuestGameView = () => {
  return (
    <div className="my-games-page">
      <h1>My Game</h1>
        <HUD />
        <QuestCanvas />
    </div>
  )
}

export default QuestGameView