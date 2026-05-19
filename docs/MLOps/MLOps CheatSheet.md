# DVC

| Command                                          | Use case                          | Notes                                                    |
| ------------------------------------------------ | --------------------------------- | -------------------------------------------------------- |
| `python -m pip install dvc`                      | Install dvc                       |                                                          |
| `dvc init`                                       | Initialize a dvc repo             |                                                          |
| `dvc remote add -d wineremote s3://<bucketname>` | Add a remote S3 bucket to the DVC | AWS S3 credentials should be configured on the terminal* |
| `dvc add data/wine_data.csv`                     | Add file to the dvc repo          |                                                          |
| `dvc push`                                       | push file to S3 bucket            |                                                          |
