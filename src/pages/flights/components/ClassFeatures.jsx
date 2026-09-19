import { useState } from 'react'
import Checkbox from '@/components/ui/Checkbox'
import Reveal from '@/components/ui/Reveal'

/** «Basic Economy Features»: выбор класса + лента фото салона. */
export default function ClassFeatures({ classes, features }) {
  const [selected, setSelected] = useState(classes[0])

  return (
    <Reveal as="section" className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-heading text-2xl leading-[30px]">Basic Economy Features</h2>
        <div className="flex flex-wrap gap-6">
          {classes.map((travelClass) => (
            <Checkbox
              key={travelClass}
              label={travelClass}
              checked={selected === travelClass}
              onChange={() => setSelected(travelClass)}
            />
          ))}
        </div>
      </div>

      <ul className="-my-3 flex justify-between gap-4 overflow-x-auto py-3 [scrollbar-width:none]">
        {features.map((image, index) => (
          <li
            key={index}
            style={{ transitionDelay: `${index * 60}ms` }}
            className="shrink-0 transition-all duration-1000 ease-smooth in-data-[visible=false]:translate-y-6 in-data-[visible=false]:opacity-0"
          >
            <img
              src={image}
              alt=""
              className="size-[120px] rounded-xl object-cover transition-all duration-700 hover:-translate-y-2 hover:rotate-3 hover:shadow-hover"
            />
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
