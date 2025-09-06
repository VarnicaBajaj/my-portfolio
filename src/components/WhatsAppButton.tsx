import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/+919717146156"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;