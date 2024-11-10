module.exports = function (source) {
  // Sprawdzamy, czy w pliku jest 'use client'
  if (source.includes("'use client'")) {
    // Dodajemy do kodu specjalną flagę, by komponent był traktowany jako klientowy
    return `
        ${source}
        export const isClientComponent = true;  // Flaga do Webpacka
      `;
  }

  return source;
};
