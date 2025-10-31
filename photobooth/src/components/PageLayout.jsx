// src/components/PageLayout.jsx
import { useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const PageLayout = ({ children }) => {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={500} // Matches the CSS duration
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PageLayout;