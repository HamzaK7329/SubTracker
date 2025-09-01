'use client';

import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    {
        title: "Add a Subcription",
        description: "Track your first subscription by adding service details, billing cycle, and payment amount.",
        icon: "📱"
    },
    {
        title: "View & Edit Details",
        description: "Easily modify subscription information, update payment methods, or cancel services.",
        icon: "✏️"
    },
    {
        title: "Track Your Spending",
        description: "Visualize your subscription costs with charts and graphs to understand your monthly expenses.",
        icon: "📊"
    }
];

export default function OnboardingPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useAuth();
    const { user } = useUser();
    const router = useRouter();
    
    const [formData, setFormData] = useState({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.emailAddresses?.[0]?.emailAddress || "",
        photoUrl: user?.imageUrl || "",
        defaultCurrency: "USD"    
    });

    const currencies = ["AED", "USD", "EUR", "GBP", "CAD", "AUD"];

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value}));
    };

    const handleGetStarted = async () => {
        setIsLoading(true);

        try {
            const { db } = await import("@/app/firebaseConfig");
            const { doc, setDoc, serverTimestamp } = await import("firebase/firestore");

            await setDoc(doc(db, 'users', userId!), {
                displayName: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                photoUrl: formData.photoUrl,
                defaultCurrency: formData.defaultCurrency,
                createdAt: serverTimestamp(),
                lastModified: serverTimestamp()
            });

            router.push('/dashboard');

        } catch (error) {
            console.log("Error creating user document:", error);
            setIsLoading(false);

        }
    };

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#020610] to-[#111724] flex items-center justify-center px-6">
            <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i <= currentStep ? 'bg-[#FDDDB4]' : 'bg-[#5A5A5A]'
                }`}
              />
            ))}
          </div>
          <div className="w-full bg-[#5A5A5A] rounded-full h-1">
            <div
              className="bg-[#FDDDB4] h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {currentStep < 3 ? (
            // Steps 1-3: App explanation
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <div className="text-6xl mb-6">{steps[currentStep].icon}</div>
              <h1 className="text-3xl font-bold text-white mb-4">
                {steps[currentStep].title}
              </h1>
              <p className="text-secondary-500 text-lg mb-8">
                {steps[currentStep].description}
              </p>
              
              <div className="flex gap-4 justify-center">
                {currentStep > 0 && (
                  <button
                    onClick={prevStep}
                    className="px-6 py-3 border border-[#5A5A5A] text-white rounded-lg hover:border-[#FDDDB4] transition-colors"
                  >
                    Previous
                  </button>
                )}
                <button
                  onClick={nextStep}
                  className="px-6 py-3 bg-[#FDDDB4] text-black font-semibold rounded-lg hover:opacity-90 transition"
                >
                  {currentStep === 2 ? 'Get Started' : 'Next'}
                </button>
              </div>
            </motion.div>
          ) : (
            // Step 4: User details form
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-[#5A5A5A] rounded-lg p-8 backdrop-blur"
            >
              <h1 className="text-2xl font-bold text-white mb-6 text-center">
                Complete Your Profile
              </h1>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full rounded-md bg-transparent border border-[#5A5A5A] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FDDDB4]/60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full rounded-md bg-transparent border border-[#5A5A5A] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FDDDB4]/60"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full rounded-md bg-transparent border border-[#5A5A5A] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FDDDB4]/60"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Default Currency
                  </label>
                  <select
                    value={formData.defaultCurrency}
                    onChange={(e) => handleInputChange('defaultCurrency', e.target.value)}
                    className="w-full rounded-md bg-transparent border border-[#5A5A5A] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FDDDB4]/60"
                  >
                    {currencies.map(currency => (
                      <option key={currency} value={currency} className="bg-[#020610] text-white">
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button
                onClick={handleGetStarted}
                disabled={isLoading}
                className="w-full mt-6 px-6 py-3 bg-[#FDDDB4] text-black font-semibold rounded-lg hover:opacity-90 transition disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Setting up your account...
                  </div>
                ) : (
                  'Get Started'
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
        </div>
    )
    
}   