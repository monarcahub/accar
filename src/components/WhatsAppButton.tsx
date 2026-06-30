import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";
import { APP_CONFIG } from "../constants";

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={`https://wa.me/${APP_CONFIG.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <div className="absolute -top-12 left-0 bg-white text-dark px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100 italic">
        Agende agora via WhatsApp!
      </div>
      <MessageSquare fill="currentColor" />
    </motion.a>
  );
}
