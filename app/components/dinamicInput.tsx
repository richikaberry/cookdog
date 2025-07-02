import { useState } from 'react';

type DynamicInputProps = {
  namePrefix?: string;
};

export function DynamicInput({ namePrefix = 'input' }: DynamicInputProps) {
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
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            value={input}
            onChange={(e) => handleChange(e.target.value, index)}
            id={`${namePrefix}[${index}]`}
            name={`${namePrefix}[${index}]`}
            placeholder="入力してください"
          />
          <button type="button" onClick={() => handleRemoveInput(index)}>
            削除
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddInput}>
        中身を追加
      </button>
    </div>
  );
}
