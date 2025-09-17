param(
    [string]$msg = "update website"
)

git add .
git commit -m "$msg"
git push
start https://ilyasaadithya.github.io/website-ilyasa/