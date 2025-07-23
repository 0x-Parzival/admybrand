import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


interface ButtonProps {
  label: string;
  path: string;
  color: string;
  image: string;
  logo?: string;
}

const Button = ({ label, path, color, image }: ButtonProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(path);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-white/20 dark:hover:ring-white/20"
      onClick={handleButtonClick}
      style={{
        width: '300px',
        height: '150px',
        border: '2px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 30
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-75" style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(2px) brightness(0.9)'
      }} />
      <div className={`absolute inset-0 ${color} opacity-75 mix-blend-multiply`} />
      <div className="relative px-4 py-4 text-white text-lg font-black uppercase tracking-wider text-center dark:text-white" style={{
        zIndex: 40
      }}>
        <div className="text-2xl">{`${label}`.toUpperCase()}</div>
        <div className="text-base opacity-75 dark:opacity-100">EXPLORE NOW</div>
      </div>
      <div className="absolute inset-0 bg-black/20 dark:bg-white/10" />
    </div>
  );
};

const buttons: ButtonProps[] = [
  {
    label: 'Who am I',
    path: '/whoami',
    color: 'from-pink-600 to-purple-700',
    image: '/images/who am i.jpg'
  },
  {
    label: 'Kalki OS',
    path: '/kalki',
    color: 'from-cyan-600 to-blue-700',
    image: '/images/kalki os.png'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-y-auto relative">
      <div className="text-center text-white py-4 relative z-10">
        <motion.h1 
          className="text-4xl font-black uppercase tracking-wider mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textShadow: '0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.3)',
            fontFamily: 'Orbitron, sans-serif',
            letterSpacing: '0.2em',
            backgroundSize: '200% auto',
            animation: 'gradient 8s linear infinite'
          }}
        >
          <span className="inline-block animate-pulse">[</span>
          WELCOME TO KESHAVBRUH.COM
          <span className="inline-block animate-pulse">]</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-400 mt-2 font-light tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-cyan-400">[</span>
          <span className="text-purple-400">SYSTEM</span>
          <span className="text-cyan-400">]</span>
          <span className="text-gray-400"> INITIALIZING NEURAL INTERFACE</span>
        </motion.p>
      </div>
      <div className="relative z-10 p-4">
        {/* First row with 5 buttons */}
        <div className="flex justify-center items-center flex-wrap gap-6 mb-6">
          {buttons.map((button, index) => index < 5 && (
            <div key={index} className="transform transition-transform hover:scale-105" style={{ width: '300px' }}>
              <Button {...button} />
            </div>
          ))}
        </div>
        {/* Second row with 2 buttons */}
        <div className="flex justify-center items-center flex-wrap gap-6">
          {buttons.map((button, index) => index >= 5 && (
            <div key={index} className="transform transition-transform hover:scale-105" style={{ width: '300px' }}>
              <Button {...button} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Extra spacing at the bottom */}
      <div className="mt-20 py-16 w-full relative z-10">
        {/* Empty div for spacing */}
      </div>
    </div>
  );
}
