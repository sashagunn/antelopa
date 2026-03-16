

// Using dangerouslySetInnerHTML allows us to pass HTML tags (like <em> or <span>) 
// to render the specific italic/colored words as seen in the reference design.
interface SectionHeaderProps {
  titleHtml: string; 
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ titleHtml, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
      <h2 
        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 text-balance leading-tight"
        dangerouslySetInnerHTML={{ __html: titleHtml }}
      />
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 text-balance max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
