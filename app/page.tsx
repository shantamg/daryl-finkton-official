import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
              Daryl Finkton Jr.
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-300 hover:text-amber-400 transition">About</a>
              <a href="#books" className="text-slate-300 hover:text-amber-400 transition">Books</a>
              <a href="#mission" className="text-slate-300 hover:text-amber-400 transition">Mission</a>
              <a href="#podcast" className="text-slate-300 hover:text-amber-400 transition">Podcast</a>
              <a href="#services" className="text-slate-300 hover:text-amber-400 transition">Services</a>
              <a href="#contact" className="text-slate-300 hover:text-amber-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Daryl Finkton Jr.
          </h1>
          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400 mb-8">
            Strategic Advisor · Visionary Thinker · Advocate for Human Connection in the Age of AI
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Rhodes Scholar, Author, and Former Hedge Fund Manager on a Mission to End Poverty and Make Trillions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition"
            >
              Work With Daryl
            </a>
            <a
              href="#books"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition"
            >
              Read His Books
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            About Daryl
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                From poverty to Rhodes Scholar, Daryl Finkton Jr. embodies the transformative power of education, determination, and strategic thinking.
              </p>
              <p className="text-lg leading-relaxed">
                Educated at <span className="text-amber-400 font-semibold">Harvard College (Neurobiology)</span> and as a <span className="text-amber-400 font-semibold">Rhodes Scholar at Oxford University (Epidemiology & Public Health)</span>, Daryl has built an extraordinary career spanning finance, healthcare, and social impact.
              </p>
              <p className="text-lg leading-relaxed">
                His journey has taken him from co-founding and serving as senior analyst at a <span className="text-blue-400 font-semibold">$200M long/short equity fund</span> to becoming a community organizer focused on poverty eradication, with his work featured in TechCrunch and AfroTech.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Career Highlights</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">▸</span>
                  <span>Venture Partner at FundRx (healthcare VC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">▸</span>
                  <span>Former roles at Genentech, McKinsey & Co., Evolent Health (NYSE: EVH)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">▸</span>
                  <span>CEO of Clean ACWA (clean water NGO in West Africa/Caribbean)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">▸</span>
                  <span>Member of Council for Inclusive Capitalism</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">▸</span>
                  <span>Closed $200M fund for poverty eradication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Books
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Book 1 */}
            <div className="bg-slate-800/70 rounded-xl p-8 border border-slate-700 hover:border-amber-500 transition">
              <h3 className="text-3xl font-bold text-amber-400 mb-4">
                End Poverty. Make Trillions.
              </h3>
              <p className="text-slate-400 mb-2">2023 · Regenerative Publishing</p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Daryl&apos;s groundbreaking work on creating a fiscally and socially responsible movement to help people escape poverty—not through welfare, but through economic empowerment.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.amazon.com/s?k=End+Poverty+Make+Trillions+Daryl+Finkton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Amazon
                </a>
                <a
                  href="https://www.audible.com/search?keywords=End+Poverty+Make+Trillions+Daryl+Finkton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
                >
                  Audible
                </a>
                <a
                  href="https://www.goodreads.com/search?q=End+Poverty+Make+Trillions+Daryl+Finkton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
                >
                  Goodreads
                </a>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-slate-800/70 rounded-xl p-8 border border-slate-700 hover:border-amber-500 transition">
              <h3 className="text-3xl font-bold text-amber-400 mb-4">
                The Language of Liberation
              </h3>
              <p className="text-slate-400 mb-2">A Story and a Critique</p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                An exploration of how language shapes our understanding of freedom, justice, and social change.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.amazon.com/s?k=Language+of+Liberation+Daryl+Finkton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Amazon
                </a>
                <a
                  href="https://www.audible.com/search?keywords=Language+of+Liberation+Daryl+Finkton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
                >
                  Audible
                </a>
                <a
                  href="https://www.goodreads.com/search?q=Language+of+Liberation+Daryl+Finkton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
                >
                  Goodreads
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Mission
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400 mb-8">
              End Poverty. Make Trillions.
            </div>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              This isn&apos;t just a book title—it&apos;s a fiscally and socially responsible movement aimed at helping people escape poverty through economic empowerment, not welfare programs.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Daryl believes that the greatest wealth creation opportunities of our time lie in solving our greatest social challenges. His work bridges the gap between profit and purpose, demonstrating that doing good and doing well are not mutually exclusive.
            </p>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Podcast
          </h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-xl p-12 border border-amber-500/30">
            <h3 className="text-3xl font-bold text-amber-400 mb-6 text-center">
              On Wealth with Daryl Finkton Jr.
            </h3>
            <p className="text-xl text-slate-300 text-center leading-relaxed mb-8">
              Exploring spiritual, mathematical, and practical nuggets on wealth
            </p>
            <p className="text-lg text-slate-400 text-center leading-relaxed">
              Join Daryl as he breaks down the multifaceted nature of wealth—from the inner game of abundance to the outer strategies of wealth creation. Each episode offers actionable insights grounded in both data and wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Work With Daryl
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Strategic Pitch Consulting */}
            <div className="bg-slate-800/70 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Strategic Pitch Consulting
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Refine your message and perfect your pitch. Daryl helps founders and leaders communicate their vision with clarity and impact, drawing on years of experience in finance and entrepreneurship.
              </p>
            </div>

            {/* Human-Centered Collaboration */}
            <div className="bg-slate-800/70 rounded-xl p-8 border border-slate-700 hover:border-amber-500 transition">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">
                Human-Centered Collaboration
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Mentorship that values diverse perspectives and authentic human connection. Build teams and cultures that prioritize empathy, understanding, and sustainable growth.
              </p>
            </div>

            {/* AI Reality Check */}
            <div className="bg-slate-800/70 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                AI Reality Check
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Challenge the misguided rush to automation. Daryl emphasizes human judgment and connection: &quot;In our rush to automate, we&apos;re forgetting how to connect.&quot;
              </p>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-slate-900/70 to-slate-800/70 rounded-xl p-12 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              The Philosophy
            </h3>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                In an era of rapid technological change, Daryl advocates for a balanced approach that leverages innovation while preserving what makes us human.
              </p>
              <p className="text-xl text-amber-400 font-semibold italic text-center py-4">
                &quot;In our rush to automate, we&apos;re forgetting how to connect.&quot;
              </p>
              <p>
                The AI misguidance problem isn&apos;t about technology itself—it&apos;s about losing sight of human judgment, empathy, and the irreplaceable value of genuine human connection in our pursuit of efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Interested in strategic consulting, speaking engagements, or collaboration? Let&apos;s connect.
          </p>
          <div className="bg-slate-800/70 rounded-xl p-12 border border-slate-700">
            <p className="text-lg text-slate-300 mb-8">
              For speaking engagements, consulting inquiries, or media requests, please reach out through professional channels or via his published work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#books"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition"
              >
                Read His Books
              </a>
              <a
                href="#podcast"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition"
              >
                Listen to the Podcast
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            © 2026 Daryl Finkton Jr. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Rhodes Scholar · Author · Strategic Advisor
          </p>
        </div>
      </footer>
    </main>
  );
}
