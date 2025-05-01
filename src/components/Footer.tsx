
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-secondary">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          &copy; {currentYear} Arpit Doneria. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
