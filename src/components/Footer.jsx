  import { Container } from '@/components/Container'

  export function Footer() {
    return (
      <footer className="mt-32">
        <Container.Outer>
          <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
            <p className="text-sm text-zinc-400 dark:text-zinc-500 text-center">
              &copy; {new Date().getFullYear()} getme.uz
            </p>
          </div>
        </Container.Outer>
      </footer>
    )
  }
