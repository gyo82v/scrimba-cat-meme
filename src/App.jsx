import { useState } from "react"
import { catsData } from "./data"
import { AiOutlineClose } from 'react-icons/ai';

import Emotions from "./components/Emotions";

import headerImage  from "./images/pumpkin.png"

function App() {
    const [selected, setSelected] = useState("")
    const [cat, setCat] = useState({img : "", alt : "", })
    const [isCatVisible, setIsCatVisible] = useState(false)
    const [isGif, setIsGif] = useState(false)

  //tailwind styles
    const headerAndFooter = `bg-stone-600 border-stone-800 shadow-stone-800/30 font-semibold 
                             justify-center flex`
    const main = `flex flex-col flex-1 text-stone-800 items-center `
    const form = `flex flex-col w-9/12 md:w-[600px]`
    const inputContainer = `shadow-lg shadow-stone-800/20  justify-center 
                            py-3 px-5 my-8 rounded-lg flex items-center gap-5 font-semibold
                            bg-gradient-to-br from-stone-300 to-stone-200 `
    const input = `self-center translate-y-[1px] accent-stone-800`
    const formBtn = `py-3 px-8 bg-gradient-to-br from-stone-700 to-stone-500 shadow-lg shadow-stone-800/30
                     rounded-lg border-none text-stone-300 font-bold
                     hover:transform hover:scale-105 active:scale-95 `
    const catContainer = `fixed top-0 left-0 bottom-0 right-0 m-auto w-11/12 h-8/12
                          p-4 bg-stone-200 rounded-lg shadow-lg shadow-stone-800/30
                          flex flex-col justify-center items-center text-stone-800 `
    const catBtn = `border border-stone-800 rounded-full p-1 absolute top-2 right-2
                    hover:transform hover:scale-115 active:scale-95`
    const catImg = `w-full h-[400px] rounded-lg shadow-lg shadow-stone-800/30`
  //

  const handleSelect = v => setSelected(v)
  const handleChange = e => setIsGif(e.target.checked);
  
  function getMatchingCats(){
    if(isGif){
      const cats = catsData.filter(c => c.isGif && c.emotionTags.includes(selected))
      return cats
    }else{
      const cats = catsData.filter(c => c.emotionTags.includes(selected))
      return cats
    }
  }
  function getSingleCat(){
    const cats = getMatchingCats()
    if(cats.length === 1){return cats[0]}
    const randomCat = cats[Math.floor(Math.random() * cats.length)]
    return randomCat
  }
  function renderCat(){
    const cat = getSingleCat()
    setCat({img : cat.image, alt : cat.alt})
    setIsCatVisible(true)
  }
  function closeCat(){
    setIsCatVisible(false)
    setCat({img : "", alt : ""})
  }

  return (
    <div className="flex flex-col h-screen">
      <header className={`${headerAndFooter} border-b shadow-lg gap-3 pt-4`}>
        <img src={headerImage} alt="a black and white cat" className="w-20 h-20" />
        <div>
          <h1 className="text-2xl font-bold">Cat meme</h1>
          <h2 className="font-light">Pick an emotion and check out the cat</h2>
        </div>
      </header>
      <main className={main}>
        <h3 className="text-xl font-bold my-10">Select the cat emotion</h3>
        <form className={form}>
          <Emotions selected={selected} onSelect={handleSelect} />
          <div className={inputContainer}>
            <label htmlFor="onlyGif">Animated gif only</label>
            <input 
              type="checkbox" 
              name="onlyGif" 
              id="onlyGif" 
              className={input} 
              checked={isGif}
              onChange={handleChange} 
            />
          </div>
          {!isCatVisible &&
          <button type="button" className={formBtn} onClick={() => renderCat()} disabled={!selected}>Get Image</button>}
        </form>
      </main>
      {isCatVisible &&
      <div className={catContainer}>
        <button className={catBtn} onClick={() => closeCat()}><AiOutlineClose /></button>
        <div>
          <img className={catImg} alt={cat.alt} src={cat.img} />
        </div>
      </div>}
      <footer className={`${headerAndFooter} border-t shadow-top-lg p-3`}>
        <p>Cat meme@2025</p>
      </footer>
    </div>
  )
}

export default App
