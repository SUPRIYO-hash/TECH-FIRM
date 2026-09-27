import { useState } from "react";
import { 
  ArrowLeft, ExternalLink, Laptop, Tablet, Smartphone, Calendar, 
  Clock, MapPin, Phone, Check, ChevronRight, X, Sparkles, Send, Shield
} from "lucide-react";
import { ProjectItem } from "../data/projects";
import { SITE_CONFIG } from "../config/siteConfig";

interface LiveProjectViewProps {
  project: ProjectItem;
  onClose: () => void;
}

export function LiveProjectView({ project, onClose }: LiveProjectViewProps) {
  const [deviceScale, setDeviceScale] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeTab, setActiveTab] = useState("overview");

  // Specific state for Aura Wellness
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState("Cellular Glow Facial (60 min - ₹2,400)");

  // Specific state for Kaviar Bistro
  const [menuTab, setMenuTab] = useState<"brunch" | "dinner" | "coffee">("brunch");
  const [tableReserveOpen, setTableReserveOpen] = useState(false);
  const [tablePartySize, setTablePartySize] = useState("2 Guests");
  const [reserveSuccess, setReserveSuccess] = useState(false);

  // Specific state for Apex Logistics
  const [freightWeight, setFreightWeight] = useState("2,500 kg");
  const [freightType, setFreightType] = useState("Refrigerated Cold Chain");
  const [calcQuote, setCalcQuote] = useState<string | null>(null);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReserveSuccess(true);
  };

  const handleCalcQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setCalcQuote("₹18,400 – ₹22,000 (Estimated SLA 24-hr transit)");
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#06090F] flex flex-col text-neutral-200 overflow-hidden animate-in fade-in duration-200">
      {/* Top Staging Control Bar */}
      <header className="px-4 py-2.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between gap-4 shrink-0 text-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 text-white font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to {SITE_CONFIG.brandName}</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-neutral-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">{project.name}</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400 text-[11px]">Live Interactive Client Demo</span>
          </div>
        </div>

        {/* Viewport switchers */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 p-0.5 bg-neutral-900 border border-neutral-800 rounded-lg">
            <button
              onClick={() => setDeviceScale("desktop")}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                deviceScale === "desktop" ? "bg-neutral-800 text-sky-400" : "text-neutral-400 hover:text-white"
              }`}
              title="Desktop View"
            >
              <Laptop className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceScale("tablet")}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                deviceScale === "tablet" ? "bg-neutral-800 text-sky-400" : "text-neutral-400 hover:text-white"
              }`}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceScale("mobile")}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                deviceScale === "mobile" ? "bg-neutral-800 text-sky-400" : "text-neutral-400 hover:text-white"
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
            aria-label="Close live view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Canvas Area */}
      <div className="flex-1 overflow-y-auto bg-black/60 p-2 sm:p-6 flex justify-center items-start">
        <div
          className={`transition-all duration-300 w-full rounded-2xl border border-neutral-800 bg-[#090C15] shadow-2xl overflow-hidden my-auto ${
            deviceScale === "desktop"
              ? "max-w-6xl min-h-[85vh]"
              : deviceScale === "tablet"
              ? "max-w-[768px] min-h-[80vh]"
              : "max-w-[390px] min-h-[75vh]"
          }`}
        >
          {/* Simulated Browser Address Bar */}
          <div className="px-4 py-2 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
            </div>
            <div className="px-3 py-0.5 bg-black/50 border border-neutral-800 rounded font-mono text-[11px] text-neutral-300 truncate max-w-[320px]">
              https://{project.id}.client-staging.nexorastudios.com
            </div>
            <span className="font-mono text-emerald-400 text-[10px] uppercase">
              SSL Verified
            </span>
          </div>

          {/* PROJECT-SPECIFIC FULL LIVE RENDER */}
          {project.id === "aura-wellness" && (
            <div className="bg-[#0B0F19] text-neutral-200 min-h-screen">
              {/* Aura Header */}
              <nav className="border-b border-white/[0.08] px-6 py-4 flex items-center justify-between bg-[#0B0F19]/90 backdrop-blur sticky top-0 z-20">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-sky-400" />
                  <span className="font-serif text-lg tracking-wider text-white font-semibold">AURA WELLNESS</span>
                </div>
                <div className="hidden sm:flex items-center gap-6 text-xs text-neutral-400">
                  <button onClick={() => setActiveTab("overview")} className="hover:text-white transition-colors cursor-pointer">Treatments</button>
                  <button onClick={() => setActiveTab("overview")} className="hover:text-white transition-colors cursor-pointer">Specialists</button>
                  <button onClick={() => setActiveTab("overview")} className="hover:text-white transition-colors cursor-pointer">Philosophy</button>
                  <button onClick={() => setActiveTab("overview")} className="hover:text-white transition-colors cursor-pointer">Location</button>
                </div>
                <button
                  onClick={() => setBookingOpen(true)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </nav>

              {/* Aura Hero */}
              <div className="px-6 py-16 sm:py-24 max-w-4xl mx-auto text-center space-y-6">
                <span className="text-xs uppercase tracking-widest text-sky-400 font-medium">Boutique Skin & Cellular Therapy</span>
                <h1 className="text-3xl sm:text-5xl font-serif text-white font-normal tracking-tight leading-tight">
                  Restorative aesthetics tailored to your cellular rhythm.
                </h1>
                <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
                  Experience clinically formulated facials, holistic lymphatic drainage, and restorative skin rejuvenation in our serene downtown sanctuary.
                </p>
                <div className="flex items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-6 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-white hover:bg-neutral-100 transition-all cursor-pointer shadow-lg"
                  >
                    Reserve Consultation
                  </button>
                  <span className="text-xs text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-sky-400" /> Mon–Sat 9AM–8PM
                  </span>
                </div>
              </div>

              {/* Aura Treatment Catalog */}
              <div className="px-6 py-12 max-w-5xl mx-auto border-t border-white/[0.08]">
                <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-6 text-center">Curated Clinical Treatments</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
                    <div className="text-sm font-semibold text-white">Cellular Glow Facial</div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Custom enzymatic peel with micro-infusion hyaluronic acid and calming oxygen dome.
                    </p>
                    <div className="flex items-center justify-between text-xs pt-3 border-t border-neutral-800">
                      <span className="text-sky-400 font-mono">60 Min · ₹2,400</span>
                      <button
                        onClick={() => {
                          setSelectedService("Cellular Glow Facial (60 min - ₹2,400)");
                          setBookingOpen(true);
                        }}
                        className="text-xs text-white underline hover:text-sky-300 cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
                    <div className="text-sm font-semibold text-white">Lymphatic Sculpting Ritual</div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Deep rhythmic contouring technique to release inflammation, improve circulation, and tone facial structure.
                    </p>
                    <div className="flex items-center justify-between text-xs pt-3 border-t border-neutral-800">
                      <span className="text-sky-400 font-mono">75 Min · ₹3,200</span>
                      <button
                        onClick={() => {
                          setSelectedService("Lymphatic Sculpting Ritual (75 min - ₹3,200)");
                          setBookingOpen(true);
                        }}
                        className="text-xs text-white underline hover:text-sky-300 cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
                    <div className="text-sm font-semibold text-white">Radiance Skin Infusion</div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Collagen matrix therapy paired with soothing peptide mask and targeted LED light frequency.
                    </p>
                    <div className="flex items-center justify-between text-xs pt-3 border-t border-neutral-800">
                      <span className="text-sky-400 font-mono">90 Min · ₹4,100</span>
                      <button
                        onClick={() => {
                          setSelectedService("Radiance Skin Infusion (90 min - ₹4,100)");
                          setBookingOpen(true);
                        }}
                        className="text-xs text-white underline hover:text-sky-300 cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Modal */}
              {bookingOpen && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                  <div className="w-full max-w-md bg-[#0F1420] border border-neutral-800 rounded-2xl p-6 text-xs text-neutral-300 space-y-4">
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                      <span className="text-sm font-semibold text-white">Reserve Appointment</span>
                      <button onClick={() => setBookingOpen(false)} className="text-neutral-400 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
                    </div>
                    {bookingSuccess ? (
                      <div className="text-center py-6 space-y-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto"><Check className="w-5 h-5" /></div>
                        <h4 className="text-sm font-bold text-white">Reservation Request Sent</h4>
                        <p className="text-neutral-400 text-xs">Aura Wellness concierge will confirm your slot via WhatsApp / SMS within 15 minutes.</p>
                        <button onClick={() => { setBookingSuccess(false); setBookingOpen(false); }} className="px-4 py-2 bg-neutral-800 text-white rounded-lg cursor-pointer">Done</button>
                      </div>
                    ) : (
                      <form onSubmit={handleBookingSubmit} className="space-y-3">
                        <div>
                          <label className="block text-neutral-400 mb-1">Selected Treatment</label>
                          <input readOnly value={selectedService} className="w-full p-2.5 rounded bg-black/40 border border-neutral-800 text-white" />
                        </div>
                        <div>
                          <label className="block text-neutral-400 mb-1">Your Full Name</label>
                          <input required placeholder="Jane Doe" className="w-full p-2.5 rounded bg-black/40 border border-neutral-800 text-white" />
                        </div>
                        <div>
                          <label className="block text-neutral-400 mb-1">Phone / WhatsApp Number</label>
                          <input required placeholder="+91 98765 43210" className="w-full p-2.5 rounded bg-black/40 border border-neutral-800 text-white" />
                        </div>
                        <div>
                          <label className="block text-neutral-400 mb-1">Preferred Date</label>
                          <input type="date" required defaultValue="2026-10-02" className="w-full p-2.5 rounded bg-black/40 border border-neutral-800 text-white" />
                        </div>
                        <button type="submit" className="w-full py-2.5 bg-sky-400 hover:bg-sky-300 font-semibold text-slate-950 rounded-lg transition-colors cursor-pointer mt-2">
                          Confirm Booking Request
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Kaviar Bistro Live Render */}
          {project.id === "kaviar-bistro" && (
            <div className="bg-[#100D0B] text-neutral-200 min-h-screen">
              <nav className="border-b border-amber-900/30 px-6 py-4 flex items-center justify-between bg-[#100D0B]/90 backdrop-blur sticky top-0 z-20">
                <span className="font-serif text-lg tracking-wider text-amber-200 font-bold">KAVIAR BISTRO</span>
                <div className="hidden sm:flex items-center gap-6 text-xs text-amber-100/70">
                  <span>Daily Menu</span>
                  <span>Natural Wines</span>
                  <span>Roastery</span>
                  <span>Hours</span>
                </div>
                <button
                  onClick={() => setTableReserveOpen(true)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-amber-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  Reserve Table
                </button>
              </nav>

              <div className="px-6 py-16 text-center space-y-4 max-w-3xl mx-auto">
                <span className="text-xs uppercase font-mono text-amber-400">Heirloom Produce · Single-Origin Micro Roasts</span>
                <h1 className="text-3xl sm:text-5xl font-serif text-amber-100 tracking-tight">
                  Slow seasonal dining in the heart of the city.
                </h1>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
                  Sourdough baked at 5 AM, local mountain greens, and artisanal pasta prepared by hand every afternoon.
                </p>
              </div>

              {/* Menu Tabs */}
              <div className="px-6 py-8 max-w-4xl mx-auto">
                <div className="flex justify-center gap-2 mb-8">
                  <button
                    onClick={() => setMenuTab("brunch")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${menuTab === "brunch" ? "bg-amber-400 text-amber-950 font-bold" : "bg-neutral-900 text-neutral-400"}`}
                  >
                    All-Day Brunch
                  </button>
                  <button
                    onClick={() => setMenuTab("dinner")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${menuTab === "dinner" ? "bg-amber-400 text-amber-950 font-bold" : "bg-neutral-900 text-neutral-400"}`}
                  >
                    Evening Tasting
                  </button>
                  <button
                    onClick={() => setMenuTab("coffee")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${menuTab === "coffee" ? "bg-amber-400 text-amber-950 font-bold" : "bg-neutral-900 text-neutral-400"}`}
                  >
                    Specialty Coffee
                  </button>
                </div>

                <div className="space-y-4">
                  {menuTab === "brunch" && (
                    <>
                      <div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 text-xs">
                        <div>
                          <div className="font-semibold text-white">Wild Chanterelle Toast</div>
                          <div className="text-neutral-400 text-[11px]">Whipped ricotta, thyme, toasted sourdough</div>
                        </div>
                        <span className="font-mono text-amber-400">₹480</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 text-xs">
                        <div>
                          <div className="font-semibold text-white">Poached Eggs & Smoked Trout</div>
                          <div className="text-neutral-400 text-[11px]">Hollaidaise, pickled shallots, sea herbs</div>
                        </div>
                        <span className="font-mono text-amber-400">₹560</span>
                      </div>
                    </>
                  )}
                  {menuTab === "dinner" && (
                    <>
                      <div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 text-xs">
                        <div>
                          <div className="font-semibold text-white">Handmade Agnolotti al Plin</div>
                          <div className="text-neutral-400 text-[11px]">Braised short rib, brown butter, sage</div>
                        </div>
                        <span className="font-mono text-amber-400">₹720</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 text-xs">
                        <div>
                          <div className="font-semibold text-white">Pan-Seared Sea Bass</div>
                          <div className="text-neutral-400 text-[11px]">Saffron emulsion, fennel, charred leeks</div>
                        </div>
                        <span className="font-mono text-amber-400">₹890</span>
                      </div>
                    </>
                  )}
                  {menuTab === "coffee" && (
                    <>
                      <div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 text-xs">
                        <div>
                          <div className="font-semibold text-white">Ethiopia Yirgacheffe Pour-Over</div>
                          <div className="text-neutral-400 text-[11px]">Notes of bergamot, jasmine, and dried apricot</div>
                        </div>
                        <span className="font-mono text-amber-400">₹280</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-neutral-800 pb-3 text-xs">
                        <div>
                          <div className="font-semibold text-white">Cortado & Cardamom Bun</div>
                          <div className="text-neutral-400 text-[11px]">Double espresso, steamed velvety milk, fresh pastry</div>
                        </div>
                        <span className="font-mono text-amber-400">₹340</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Table Reserve Modal */}
              {tableReserveOpen && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                  <div className="w-full max-w-md bg-[#16120E] border border-amber-900/40 rounded-2xl p-6 text-xs text-neutral-300 space-y-4">
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                      <span className="text-sm font-semibold text-amber-200">Table Reservation</span>
                      <button onClick={() => setTableReserveOpen(false)} className="text-neutral-400 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
                    </div>
                    {reserveSuccess ? (
                      <div className="text-center py-6 space-y-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto"><Check className="w-5 h-5" /></div>
                        <h4 className="text-sm font-bold text-white">Table Requested</h4>
                        <p className="text-neutral-400 text-xs">We will confirm your table allocation shortly via SMS.</p>
                        <button onClick={() => { setReserveSuccess(false); setTableReserveOpen(false); }} className="px-4 py-2 bg-neutral-800 text-white rounded-lg cursor-pointer">Done</button>
                      </div>
                    ) : (
                      <form onSubmit={handleReserveSubmit} className="space-y-3">
                        <div>
                          <label className="block text-neutral-400 mb-1">Party Size</label>
                          <select value={tablePartySize} onChange={(e) => setTablePartySize(e.target.value)} className="w-full p-2.5 rounded bg-black/60 border border-neutral-800 text-white">
                            <option>1 Guest</option>
                            <option>2 Guests</option>
                            <option>4 Guests</option>
                            <option>6+ Guests</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-neutral-400 mb-1">Name</label>
                          <input required placeholder="Alex Turner" className="w-full p-2.5 rounded bg-black/60 border border-neutral-800 text-white" />
                        </div>
                        <div>
                          <label className="block text-neutral-400 mb-1">Phone</label>
                          <input required placeholder="+91 98765 43210" className="w-full p-2.5 rounded bg-black/60 border border-neutral-800 text-white" />
                        </div>
                        <button type="submit" className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 font-semibold text-amber-950 rounded-lg transition-colors cursor-pointer mt-2">
                          Request Table
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Solstice Travel Live Render */}
          {project.id === "solstice-travel" && (
            <div className="bg-[#09110E] text-neutral-200 min-h-screen">
              <nav className="border-b border-emerald-900/30 px-6 py-4 flex items-center justify-between bg-[#09110E]/90 backdrop-blur sticky top-0 z-20">
                <span className="font-serif text-lg tracking-wider text-emerald-200 font-bold">SOLSTICE EXPEDITIONS</span>
                <span className="text-xs px-3 py-1 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 rounded">
                  2026 Calendar Open
                </span>
              </nav>

              <div className="px-6 py-16 text-center space-y-4 max-w-3xl mx-auto">
                <span className="text-xs uppercase font-mono text-emerald-400">Certified Wilderness Naturalists</span>
                <h1 className="text-3xl sm:text-5xl font-serif text-emerald-100 tracking-tight">
                  Untamed trails, intimate group expeditions.
                </h1>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
                  High Himalayan passes, private coastal sanctuaries, and leave-no-trace journeys with experienced local leaders.
                </p>
              </div>

              <div className="px-6 py-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
                  <div className="text-[11px] font-mono text-emerald-400">7 Days · Max 8 Travelers</div>
                  <div className="text-base font-bold text-white">Eastern Ridge Glacier Trek</div>
                  <p className="text-xs text-neutral-400">Traversing 4,200m pass, alpine lakes, high meadow glamping.</p>
                  <div className="text-xs text-white pt-2 border-t border-neutral-800 flex justify-between">
                    <span>Inclusions: Permits, Gear, Chef</span>
                    <span className="text-emerald-400 font-mono font-bold">₹34,500</span>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
                  <div className="text-[11px] font-mono text-emerald-400">5 Days · Max 6 Travelers</div>
                  <div className="text-base font-bold text-white">Andaman Coastal Sea Kayak</div>
                  <p className="text-xs text-neutral-400">Bioluminescent night paddles, coral reef mapping, remote camps.</p>
                  <div className="text-xs text-white pt-2 border-t border-neutral-800 flex justify-between">
                    <span>Inclusions: Sea Kayaks, Biologist</span>
                    <span className="text-emerald-400 font-mono font-bold">₹28,000</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Vanguard Advisory / Generic Live Render */}
          {project.id !== "aura-wellness" && project.id !== "kaviar-bistro" && project.id !== "solstice-travel" && (
            <div className="bg-[#0B0E17] text-neutral-200 min-h-screen p-6 sm:p-12 space-y-8">
              <nav className="border-b border-neutral-800 pb-4 flex items-center justify-between">
                <span className="text-lg font-bold text-white tracking-tight font-['Syne']">{project.name}</span>
                <span className="text-xs text-neutral-400">{project.industry}</span>
              </nav>

              <div className="max-w-2xl space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400">Client Staging Architecture</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{project.heroMockup.tagline}</h1>
                <p className="text-sm text-neutral-400 leading-relaxed">{project.fullDescription}</p>
              </div>

              {project.id === "apex-logistics" && (
                <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 max-w-lg space-y-4 text-xs">
                  <h3 className="text-sm font-semibold text-white">Instant Route & Freight Rate Estimator</h3>
                  <form onSubmit={handleCalcQuote} className="space-y-3">
                    <div>
                      <label className="block text-neutral-400 mb-1">Cargo Weight</label>
                      <input value={freightWeight} onChange={(e) => setFreightWeight(e.target.value)} className="w-full p-2 rounded bg-black/60 border border-neutral-800 text-white" />
                    </div>
                    <div>
                      <label className="block text-neutral-400 mb-1">Equipment Type</label>
                      <select value={freightType} onChange={(e) => setFreightType(e.target.value)} className="w-full p-2 rounded bg-black/60 border border-neutral-800 text-white">
                        <option>Refrigerated Cold Chain</option>
                        <option>Standard Dry Van</option>
                        <option>Flatbed Heavy Haul</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded cursor-pointer">
                      Calculate Instant Estimate
                    </button>
                    {calcQuote && (
                      <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded text-emerald-300 font-mono text-center">
                        {calcQuote}
                      </div>
                    )}
                  </form>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-800 text-xs">
                {project.keyFeatures.map((f) => (
                  <div key={f} className="p-3 rounded-lg bg-neutral-900/30 border border-neutral-800 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
