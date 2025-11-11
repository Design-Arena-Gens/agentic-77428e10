const experienceModules = [
  {
    title: "Accueil sensoriel",
    description:
      "Projection volumétrique à 360 deg synchronisée avec votre biométrie pour vous mettre immédiatement en confiance.",
    metrics: "Latence holographique 14 ms",
  },
  {
    title: "Diagnostic augmenté",
    description:
      "Fusions de 18 flux de données en temps réel : imagerie, ton de voix, micro-expressions et biomarqueurs sériques.",
    metrics: "18 flux fusionnés",
  },
  {
    title: "Synthèse empathique",
    description:
      "Explication des recommandations en langage naturel, modulée par un moteur émotionnel adaptatif en 12 langues.",
    metrics: "12 langues disponibles",
  },
  {
    title: "Suivi autonome",
    description:
      "Plan de suivi automatisé avec capsules éducatives, rappels contextuels et interface pour proches aidants.",
    metrics: "Plan adaptable sur 90 jours",
  },
];

export function ExperienceShowcase() {
  return (
    <section className="screen-section" id="experiences">
      <p className="section-heading">Parcours immersif</p>
      <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {experienceModules.map((module) => (
          <article className="card" key={module.title}>
            <div className="chip" style={{ marginBottom: "1rem" }}>
              <span aria-hidden="true">[actif]</span>
              Module actif
            </div>
            <h3>{module.title}</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", marginBottom: "1.25rem" }}>
              {module.description}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.85rem",
                color: "var(--color-secondary)",
              }}
            >
              <span>{module.metrics}</span>
              <span aria-hidden="true">{"->"}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
