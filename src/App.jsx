import { useState } from "react"
import { catsData } from "./data"
import { emotions } from "./emotions"

import Radio from "./components/Radio"

import headerImage  from "./images/pumpkin.png"

function App() {
    const [selected, setSelected] = useState("")

  //tailwind styles
    const container = `flex flex-col h-screen `
    const headerAndFooter = `bg-stone-600 border-stone-800 shadow-stone-800/30 font-semibold 
                             justify-center flex`
    const title = `text-2xl font-bold`
    const desc = `font-light`
    const main = `flex flex-col flex-1 text-stone-800 items-center `
    const mainTitle = `text-xl font-bold my-10`

    const form = `flex flex-col w-9/12 md:w-[600px]`
    const inputContainer = `shadow-lg shadow-stone-800/20 
                            py-3 px-5 my-8 rounded-lg flex items-center gap-3 font-semibold
                            bg-gradient-to-br from-stone-300 to-stone-200 `
    const input = `self-center translate-y-[1px]`
    const formBtn = `py-3 px-8 bg-gradient-to-br from-stone-700 to-stone-500 shadow-lg shadow-stone-800/30
                     rounded-lg border-none text-stone-300 font-bold
                     hover:transform hover:scale-105 active:scale-95 `

  //

  const handleSelect = v => setSelected(v)

  const emotionSArray = emotions.map((e, i) => (
    <Radio e={e} key={i} selected={selected} onSelect={handleSelect} />
  ))

  return (
    <div className={container}>
      <header className={`${headerAndFooter} border-b shadow-lg gap-3 pt-4`}>
        <img src={headerImage} alt="a black and white cat" className="w-20 h-20" />
        <div>
          <h1 className={title}>Cat meme</h1>
          <h2 className={desc}>Pick an emotion and check out the cat</h2>
        </div>
      </header>
      <main className={main}>
        <h3 className={mainTitle}>Select the cat emotion</h3>
        <form className={form}>
          <div>{emotionSArray}</div>
          <div className={inputContainer}>
            <label htmlFor="onlyGif">Animated gif only</label>
            <input type="checkbox" name="onlyGif" id="onlyGif" className={input} />
          </div>
          <button className={formBtn}>Get Image</button>
        </form>
      </main>
      <footer className={`${headerAndFooter} border-t shadow-top-lg p-3`}>
        <p>Cat meme@2025</p>
      </footer>
    </div>
  )
}

export default App
