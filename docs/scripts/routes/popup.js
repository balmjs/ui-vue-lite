const Dialog = () => import('../views/dialog');
const Alert = () => import('../views/Alert');
const Confirm = () => import('../views/Confirm');
const Snackbar = () => import('../views/snackbar');

const popupRoutes = [{
  path: '/dialog',
  name: 'dialog',
  component: Dialog,
  meta: {
    title: 'BalmUI - Dialog',
    keywords: '',
    description: ''
  }
}, {
  path: '/alert',
  name: 'alert',
  component: Alert,
  meta: {
    title: 'BalmUI - Alert',
    keywords: '',
    description: ''
  }
}, {
  path: '/confirm',
  name: 'confirm',
  component: Confirm,
  meta: {
    title: 'BalmUI - Confirm',
    keywords: '',
    description: ''
  }
}, {
  path: '/snackbar',
  name: 'snackbar',
  component: Snackbar,
  meta: {
    title: 'BalmUI - Snackbar',
    keywords: '',
    description: ''
  }
}];

export default popupRoutes;
