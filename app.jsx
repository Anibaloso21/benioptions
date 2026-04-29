// BeniOptions — Router

function App() {
  const [hash, setHash] = React.useState(window.location.hash || '#/');

  React.useEffect(() => {
    const handler = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [hash]);

  const page = hash.replace(/^#/, '') || '/';

  switch (page) {
    case '/tienda':   return <CatalogA />;
    case '/producto': return <ProductA />;
    case '/carrito':  return <CartA />;
    case '/checkout': return <CheckoutA />;
    case '/faq':      return <FaqA />;
    case '/nosotros': return <AboutA />;
    default:          return <HomeA />;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
