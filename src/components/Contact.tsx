import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const WHATSAPP_NUMBER = "918055223358"; // 91 = India country code
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I visited your website and would like to know more about your services."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "np_service",
        "template_cjdr6y4",
        formRef.current!,
        "Sab2RU4dbqJkEkomS"
      );
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error(error);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "nptechsolution@gmail.com" },
    { icon: Phone, label: "Phone", value: "8055223358" },
    { icon: MapPin, label: "Location", value: "Nagpur, India" },
  ];

  return (
    <section className="relative py-20 px-4 bg-[#0f0f1a] min-h-screen">

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <CheckCircle className="text-emerald-400 shrink-0" size={24} />
            <div>
              <p className="text-white font-semibold text-sm">Enquiry Submitted Successfully!</p>
              <p className="text-white/60 text-xs mt-0.5">We will contact you soon.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ERROR POPUP */}
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              boxShadow: "0 8px 32px rgba(239,68,68,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <span className="text-red-400 text-xl shrink-0 font-bold">✕</span>
            <div>
              <p className="text-white font-semibold text-sm">Failed to send message.</p>
              <p className="text-white/60 text-xs mt-0.5">Please try again later.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Let's discuss how we can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT INFO CARDS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30">
                  <info.icon className="text-purple-300" size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white/60 text-sm mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold flex justify-center items-center gap-2 disabled:opacity-50 transition-opacity"
              >
                {isSubmitting ? "Sending..." : <> Send Message <Send size={20} /> </>}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4, type: "spring", stiffness: 200 }}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center rounded-2xl cursor-pointer overflow-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(37, 211, 102, 0.35)",
          boxShadow: "0 8px 32px rgba(37,211,102,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
          padding: "10px 14px",
          gap: "0px",
        }}
      >
        {/* Green WhatsApp icon circle */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#25D366] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-5 h-5">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.697-1.81A12.94 12.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 23a10.94 10.94 0 01-5.57-1.523l-.398-.237-4.573 1.075 1.098-4.46-.26-.418A10.944 10.944 0 015 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.07-8.23c-.332-.166-1.963-.968-2.267-1.079-.304-.11-.525-.166-.746.166-.22.332-.856 1.079-1.05 1.3-.193.22-.387.248-.718.083-.332-.166-1.4-.516-2.667-1.645-.985-.878-1.65-1.962-1.843-2.294-.193-.332-.02-.511.145-.677.149-.148.332-.387.498-.58.166-.193.22-.332.332-.553.11-.22.055-.414-.028-.58-.083-.166-.746-1.8-1.022-2.465-.27-.648-.543-.56-.746-.57l-.636-.011c-.22 0-.58.083-.884.414-.304.332-1.16 1.134-1.16 2.765s1.188 3.208 1.354 3.43c.166.22 2.34 3.572 5.673 5.007.793.342 1.412.546 1.894.699.796.253 1.52.217 2.092.132.638-.095 1.963-.803 2.24-1.578.276-.774.276-1.438.193-1.578-.083-.138-.304-.22-.636-.387z" />
          </svg>
        </div>

        {/* Expanding label on hover */}
        <motion.span
          variants={{
            hover: { maxWidth: 160, marginLeft: 10, opacity: 1 },
          }}
          initial={{ maxWidth: 0, marginLeft: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-white text-sm font-medium whitespace-nowrap overflow-hidden"
        >
          Chat on WhatsApp
        </motion.span>
      </motion.a>

    </section>
  );
};

export default Contact;