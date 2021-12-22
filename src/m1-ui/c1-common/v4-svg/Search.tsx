import { FC, ReactElement } from 'react';

type Props = {
  onClick: () => void;
};

export const Search: FC<Props> = ({ onClick }): null | ReactElement => (
  <div>
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="60"
      viewBox="0 0 100 100"
      fill="#f16659"
    >
      <path d="M87.4 77.7L68.5 58.8c3.2-5 4.7-10.8 4.7-16.5C73.2 25.4 59.7 12 42.8 12 25.2 12 11.9 25.9 12 42.6c.1 16.7 13.6 30.6 30.8 30.6 5.8 0 11.3-1.6 16.1-4.6l18.9 18.8c.8.8 2 .8 2.8 0l6.9-6.9c.7-.8.7-2-.1-2.8zm-44.6-8.5c-15 0-26.7-12.1-26.8-26.7-.1-14.4 11.4-26.6 26.8-26.6 15 0 26.3 11.7 26.4 26.3.1 15.6-12.2 27-26.4 27zm36.3 14l-17-17c.6-.5 3.4-3.3 4.1-4.1l17 17-4.1 4.1z" />
      <path fill="#00F" d="M244-370v1684h-1784V-370H244m8-8h-1800v1700H252V-378z" />
    </svg>
  </div>
);
