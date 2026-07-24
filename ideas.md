# Página de Ativação de Chave - Estratégia de Design

## Conceito Escolhido: **Revelação Minimalista com Foco**

### Design Movement
Minimalismo moderno com influências de design de interface de segurança/autenticação. Inspirado em plataformas como Steam, Epic Games e serviços de ativação de chaves premium.

### Core Principles
1. **Clareza Absoluta**: Cada elemento tem um propósito. Sem distrações visuais.
2. **Progressão Controlada**: O usuário descobre a informação em etapas (botão → revelação).
3. **Segurança Visual**: Paleta que transmite confiabilidade e proteção.
4. **Impacto Emocional**: O momento da revelação deve ser satisfatório e memorável.

### Color Philosophy
- **Primária**: Azul profundo (`oklch(0.5 0.15 260)`) - transmite confiança, segurança, tecnologia
- **Secundária**: Branco/Off-white (`oklch(0.97 0.005 80)`) - clareza, simplicidade
- **Destaque**: Verde vibrante (`oklch(0.7 0.2 140)`) - sucesso, ativação, energia
- **Fundo**: Gradiente sutil de cinza claro para branco - profundidade sem ruído

### Layout Paradigm
- **Hero Section Centralizado**: Card flutuante no centro da tela com sombra profunda
- **Composição Vertical**: Informação flui de cima para baixo (título → descrição → botão → revelação)
- **Espaçamento Generoso**: Muito ar ao redor do card para isolar o foco
- **Responsivo Elegante**: Em mobile, o card expande mas mantém proporções

### Signature Elements
1. **Card com Glassmorphism Sutil**: Fundo semi-transparente com backdrop blur, borda delicada
2. **Ícone de Cadeado**: Animado que se "abre" quando a chave é revelada
3. **Efeito de Cópia**: Feedback visual quando a chave é copiada (toast com checkmark)

### Interaction Philosophy
- **Botão Primário**: Transição suave ao hover (escala + sombra aumentada)
- **Revelação Animada**: A chave e o link aparecem com fade-in + slide-up (200ms)
- **Feedback de Cópia**: Toast discreto no canto inferior direito
- **Estados Visuais Claros**: Hover, active, disabled bem definidos

### Animation
- **Entrada da Página**: Fade-in do card com scale(0.95) → scale(1) em 400ms
- **Revelação da Chave**: Fade-in + translateY(-10px) em 250ms com ease-out
- **Hover do Botão**: Scale(1.02) + shadow elevation em 150ms
- **Cópia**: Pulse suave da chave + toast notification em 300ms
- **Respeitar prefers-reduced-motion**: Desabilitar animações para usuários que solicitarem

### Typography System
- **Display/Título**: Fonte sans-serif bold (peso 700), tamanho 32px em desktop, 24px mobile
- **Descrição**: Fonte sans-serif regular (peso 400), tamanho 16px, line-height 1.6
- **Chave/Código**: Fonte monospace (ex: `JetBrains Mono` ou similar), tamanho 18px, weight 600
- **CTA/Botão**: Fonte sans-serif medium (peso 600), tamanho 16px

### Brand Essence
**Posicionamento**: Plataforma de ativação de chaves segura, intuitiva e rápida para gamers.
**Personalidade**: Confiável, moderno, direto, sem floreios.

### Brand Voice
- **Headlines**: Diretas e motivadoras (ex: "Sua chave está pronta", "Ative agora mesmo")
- **CTAs**: Ação clara (ex: "Revelar Chave", "Copiar e Ativar")
- **Microcopy**: Tom amigável mas profissional (ex: "Clique para revelar sua chave de ativação")
- **Exemplo de linha**: "Seu acesso começa aqui" ou "Chave segura, ativação rápida"

### Wordmark & Logo
- **Ícone**: Símbolo de cadeado aberto com uma chave integrada, em azul profundo
- **Sem texto**: Apenas o símbolo gráfico, limpo e escalável

### Signature Brand Color
**Azul Profundo** (`oklch(0.5 0.15 260)`) - cor que é imediatamente associada a segurança e ativação.

---

## Implementação

Este design será implementado com:
- React + Tailwind CSS 4
- Componentes shadcn/ui para consistência
- Animações com Framer Motion para fluidez
- Feedback visual com sonner (toasts)
- Responsividade mobile-first
