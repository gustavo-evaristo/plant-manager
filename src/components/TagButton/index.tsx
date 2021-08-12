import React from 'react';
import { Btn, TextButton } from './styles';

type Props = {
  activeOpacity?: number;
  background?: string;
  active?: boolean;
  tagName: string;
  onPress?: () => void;
};

export const TagButton: React.FC<Props> = ({ active, background, onPress, tagName, ...rest }) => {
  return (
    <>
      <Btn
        activeOpacity={0.6}
        onPress={onPress}
        {...{
          background,
          active,
          ...rest,
        }}
      >
        <TextButton
          {...{
            active,
            ...rest,
          }}
        >
          {tagName}
        </TextButton>
      </Btn>
    </>
  );
};
