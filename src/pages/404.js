export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Page Not Found</h1>
            <p>We could not find what you were looking for at drex.guide.</p>
            <p>
              Please <a href="/">return to the homepage</a> or use the navigation menu.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
} 