import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  placeholder: string;
  value: number | string;
  setStringState?: Dispatch<SetStateAction<string>>;
  setNumberState?: Dispatch<SetStateAction<number>>;
}

function MyInput(props: Props) {
  const { placeholder, value, setStringState, setNumberState } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (typeof value === 'string') {
      if (setStringState) {
        setStringState(inputValue);
      }
    } else if (typeof value === 'number') {
      const numericValue = parseFloat(inputValue);
      if (!isNaN(numericValue) && setNumberState) {
        setNumberState(numericValue);
      }
    }
  };

  return (
    <div className='option'>
      <input
        type={typeof value === 'number' ? "number" : "text"}
        className='option__input'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default MyInput;
