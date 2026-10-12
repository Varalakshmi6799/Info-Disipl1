/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { InventoryExplorer } from './components/InventoryExplorer';
import { CampaignCalculator } from './components/CampaignCalculator';
import { ProjectsSection } from './components/ProjectsSection';
import { EngineeringSafety } from './components/EngineeringSafety';
import { TestimonialsAndClients } from './components/TestimonialsAndClients';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AssetDetailModal } from './components/AssetDetailModal';
import { BrochureModal } from './components/BrochureModal';
import { MediaAsset } from './types';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from './data/mockData';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [selectedAssetForDetail, setSelectedAssetForDetail] = useState<MediaAsset | null>(null);
  const [contactInitialService, setContactInitialService] = useState<string>('');
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');
  const [selectedAssetTitle, setSelectedAssetTitle] = useState<string>('');

  // Handle when user chooses to reserve an asset
  const handleBookAsset = (asset: MediaAsset) => {
    setSelectedAssetTitle(`${asset.code} - ${asset.title} (${asset.city})`);
    setContactInitialService(asset.type);
    
    // Smooth scroll to contact section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle service quote selection
  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setContactInitialService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle estimate transfer from CampaignCalculator
  const handleApplyEstimateToQuote = (summaryText: string) => {
    setContactInitialMessage(summaryText);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Quick quote trigger from Header or Projects
  const handleOpenQuoteModal = (note?: string) => {
    if (note) {
      setContactInitialMessage(note);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Fixed Header */}
      <Header
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* About Deekshith Infra Solutions */}
        <AboutSection />

        {/* Our Services & Capabilities */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Interactive OOH Media Asset Inventory */}
        <InventoryExplorer
          onSelectAssetForDetail={(asset) => setSelectedAssetForDetail(asset)}
          onBookAsset={handleBookAsset}
        />

        {/* Campaign Reach & ROI Estimator */}
        <CampaignCalculator onApplyEstimateToQuote={handleApplyEstimateToQuote} />

        {/* Projects & Landmark Executions */}
        <ProjectsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Structural Safety & Engineering Standards */}
        <EngineeringSafety />

        {/* Enterprise Brand Partners & Testimonials */}
        <TestimonialsAndClients />

        {/* Corporate Contact & RFP Intake Hub */}
        <ContactSection
          initialService={contactInitialService}
          initialMessage={contactInitialMessage}
          selectedAssetTitle={selectedAssetTitle}
        />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Interactive Asset Detail Modal */}
      <AssetDetailModal
        asset={selectedAssetForDetail}
        onClose={() => setSelectedAssetForDetail(null)}
        onBook={handleBookAsset}
      />

      {/* Rate Card & Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      {/* Floating Action Buttons (Sticky Quick Triggers) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* WhatsApp Floating Trigger */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group relative"
          title="Chat directly on WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            WhatsApp Strategy Desk
          </span>
        </a>

        {/* Direct Call Floating Trigger */}
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="w-13 h-13 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/30 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group relative"
          title={`Call ${COMPANY_INFO.phone}`}
          aria-label="Call Direct"
        >
          <Phone className="w-6 h-6 fill-slate-950" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Call: {COMPANY_INFO.phone}
          </span>
        </a>
      </div>
    </div>
  );
}
