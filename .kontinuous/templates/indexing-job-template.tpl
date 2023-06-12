{{- define "indexing-job-template" -}}
metadata:
  name: update-index-{{ .Values.global.shortSha }}
spec:
  containers:
    - name: update-index
      image: >-
        {{ $.Values.global.registry}}/cdtn/recherche-entreprises/index:{{ $.Values.global.imageTag }}
      volumeMounts:
        - name: data
          mountPath: /data
      env:
        - name: ASSEMBLY_FILE
          value: /data/assembly.csv
      envFrom:
        - secretRef:
            name: elastic-recherche-entreprises-write
      resources:
        limits:
          cpu: "4"
          memory: 5Gi
        requests:
          cpu: "2"
          memory: 2Gi
  restartPolicy: Never
  volumes:
    - name: data
      emptyDir: {}
  initContainers:
    - args:
        - /app/sqlite/build.sh
      command:
        - sh
      image: {{ $.Values.global.registry}}/cdtn/recherche-entreprises/index:{{ $.Values.global.imageTag }}
      imagePullPolicy: Always
      name: download-build-data
      env:
        - name: DATA_DIR
          value: /app/sqlite/data
      resources:
        limits:
          cpu: "4"
          memory: 2Gi
        requests:
          cpu: "2"
          memory: 1Gi
      volumeMounts:
        - name: data
          mountPath: /app/sqlite/data
{{- end -}}
