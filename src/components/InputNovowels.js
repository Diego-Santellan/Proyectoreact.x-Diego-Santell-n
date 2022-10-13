import React from "react"


const InputNovowels = () => {

    const handler = ( event ) => { 
        console.log('se tecleo: ' + event.key);
        const notAllowed = ['a','e','i','o','u']
        if (notAllowed.includes(event.key.toLowerCase() )){
            event.preventDefault()
        }
    }

  return (
    <>
        <div >
            <input onKeyDown={handler} type='text' className="m-5 border border-2 border-violet-600 bg-emerald-200"/>
        </div>
    </>
  )
}
export default InputNovowels