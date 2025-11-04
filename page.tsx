// app/page.jsx (ou app/page.js)

// Importa os componentes ou bibliotecas que você pode usar
// app/page.tsx (no TOPO)
import ExitPopup from '@/components/ExitPopup'; // USANDO O ALIAS @/
// Para este exemplo, usamos classes Tailwind para simular o visual.
// Função principal da sua Landing Page
export default function LandingPageDDG() {
    
    // Configurações e links (fácil de editar aqui em cima)
    const CHECKOUT_LINK = "[LINK_DO_CHECKOUT]";
    
    return (
        // min-h-screen: Garante que o fundo preto cubra a tela toda.
        <div className="min-h-screen bg-black text-white antialiased">
            
            {/* 1. HEADLINE MAGNÉTICA (HERO) */}
            <section className="relative pt-24 pb-20 text-center overflow-hidden 
                                bg-gradient-to-b from-black to-gray-900 
                                border-b-4 border-orange-600">
                
                {/* Elemento Geométrico de Destaque no Canto (Simulação do "Não Quadrado") */}
                <div className="absolute top-0 left-0 w-36 h-36 bg-orange-500 opacity-10 
                                rounded-br-[100px] z-0"></div>

                <p className="text-xl font-semibold text-orange-500 tracking-widest uppercase mb-4 relative z-10">
                    VOCÊ ESTÁ COMETENDO O MAIOR ERRO DE VENDAS DO SÉCULO
                </p>
                
                <h1 className="font-extrabold text-5xl sm:text-7xl lg:text-8xl leading-tight 
                                max-w-5xl mx-auto mb-6 relative z-10">
                    LEAD NÃO É PRA SER RESPONDIDA, 
                    <strong className="text-orange-500 block">LEAD É PRA SER TRABALHADA.</strong>
                </h1>
                
                <p className="text-2xl font-light max-w-3xl mx-auto text-gray-400 relative z-10">
                    Descubra as táticas de Insistência Inteligente que transformam cliques frios em vendas fechadas e <span className="font-bold">multiplicam seu salário por 5.</span>
                </p>
                
                <a href={CHECKOUT_LINK} className="inline-block bg-orange-600 text-black font-extrabold text-2xl 
                                                    py-4 px-12 rounded-lg mt-8 uppercase 
                                                    shadow-lg shadow-orange-500/50 hover:bg-orange-500 
                                                    transform transition duration-300 hover:-translate-y-1">
                    QUERO MULTIPLICAR MINHAS VENDAS AGORA!
                </a>
            </section>
            
            {/* 2. CAPA DO EBOOK E PROVA DE VALOR (Efeito Flutuante - Traduzido para Tailwind) */}
            <section className="bg-gray-900 pt-20 pb-2 text-center relative">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 px-4">
                    
                    {/* Imagem Flutuante: translate-y-8/12 faz a imagem invadir a seção acima, 
                        quebrando a linearidade do bloco. */}
                    <img 
                        src="[URL_IMAGEM_CAPA_EBOOK_ALTA_QUALIDADE]" 
                        alt="Capa do E-book Lead Não é Pra Ser Respondida" 
                        className="w-72 flex-shrink-0 rounded-lg shadow-2xl shadow-orange-700/50 
                                    transform translate-y-8 md:translate-y-12 
                                    border-4 border-orange-500 transition duration-300 hover:scale-[1.02] 
                                    relative z-10"
                    />

                    {/* Texto ao lado do Ebook */}
                    <div className="text-left max-w-lg md:mt-0 mt-8">
                        <h3 className="text-4xl font-bold text-orange-500 mb-4">
                            Este E-book Contém o Método Que Você Precisa Para Parar de Perder Dinheiro
                        </h3>
                        <p className="text-lg text-gray-300">
                            Este não é um livro de teoria. São mais de **10 anos de experiência** destilados em um checklist prático. [cite_start]Pare de perder o que é seu por direito: **a comissão**[cite: 58].
                        </p>
                    </div>
                </div>
            </section>
            
            {/* 3. AUTORIDADE (Box Laranja e Responsiva) */}
            <section className="py-24 px-4 bg-black text-center">
                <div className="max-w-4xl mx-auto p-10 bg-gray-900 rounded-xl 
                                border border-orange-500 shadow-2xl shadow-orange-500/10 
                                rounded-br-[40px] rounded-bl-[40px]">
                    
                    <img 
                        src="[URL_IMAGEM_DIEGO_TEIXEIRA_ALTA_QUALIDADE]" 
                        alt="Diego Teixeira, Especialista em Vendas" 
                        className="w-40 h-40 rounded-full object-cover border-4 border-orange-500 mx-auto mb-6"
                    />
                    
                    <h2 className="text-3xl font-extrabold mb-4">
                        [cite_start]Diego Teixeira: O Especialista Que Não Leu Livros, Vendeu Na Prática[cite: 58].
                    </h2>
                    
                    <p className="text-lg text-gray-400 mb-8">
                        [cite_start]Proprietário da Ofir Automóveis Niterói desde 2016 e com experiência comprovada desde 2012[cite: 66, 57], ele compartilha aqui os segredos práticos e reais que o fizeram alcançar o sucesso.
                    </p>
                    
                    <p className="text-2xl font-bold text-green-400 bg-green-900/40 p-4 rounded-lg">
                        [cite_start]ATENÇÃO: Se você trata todas as suas leads da mesma forma, você está **literalmente jogando dinheiro fora** e perdendo o máximo valor de cada lead[cite: 114, 105].
                    </p>
                </div>
            </section>
{/* 4. TRANSFORMAÇÃO E BENEFÍCIOS (Tailwind GRID) */}
            <section className="py-24 px-4 bg-gray-900 border-t-8 border-black">
                <h2 className="text-5xl font-extrabold text-orange-500 text-center mb-16">
                    O Que Você Vai Conquistar Com a Insistência Inteligente
                </h2>
                
                {/* GRID: Define 3 colunas no desktop (lg:grid-cols-3) e 2 no tablet (md:grid-cols-2) */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Item de Benefício 1 */}
                    <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-orange-500 
                                        shadow-xl shadow-orange-500/10 transition duration-300 hover:scale-[1.03] hover:bg-gray-700">
                        <h3 className="text-2xl font-bold mb-3">Saber o Tempo Certo</h3>
                        <p className="text-gray-400">Descubra como identificar leads Quentes, Mornas e Frias e aplicar a estratégia correta para cada tipo. Pare de desperdiçar tempo e foco. [cite: 112, 114, 157]</p>
                    </div>
                    
                    {/* Item de Benefício 2 */}
                    <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-orange-500 
                                        shadow-xl shadow-orange-500/10 transition duration-300 hover:scale-[1.03] hover:bg-gray-700">
                        <h3 className="text-2xl font-bold mb-3">Primeiro Contato Estratégico</h3>
                        <p className="text-gray-400">Aprenda a regra de ouro: **Ligue Primeiro**! [cite: 170] Use a mensagem de WhatsApp que quebra a barreira inicial. [cite: 174, 183]</p>
                    </div>

                    {/* Item de Benefício 3 */}
                    <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-orange-500 
                                        shadow-xl shadow-orange-500/10 transition duration-300 hover:scale-[1.03] hover:bg-gray-700">
                        <h3 className="text-2xl font-bold mb-3">Insistência Sem ser Chato</h3>
                        <p className="text-gray-400">Use a Insistência Estratégica [cite: 136] para trabalhar o cliente que não responde. Varie a abordagem (foto/vídeo/áudio) [cite: 228, 229] para manter o cliente atento. [cite: 219]</p>
                    </div>

                    {/* Item de Benefício 4 */}
                    <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-orange-500 
                                        shadow-xl shadow-orange-500/10 transition duration-300 hover:scale-[1.03] hover:bg-gray-700">
                        <h3 className="text-2xl font-bold mb-3">Domínio das Objeções</h3>
                        <p className="text-gray-400">Entenda que a objeção não é um "não definitivo", é um pedido de clareza ou segurança. [cite: 249, 257] Reforce o valor antes de mexer no preço. [cite: 255, 258]</p>
                    </div>

                    {/* Item de Benefício 5 */}
                    <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-orange-500 
                                        shadow-xl shadow-orange-500/10 transition duration-300 hover:scale-[1.03] hover:bg-gray-700">
                        <h3 className="text-2xl font-bold mb-3">Foco no Fechamento</h3>
                        <p className="text-gray-400">Quando o cliente atender, é "a hora do show"[cite: 231]. Direcione a conversa sempre para o próximo passo: visita, vídeo ou entrega. [cite: 243, 246, 247]</p>
                    </div>

                    {/* Item de Benefício 6 */}
                    <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-orange-500 
                                        shadow-xl shadow-orange-500/10 transition duration-300 hover:scale-[1.03] hover:bg-gray-700">
                        <h3 className="text-2xl font-bold mb-3">Faturamento Multiplicado</h3>
                        <p className="text-gray-400">O resultado da disciplina: você terá o método para duplicar, triplicar ou até multiplicar por cinco o que ganha hoje. [cite: 72, 274]</p>
                    </div>

                </div>
            </section>
            {/* 5. PROVA SOCIAL (DEPOIMENTOS EM GRID) */}
            <section className="py-24 px-4 bg-black text-center border-t-8 border-gray-900">
                <h2 className="text-5xl font-extrabold text-white text-center mb-16 font-montserrat">
                    Eles Aplicaram o Método e Tiveram <strong className="text-orange-500">Resultados Reais</strong>
                </h2>

                {/* GRID: 2 colunas para depoimentos (md:grid-cols-2) */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Testemunho 1 */}
                    <div className="bg-gray-900 p-8 rounded-xl border-t-4 border-green-500 
                                        shadow-lg shadow-green-500/10 transition duration-300 hover:scale-[1.01] hover:bg-gray-800 text-left">
                        <p className="text-2xl italic mb-4 text-gray-200">
                            "O script de ligação antes do WhatsApp mudou meu jogo. A clareza do Diego é inacreditável. O método funciona de forma prática e imediata."
                        </p>
                        <span className="font-bold text-orange-500 block">Mariana S.</span>
                        <span className="text-sm text-gray-500">Corretora de Imóveis, São Paulo/SP</span>
                    </div>

                    {/* Testemunho 2 */}
                    <div className="bg-gray-900 p-8 rounded-xl border-t-4 border-green-500 
                                        shadow-lg shadow-green-500/10 transition duration-300 hover:scale-[1.01] hover:bg-gray-800 text-left">
                        <p className="text-2xl italic mb-4 text-gray-200">
                            "Eu sempre desistia no primeiro silêncio. O Checklist de Acompanhamento me deu a disciplina que faltava. Fechei uma lead fria de 60 dias! Vale cada centavo."
                        </p>
                        <span className="font-bold text-orange-500 block">Felipe A.</span>
                        <span className="text-sm text-gray-500">Vendas B2B/Software, Recife/PE</span>
                    </div>

                </div>
            </section>
            
            {/* 6. MÉTRICAS DO AUTOR (Destaque dos Números) */}
            <section className="py-24 px-4 bg-gray-900 text-center">
                <h3 className="text-4xl font-extrabold mb-12 font-montserrat">
                    A Experiência do Autor Que Está Por Trás Deste Método
                </h3>
                
                {/* GRID: 2 colunas para Métricas (md:grid-cols-2) */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Métrica 1 */}
                    <div className="bg-black p-8 rounded-xl border-b-4 border-orange-500 shadow-xl">
                        <p className="text-7xl font-extrabold text-orange-500 font-montserrat">+10</p>
                        <p className="text-xl text-white mt-2">Anos de Experiência em Vendas</p>
                    </div>

                    {/* Métrica 2 */}
                    <div className="bg-black p-8 rounded-xl border-b-4 border-orange-500 shadow-xl">
                        <p className="text-7xl font-extrabold text-orange-500 font-montserrat">2016</p>
                        <p className="text-xl text-white mt-2">Proprietário de Loja e Empreendedor</p>
                    </div>

                </div>
            </section>
            {/* 7. OFERTA IRRESISTÍVEL COM PREÇO E GARANTIA (CTA CENTRAL) */}
            <section id="oferta" className="py-24 px-4 bg-black text-center">
                <h2 className="text-4xl font-extrabold mb-8">Adquira Agora e Transforme Suas Leads em Vendas</h2>

                <div className="max-w-lg mx-auto bg-gray-900 p-10 rounded-2xl 
                                border-4 border-orange-600 shadow-2xl shadow-orange-700/50">
                    <p className="text-lg text-gray-400 line-through">De R$ 97,00</p>
                    <p className="font-extrabold text-7xl text-orange-500 leading-none my-2">R$ 29,90</p>
                    <span className="text-xl font-light text-gray-300 block mb-6">(E-book Completo - Acesso Imediato)</span>
                    
                    <a href={CHECKOUT_LINK} className="inline-block bg-orange-600 text-black font-extrabold text-2xl 
                                                    py-4 px-12 rounded-lg mt-8 uppercase w-full
                                                    shadow-lg shadow-orange-500/50 hover:bg-orange-500 
                                                    transform transition duration-300 hover:-translate-y-1">
                        SIM! QUERO O MÉTODO POR R$ 29,90
                    </a>
                    
                    <p className="mt-6 text-sm text-green-500 font-bold">
                        {/* Ícone de Cadeado (Exige importação de biblioteca de ícones ou uso de HTML puro, mas mantemos o texto para simplificar) */}
                        <span className="mr-2">🔒</span>
                        **Garantia Total de 7 Dias**: Risco Zero.
                    </p>
                </div>
            </section>
            
            {/* 8. CTA FINAL (REPETIÇÃO DA OFERTA) */}
            <section className="py-16 px-4 bg-gray-900 text-center border-t border-orange-600">
                <h2 className="text-3xl font-bold mb-4">Não Perca Mais Tempo e Dinheiro. Sua Transformação Começa Agora.</h2>
                <a href={CHECKOUT_LINK} className="inline-block bg-orange-600 text-black font-extrabold text-2xl 
                                                    py-4 px-12 rounded-lg mt-4 uppercase 
                                                    shadow-lg shadow-orange-500/50 hover:bg-orange-500 
                                                    transform transition duration-300 hover:-translate-y-1">
                    EU QUERO MULTIPLICAR MINHAS VENDAS COM ESTE MÉTODO
                </a>
            </section>

            {/* 9. RODAPÉ (FOOTER) */}
            <footer className="py-10 px-4 bg-gray-800 text-center text-sm text-gray-400">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-4 space-x-4">
                        <a href="[LINK_POLITICA_PRIVACIDADE]" className="hover:text-orange-500 transition duration-150">Política de Privacidade</a>
                        <span>|</span>
                        <a href="[LINK_TERMOS_DE_USO]" className="hover:text-orange-500 transition duration-150">Termos de Uso</a>
                        <span>|</span>
                        <a href="[LINK_CONTATO_SUPORTE]" className="hover:text-orange-500 transition duration-150">Suporte/Contato</a>
                    </div>

                    <div className="mb-2">
                        <span>Vendido e Distribuído por [Nome da Empresa de Diego Teixeira]</span>
                        <span> | CNPJ: [Número do CNPJ] | E-mail: contato@dominiodasvendas.com.br</span>
                    </div>

                    <div className="text-xs text-gray-500">
                        &copy; 2024. Lead Não é Pra Ser Respondida. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
          {/* 10. COMPONENTE AVANÇADO: POP-UP DE SAÍDA */}
        <ExitPopup />

        </div>
    )
}