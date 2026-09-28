# Hosting and domain setup

The public site uses GitHub Pages: https://pranayd21.github.io/personal-website/

Hosting and HTTPS cost $0. Changes pushed to `main` under `dist/` deploy automatically through the Deploy website workflow. No hosting subscription or paid SSL certificate is needed.

## Domain recommendation

On September 28, 2026, Porkbun showed these names available:

| Domain | First year | Current annual renewal |
| --- | --- | --- |
| pranaydogra.com | $11.08 | $11.08 |
| pranaydogra.dev | $8.75 | $12.87 |
| pranaydogra.me | $17.27 | $17.27 |

Choose `pranaydogra.com` for the lower ongoing cost among these options. Prices and availability can change before checkout. Cloudflare Registrar is another option that charges registry and ICANN costs without markup; compare its final checkout quote if minimizing every dollar matters. `.ra` is not delegated in IANA's root zone, so `pranaydog.ra` cannot be registered.

## Buy the domain

1. Search for `pranaydogra.com` at https://porkbun.com/products/domains.
2. Register for one year. Check the final total and renewal price.
3. Keep the included WHOIS privacy. Skip paid hosting, email, and SSL add-ons.
4. Complete the account, payment, and registrant email verification yourself. Auto-renew is useful if you want to keep the domain, but confirm that preference at checkout.

No domain has been purchased or connected yet.

## Connect it after purchase

1. Verify ownership in https://github.com/settings/pages. GitHub will provide a TXT record to add at your registrar. Keep that record after verification.
2. Open https://github.com/pranayD21/personal-website/settings/pages and enter `pranaydogra.com` under Custom domain. Save before changing the routing records.
3. In the registrar's DNS settings, replace conflicting parking records for `@` and `www` with these records. Preserve unrelated email and verification records.

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | pranayd21.github.io |

Use the default TTL. If using Cloudflare DNS, use DNS-only while GitHub verifies the domain and provisions HTTPS. Do not use a wildcard record.

4. Wait for GitHub's DNS check and certificate provisioning, then enable Enforce HTTPS. DNS changes can take up to 24 hours.
5. Verify both `https://pranaydogra.com` and `https://www.pranaydogra.com`. GitHub redirects the alternate name to your chosen custom domain.

The current free URL remains usable until you configure the custom domain. Don't configure an unowned domain; it would redirect visitors to a name you don't control.

## References

- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://porkbun.com/products/domains
- https://www.cloudflare.com/products/registrar/
- https://www.iana.org/domains/root/db
