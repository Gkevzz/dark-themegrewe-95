import { Card, CardContent } from "@/components/ui/card";

const SEOText = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <Card className="shadow-soft max-w-4xl mx-auto">
          <CardContent className="py-8 space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Viktor Grewe - Expert på förebyggande arbete mot kriminalitet
            </h2>
            <div className="font-body text-muted-foreground leading-relaxed space-y-3">
              <p>
                <strong className="text-foreground">Viktor Grewe</strong> är en av Sveriges mest efterfrågade föreläsare inom området kriminalitet och förebyggande arbete. 
                Som författare till den uppmärksammade boken <em>Avhopparen</em> delar Viktor Grewe sina personliga erfarenheter av att lämna ett liv präglat av våld och kriminalitet.
              </p>
              <p>
                Viktor Grewe Avhopparen handlar om den svåra men möjliga vägen till förändring. Genom sina föreläsningar 2025 når Viktor Grewe tusentals ungdomar, 
                lärare och socialarbetare med sitt budskap om hopp och förändring. Hans arbete med KRIS och frivården ger honom unika insikter i både problemets komplexitet 
                och lösningarnas möjligheter.
              </p>
              <p>
                Boka Viktor Grewe för inspirerande föreläsningar som verkligen gör skillnad. Med sin autentiska berättelse och konkreta verktyg hjälper Viktor Grewe 
                organisationer att förstå och motverka gängrekrytering och utanförskap. Viktor Grewes föreläsningar anpassas alltid efter målgruppen, 
                vare sig det är skolor, myndigheter eller företag som vill arbeta förebyggande.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SEOText;