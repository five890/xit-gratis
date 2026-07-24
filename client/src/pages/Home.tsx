import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Lock, LockOpen } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Design Philosophy: Minimalist Key Reveal Page
 * - Central card with glassmorphism effect
 * - Progressive revelation: button click → key + link appear
 * - Color scheme: Deep blue (trust) + green (success) + white (clarity)
 * - Smooth animations for reveal and copy feedback
 * - Mobile-responsive with generous spacing
 */
export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const key = "BO93-V22E-C3H6";
  const activationLink = "https://freefireproxy.com.br/ativar/BO93-V22E-C3H6";

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(key);
    toast.success("Chave copiada!", {
      description: "Cole em seu navegador para ativar.",
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(activationLink);
    toast.success("Link copiado!", {
      description: "Abra o link para ativar sua chave.",
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
      style={{
        backgroundImage: "url('/manus-storage/hero-background_e02cd871.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header with Logo */}
      <div className="mb-12 text-center">
        <div className="flex justify-center mb-4">
          <img
            src="/manus-storage/logo-lock_d3444f2f.png"
            alt="Logo"
            className="w-16 h-16 drop-shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
          Sua Chave Está Pronta
        </h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto">
          Clique para revelar sua chave de ativação e comece a jogar agora mesmo
        </p>
      </div>

      {/* Main Card */}
      <Card className="w-full max-w-md backdrop-blur-xl bg-white/95 border border-white/20 shadow-2xl p-8 md:p-10">
        {/* Lock Icon */}
        <div className="flex justify-center mb-8">
          {revealed ? (
            <div className="animate-in fade-in duration-300">
              <LockOpen className="w-16 h-16 text-green-500" />
            </div>
          ) : (
            <Lock className="w-16 h-16 text-slate-400" />
          )}
        </div>

        {/* Reveal Button or Key Display */}
        {!revealed ? (
          <div className="space-y-4">
            <p className="text-center text-slate-600 text-sm mb-6">
              Sua chave está segura. Clique abaixo para revelar.
            </p>
            <Button
              onClick={handleReveal}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-150 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Revelar Chave
            </Button>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Key Display */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-xs text-slate-500 mb-2 font-medium">CHAVE DE ATIVAÇÃO</p>
              <div className="flex items-center justify-between gap-3">
                <code className="text-lg md:text-xl font-mono font-bold text-slate-900 break-all">
                  {key}
                </code>
                <button
                  onClick={handleCopyKey}
                  className="flex-shrink-0 p-2 hover:bg-slate-200 rounded-md transition-colors duration-150"
                  title="Copiar chave"
                >
                  <Copy className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Activation Link */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-xs text-green-700 mb-2 font-medium">LINK DE ATIVAÇÃO</p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={activationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-green-600 hover:text-green-700 font-medium truncate"
                >
                  Ativar Agora →
                </a>
                <button
                  onClick={handleCopyLink}
                  className="flex-shrink-0 p-2 hover:bg-green-200 rounded-md transition-colors duration-150"
                  title="Copiar link"
                >
                  <Copy className="w-5 h-5 text-green-600" />
                </button>
              </div>
            </div>

            {/* Action Button */}
            <Button
              asChild
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-150 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              <a href={activationLink} target="_blank" rel="noopener noreferrer">
                Abrir Link de Ativação
              </a>
            </Button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-500 text-center">
            Sua chave é pessoal e intransferível. Não compartilhe com outros.
          </p>
        </div>
      </Card>

      {/* Footer Text */}
      <div className="mt-12 text-center">
        <p className="text-sm text-slate-600">
          Problemas? Acesse o{" "}
          <a
            href="https://freefireproxy.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium underline"
          >
            suporte
          </a>
        </p>
      </div>
    </div>
  );
}
