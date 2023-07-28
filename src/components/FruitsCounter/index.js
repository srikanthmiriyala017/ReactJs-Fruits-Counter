import React, {useState} from 'react'
import './index.css'

const FruitsCounter = () => {
  const [mangoCount, setMangoCount] = useState(0)
  const [bananaCount, setBananaCount] = useState(0)

  const incrementMangoCount = () => {
    setMangoCount(mangoCount + 1)
  }

  const incrementBananaCount = () => {
    setBananaCount(bananaCount + 1)
  }

  return (
    <div className="Bg-container">
      <div className="inner-container">
        <h1 className="paragraph">
          Bob ate {mangoCount} Mangoes {bananaCount} Bananas
        </h1>
        <div className="image-container">
          <div className="img1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="mango"
            />
            <div>
              <button onClick={incrementMangoCount}>Eat Mango</button>
            </div>
          </div>
          <div className="img1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="banana"
            />
            <div>
              <button onClick={incrementBananaCount}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FruitsCounter
