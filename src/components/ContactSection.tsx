import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Send, MessageCircle, Clock, 
  ExternalLink, CheckCircle2, ShieldCheck, Download, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
  selectedAssetTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialMessage = '',
  selectedAssetTitle = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: initialService || 'Mega Unipoles & Billboards',
    targetCity: 'Bengaluru',
    targetDate: '',
    estimatedBudget: '₹3 Lakhs - ₹10 Lakhs',
    message: initialMessage || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  useEffect(() => {
    if (selectedAssetTitle) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in reserving/inquiring for: ${selectedAssetTitle}.\n${prev.message}`,
      }));
    }
  }, [selectedAssetTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleDownloadInquiryRecord = () => {
    const text = `
DEEKSHITH INFRA SOLUTIONS INDIA PRIVATE LIMITED
OFFICIAL PROPOSAL & RFP INQUIRY RECEIPT
--------------------------------------------------
Inquiry Date: ${new Date().toLocaleDateString('en-IN')}
Reference ID: DISIPL-RFP-${Math.floor(100000 + Math.random() * 900000)}

CLIENT DETAILS:
Contact Name: ${formData.fullName}
Organization: ${formData.companyName}
Email: ${formData.email}
Phone: ${formData.phone}

CAMPAIGN / FABRICATION PARAMETERS:
Service Requested: ${formData.serviceRequired}
Target Territory: ${formData.targetCity}
Budget Bracket: ${formData.estimatedBudget}
Target Flight Date: ${formData.targetDate || 'Immediate'}

CLIENT SPECIFICATIONS:
${formData.message}

ENGINEERING CONTACT:
Phone: ${COMPANY_INFO.phone}
Email: ${COMPANY_INFO.email}
Headquarters: ${COMPANY_INFO.headquarters}
--------------------------------------------------
Status: Acknowledged by Commercial Strategy Desk
    `.trim();

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DISIPL_Proposal_Receipt_${formData.companyName || 'Inquiry'}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-24 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            Contact & RFP Intake Hub
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Connect with Our Project & Media Engineers
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base sm:text-lg">
            Whether booking high-impact media spots, exploring highway land monetization, or commissioning turnkey steel monopoles, our team is ready to respond.
          </p>
        </div>

        {/* Corporate Contact Layout Box */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            {/* Left: Contact Data Pane (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                  Commercial & Engineering Desk
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
                  Deekshith Infra Solutions India Pvt Ltd
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Get in touch for instant rate cards, site inspections, wind load structural certifications, or pan-India campaign execution.
                </p>

                {/* Contact Rows Stack */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-400">Direct Telephone</div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneClean}`}
                        className="text-base sm:text-lg font-bold text-white hover:text-amber-400 transition"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <div className="text-xs text-slate-400 mt-0.5">Mon - Sat: 9:00 AM - 7:30 PM IST</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-400">Email Inquiries</div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-base font-bold text-white hover:text-blue-400 transition break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <div className="text-xs text-slate-400 mt-0.5">Guaranteed 2-hour business reply</div>
                    </div>
                  </div>

                  {/* Registered Headquarters */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <MapPin className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-400">Corporate Headquarters</div>
                      <div className="text-sm font-semibold text-slate-200 leading-snug">
                        {COMPANY_INFO.headquarters}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Regional Offices in Hyderabad, Mumbai & Chennai
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Quick Connect */}
                  <div className="pt-2">
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Google Maps Frame */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs uppercase font-bold text-slate-400 mb-2 flex items-center justify-between">
                  <span>Electronic City Operations Hub</span>
                  <a
                    href="https://maps.google.com/?q=Electronic+City+Phase+1+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-[11px]"
                  >
                    Open Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-700 bg-slate-900">
                  <iframe
                    title="DISIPL Electronic City Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62243.68453472023!2d77.6322!3d12.8452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c62c2f6d2f3%3A0x6a1a1f59c8d5a2!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right: Client Intake Card Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our senior commercial manager will contact you at <strong className="text-blue-600">{formData.phone}</strong> and email the comprehensive site availability schedule to <strong className="text-slate-900">{formData.email}</strong> within 2 hours.
                  </p>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto text-left text-xs space-y-1.5">
                    <div className="text-slate-500">Service: <span className="font-bold text-slate-800">{formData.serviceRequired}</span></div>
                    <div className="text-slate-500">Target Region: <span className="font-bold text-slate-800">{formData.targetCity}</span></div>
                    <div className="text-slate-500">Organization: <span className="font-bold text-slate-800">{formData.companyName || 'Corporate Client'}</span></div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      onClick={handleDownloadInquiryRecord}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 shadow"
                    >
                      <Download className="w-4 h-4 text-amber-400" />
                      <span>Download Proposal Receipt (.txt)</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h4 className="text-xl font-bold text-slate-900 font-display">
                      Direct RFP & Site Quotation Request
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out your campaign parameters below to receive our verified rate card and availability inventory.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Brand / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tata Motors / Media Agency"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rajesh@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Primary Infrastructure Need *
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      >
                        <option value="Mega Unipoles & Billboards">Mega Unipoles & Billboards</option>
                        <option value="Digital OOH (LED) Video Walls">Digital OOH (LED) Video Walls</option>
                        <option value="Highway Gantries & Cantilevers">Highway Gantries & Cantilevers</option>
                        <option value="Airport & Transit Hub Media">Airport & Transit Hub Media</option>
                        <option value="Bus Shelters & Urban Furniture">Bus Shelters & Urban Furniture</option>
                        <option value="Turnkey Steel Fabrication & Erection">Turnkey Steel Fabrication & Erection</option>
                        <option value="Landowner Partnership / Lease Proposal">Landowner Partnership / Lease Proposal</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Target City / Corridor *
                      </label>
                      <select
                        value={formData.targetCity}
                        onChange={(e) => setFormData({ ...formData, targetCity: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      >
                        <option value="Bengaluru">Bengaluru (Electronic City, Silk Board, ORR)</option>
                        <option value="Hyderabad">Hyderabad (Hitec City, Gachibowli, ORR)</option>
                        <option value="Mumbai">Mumbai (Western Express, BKC, Sea Link)</option>
                        <option value="Chennai">Chennai (OMR IT Expressway, Mount Road)</option>
                        <option value="Delhi-NCR">Delhi-NCR (DND, Cybercity Gurugram, Noida)</option>
                        <option value="Multi-City Network">Pan-India Multi-City Network</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Target Flight Date / Month
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Immediate / Next Month"
                        value={formData.targetDate}
                        onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Budget Range (Indicative)
                      </label>
                      <select
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      >
                        <option value="Below ₹3 Lakhs">Below ₹3 Lakhs</option>
                        <option value="₹3 Lakhs - ₹10 Lakhs">₹3 Lakhs - ₹10 Lakhs</option>
                        <option value="₹10 Lakhs - ₹25 Lakhs">₹10 Lakhs - ₹25 Lakhs</option>
                        <option value="₹25 Lakhs - ₹1 Crore">₹25 Lakhs - ₹1 Crore</option>
                        <option value="Enterprise / Annual Contract">Enterprise / Annual Contract</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project Notes / Specific Landmarks / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify preferred highway stretches, flight durations, or steel fabrication specs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Transmitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Proposal Request & Get Rate Card</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center text-[11px] text-slate-500 pt-1">
                    Direct inquiries handled under Non-Disclosure Agreement (NDA). All media reservations subject to final confirmation.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
