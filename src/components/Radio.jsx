export default function Radio({e, selected, onSelect}){
    const isSelected = selected === e

    const container = `border border-stone-400 py-2 px-4 flex items-center w-full
                       bg-gradient-to-br border-stone-400 
                       ${isSelected ? "from-green-200 to-stone-50 " :
                                      "from-stone-200 to-stone-50 "
                       } hover:cursor-pointer hover:transform hover:scale-105 active:scale-95
                         hover:from-green-200 hover:to-stone-100 hover:text-green-800 hover:font-bold`
    const label = `mr-auto ${isSelected ? "text-green-800 font-bold" : ""}`
    const input = `accent-green-800`

    return(
        <div className={container} onClick={() => onSelect(e)}>
          <label htmlFor={e} className={label} >{e}</label>
          <input 
            type="radio" 
            name="radioInput" 
            id={e} 
            value={e} 
            className={input}  
            checked={isSelected}
            onChange={() => onSelect(e)}
          />
        </div>
    )
}