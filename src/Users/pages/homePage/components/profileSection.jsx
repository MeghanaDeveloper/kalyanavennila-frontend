
import { motion as Motion } from "framer-motion";

const ProfileSection = () => {
  return (
    <>
      <section className="relative bg-primary text-white text-center padding-tb padding-lr">
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold font-italian"
        >
          Kalyana Vennila : Find Your Perfect <span className="block pt-6">South Indian Matrimony Match Online.</span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl my-8 max-w-2xl mx-auto"
        >
          A complete profile helps others know your values,
          lifestyle, and what you're looking for in a life partner.
        </Motion.p>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-xl my-6 max-w-2xl mx-auto"
        >
          Adding your photo, background, and preferences shows that you're
          serious and respectful, it builds trust and increases your choices of
          higher genuine connections.
        </Motion.p>
      </section>
    </>
  );
};

export default ProfileSection;
