{{- define "staysafePublicSite.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "staysafePublicSite.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name (include "staysafePublicSite.name" .) | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}

{{- define "staysafePublicSite.labels" -}}
app.kubernetes.io/name: {{ include "staysafePublicSite.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
app.kubernetes.io/part-of: staysafe
environment: {{ .Values.environment | quote }}
{{- end }}

{{- define "staysafePublicSite.imagePullName" -}}
{{- printf "%s-registry" .Release.Name -}}
{{- end }}

{{- define "staysafePublicSite.secretStoreName" -}}
{{- printf "%s-gcp-secret-store" .Release.Name -}}
{{- end }}
