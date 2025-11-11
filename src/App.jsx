import { ExternalLink, Mail, MessageCircle } from 'lucide-react'

function App() {
  const googleFormUrl = 'https://forms.gle/your-form-id' // Replace with your actual Google Form URL
  const whatsappChannelUrl = 'https://whatsapp.com/channel/your-channel-id' // Replace with your actual WhatsApp Channel URL

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/30 via-black to-black" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-28 md:py-32">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs sm:text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              New Movement for Pro Wrestling in Indonesia
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Indonesia <span className="text-red-500">Pro Wrestling</span>
            </h1>

            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
              Building the future of pro wrestling in Indonesia — a community, a platform, and a spotlight for athletes and fans. Join us to get early updates and be part of the movement.
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto">
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 active:bg-red-700 text-white px-6 py-3 text-base font-semibold transition-colors shadow-lg shadow-red-600/20"
              >
                <Mail className="h-5 w-5" />
                Join Subscription List
                <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black hover:bg-white/90 active:bg-white/80 px-6 py-3 text-base font-semibold transition-colors border border-white/10"
              >
                <MessageCircle className="h-5 w-5" />
                Join Our WhatsApp Channel
                <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between text-white/60 text-sm">
        <span>© {new Date().getFullYear()} Indonesia Pro Wrestling</span>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          Built for the community
        </div>
      </footer>
    </div>
  )
}

export default App
