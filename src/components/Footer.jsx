import React from 'react';

import IIITLogo from "../assets/iiitu-logo.png";
import MerakiLogo from "../assets/meraki-minecraft.png";




const styles = `
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

.font-pixel {
  font-family: 'Press Start 2P', cursive;
}
.font-pixel-text {
  font-family: 'VT323', monospace;
}
`;

const Footer = () => {
  return (
    // Main Footer Container - Darkest Background
    <footer className="relative bg-[#0F0F0F] text-white overflow-hidden font-pixel-text selection:bg-gray-700 selection:text-white pt-16 pb-8 w-full">
      
      {/* --- BACKGROUND ART LAYERS --- */}
      

      <div className="absolute top-0 left-0 right-0 h-4 opacity-20 pointer-events-none"
           style={{
             backgroundImage: 'linear-gradient(to right, #333 50%, transparent 50%)',
             backgroundSize: '40px 100%' 
           }}>
      </div>


      <div className="absolute inset-0 z-0 pointer-events-none">

         <div className="absolute bottom-0 left-0 w-[25%] h-[40%] bg-[#1A1A1A]"></div>
         <div className="absolute bottom-[40%] left-[5%] w-[10%] h-[15%] bg-[#1A1A1A]"></div>
         <div className="absolute top-[25%] left-[8%] w-16 h-16 bg-[#1A1A1A]"></div> {/* Floating box left */}

        
         <div className="absolute bottom-0 left-[30%] w-[15%] h-[15%] bg-[#1A1A1A]"></div>
         <div className="absolute bottom-0 right-[35%] w-[10%] h-[20%] bg-[#1A1A1A]"></div>

        
         <div className="absolute bottom-0 right-0 w-[20%] h-[50%] bg-[#1A1A1A]"></div>
         <div className="absolute bottom-[50%] right-[5%] w-[8%] h-[10%] bg-[#1A1A1A]"></div>
         <div className="absolute top-[20%] right-[15%] w-20 h-20 bg-[#1A1A1A]"></div> {/* Floating box right */}
      </div>


      <div className="absolute inset-0 z-0 pointer-events-none">
      
         <div className="absolute bottom-0 left-[10%] w-[12%] h-[25%] bg-[#222]"></div>
         <div className="absolute bottom-[25%] left-[12%] w-[6%] h-[8%] bg-[#222]"></div>
         <div className="absolute top-[35%] left-[2%] w-12 h-12 bg-[#222]"></div> {/* Small floating box */}

         <div className="absolute bottom-0 right-[8%] w-[15%] h-[35%] bg-[#222]"></div>
         <div className="absolute bottom-[35%] right-[10%] w-[8%] h-[12%] bg-[#222]"></div>
         <div className="absolute top-[30%] right-[5%] w-14 h-14 bg-[#222]"></div> {/* Small floating box */}

         <div className="absolute bottom-[10%] left-[45%] w-8 h-8 bg-[#222]"></div>
         <div className="absolute bottom-[15%] right-[40%] w-6 h-6 bg-[#222]"></div>
      </div>


    
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        
       
        <h2 className="font-pixel text-xl md:text-2xl mb-12 tracking-widest text-white text-center">
          COORDINATORS
        </h2>
        
      
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-16 md:gap-48 mb-16 text-center">
          
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-pixel text-sm md:text-lg mb-1 text-white">Pranav garg</h3>
           
            <div className="w-full border-b-2 border-dotted border-gray-600 my-2"></div>
            <p className="text-gray-400 text-[10px] md:text-xs tracking-wider font-pixel mt-1">23346@iiitu.ac.in</p>
            <p className="text-gray-400 text-[10px] md:text-xs tracking-wider font-pixel mt-1">+91XXXXXXXXXX</p>
          </div>

          
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-pixel text-sm md:text-lg mb-1 text-white">Pranav garg</h3>
            
            <div className="w-full border-b-2 border-dotted border-gray-600 my-2"></div>
            <p className="text-gray-400 text-[10px] md:text-xs tracking-wider font-pixel mt-1">23346@iiitu.ac.in</p>
            <p className="text-gray-400 text-[10px] md:text-xs tracking-wider font-pixel mt-1">+91XXXXXXXXXX</p>
          </div>
        </div>

       
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
         
          <div className="text-center md:text-right">
            <h3 className="font-pixel text-[10px] md:text-xs leading-6 text-white tracking-wide">
              Indian Institute of<br />
              Information<br />
              Technology una
            </h3>
          </div>


          <div className="hidden md:block h-16 w-0 border-r-2 border-dashed border-gray-500 mx-4"></div>

          {/* IIITU Logo */}
          <div className="flex items-center justify-center">
             <img 
               src={IIITLogo} 
               alt="IIIT Una Logo" 
               className="w-16 h-16 md:w-20 md:h-20 object-contain" 
             />
          </div>

          {/* MERAKI Logo */}
          <div className="flex items-center justify-center ml-2">
             <img 
               src={MerakiLogo} 
               alt="Meraki Logo" 
               className="h-10 md:h-14 object-contain" 
             />
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16 px-4">
          
          {/* Other Fests */}
          <div className="flex flex-col gap-3">
            <h3 className="font-pixel text-sm text-white mb-2 tracking-wide">OTHER FESTS</h3>
            <a href="#" className="text-gray-400 hover:text-white text-[10px] md:text-xs font-pixel tracking-widest hover:underline py-1">MRIDANG</a>
            <a href="#" className="text-gray-400 hover:text-white text-[10px] md:text-xs font-pixel tracking-widest hover:underline py-1">ESUMMIT</a>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col gap-3 items-center">
            <h3 className="font-pixel text-sm text-white mb-2 tracking-wide">CONNECT WITH US</h3>
            <div className="flex gap-4">
               {/* Instagram Icon */}
               <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="bg-white text-black p-1.5 rounded hover:scale-110 transition-transform">
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                 </svg>
               </a>
               {/* Mail Icon */}
               <a href="mailto:contact@meraki.iiitu.ac.in" className="bg-white text-black p-1.5 rounded hover:scale-110 transition-transform">
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <rect width="20" height="16" x="2" y="4" rx="2" />
                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-pixel text-sm text-white mb-2 tracking-wide">QUICK LINKS</h3>
            <a href="#" className="text-gray-400 hover:text-white text-[10px] md:text-xs font-pixel tracking-widest hover:underline py-1">HOW TO REACH</a>
            <a href="#" className="text-gray-400 hover:text-white text-[10px] md:text-xs font-pixel tracking-widest hover:underline py-1">COORDINATING TEAM</a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="w-full border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-500 font-pixel-text">
          <p className="mb-2 md:mb-0">© 2025 MERAKI - TechFest IIIT UNA</p>
          <p>Developed by @ DEVTEAM</p>
        </div>

      </div>
    </footer>
  );
};

// --- MAIN APP ---
function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col justify-end">
      <style>{styles}</style>
      <Footer />
    </div>
  );
}

export default App;