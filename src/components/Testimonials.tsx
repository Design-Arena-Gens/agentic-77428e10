const testimonials = [
  {
    name: "Nawel A.",
    role: "Patient chronobiologie",
    message:
      "Le docteur robot a détecté un dérèglement hormonal que personne n&apos;avait corrélé à mes migraines. La recomposition lumineuse m&apos;a enfin permis de dormir.",
  },
  {
    name: "Driss M.",
    role: "Athlète e-sport",
    message:
      "L&apos;analyse cognitive a recalibré mon entraînement. Les feedbacks en direct m&apos;aident à rester concentré sans fatigue visuelle.",
  },
  {
    name: "Soline V.",
    role: "Aidante familiale",
    message:
      "L&apos;avatar empathique traduit les protocoles du docteur robot pour ma mère. Nous comprenons chaque étape, sans stress.",
  },
];

export function Testimonials() {
  return (
    <section className="screen-section">
      <p className="section-heading">Expériences patient</p>
      <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {testimonials.map((testimonial) => (
          <article className="card" key={testimonial.name} style={{ display: "grid", gap: "1.2rem" }}>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              &quot;{testimonial.message}&quot;
            </p>
            <div>
              <div style={{ fontWeight: 600 }}>{testimonial.name}</div>
              <div style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>{testimonial.role}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
