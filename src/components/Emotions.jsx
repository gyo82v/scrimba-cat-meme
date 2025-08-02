import { catsData } from "../data"
import Radio from "./Radio"

export default function Emotions({selected, onSelect}){
    const emotions = Array.from(new Set(catsData.flatMap(cat => cat.emotionTags)))
    const emotionsArray = emotions.map((e, i) => (
        <Radio key={i} e={e} selected={selected} onSelect={onSelect}  />
    ))
    return (
        <div>
           {emotionsArray}
        </div>
    )
}