import App from '../pages/App';
import Calendar from '../pages/Calendar/index';

const Routes = [
  {
    path: '/',
    component: App,
    exact: true
  },
  {
    path: '/calendar',
    component: Calendar,
    exact: true
  }
];

export default Routes;
