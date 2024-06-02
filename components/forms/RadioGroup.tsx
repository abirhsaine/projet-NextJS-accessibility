import React from 'react';
import RadioGroup from './RadioGroupItem';
import { Icons } from '@/components/icons';

const YourComponent: React.FC = () => {
  const radioItems = [
    {
      id: 'QuitSmoking',
      value: 'QuitSmoking',
      label: 'Quit Smoking',
      Icon: Icons.quitSmoking,
    },
    {
      id: 'RelieveStress',
      value: 'RelieveStress',
      label: 'Relieve Stress',
      Icon: Icons.relieveStress,
    },
    {
      id: 'ImproveSleep',
      value: 'ImproveSleep',
      label: 'Improve Sleep',
      Icon: Icons.improveSleep,
    },
    // Add more items as needed
  ];

  return <RadioGroup items={radioItems} />;
};

export default YourComponent;
