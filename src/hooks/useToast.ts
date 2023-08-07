import toast, { ToastOptions } from 'react-hot-toast';

const baseOptions: ToastOptions = {
  duration: 4000,
  position: 'top-center',
}

const toastOptionsByType = {
  success: {
    ...baseOptions,
    icon: '🤪'
  },
  error: {
    ...baseOptions,
    icon: '😭'
  }
}

const useToast = () => {

  const showToast = (type: 'success' | 'error', message: string) => {
    toast(message, toastOptionsByType[type])
  }

  return {
    showToast
  }
};

export default useToast;