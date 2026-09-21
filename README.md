# Stay Safe public site

The public Stay Safe website is a Nuxt 4 static site. Its deployment layout mirrors the existing Stay Safe application:

```text
chart/                              Helm chart for Kubernetes and Traefik
src/Client/StaySafePublicSite/      Nuxt application and container build
```

## Local development

```powershell
Set-Location src/Client/StaySafePublicSite
npm install
npm run dev
```

The local Nuxt server prints the URL to open. Do not add real keys to local configuration. The application has no required environment variables.

## Quality checks

```powershell
Set-Location src/Client/StaySafePublicSite
npm run lint
npm run format:check
npm run typecheck
npm run build

Set-Location ../../..
helm lint chart
helm template staysafe-public-site chart --set app.image.tag=local
```

## Deployment model

`npm run build` generates static output which the included Dockerfile serves via NGINX. The Helm chart deploys that image as a Linux workload and exposes it through Traefik. Set the production hostname and an immutable image tag through values supplied by the deployment pipeline; do not store them in source.

## Need help?

See [AGENTS.md](AGENTS.md) before asking an AI agent to make changes. Authentication, visitor data collection, tracking, external integrations, production infrastructure, and unclear security or compliance work must be reviewed with Philo Software first.
