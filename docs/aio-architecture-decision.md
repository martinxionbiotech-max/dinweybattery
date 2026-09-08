# AIO Architecture Decision — dinweysbattery.com (V2.0)

## Site Overview
- **URL**: https://dinweysbattery.com
- **Repo**: `martinxionbiotech-max/dinweybattery` (main) + `dinweybattery/knowledge` (KB subdir)
- **Framework**: Astro 5.7, static output
- **Hosting**: Cloudflare Pages
- **Pages**: 25 static pages
- **Brand**: DINWEY — truck/heavy-duty starting batteries (brand of Chengguang Power Tech Co., Ltd.)
- **Knowledge Hub**: https://docs.dinweysbattery.com (already deployed, HTTP 200)

## Architecture
- Pure static output, no SSR, no backend, no runtime database.
- 4 battery models hard-coded in `.astro` product pages:
  - JIS N150 (145G51), JIS N200 (190H52), DIN88 (58827), DIN100 (60038)
- Schema.org already rich: Product, Offer, PropertyValue, DefinedTermSet,
  EducationalOccupationalCredential, Organization, WebSite, FAQPage, BreadcrumbList, Brand.
- robots.txt: AI-crawler friendly (explicit GPTBot/ClaudeBot/PerplexityBot allows + ai-train=no).
- llms.txt: already present and complete.

## Capability Graph
```
MAIN SITE (dinweysbattery.com)
├── Content          — product pages (4 models), applications, markets, truck-models
├── Product info     — 4 battery models, specs hard-coded in .astro
├── SEO pages        — home / about / contact / privacy / terms / selection-tool
├── Knowledge Hub    — docs.dinweysbattery.com (external, already deployed)
├── DATA             — (previously: none) → NEW battery-models.json
├── TOOLS            — selection-tool (client-side static)
├── API              — (none)
├── AGENT            — (none)
└── AUTH             — (none)
```

## SEO Audit
- ✅ robots.txt valid + AI-crawler explicit allows + ai-train=no
- ✅ sitemap-index.xml
- ✅ canonical URLs, rich Product/Offer schema
- ✅ hreflang: N/A (single locale)
- ❌ **Soft-404**: unknown paths return HTTP 200 + homepage HTML (catch-all)

## Decision Matrix

| Capability | Exists | Value | Cost | Decision |
|---|---|---:|---:|---|
| Semantic HTML | Yes | High | — | PRESENT |
| Schema.org | Yes | High | — | PRESENT |
| llms.txt | Yes | Medium | — | PRESENT |
| Markdown | No | Low | Low | DEFER (llms.txt covers discovery) |
| Markdown negotiation | No | Low | Medium | NOT_REQUIRED (Cloudflare Free) |
| Dataset | No | High | Low | **IMPLEMENTED** |
| Soft-404 fix | No | High | Very Low | **IMPLEMENTED** |
| API / OpenAPI / Catalog | No | — | — | NOT_REQUIRED |
| Link Headers | No | — | — | NOT_REQUIRED |
| WebMCP | No | Low | Medium | NOT_REQUIRED |
| MCP / MCP Card | No | Low | High | NOT_REQUIRED |
| OAuth/OIDC | No | — | — | NOT_REQUIRED |
| A2A / Agent Card | No | — | — | NOT_REQUIRED |

## Implemented
- `public/404.html` — fix soft-404 (Cloudflare Pages catch-all)
- `public/data/battery-models.json` — machine-readable dataset (4 models)

## Deferred
- Markdown — llms.txt already covers AI discovery; adding .md duplicates.

## Not Implemented (intentional)
- API, OpenAPI, API Catalog, Link Headers, WebMCP, MCP, OAuth, A2A — no backend/agent.

## External Validator (isitagentready.com, level 1)
- PASS: robotsTxt, sitemap, robotsTxtAiRules
- FAIL (genuine): markdownNegotiation (DEFER), webMcp (NOT_REQUIRED), linkHeaders, dnsAid
- FAIL (false-positive catch-all): apiCatalog, oauth*, authMd, mcpServerCard, a2aAgentCard, agentSkills, ard
- neutral: commerce checks (not a commerce site)

## Future Opportunities
- P0: Build out docs.dinweysbattery.com knowledge hub further (already live)
- P1: Markdown generation if AI crawl volume justifies
- P2: WebMCP only if selection-tool becomes backend-powered
