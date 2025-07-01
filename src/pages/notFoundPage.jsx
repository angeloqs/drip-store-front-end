import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-7xl font-bold mb-4 glitch" data-text="404">404</h1>
        <p className="text-xl md:text-2xl mb-8">
          Oops! Parece que você entrou em um link perdido...
        </p>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-semibold transition-all transform hover:scale-105"
        >
          Retornar a página anterior
        </button>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-12 w-full max-w-md text-center"
      >
        <p className="text-gray-400 italic">
          O desenvolvedor está ciente do problema e já está trabalhando para solucioná-lo.
        </p>
      </motion.div>

      <footer className="mt-16 text-sm text-gray-600">
        &copy; 2025 Digital Store - Todos os direitos reservados 💎
      </footer>
    </div>
  );
};

export default NotFoundPage;