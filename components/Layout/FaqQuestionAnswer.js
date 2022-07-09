import React from 'react'
import FaqEachQuestion from './FaqEachQuestion'

export default function FaqQuestionAnswer({faqQuesAns}) {
  return (
    <div>
        {faqQuesAns.map((element) => {
            return element.map((ele, idx) => {
                return <FaqEachQuestion key={idx} element={ele}/>
            })
        })}
    </div>
  )
}
