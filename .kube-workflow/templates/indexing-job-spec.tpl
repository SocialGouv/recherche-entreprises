{{- define "indexing-job-spec" -}}
spec:
  metadata:
    name: update-index
  containers:
    - name: update-index
      image: >-
        {{ $.Values.global.registry}}/recherche-entreprises/index:{{ $.Values.global.imageTag }}
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
    - configMap:
        name: assembly-scripts
        defaultMode: 511
      name: assembly-scripts
  initContainers:
    - args:
        - /mnt/scripts/sqlite.sh
      command:
        - sh
      image: ubuntu:18.04
      imagePullPolicy: Always
      name: download-build-data
      env:
        - name: DATA_DIR
          value: /mnt/scripts/data
      resources:
        limits:
          cpu: "4"
          memory: 2Gi
        requests:
          cpu: "2"
          memory: 1Gi
      volumeMounts:
        - name: data
          mountPath: /mnt/scripts/data
        - mountPath: /mnt/scripts
          name: assembly-scripts
{{- end -}}