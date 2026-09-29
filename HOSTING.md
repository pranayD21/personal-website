# Hosting and domain setup

The public site uses GitHub Pages: https://pranaydogra.com/

Hosting and HTTPS cost $0. Changes pushed to `main` under `dist/` deploy automatically through the Deploy website workflow. No hosting subscription or paid SSL certificate is needed.

## Custom domain

`pranaydogra.com` is registered at Porkbun and configured as this repository's GitHub Pages custom domain. The DNS records below were saved on September 28, 2026, with a TTL of 600 seconds. Existing email and verification records were preserved.

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | pranayd21.github.io |

Porkbun manages DNS; GitHub Pages serves the website. HTTPS was enabled and verified on September 29, 2026. Both HTTP and the www address redirect to https://pranaydogra.com/. GitHub manages the certificate.

The original GitHub Pages address redirects to the custom domain. Future changes pushed to `main` under `dist/` continue to deploy automatically.

## References

- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://porkbun.com/products/domains
- https://www.cloudflare.com/products/registrar/
- https://www.iana.org/domains/root/db
