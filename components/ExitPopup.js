// components/ExitPopup.tsx

import React, { useState, useEffect } from 'react';

// LINK OBRIGATÓRIO: Substitua pelo seu link de checkout
const CHECKOUT_LINK = "[LINK_DO_CHECKOUT_AQUI]";

// ===============================================
// Componente: ExitPopup (Motor de Rastreamento)
// ===============================================
export default function ExitPopup() {
    
    // O Pop-up começa FECHADO (false) e a lógica de mouse o abre
    const [isOpen, setIsOpen] = useState(false); 
    
    // Lógica do Exit Intent: Monitora o mouse
    useEffect(() => {
        
        const handleMouseMove = (e: MouseEvent) => {
            // e.clientY < 50: Mouse nas 50px superiores (indicando que vai fechar a aba)
            if (e.clientY < 50 && !isOpen) {
                setIsOpen(true);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Limpeza: Essencial para o React
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isOpen]); 
    
    // Se não estiver aberto, não retorna nada
    if (!isOpen) {
        return null;
    }

    // Função para fechar o pop-up
    const closePopup = () => setIsOpen(false);

    // Estrutura Visual do Pop-up (Tailwind CSS)
    return (
        // Overlay (Fundo Fixo e Escurecido, Z-INDEX ALTO para ficar por cima de tudo)
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center 
                        z-50 transition-opacity duration-300">
            
            {/* Conteúdo do Pop-up (Card) */}
            <div className={`bg-gray-900 p-8 rounded-xl max-w-lg w-11/12 text-center relative 
                             border-4 border-orange-600 shadow-2xl shadow-orange-700/70 
                             transform transition duration-500 ease-out scale-100 opacity-100`} 
                 onClick={(e) => e.stopPropagation()}> 
                
                {/* Botão de Fechar */}
                <button 
                    onClick={closePopup} 
                    className="absolute top-2 right-4 text-3xl font-light text-white 
                                hover:text-orange-500 transition duration-150">
                    &times;
                </button>
                
                <p className="text-4xl font-extrabold text-red-500 mb-2 font-montserrat">
                    ALERTA: VOCÊ ESTÁ SAINDO!
                </p>
                <p className="text-xl font-light text-gray-200 mb-6">
                    Não perca a sua **ÚLTIMA CHANCE** de ter acesso ao método que **multiplicará suas vendas** por este preço:
                </p>
                
                {/* Destaque da Oferta */}
                <div className="my-4">
                    <p className="text-lg text-gray-400 line-through">De R$ 97,00</p>
                    <p className="font-extrabold text-5xl text-orange-500 leading-none">R$ 29,90</p>
                </div>
                
                {/* CTA do Pop-up */}
                <a href={CHECKOUT_LINK} className="inline-block bg-orange-600 text-black font-extrabold text-xl 
                                                    py-3 px-8 rounded-lg mt-4 uppercase w-full
                                                    shadow-lg shadow-orange-500/50 hover:bg-orange-500 
                                                    transform transition duration-300">
                    EU QUERO A OFERTA EXCLUSIVA DE R$ 29,90
                </a>
            </div>
        </div>
    );
}