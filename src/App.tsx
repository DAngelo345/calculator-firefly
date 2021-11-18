import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import ExploreContainer from './components/ExploreContainer';


const App: React.FC = () => (
  <ExploreContainer/>
);

export default App;
