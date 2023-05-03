import { Label } from '@headlessui/react/dist/components/label/label'
import React from 'react'
interface Props{
    defaultText: string,
    label: string,
}
function TextField({defaultText, label}:Props) {
  return (
    <div>
    <label htmlFor={label} className=" flex justify-left mt-2 text-gray-700 font-bold">{label}</label>
    <input
        type="string"
        id="name"
        // {...register('name')}
        //value=""
        //   onChange={}
        defaultValue={defaultText}
        required
        className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-left shadow-sm rounded-md border-none"
    />
</div>
  )
}

export default TextField
