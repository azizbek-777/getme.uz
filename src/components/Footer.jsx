import { Container } from '@/components/Container'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container.Outer>
        <div className="mt-10 border-t border-zinc-100 pt-5 pb-5 dark:border-zinc-700/40">
          <p className="text-sm text-zinc-400 dark:text-zinc-500 text-center">
            &copy; {currentYear} <a href="https://www.getme.uz">getme.uz</a>
          </p>
        </div>
      </Container.Outer>
    </footer>
  )
}
