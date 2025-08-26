export const Body = () => {
  return (
    <main className="home page">
      <div className="home__glow" />

      <header className="home__header">
        <span className="badge">React • Router • TS</span>
        <h1 className="home__title">
          <span className="gradient-text">Welcome Home</span>
        </h1>
        <p className="home__subtitle">
          전역 스타일을 <code>app/styles</code>에서 통합 관리하는 최소 홈 화면.
        </p>

        <div className="home__cta">
          <a className="btn btn--primary" href="/about">
            시작하기
          </a>
          <a className="btn btn--ghost" href="https://reactrouter.com/">
            문서 보기
          </a>
        </div>
      </header>

      <section className="home__grid">
        <article className="card">
          <h3>폴더 구조 간결</h3>
          <p>전역 스타일, 페이지, 라우팅이 명확하게 분리됩니다.</p>
        </article>
        <article className="card">
          <h3>확장 쉬움</h3>
          <p>컴포넌트/스토어/훅 등만 추가해서 확장하세요.</p>
        </article>
        <article className="card">
          <h3>디자인 토큰</h3>
          <p>색/간격/그리드가 전역에서 일괄 관리됩니다.</p>
        </article>
      </section>

      <footer className="home__footer">
        <span>© {new Date().getFullYear()} Your Team</span>
        <nav className="footer-nav">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">GitHub</a>
        </nav>
      </footer>
    </main>
  );
};
