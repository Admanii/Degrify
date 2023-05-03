import { type } from 'os';
import React from 'react';

type Props = {
  type: string;
  id: string;
  label: string;
  hintText: string;
  defaultText?: string,
  required: boolean;
  register: any;
};

const Input: React.FC<Props> = ({ type, id, label, hintText, defaultText, required, register }) => {
  return (
    <div>
      <label htmlFor={id} className="flex justify-left mt-2 text-gray-700 font-bold">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={hintText}
        defaultValue={defaultText}
        {...register(id, { required })}
        className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-left shadow-sm rounded-md border-none"
      />
    </div>
  );
};

export default Input;
