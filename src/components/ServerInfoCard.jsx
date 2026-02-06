import React from 'react';

const ServerInfoCard = () => {
    return (
        <div className="bg-[#111] border-4 border-[#333] p-4 sm:p-6 font-terminal shadow-xl w-full max-w-sm mx-auto lg:mx-0">
            {/* Header */}
            <div className="border-b-2 border-dashed border-[#444] pb-4 mb-4 flex justify-between items-center">
                <span className="text-cyan-400 text-xs sm:text-sm tracking-widest font-bold">
                    [ SERVER INFO ]
                </span>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                    <div className="w-2.5 h-2.5 bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                </div>
            </div>

            {/* Dashed Line Separator */}
            <div className="border-t border-dashed border-gray-700 opacity-50 mb-5"></div>

            {/* Server Details Grid */}
            <div className="space-y-4 text-xs sm:text-sm mb-6">
                <div className="flex justify-between items-center group">
                    <span className="text-gray-500 font-mono tracking-wider group-hover:text-gray-400 transition-colors">HOST</span>
                    <span className="text-white font-bold tracking-widest">IIIT UNA</span>
                </div>
                <div className="flex justify-between items-center group">
                    <span className="text-gray-500 font-mono tracking-wider group-hover:text-gray-400 transition-colors">REALM</span>
                    <span className="text-cyan-400 font-bold tracking-widest">MERAKI</span>
                </div>
                <div className="flex justify-between items-center group">
                    <span className="text-gray-500 font-mono tracking-wider group-hover:text-gray-400 transition-colors">REGION</span>
                    <span className="text-white font-bold tracking-widest">INDIA_HP</span>
                </div>
            </div>

            {/* Separator Line */}
            <div className="h-px bg-gray-800 my-5"></div>

            {/* Status Indicators */}
            <div className="space-y-3">
                {/* Status Box */}
                <div className="flex justify-between items-center bg-[#151515] p-3 border border-[#333] hover:border-[#444] transition-colors">
                    <span className="text-gray-400 text-xs tracking-wider">STATUS</span>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                        <span className="text-emerald-400 font-bold tracking-widest text-xs">ONLINE</span>
                    </div>
                </div>

                {/* Ping Box */}
                <div className="flex justify-between items-center bg-[#151515] p-3 border border-[#333] hover:border-[#444] transition-colors">
                    <span className="text-gray-400 text-xs tracking-wider">PING</span>
                    <span className="text-emerald-400 font-bold tracking-widest text-xs">12ms</span>
                </div>
            </div>

            {/* Footer Dashed Line */}
            <div className="mt-6 mb-3 border-t-2 border-dashed border-[#333] opacity-60"></div>

            {/* Footer Text */}
            <div className="text-[10px] sm:text-xs text-center text-gray-500 font-mono opacity-70">
        // READY TO CONNECT...
            </div>
        </div>
    );
};

export default ServerInfoCard;
