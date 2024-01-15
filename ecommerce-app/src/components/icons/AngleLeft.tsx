import * as React from 'react';

interface AngleLeft {
  width: string;
  height: string;
  color: string;
}

export function AngleLeft(props: React.SVGProps<SVGSVGElement> | AngleLeft) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 256 512',
      width: props.width || '1em',
      length: props.height || 'auto',
      ...props,
    },
    React.createElement('path', {
      fill: props.color,
      d: 'M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z',
    }),
  );
}
export default AngleLeft;
