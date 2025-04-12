import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
  <Link href="/" className="text-2xl font-bold">
    Livinus Ekene — Frontend Engineer 
  </Link>
  <p className="text-muted-foreground mt-2 max-w-md">
    As a frontend developer with a marketing mindset, I build scalable solutions that solve real problems, drive engagement, and help businesses grow their bottom line. Let’s turn great ideas into revenue-generating products.
  </p>
</div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/livinusonyenso" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/ugwuja-livinus-ekene-frontenddeveloper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://x.com/livinusonyenso"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:ugwujalivinusekene@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">© {currentYear} livinus Ekene. All rights reserve</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
