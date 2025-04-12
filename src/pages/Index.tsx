
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-vintage-burgundy">Vintage Vibes</h1>
        <p className="text-lg text-vintage-sepia italic">Experience music as it was meant to be heard</p>
      </header>
      
      <main className="w-full max-w-5xl">
        <MusicPlayer />
      </main>
      
      <footer className="mt-12 text-center text-vintage-sepia/70 text-sm">
        <p>Vinyl Grooves Nostalgia Player &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
