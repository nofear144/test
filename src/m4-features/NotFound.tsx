import { FC, ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import { PATH } from '../m1-ui/c2-routes/Routes';

export const NotFound: FC = (): null | ReactElement => {
  const navigate = useNavigate();
  const routeToHomePage = (): void => {
    navigate(PATH.HOME_PAGE);
  };

  return (
    <>
      <div>
        <div>Page Not Found</div>
        <button type="button" onClick={routeToHomePage}>
          Go Home Page
        </button>
      </div>
      ;
    </>
  );
};
