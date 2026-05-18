export default function MapSection() {
  return (
    <section className="bg-dark-2 px-4 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl text-white text-center mb-8">
          Find Us Here
        </h2>
        <div className="w-full h-96 rounded-xl overflow-hidden border border-primary/20">
          <iframe
            title="Dani Real Estate Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.5!2d67.0331!3d24.8090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzMyLjQiTiA2N8KwMDEnNTkuMiJF!5e0!3m2!1sen!2s!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
