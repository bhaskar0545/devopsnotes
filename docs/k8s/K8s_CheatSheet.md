# Kubectl

| Command                                       | Notes                                                   |
| --------------------------------------------- | ------------------------------------------------------- |
| `kubectl auth whoami`                         | User ID running the kubectl and all the groups part of. |
| `kubectl auth can-i '*' '*' --all-namespaces` | yes - you have admin access                             |
|                                               |                                                         |
# Namespace

| Command                                                                                                      | Notes                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `kubectl describe namespace df-coe-gketst`                                                                   | Name space details contains Labels, resource quotas and limits, annotations. |
| `kubectl describe namespace df-coe-gketst \| awk '/^Labels:/{found=1} found && /^Annotations:/{exit} found'` | List only the labels section                                                 |
| `kubectl get namespace df-coe-gketst --show-labels`                                                          | List the namespace labels                                                    |
