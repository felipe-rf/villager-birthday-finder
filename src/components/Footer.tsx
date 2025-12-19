export function Footer() {
  return (
    <footer className="footer footer-center text-gray-400 p-6 sm:p-10 mt-8 sm:mt-12 w-full">
      <aside className="w-full px-2">
        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
          <p>
            This is a non-commercial <strong>fan project</strong> created for
            educational purposes and is{" "}
            <strong>not affiliated with or endorsed by Nintendo</strong>.
          </p>

          <p>
            Animal Crossing and all related characters, names, and images are ©
            Nintendo.
          </p>

          <p>
            Villager data and images are sourced from the{" "}
            <a
              href="https://animalcrossing.fandom.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Animal Crossing Fandom Wiki
            </a>
            .
          </p>
        </div>
      </aside>
    </footer>
  );
}
