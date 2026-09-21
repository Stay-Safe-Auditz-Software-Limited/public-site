# Stay Safe Public Site — AI Working Agreement

This repository contains the public Stay Safe website. It is intentionally small:

- `src/Client/StaySafePublicSite/` is the Nuxt application.
- `chart/` is the Helm chart that deploys the generated static site.
- `.github/workflows/` contains required CI quality gates.

## Before changing code

1. Read this file, the root `README.md`, and the closest relevant component or chart template.
2. Keep the site public, accessible, fast, and understandable on a mobile connection.
3. Make the smallest coherent change. Do not mix visual redesigns with infrastructure or content changes unless explicitly asked.
4. Preserve unrelated work in the working tree. Do not reset, overwrite, or reformat files outside the task.

## Nuxt application conventions

- Use Nuxt 4, Vue 3, TypeScript, and the `app/` directory. Keep page routes in `app/pages/`, reusable presentational pieces in `app/components/`, and shared static copy/data in `app/data/`.
- Prefer Nuxt primitives (`NuxtLink`, `useSeoMeta`, `useHead`, `useRuntimeConfig`) over hand-rolled equivalents. Do not add Vue Router, a state library, or a UI framework without a real requirement.
- Use TypeScript explicitly. Do not introduce `any`, `@ts-ignore`, or disabled lint rules to make a check pass. Model data and component props with named types.
- Keep server-side work in `server/`; do not put API keys, server-only logic, form delivery credentials, or private integrations in client components.
- Treat all copy, contact details, customer logos, claims, case studies, and compliance statements as approval-required content. Use clearly marked placeholder copy until Stay Safe approves it.
- Every public page must have a unique title and description. Use semantic landmarks, real headings, visible keyboard focus, and controls that work without a mouse.
- Prefer CSS and native HTML for simple interactions. Avoid large dependencies, autoplay media, intrusive pop-ups, and animations that ignore `prefers-reduced-motion`.

## Secrets and data safety — non-negotiable

- Never commit secrets, tokens, private keys, service-account JSON, production URLs containing credentials, `.env` files, kubeconfig files, or downloaded customer data.
- `.env.example` may contain variable names and safe dummy values only. Real values belong in the approved deployment secret store, never Git, issues, screenshots, logs, or browser bundles.
- Only values prefixed `NUXT_PUBLIC_` may be exposed to browser code. Assume every `NUXT_PUBLIC_*` value is visible to the public. Do not rename a secret to make it public.
- Do not use a secret at all in this static site. If a requested feature needs a CRM, analytics key, form provider, payment provider, identity provider, server API, cookies, or personal information, stop before implementation and contact Philo Software for an approved architecture.
- Do not log form fields, visitor identifiers, runtime configuration, request headers, or error payloads that could contain personal data.

## Quality gate

Run these from `src/Client/StaySafePublicSite/` before handing off application code:

```powershell
npm run lint
npm run format:check
npm run typecheck
npm run build
```

For chart changes, also run this from the repository root:

```powershell
helm lint chart
helm template staysafe-public-site chart --set app.image.tag=local
```

Do not claim a change is complete if a relevant check was not run. State exactly what was not validated and why. CI runs the same application checks on every pull request.

## Deployment guardrails

- The Helm chart serves Nuxt's generated static output from a Linux container. It must not be changed into an SSR or API deployment without Philo Software reviewing the runtime, scaling, caching, observability, and secret-management implications.
- Keep `app.image.tag` immutable in production. Never deploy `latest`.
- Make hostname, resource, replica, and image settings values-driven. Never hard-code a production hostname or credential in a template.
- Retain HTTPS redirection and the response security headers when editing Traefik resources.

## Ask Philo Software before proceeding

Contact Philo Software when any request involves authentication, payments, forms that collect personal information, email/SMS sending, analytics or tracking consent, cookies, external APIs, webhooks, databases, server-rendering, search, legal/privacy wording, DNS/TLS, Kubernetes/Helm production deployment, security incidents, or a failing build/deployment you cannot explain from the repository.

When escalating, include the requested outcome, relevant file paths, exact error text, affected environment, and whether any visitor/customer data is involved. Do not include secret values.
