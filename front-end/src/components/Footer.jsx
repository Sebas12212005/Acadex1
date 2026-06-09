function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-light text-center p-3 mt-5">

      <p className="mb-0">
        Acadex v1.0 - {year}
      </p>

    </footer>
  );
}

export default Footer;