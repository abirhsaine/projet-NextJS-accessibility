import React, { FC } from 'react';
import { Icons } from '@/components/icons'; // Adjust the path as needed

interface RadioItem {
  id: string;
  value: string;
  label: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
}

interface RadioGroupProps {
  items: RadioItem[];
}

const RadioGroup: FC<RadioGroupProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map(({ id, value, label, Icon }) => (
        <div key={id}>
          <input
            type="radio"
            value={value}
            aria-label={label}
            id={id}
            className="peer sr-only"
          />
          <label
            htmlFor={id}
            aria-label={label}
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 text-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Icon className="mb-3 h-6 w-6" />
            {label.split(' ').map((word, index) => (
              <React.Fragment key={index}>
                {word}  ffffffffffffffffff
                <br />
              </React.Fragment>
            ))}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
