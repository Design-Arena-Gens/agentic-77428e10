const faqs = [
  {
    question: "Comment se déroule la première rencontre avec le docteur robot ?",
    answer:
      "Une phase préparatoire collecte vos données (avec votre consentement) et génère un jumeau numérique. La consultation commence par une mise en cohérence émotionnelle avant le diagnostic assisté.",
  },
  {
    question: "Puis-je dialoguer avec un médecin humain ?",
    answer:
      "Oui. Les experts humains supervisent chaque session. Vous pouvez demander un relais instantané ou une visio-conférence hybride à tout moment.",
  },
  {
    question: "Comment mes données sont-elles protégées ?",
    answer:
      "Les informations sont chiffrées de bout en bout et stockées dans un coffre quantique souverain. Vous gardez un contrôle granulaire sur les partages.",
  },
];

export function FAQ() {
  return (
    <section className="screen-section" style={{ paddingBottom: "4rem" }}>
      <p className="section-heading">Questions fréquentes</p>
      <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {faqs.map((faq) => (
          <article className="card" key={faq.question} style={{ display: "grid", gap: "0.9rem" }}>
            <h3 style={{ fontSize: "1.1rem" }}>{faq.question}</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
