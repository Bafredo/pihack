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

const Home= () => {

    const navigate = useNavigate()

  const coreApps = [
    { name: 'fireside', icon: Flame, color: 'text-purple-600' },
    { name: 'Wallet', icon: Wallet, color: 'text-purple-600' },
    { name: 'Brainstorm', icon: Lightbulb, color: 'text-purple-600' },
    { name: 'Mine', icon: Pickaxe, color: 'text-purple-600' },
    { name: 'Blockchain', icon: Eye, color: 'text-purple-600' },
    { name: 'Develop', icon: Monitor, color: 'text-purple-600' },
    { name: 'KYC', icon: CreditCard, color: 'text-purple-600' },
    { name: 'Chat', icon: MessageCircle, color: 'text-purple-600' },
    { name: 'Profile', icon: User, color: 'text-purple-600' },
    { name: 'Domain', icon: Globe, color: 'text-purple-600' },
    { name: 'App Studio', icon: Sparkles, color: 'text-purple-600' },
    { name: 'Swap', icon: ArrowUpDown, color: 'text-purple-600' },
    { name: 'Lockups', icon: Lock, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-24">
      <div className="max-w-md mx-auto px-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">π</span>
          </div>
          <span className="text-orange-400 font-medium text-lg">Welcome to the Pi Ecosystem</span>
        </div>

        {/* Core Team Apps Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Core Team Apps</h2>
            <ChevronUp className="w-5 h-5 text-gray-400" />
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-3 gap-6">
            {coreApps.map((app, index) => {
              const Icon = app.icon;
              return (
                <div key={index} className="flex flex-col items-center space-y-2" onClick={()=>{navigate('/unlock')}}>
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-purple-50 transition-colors duration-200">
                    <Icon className={`w-8 h-8 ${app.color}`} />
                  </div>
                  <span className="text-sm text-gray-600 text-center">{app.name}</span>
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
