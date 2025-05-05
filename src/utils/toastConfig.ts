import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
};

export const notifySuccess = (message: string) => {
  toast.success(message, baseOptions);
};

export const notifyError = (message: string) => {
  toast.error(message, baseOptions);
};

export const notifyInfo = (message: string) => {
  toast.info(message, baseOptions);
};
