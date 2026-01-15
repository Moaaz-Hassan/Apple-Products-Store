import { imacModels } from "../data/data"
import { useState } from "react"

function Imack() {
  const [selectedColor, setSelectedColor] = useState('Green')

  function getCurrentModel(){
    return imacModels.find((model) => model.label === selectedColor)
  }
  
  return (
    <div className=" h-full grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 bg-white relative">
      <div className="  h-full col-span-1 row-span-2 flex flex-col items-center md:justify-center justify-start pt-8 bg-gray-50">
        <img
          src={getCurrentModel().images.side}
          alt="IMac"
          className="  ml-9 w-22 md:w-[60%] lg:w-40"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4">
        <img
          src={getCurrentModel().images.front}
          alt="IMac"
          className="2xl:max-w-68 xl:max-w-60 lg:max-w-56"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4">
        <img
          src={getCurrentModel().images.back}
          alt="IMac"
          className="2xl:max-w-68 xl:max-w-60 lg:max-w-56"
        />
      </div>
      <div className="absolute md:top-1/2 top-3/4 md:left-4 left-12 transform -translate-y-1/2 flex flex-col lg:space-y-2 space-y-1 bg-gray-50">
        {imacModels.map((model, index) => (
          <div key={index} className="flex items-center space-x-2">
            <button
              style={{ backgroundColor: model.bg }}
              className={`2xl:w-8 md:w-5 w-4 2xl:h-8 md:h-5 h-4 rounded-full flex items-center justify-center ${
                selectedColor === model.label && 'border-2 border-blue-500'
              }`}
              onClick={() => {
                setSelectedColor(model.label)
              }}
            />
            {selectedColor === model.label && <span className="text-sm">{model.label}</span>}
          </div>
        ))}

        <button
          type="button"
          className="text-sm mt-4 w-min py-1 px-2 bg-blue-400 rounded-full text-white"
        >
          Shop
        </button>
      </div>
    </div>
  )
}

export default Imack