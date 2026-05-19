# Data Versioning – Why Git Isn’t Enough?
Git is amazing for versioning code — small, text-based files that change in predictable ways. But the moment you try to use Git to version data, everything starts breaking. Here’s why Git isn’t enough for real-world ML data versioning:

**Git is not built for large files**
- Git is optimized for kilobytes or a few megabytes.
- ML datasets are often gigabytes to terabytes.
- Git tries to store every version inside the repository → it becomes slow, bloated, and unusable.

**Git can’t handle binary data well**
- Datasets are usually CSVs, images, audio, video, Parquet, etc.
- For Git, these are just binary blobs.
- Git can’t diff them meaningfully → it stores the entire file every time something changes.
This leads to enormous repositories.

**Git doesn’t support dataset lineage**
When working with ML data, you need to track:
- Where did the data come from?
- What transformations were applied?
- Which version of data produced which model?
Git can’t track:
- Data pipelines,
- Transformation steps,
- Data quality checks.

**No built in dataset metadata**
ML workflows need metadata like:
- Schema changes,
- Statistics (min/max, missing values),
- Train/validation splits,
- Provenance.
Git provides none of this.

**Git isn’t good for collaboration on large datasets**
- Multiple people pushing and pulling multi-GB files → slow and painful.
- Merge conflicts on binary files → impossible.
- CI/CD pipelines break when repos get too large.

**Storage costs explode**
Git repository size grows exponentially. Cloud providers charge for storage + bandwidth. Teams end up spending more time and money managing Git than managing data.

**ML workflows require experiment level tracking**
You typically need to answer:
- “Which dataset version did I use for model v3?”
- “What changed between dataset v1.4 → v1.5?”
- “Why did accuracy drop yesterday?”

**Git cannot correlate**
- Data version
- Code version
- Experiment logs
- Model artifacts

ML tools like DVC, LakeFS, MLflow, Delta Lake are built to do this.
## In simple words
Git is great for text-based code.  
ML needs versioning for huge, complex, constantly changing datasets, and Git simply wasn’t designed for that.

Data versioning tools provide:
- Efficient storage
- Deduplication
- Lineage tracking
- Metadata
- Reproducible ML pipelines
That’s why Git alone is not enough.

# Working with DVC
The folder will contain both source code and the data folder.
the folder structure would looks like below
```
ls wine-prediction-model
.dvc
|_ .gitignore
|_ config
data
|_ .gitignore
|_ dataset.csv.dvc
.dvcignore
.gitignore
requirements.txt
train.py
utils.py
```
The `data` folder contains the data set `.csv` file and the metadata file `.csv.dvc`
data set `.csv` will be pushed to dvc remote (S3 bucket) and the `dvc` file will be pushed to gitrepo along with the source code.

**Install DVC**
	`python -m pip install dvc`
**Create a dvc repo**
	`dvc init`
**Add file to the dvc repo**
	`dvc add data/wine_data.csv`
	*Note: this creates .dvc file which holds the meta data and checksome of the source file.*
**Add a remote S3 bucket to the DVC**
	`dvc remote add -d wineremote s3://<bucketname>`
	*Note: AWS S3 credentials should be configured on the terminal*
	`aws configure`
	enter the ID and access key
	To generate the access ID and key go to
	AWS console -> settings -> security credentials -> access keys  
**Push the file to S3 bucket**
	`dvc push`
	Note: Make sure dvc_s3 python module is installed.
	`python -m pip install dvc_s3`