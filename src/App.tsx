import { useParticipants } from './hooks/useParticipants';
import { useWichtel } from './hooks/useWichtel';
import { ParticipantInput } from './components/ParticipantInput';
import { ParticipantList } from './components/ParticipantList';
import { WichtelMachine } from './components/WichtelMachine';
import { useEffect, useState } from 'react';

function App() {
  const { participants, addParticipant, removeParticipant, markAsReceived, resetReceivedStatus } = useParticipants();
  const { currentWinner, isDrawing, drawNext } = useWichtel(participants, markAsReceived);

  const eligibleCount = participants.filter(p => !p.hasReceived).length;
  
  // Custom Snowflake logic
  const [snowflakes, setSnowflakes] = useState<number[]>([]);
  useEffect(() => {
      setSnowflakes(Array.from({ length: 50 }, (_, i) => i));
  }, []);

  return (
    <div className="min-h-screen bg-winter-gradient bg-fixed text-white relative overflow-hidden font-sans selection:bg-christmas-red selection:text-white">
       
       {/* Background Snowflakes */}
       {snowflakes.map(i => (
           <div 
               key={i} 
               className="snowflake text-white/20" 
               style={{
                   left: `${Math.random() * 100}vw`,
                   animationDuration: `${Math.random() * 5 + 5}s`,
                   animationDelay: `${Math.random() * 5}s`,
                   fontSize: `${Math.random() * 1.5 + 0.5}rem`
               }}
            >
               ❄
           </div>
       ))}

       <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center min-h-screen">
          <header className="mb-12 text-center animate-float">
            <h1 className="text-6xl md:text-8xl font-christmas text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-christmas-red to-red-600 drop-shadow-lg p-2">
              Wichtel Select
            </h1>
            <p className="text-gray-300 mt-2 font-light tracking-widest uppercase text-sm">
              Premium Secret Santa Experience
            </p>
          </header>

          <main className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            
            {/* Left Panel: Management */}
            <div className="glass rounded-3xl p-8 flex flex-col gap-6 transform transition-all hover:scale-[1.01] hover:shadow-2xl hover:border-white/30">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span>👥</span> Participants
                    </h2>
                    <span className="text-sm px-3 py-1 bg-white/10 rounded-full font-mono text-christmas-green border border-christmas-green/20">
                        Total: {participants.length}
                    </span>
                </div>

                <ParticipantInput onAdd={addParticipant} />
                <ParticipantList participants={participants} onRemove={removeParticipant} />
                
                {participants.length > 0 && (
                   <div className="mt-auto pt-6 border-t border-white/10 text-center">
                       <button 
                           onClick={() => {
                               if(confirm('Are you sure you want to reset everything?')) {
                                   resetReceivedStatus();
                               }
                           }}
                           className="text-xs text-red-400 hover:text-red-300 transition-colors uppercase tracking-wider font-semibold"
                       >
                           Reset All Progress
                       </button>
                   </div>
               )}
            </div>

            {/* Right Panel: The Machine */}
            <div className="relative">
                <div className="glass rounded-3xl p-10 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden border border-christmas-gold/20 shadow-christmas-gold/10">
                     {/* Decorative Golden Glow */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-christmas-gold/20 rounded-full blur-[100px] -z-10"></div>
                     
                     <WichtelMachine 
                        drawNext={drawNext} 
                        currentWinner={currentWinner} 
                        isDrawing={isDrawing} 
                        eligibleCount={eligibleCount}
                    />
                </div>
            </div>

          </main>
          
          <footer className="mt-auto pt-16 text-white/30 text-sm font-light">
             Refined for the Holiday Season 🎄
          </footer>
       </div>
    </div>
  )
}

export default App
