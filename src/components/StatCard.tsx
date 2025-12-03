interface StatCardProps {
  icon: string;
  counter: number;
  suffix: string;
  title: string;
  details: string[];
}

export default function StatCard({ icon, counter, suffix, title, details }: StatCardProps) {
  return (
    <div className="stat-card-flip">
      <div className="stat-card-inner">
        <div className="stat-card-front">
          <div className="icon-stat">
            <i className={icon}></i>
          </div>
          <h3 className="counter" data-target={counter}>
            {counter}
          </h3>
          <span className="suffix">{suffix}</span>
          <p className="stat-title">{title}</p>
          <div className="hover-hint">
            <i className="ri-information-line"></i> Hover untuk detail
          </div>
        </div>
        <div className="stat-card-back">
          <h4>Detail Lengkap</h4>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
