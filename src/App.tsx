import { useParticipants } from './hooks/useParticipants';
import { useWichtel } from './hooks/useWichtel';
import { ParticipantInput } from './components/ParticipantInput';
import { ParticipantList } from './components/ParticipantList';
import { WichtelMachine } from './components/WichtelMachine';

function App() {
  const { participants, addParticipant, removeParticipant, markAsReceived, resetReceivedStatus } = useParticipants();
  const { currentWinner, isDrawing, drawNext } = useWichtel(participants, markAsReceived);

  const eligibleCount = participants.filter(p => !p.hasReceived).length;

  return (
    <div className="min-h-screen bg-snow-white text-slate-800 flex flex-col items-center p-4 bg-fixed bg-center" style={{backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)", backgroundSize: "20px 20px"}}>
       
       <header className="mb-8 text-center mt-8">
         <h1 className="text-5xl md:text-7xl font-christmas text-christmas-red drop-shadow-sm">
           Wichtel Select
         </h1>
         <p className="text-christmas-green/80 mt-2 font-medium">
           Der magische Wichtel-Generator
         </p>
       </header>

       <main className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-start justify-center">
         {/* Left Column: Management */}
         <div className="flex-1 w-full flex flex-col items-center md:items-stretch">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 w-full mb-6">
               <h2 className="text-2xl font-bold text-christmas-green mb-4 border-b pb-2">Teilnehmer</h2>
               <ParticipantInput onAdd={addParticipant} />
               <ParticipantList participants={participants} onRemove={removeParticipant} />
               
               {participants.length > 0 && (
                   <div className="mt-8 pt-4 border-t border-gray-100 text-center">
                       <button 
                           onClick={() => {
                               if(confirm('Wirklich alles zurücksetzen? Alle bisherigen Gewinner werden gelöscht / Reset all progress?')) {
                                   resetReceivedStatus();
                               }
                           }}
                           className="text-xs text-red-400 hover:text-red-600 underline"
                       >
                           Status zurücksetzen (Reset Status)
                       </button>
                   </div>
               )}
            </div>
         </div>

         {/* Right Column: The Machine */}
         <div className="flex-1 w-full flex flex-col items-center">
             <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-4 border-christmas-red/10 w-full min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-christmas-gold rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-christmas-gold rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-christmas-gold rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-christmas-gold rounded-br-2xl"></div>
                
                <WichtelMachine 
                    drawNext={drawNext} 
                    currentWinner={currentWinner} 
                    isDrawing={isDrawing} 
                    eligibleCount={eligibleCount}
                />
             </div>
         </div>
       </main>
       
       <footer className="mt-16 text-slate-400 text-sm pb-8">
          Frohe Weihnachten! 🎅
       </footer>
    </div>
  )
}

export default App
