import { type } from 'os';
import React from 'react';

type Props = {
  type: string;
  id: string;
  label: string;
  hintText: string;
  defaultValue?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  required: boolean;
  register: any;
};

const DropDownField: React.FC<Props> = ({ type, id, label, hintText, defaultValue, required, register, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="flex justify-left mt-2 text-gray-700 font-bold text-sm">{label}</label>
      <select
        type={type}
        id={id}
        placeholder={hintText}
        defaultValue={defaultValue}
        required={required}
        {...register(id, { required })}
        onChange={onChange}
        className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-left shadow-sm rounded-md border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500"
      >
        <option value="" className='text-gray-500'>Select Degree Program</option>
        <option value="BSCS">BSCS</option>
        <option value="BBA">BBA</option>
        <option value="ACF">ACF</option>
        <option value="BSEM">BSEM</option>
        <option value="BECO">BECO</option>
        <option value="BSSS">BSSS</option>

      </select>
    </div>
  );
};

export default DropDownField;
