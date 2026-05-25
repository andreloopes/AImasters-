# AI Masters 2027 — Landing Page

Landing page institucional do projeto **AI Masters**, comunidade premium da EXAME que reúne os líderes que mais escalaram negócios com IA no Brasil. Em parceria com a Faculdade EXAME Saint Paul.

---

## Stack

Site totalmente estático, sem build step, sem dependências externas:

- HTML5 semântico
- CSS3 com variáveis customizadas
- Vanilla JavaScript (Intersection Observer API)
- Tipografia via Google Fonts (Fraunces + Manrope)
- Ilustrações em SVG inline

Pronto para deploy direto no GitHub Pages, Vercel, Netlify ou qualquer servidor estático.

---

## Estrutura

```
ai-masters-lp/
├── index.html      # Página completa em uma única rota
├── styles.css      # Design system + animações
├── script.js       # Scroll triggers + contadores
└── README.md
```

---

## Como subir no GitHub Pages

1. Crie um repositório novo no GitHub (por exemplo `ai-masters-lp`).
2. Faça upload dos arquivos deste projeto na raiz do repo.
3. Em **Settings → Pages**, selecione `Deploy from a branch` e escolha `main` / root.
4. Aguarde 1-2 minutos. Sua página estará em `https://<seu-usuario>.github.io/ai-masters-lp/`.

Se quiser domínio próprio (ex: `aimasters.exame.com`), adicione um arquivo `CNAME` na raiz com o domínio e configure o DNS.

---

## Design System

### Paleta

| Token         | Hex       | Uso                          |
|---------------|-----------|------------------------------|
| `--cream`     | `#F5EFE6` | Background principal         |
| `--cream-deep`| `#EDE4D3` | Background de seções alternas|
| `--ink`       | `#1A1612` | Texto principal              |
| `--gold`      | `#C9A961` | Eyebrow, detalhes premium    |
| `--coral`     | `#E85A4F` | CTA, acentos de energia      |
| `--sage`      | `#7B9171` | Ilustração, calma            |
| `--navy`      | `#1B2845` | Capa do Anuário              |

### Tipografia

- **Display**: Fraunces (serifa variável com personalidade editorial)
- **Body/UI**: Manrope (sans-serif moderna, alta legibilidade)

### Princípios de motion

- Reveals on-scroll via `Intersection Observer` (sem libs)
- Animações em loop discretas no SVG do hero (clouds, sun, spark, dots)
- Hover micro-interactions nos cards de pilares
- Counter animation nas stats
- Parallax sutil no hero (desligado para `prefers-reduced-motion`)

---

## Seções

1. **Hero** — título grande, ilustração geométrica à direita
2. **Manifesto** — frase-tese + 3 stats animadas
3. **Anuário** — pilar zero do projeto, mockup do livro + 5 dimensões
4. **6 Pilares** — grid da comunidade ano-redondo
5. **Cronograma 2027** — timeline vertical em background escuro
6. **Parceria Saint Paul** — bloco de confiança curto
7. **CTA + Footer**

---

## Próximos passos para o Antigravity refinar

Ideias de evolução natural:

- [ ] Substituir a ilustração do hero por versão produzida com ilustrador (Figma/SVG)
- [ ] Adicionar página `/anuario` com a metodologia completa
- [ ] Adicionar página `/imprensa` com kit de mídia
- [ ] Formulário de inscrição (Formspree, Netlify Forms ou API EXAME)
- [ ] Integrar GA4 / Hotjar
- [ ] Open Graph image personalizada
- [ ] Versão em inglês para parceiros internacionais

---

## Acessibilidade

- Tags semânticas (`<nav>`, `<header>`, `<section>`, `<article>`, `<footer>`)
- `aria-label` nos elementos sem texto visível
- Contraste WCAG AA validado nas combinações de texto principais
- `prefers-reduced-motion` respeitado (anula animações)
- Navegação por teclado funcional

---

## Licença

Conteúdo editorial © 2026 EXAME. Código liberado para uso interno do projeto.
