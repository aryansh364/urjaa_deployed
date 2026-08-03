import { processData } from '../../../data/process';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';

function renderIcon(iconId) {
  const baseClasses = "w-6 h-6 text-green-600";

  switch (iconId) {
    case 'clipboard':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case 'compass':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case 'package':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case 'check-circle':
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      );
  }
}

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-gray-50">
      <Container>
        <SectionTitle
          subtitle="How We Work"
          title="From Consultation to Commissioning"
          description="A streamlined, end-to-end EPC workflow engineered for transparency and reliability at every stage."
        />

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 md:mt-16 list-none p-0 m-0">
          {processData.map((item) => (
            <li key={item.id}>
              <Card className="p-8 flex flex-col items-start h-full" hoverEffect={false}>
                <span className="text-4xl font-extrabold text-green-600 mb-4">
                  {item.step}
                </span>
                <div className="mb-4 p-3 bg-green-100 rounded-xl">
                  {renderIcon(item.iconId)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
