import React from 'react';
import { 
  Flame, 
  Wallet, 
  Lightbulb, 
  Pickaxe, 
  Eye, 
  Monitor, 
  CreditCard, 
  MessageCircle, 
  User, 
  Globe, 
  Sparkles, 
  ArrowUpDown, 
  Lock,
  ChevronUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import fireside from './../assets/fire.jpeg'
import wallet from './../assets/wallet.jpeg'
import brainstorm from './../assets/brain.jpeg'
import mine from './../assets/mine.jpeg'
import blockchain from './../assets/block.jpeg'
import kyc from './../assets/kyc.jpeg'
import chat from './../assets/chat.jpeg'
import profile from './../assets/profile.png'
import domain from './../assets/domain.png'
import studio from './../assets/studio.png'
import swap from './../assets/swap.png'
import lockups from './../assets/lockups.png'
import develop from './../assets/develop.jpeg'







const Home= () => {

    const navigate = useNavigate()

  const coreApps = [
    { name: 'fireside', icon: fireside, color: 'text-purple-600' },
    { name: 'Wallet', icon: wallet, color: 'text-purple-600' },
    { name: 'Brainstorm', icon: brainstorm, color: 'text-purple-600' },
    { name: 'Mine', icon: mine, color: 'text-purple-600' },
    { name: 'Blockchain', icon: blockchain, color: 'text-purple-600' },
    { name: 'Develop', icon: develop, color: 'text-purple-600' },
    { name: 'KYC', icon: kyc, color: 'text-purple-600' },
    { name: 'Chat', icon: chat, color: 'text-purple-600' },
    { name: 'Profile', icon: profile, color: 'text-purple-600' },
    { name: 'Domain', icon: domain, color: 'text-purple-600' },
    { name: 'App Studio', icon: studio, color: 'text-purple-600' },
    { name: 'Swap', icon: swap, color: 'text-purple-600' },
    { name: 'Lockups', icon: lockups, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-18">
      <div className="max-w-md mx-auto px-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-center mb-1">
          <div className="w-22 h-22  rounded-full flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#fbb44a'}} viewBox="0 0 260 260" fill="none" width="56" height="56"><path fill="currentColor" d="M94.91 66.314c0-1.078.875-1.953 1.954-1.953h18.878c1.079 0 1.953.875 1.953 1.953v14.973a1.953 1.953 0 0 1-1.953 1.953H96.863a1.953 1.953 0 0 1-1.953-1.953V66.314ZM133.97 66.314c0-1.078.875-1.953 1.953-1.953h18.879c1.079 0 1.953.875 1.953 1.953v14.973a1.953 1.953 0 0 1-1.953 1.953h-18.879a1.953 1.953 0 0 1-1.953-1.953V66.314Z"></path><path fill="currentColor" d="M94.91 115.616v77.765l22.785 8.992v-86.757h16.275v77.765l22.785 8.992v-86.757h15.14c12.491 0 22.618-10.234 22.618-22.858V79.985h-22.618v12.773H80.422c-12.492 0-22.618 10.234-22.618 22.858v15.798h22.618v-15.798h14.489Z"></path><path fill="currentColor" fill-rule="evenodd" d="M130.122 20.75c-60.368 0-109.305 48.937-109.305 109.305 0 60.367 48.937 109.305 109.305 109.305 60.367 0 109.305-48.938 109.305-109.305 0-60.368-48.938-109.305-109.305-109.305ZM.943 130.055C.943 58.711 58.778.875 130.122.875c71.343 0 129.178 57.836 129.178 129.18 0 71.343-57.835 129.178-129.178 129.178C58.778 259.233.943 201.398.943 130.055Z" clip-rule="evenodd"></path></svg>
          </div>
          <span className="text-[#fbb44a] font-medium text-lg">Welcome to the Pi Ecosystem</span>
        </div>

        {/* Core Team Apps Section */}
        <div className="rounded-lg p-6 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800">Core Team Apps</h2>
            <ChevronUp className="w-5 h-5 text-gray-400" />
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-3 gap-3">
            {coreApps.map((app, index) => {
              return (
                <div key={index} className="flex flex-col items-center space-y-1" onClick={()=>{navigate('/unlock')}}>
                  <div className="w-18 h-18 flex items-center justify-center hover:bg-purple-50 transition-colors duration-200">
                    <img src={app.icon}/>
                  </div>
                  <span className=" text-[#703d92] text-center">{app.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Explore Third-Party Apps Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
            Explore Third-Party Apps
          </h2>
          
          {/* Third-party app preview */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg h-32 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-sm opacity-90 mb-1">Top Ranked App</div>
              <div className="font-semibold">Explore Apps</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
