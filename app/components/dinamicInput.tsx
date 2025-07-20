import { useState } from 'react';

type DynamicInputProps = {
  title?: string;
  namePrefix?: string;
};

export function DynamicInput({ title, namePrefix = 'input' }: DynamicInputProps) {
  const [inputs, setInputs] = useState<string[]>(['']);

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index: number) => {
    setInputs(inputs.filter((_, i) => i !== index));
  };

  const handleChange = (value: string, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-black border-2 rounded-md border-blue-600 p-2 shadow-2xl mb-10">{title}</label>
      {inputs.map((input, index) => (
        <div key={index} className="flex gap-2.5 text-black text-lg">
          <input
            type="text"
            value={input}
            onChange={(e) => handleChange(e.target.value, index)}
            id={`${namePrefix}[${index}]`}
            name={`${namePrefix}[${index}]`}
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="入力してください"
          />
          <button
            type="button"
            onClick={() => handleRemoveInput(index)}
            className="bg-red-600 text-white rounded p-2 hover:bg-red-700"
          >
            削除
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddInput}
        className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
      >
        中身を追加
      </button>
    </div>
  );
}
