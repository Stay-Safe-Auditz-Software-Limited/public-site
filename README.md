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

### Private image registry access

The chart follows the main StaySafe application's External Secrets setup. It creates a namespace-local `SecretStore` named `<release>-gcp-secret-store` and an `ExternalSecret` named `<release>-registry`. External Secrets reads `GITHUB_CONTAINER_REGISTRY_CONFIG` from GCP Secret Manager in project `staysafe-503721` and creates a Kubernetes Secret of type `kubernetes.io/dockerconfigjson`. The Deployment references that Secret through `imagePullSecrets`. The secret is used by Kubernetes to pull the image; it is not mounted into the static site.

Before deploying:

1. Install External Secrets Operator with support for `external-secrets.io/v1` in the cluster.
2. Ensure the GCP secret contains the raw Docker configuration JSON with credentials for `ghcr.io` that can pull the public-site image. The existing main-app credentials must also have access to this package.
3. Create the bootstrap Secret in the public site's release namespace, using a GCP service account key with permission to read that GCP secret:

   ```powershell
   $namespace = "<release-namespace>"
   kubectl create secret generic gcpsm-secret `
     --namespace $namespace `
     --from-file=secret-access-credentials=.\path\to\gcp-service-account.json
   ```

The bootstrap Secret is deliberately managed outside Helm and must exist in the same namespace as the release, even if another StaySafe namespace already has it. Do not commit credential files or secret payloads.

The GCP project and bootstrap reference are configurable under `gcpSecrets`; the remote registry secret name and version are under `externalSecrets.imagePull`. The default version is `latest`, refreshed every hour using `externalSecrets.refreshInterval`.

After deployment, check reconciliation without printing credentials:

```powershell
kubectl --namespace $namespace get secretstore,externalsecret
kubectl --namespace $namespace get secret "<release>-registry"
```

## Need help?

See [AGENTS.md](AGENTS.md) before asking an AI agent to make changes. Authentication, visitor data collection, tracking, external integrations, production infrastructure, and unclear security or compliance work must be reviewed with Philo Software first.
