import gif from './../assets/loading.gif'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

const LoadingGif = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3850); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <img src={gif} alt="Loading..." />
    </div>
  );
}

export default LoadingGif