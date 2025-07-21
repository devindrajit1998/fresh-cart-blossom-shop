interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const SectionHeader = ({ title, subtitle, children }: SectionHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2 font-playfair bg-gradient-to-r from-primary to-blue bg-clip-text text-transparent">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
};

export default SectionHeader;