:root {
  --md-primary-fg-color: #155799;
  --md-primary-fg-color--light: #1f6fb8;
  --md-primary-fg-color--dark: #11497f;

  --md-accent-fg-color: #159957;
  --md-accent-fg-color--transparent: rgba(21, 153, 87, 0.12);

  --site-gradient: linear-gradient(120deg, #155799 0%, #159957 100%);
}

/* Header */
.md-header {
  background: var(--site-gradient);
  box-shadow: 0 2px 10px rgba(21, 87, 153, 0.18);
}

.md-header__inner {
  min-height: 4.4rem;
}

.md-header__title {
  font-weight: 700;
  font-size: 1.1rem;
}

/* Top tabs */
.md-tabs {
  background: var(--site-gradient);
}

.md-tabs__list {
  gap: 0.3rem;
}

.md-tabs__link {
  font-weight: 600;
  font-size: 0.82rem;
  opacity: 0.95;
}

.md-tabs__link--active,
.md-tabs__link:hover {
  opacity: 1;
}

/* Content sizing */
.md-typeset {
  font-size: 0.9rem;
  line-height: 1.75;
}

.md-typeset h1 {
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
}

.md-typeset h2 {
  font-weight: 700;
  font-size: 1.6rem;
  margin-top: 2rem;
}

.md-typeset h3 {
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 1.4rem;
}

.md-typeset p,
.md-typeset li {
  font-size: 0.88rem;
}

/* Sidebar nav */
.md-nav__title {
  font-weight: 700;
}

.md-nav__link {
  font-size: 0.78rem;
}

.md-nav__link--active {
  font-weight: 700;
  color: #155799;
}

/* TOC */
.md-nav--secondary .md-nav__title {
  color: #155799;
}

.md-nav--secondary .md-nav__link {
  font-size: 0.76rem;
}

/* Search */
.md-search__form {
  border-radius: 0.5rem;
}

.md-search__input {
  font-size: 0.82rem;
}

/* Code blocks */
.md-typeset code,
.md-typeset pre {
  font-size: 0.78rem;
}

.md-typeset pre > code {
  line-height: 1.55;
}

/* Tables */
.md-typeset table:not([class]) {
  font-size: 0.82rem;
}

.md-typeset table:not([class]) th {
  background-color: rgba(21, 87, 153, 0.08);
}

/* Buttons / top link accent */
.md-top,
.md-typeset a {
  color: #155799;
}

.md-typeset a:hover {
  color: #159957;
}

/* Optional: slightly roomier main width feel */
.md-grid {
  max-width: 74rem;
}

/* Mobile */
@media screen and (max-width: 76.2344em) {
  .md-typeset {
    font-size: 0.88rem;
  }

  .md-typeset h1 {
    font-size: 1.9rem;
  }

  .md-typeset h2 {
    font-size: 1.45rem;
  }
}

@media screen and (max-width: 44.9844em) {
  .md-header__title {
    font-size: 0.95rem;
  }

  .md-typeset {
    font-size: 0.84rem;
  }

  .md-typeset p,
  .md-typeset li {
    font-size: 0.84rem;
  }
}